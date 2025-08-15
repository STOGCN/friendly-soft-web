'use strict';

/*
 Local control server to start xircons backend on demand.
 Run with: node local-control.js
*/

const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const PORT = process.env.LOCAL_CONTROL_PORT || 3010;

let xirconsProc = null;
let starting = false;

function isRunning(proc) {
    return !!(proc && !proc.killed);
}

function sendJson(res, status, payload) {
    const body = JSON.stringify(payload);
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(body);
}

function sendNoContent(res) {
    res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
}

function ensureDepsAndStart() {
    return new Promise((resolve, reject) => {
        const workingDir = path.join(__dirname, 'xircons', 'js', 'server-side');
        const npmCmd = process.platform === 'win32' ? 'npm' : 'npm';
        const useShell = process.platform === 'win32';
        const envWithPort = { ...process.env, PORT: process.env.XIRCONS_PORT || '3000' };
        const hasNodeModules = fs.existsSync(path.join(workingDir, 'node_modules'));

        const runStart = () => {
            try {
                const spawnArgs = useShell ? ['cmd.exe', ['/c', npmCmd, 'start']] : [npmCmd, ['start']];
                xirconsProc = useShell
                    ? spawn(spawnArgs[0], spawnArgs[1], { cwd: workingDir, stdio: 'inherit', shell: false, env: envWithPort })
                    : spawn(spawnArgs[0], spawnArgs[1], { cwd: workingDir, stdio: 'inherit', shell: false, env: envWithPort });
                xirconsProc.on('exit', (code, signal) => {
                    console.log(`[local-control] xircons server exited. code=${code} signal=${signal}`);
                    xirconsProc = null;
                });
                resolve();
            } catch (err) {
                reject(err);
            }
        };

        if (hasNodeModules) {
            return runStart();
        }

        console.log('[local-control] Installing dependencies...');
        const installArgs = useShell ? ['cmd.exe', ['/c', npmCmd, 'ci']] : [npmCmd, ['ci']];
        const installer = useShell
            ? spawn(installArgs[0], installArgs[1], { cwd: workingDir, stdio: 'inherit', shell: false, env: envWithPort })
            : spawn(installArgs[0], installArgs[1], { cwd: workingDir, stdio: 'inherit', shell: false, env: envWithPort });
        installer.on('error', reject);
        installer.on('close', (code) => {
            if (code === 0) {
                runStart();
            } else {
                reject(new Error(`npm ci failed with code ${code}`));
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    // CORS preflight
    if (req.method === 'OPTIONS') {
        return sendNoContent(res);
    }

    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = url.pathname || '/';
    if (pathname.length > 1 && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
    }

    if (req.method === 'GET' && pathname === '/status') {
        return sendJson(res, 200, { running: isRunning(xirconsProc) });
    }

    if ((req.method === 'POST' || req.method === 'GET') && pathname === '/start-xircons') {
        if (isRunning(xirconsProc)) {
            return sendJson(res, 200, { ok: true, alreadyRunning: true });
        }
        if (starting) {
            return sendJson(res, 200, { ok: true, starting: true });
        }
        try {
            starting = true;
            await ensureDepsAndStart();
            starting = false;
            return sendJson(res, 200, { ok: true, started: true });
        } catch (err) {
            starting = false;
            console.error('[local-control] failed to start xircons server:', err);
            return sendJson(res, 500, { ok: false, error: 'Failed to start process' });
        }
    }

    // Root info
    if (req.method === 'GET' && pathname === '/') {
        return sendJson(res, 200, { ok: true, endpoints: ['/status', '/start-xircons'] });
    }

    // Not found
    sendJson(res, 404, { ok: false, error: 'Not Found' });
});

server.listen(PORT, () => {
    console.log(`Local control server listening on http://localhost:${PORT}`);
});



