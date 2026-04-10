import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Cosmo Beds" className="h-12 w-12 object-contain rounded-lg" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Cosmo Beds</h3>
                <p className="text-xs text-muted-foreground">& Bedding Factory</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Quality beds proudly made in South Africa. 100% Black owned manufacturing business committed to delivering comfort and craftsmanship to every home.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=beds" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beds
                </Link>
              </li>
              <li>
                <Link to="/shop?category=base-sets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Base Sets
                </Link>
              </li>
              <li>
                <Link to="/shop?category=base-only" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Base Only
                </Link>
              </li>
              <li>
                <Link to="/shop?category=mattress-only" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mattress Only
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 Plot 147 M30 Road, Bashewa AH, Garsfontein, 0056</li>
              <li>📞 012 811 1514</li>
              <li>✉️ info@cosmobedsfactory.co.za</li>
            </ul>
            <div className="mt-4 p-4 rounded-lg bg-accent">
              <p className="text-sm font-medium text-accent-foreground">
                🚚 R500.00 Shipping Around Gauteng
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Cosmo Beds & Bedding Factory. All rights reserved. Designed by{' '}
            <a
              href="https://aiprecision.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              AI Precision Agency
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;