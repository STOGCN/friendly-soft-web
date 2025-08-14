import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white antialiased transition-all duration-300 ease-in-out">
        <main className="mx-auto max-w-6xl px-6">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
