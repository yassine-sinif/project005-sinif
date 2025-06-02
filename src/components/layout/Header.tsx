import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          LinguaLink
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/stories" 
            className={location.pathname === '/stories' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Stories
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/pricing" 
            className={location.pathname === '/pricing' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className={location.pathname === '/blog' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/dashboard" 
            className={`btn ${location.pathname === '/dashboard' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            My Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
