import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "figma:asset/e6c2e8ab01f5fb35b778fa209203525417008c2e.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#1A1A1A]/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-all duration-300 hover:scale-105"
          >
            <img 
              src={logoImage} 
              alt="Nafis Anwar Logo" 
              className="h-10 w-auto"
              style={{
                filter: isScrolled ? 'invert(1)' : 'invert(0)'
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors duration-300 hover:text-[#1E90FF]"
                style={{ color: isScrolled ? '#000000' : '#ffffff' }}
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm"
              className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white px-6 transition-all duration-300"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? '#000000' : '#ffffff' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg border border-[#1A1A1A]/10">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-black hover:text-[#1E90FF] transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm"
                className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white mt-2 transition-all duration-300"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}