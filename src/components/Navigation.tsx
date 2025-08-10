import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { Menu, X, Heart, Moon, Sun, Monitor } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/newsletter', label: 'Newsletter' },
    { path: '/help', label: 'Help Center' },
    { path: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth navbar-slide-down ${
      scrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-medium border-b' 
        : 'bg-card/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with hover animation */}
          <Link to="/" className="flex items-center space-x-2 group transition-smooth hover-glow">
            <div className="relative">
              <Heart className="h-8 w-8 text-primary transition-smooth group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-smooth"></div>
            </div>
            <span className="text-2xl font-bold text-primary transition-smooth group-hover:text-primary/80">
              Spillmate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-item-fade px-4 py-2 rounded-xl text-sm font-medium transition-smooth relative overflow-hidden group ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleTheme}
              className="ml-2 hover-glow transition-smooth"
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </Button>

            {/* CTA Button */}
            <a
              href="https://play.google.com/store/apps/details?id=ai.spillmate"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button variant="cta" size="sm" className="hover-glow transition-smooth">
                Start Chat
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleTheme}
              className="hover-glow transition-smooth"
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="transition-smooth"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-smooth ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-smooth ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-smooth ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`navbar-item-fade block px-4 py-3 rounded-xl text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <a
                href="https://play.google.com/store/apps/details?id=ai.spillmate"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="cta" className="w-full hover-glow transition-smooth">
                  Start Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;