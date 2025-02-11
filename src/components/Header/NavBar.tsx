'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const navlinks = ["Home", "About", "Skills", "Projects", "Contact"];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-6 md:px-12 py-4 w-full z-20 bg-gradient-to-r from-[#120501] to-[#180d098a] fixed flex items-center justify-between">
      <Link className="text-white text-2xl font-bold" href="/">
        Harsh Rastogi
      </Link>
      <button onClick={toggleMenu} className="md:hidden text-white ml-auto">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div className="hidden md:flex gap-8">
        {navlinks.map((e) => {
          const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
          const isActive = pathname === path;
          return (
            <Link
              key={e}
              href={path}
              className={`text-lg font-medium transition-colors duration-300 hover:text-yellow-400 ${
                isActive ? "text-yellow-400 font-bold" : "text-white"
              }`}
            >
              {e}
            </Link>
          );
        })}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-[#120501] shadow-lg flex flex-col items-center p-6 space-y-6 md:hidden"
          >
            <div className="w-full flex justify-between items-center">
              <span className="text-white text-xl font-bold">Harsh Rastogi</span>
              <button onClick={toggleMenu} className="text-white">
                <X size={28} />
              </button>
            </div>
            {navlinks.map((e) => {
              const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
              const isActive = pathname === path;
              return (
                <Link
                  key={e}
                  href={path}
                  onClick={toggleMenu}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-yellow-400 ${
                    isActive ? "text-yellow-400 font-bold" : "text-white"
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