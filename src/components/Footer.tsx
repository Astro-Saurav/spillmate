import { Link } from 'react-router-dom';
import { Heart, Mail, Shield, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      {/* Reduced vertical padding from py-12 to py-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          {/* Reduced vertical spacing from space-y-4 to space-y-3 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Spillmate</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Global mental health support - anywhere, anytime. Compassionate, private, and accessible.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <Globe className="h-5 w-5" />
              <Mail className="h-5 w-5" />
              <Shield className="h-5 w-5" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            {/* Tighter spacing for links */}
            <div className="space-y-1.5">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                About Us
              </Link>
              <Link to="/how-it-works" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                How It Works
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Support</h3>
            <div className="space-y-1.5">
              <Link to="/help" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Help Center
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Contact Us
              </Link>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Crisis Support
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>hello@spillmate.ai</p>
              <p>Available 24/7</p>
              <p>Multilingual Support</p>
            </div>
          </div>
        </div>

        {/* Reduced margin and padding for a more compact footer */}
        <div className="border-t mt-6 pt-6 text-sm text-muted-foreground flex flex-col md:flex-row md:justify-between items-center">
          <p className="mb-2 md:mb-0">
            Copyright &copy; {new Date().getFullYear()} Spillmate.ai | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;