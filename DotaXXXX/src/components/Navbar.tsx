import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  id: string;   // ต้องตรงกับ id ของ <Section />
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ไฮไลต์ลิงก์เมื่อ scroll ผ่านแต่ละ section
  useEffect(() => {
    const handler = () => {
      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // ส่วนหัวที่เข้าใกล้ด้านบนสุดของ viewport มากสุด
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = item.id;
          break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-900/80 shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
              : "bg-transparent"
          }`}
        >
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <motion.button
                className="font-bold tracking-tight text-2xl"
                onClick={() => handleClick("home")}
                aria-label="Go to Home"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-text">
                  rk.dev
                </span>
              </motion.button>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-1 text-sm">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = active === item.id;
                    return (
                      <motion.li 
                        key={item.id} 
                        className="relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.button
                          onClick={() => handleClick(item.id)}
                          className={`px-4 py-2 rounded-lg transition-all duration-300 outline-none relative overflow-hidden
                            ${isActive
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
                              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"}`}
                          aria-current={isActive ? "page" : undefined}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">{item.label}</span>
                          {isActive && (
                            <motion.div
                              layoutId="nav-active-bg"
                              className="absolute inset-0 bg-blue-100 dark:bg-blue-950/50 rounded-lg"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Mobile controls */}
              <div className="md:hidden flex items-center gap-3">
                <motion.button
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle menu"
                  className="relative p-2 rounded-lg border border-gray-300/60 dark:border-gray-700/60 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.svg 
                        key="close"
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        className="relative z-10"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </motion.svg>
                    ) : (
                      <motion.svg 
                        key="menu"
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        className="relative z-10"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden pb-4 overflow-hidden"
                >
                  <motion.ul 
                    className="mt-4 grid gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = active === item.id;
                      return (
                        <motion.li 
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.button
                            onClick={() => handleClick(item.id)}
                            className={`w-full text-left rounded-lg px-4 py-3 outline-none transition-all duration-300 relative overflow-hidden
                              ${isActive
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"}`}
                            aria-current={isActive ? "page" : undefined}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="relative z-10">{item.label}</span>
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-blue-100 dark:bg-blue-950/50 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </motion.button>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}