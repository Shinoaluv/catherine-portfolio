import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Research", href: "#research" },
    { name: "Impact", href: "#impact" },
    { name: "Creative", href: "#photography" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-4 pt-4">
      <div className="container mx-auto">

        <div className="glass-card rounded-full px-5 py-3 flex items-center justify-between pink-glow">

          {/* Logo */}
          <a
            href="#home"
            className="font-bold text-lg tracking-tight"
          >
            Catherine<span className="text-primary">.</span>
          </a>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}

          </div>


          {/* Resume */}
          <div className="hidden lg:block">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
            >
              Resume
            </a>

          </div>


          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >

            {isMenuOpen ? (
              <X size={22}/>
            ) : (
              <Menu size={22}/>
            )}

          </button>

        </div>


        {/* Mobile Menu */}
        {isMenuOpen && (

          <div className="lg:hidden mt-3 glass-card rounded-2xl p-5 space-y-4">

            {navItems.map((item)=>(
              <a
                key={item.name}
                href={item.href}
                onClick={()=>setIsMenuOpen(false)}
                className="block text-left text-foreground/80 hover:text-primary"
              >
                {item.name}
              </a>
            ))}


            <a
              href="/resume.pdf"
              target="_blank"
              className="block bg-primary text-primary-foreground rounded-full py-2 text-center"
            >
              View Resume
            </a>


          </div>

        )}

      </div>
    </nav>
  );
};