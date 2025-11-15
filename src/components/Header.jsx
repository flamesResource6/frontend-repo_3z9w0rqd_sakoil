import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "About", "Experience", "Projects", "Education", "Contact"];

export default function Header({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-sky-400/20 ring-1 ring-sky-400/30" />
              <span className="text-sky-400 font-semibold">MIHI</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    currentPage === item
                      ? "text-sky-300 bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5 text-white"/> : <Menu className="h-5 w-5 text-white"/>}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-2 pb-3 space-y-1 border-t border-white/10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => { onNavigate(item); setOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    currentPage === item
                      ? "text-sky-300 bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
