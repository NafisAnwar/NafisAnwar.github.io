import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-2 uppercase tracking-wider" style={{fontFamily: '"Arial Black", "Helvetica", sans-serif'}}>Nafis Anwar</h3>
            <p className="text-gray-400">Software Engineering Student & Full-Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Quick Links</p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-4">Connect With Me</p>
            <div className="flex justify-center md:justify-end gap-3">
              <Button 
                size="sm" 
                className="bg-[#0A66C2] hover:bg-[#1E90FF] text-white p-3 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="bg-[#1A1A1A] hover:bg-[#1E90FF] text-white p-3 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white p-3 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A1A1A] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>© 2025 Nafis Anwar. Built with React & Tailwind.</p>
              <p className="text-sm">Made using shadcn/ui and Unsplash images under MIT/Unsplash license.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}