import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Facebook, Instagram, Twitter, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-accent py-2 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 text-xs font-medium">
            <a href="mailto:info@lakelucernedentistry.com" className="flex items-center space-x-2 transition-colors hover:text-primary">
              <Mail size={14} className="text-secondary" />
              <span>info@lakelucernedentistry.com</span>
            </a>
            <a href="tel:+14075550123" className="flex items-center space-x-2 transition-colors hover:text-primary">
              <Phone size={14} className="text-secondary" />
              <span>+1 (407) 555-0123</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="transition-colors hover:text-primary"><Facebook size={14} /></a>
            <a href="#" className="transition-colors hover:text-primary"><Twitter size={14} /></a>
            <a href="#" className="transition-colors hover:text-primary"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'bg-white py-3 shadow-md' : 'bg-white py-5'
        )}
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* Fallback to text logo if image not found, but we'll include the tag */}
            <div className="h-12 w-auto">
              <img 
                src="/images/logo.svg" 
                alt="Lake Lucerne Cosmetic and Implant Dentistry" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).classList.add('hidden');
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-serif text-xl font-bold text-accent md:text-2xl">
                Lake Lucerne <span className="text-primary">Dentistry</span>
              </span>
            </div>
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'flex items-center space-x-1 text-sm font-bold uppercase tracking-tight transition-colors hover:text-primary',
                  location.pathname === link.href ? 'text-primary' : 'text-accent'
                )}
              >
                <span>{link.name}</span>
                {link.name === 'Services' && <ChevronDown size={14} />}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-accent hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
             <a href="tel:+1234567890" className="rounded-full bg-primary p-2 text-white">
                <Phone size={20} />
             </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'rounded-md p-2',
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white px-4 pb-6 pt-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium',
                    location.pathname === link.href ? 'text-primary' : 'text-gray-700'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 block w-full rounded-full bg-primary py-3 text-center text-lg font-semibold text-white shadow-md active:bg-accent"
              >
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
