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
              <img src={logo} alt="Cosmo Beds" className="h-12 w-12 object-contain rounded-lg shadow-sm" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Cosmo Beds</h3>
                <p className="text-xs font-medium text-primary uppercase tracking-wider">Hospitality & B2B</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Quality commercial beds proudly manufactured in South Africa. A 100% Black-owned business committed to delivering industrial-strength comfort and superior craftsmanship to hotels, Airbnbs, and guesthouses.
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
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Shop Commercial Range
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  About Our Factory
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Request Bulk Quote
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Partner Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=beds" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Complete Beds
                </Link>
              </li>
              <li>
                <Link to="/shop?category=base-sets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Base & Mattress Sets
                </Link>
              </li>
              <li>
                <Link to="/shop?category=base-only" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Reinforced Bases Only
                </Link>
              </li>
              <li>
                <Link to="/shop?category=mattress-only" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Durable Mattresses Only
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Factory Direct Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📍</span>
                Plot 147 M30 Road, Bashewa AH, Garsfontein, 0056
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">📞</span>
                012 811 1514
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✉️</span>
                info@cosmobedsfactory.co.za
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm font-bold text-primary flex items-center gap-2">
                🚚 R500.00 Logistics & Delivery
              </p>
              <p className="text-xs text-muted-foreground mt-1 ml-6">
                Across Gauteng region
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
              className="text-primary hover:underline font-bold"
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