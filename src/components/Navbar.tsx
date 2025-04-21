
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-nature text-chacara-dark font-bold"
        >
          Chácara Alegria
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={isActive("/")} onClick={closeMenu}>
            Início
          </NavLink>
          <NavLink to="/informacoes" active={isActive("/informacoes")} onClick={closeMenu}>
            Informações
          </NavLink>
          <NavLink to="/reservas" active={isActive("/reservas")} onClick={closeMenu}>
            Reservas
          </NavLink>
          <Link
            to="/login"
            className="bg-chacara-primary hover:bg-chacara-dark text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg"
          >
            Entrar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-chacara-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <NavLink to="/" active={isActive("/")} onClick={closeMenu}>
            Início
          </NavLink>
          <NavLink to="/informacoes" active={isActive("/informacoes")} onClick={closeMenu}>
            Informações
          </NavLink>
          <NavLink to="/reservas" active={isActive("/reservas")} onClick={closeMenu}>
            Reservas
          </NavLink>
          <Link
            to="/login"
            className="bg-chacara-primary hover:bg-chacara-dark text-white px-4 py-2 rounded-lg transition-all text-center"
            onClick={closeMenu}
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
const NavLink = ({ 
  to, 
  active, 
  children, 
  onClick 
}: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      className={`transition-all relative ${
        active 
          ? "text-chacara-primary font-medium" 
          : "text-chacara-text hover:text-chacara-primary"
      }`}
      onClick={onClick}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-chacara-primary rounded-full"></span>
      )}
    </Link>
  );
};

export default Navbar;
