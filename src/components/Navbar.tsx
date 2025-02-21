import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">SUSHI KAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#location"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Location
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Reserve Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-gray-300"
              >
                Home
              </a>
              <a
                href="#menu"
                className="block px-3 py-2 text-white hover:text-gray-300"
              >
                Menu
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-gray-300"
              >
                About
              </a>
              <a
                href="#location"
                className="block px-3 py-2 text-white hover:text-gray-300"
              >
                Location
              </a>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
                Reserve Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
