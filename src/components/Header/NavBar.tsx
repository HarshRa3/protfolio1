'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

export const navlinks = ["Home", "About", "Skills", "Projects", "Contact"];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-4 bg-[#090d16]/80 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link className="flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity" href="/">
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-sm">
            <Code2 size={20} />
          </div>
          <span>Harsh <span className="text-indigo-400">Rastogi</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
          {navlinks.map((e) => {
            const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
            const isActive = pathname === path;
            return (
              <Link
                key={e}
                href={path}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {e}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[72px] left-0 right-0 bg-[#090d16] border-b border-slate-800 shadow-2xl p-6 md:hidden flex flex-col gap-3"
          >
            {navlinks.map((e) => {
              const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
              const isActive = pathname === path;
              return (
                <Link
                  key={e}
                  href={path}
                  onClick={toggleMenu}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-semibold"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {e}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;