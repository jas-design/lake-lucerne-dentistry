import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-accent text-white overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mt-48 blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-8">
             <Link to="/" className="flex items-center space-x-2">
                <div className="h-12 w-auto brightness-0 invert">
                   <img src="/images/logo.png" alt="Lake Lucerne" className="h-full w-auto object-contain" />
                </div>
                <span className="font-serif text-3xl font-bold italic tracking-tight">Lake Lucerne</span>
             </Link>
             <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Dedicated to providing the highest quality dental care in physical and digital formats. Experience our modern clinic and expert dental staff.
             </p>
             <div className="flex items-center space-x-1">
                <div className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors cursor-pointer"><Facebook size={16} /></div>
                <div className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors cursor-pointer"><Twitter size={16} /></div>
                <div className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors cursor-pointer"><Instagram size={16} /></div>
             </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
             <h4 className="text-xl font-bold text-white mb-8 relative inline-block">
                Other Links
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
             </h4>
             <ul className="space-y-4 text-sm text-gray-400">
                {['Home', 'About Us', 'Services', 'Our Team', 'Latest Blog'].map((link) => (
                  <li key={link}>
                     <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="flex items-center group">
                        <ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                        <span className="group-hover:text-primary transition-all tracking-wide">{link}</span>
                     </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Services */}
          <div>
             <h4 className="text-xl font-bold text-white mb-8 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
             </h4>
             <ul className="space-y-4 text-sm text-gray-400">
                {['Root Canal', 'Alignment Teeth', 'Cosmetic Teeth', 'Oral Hygiene', 'Live Advisory', 'Cavity Inspection'].map((link) => (
                  <li key={link}>
                     <Link to="/services" className="flex items-center group">
                        <ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                        <span className="group-hover:text-primary transition-all tracking-wide">{link}</span>
                     </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Contact Details */}
          <div>
             <h4 className="text-xl font-bold text-white mb-8 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
             </h4>
             <ul className="space-y-6 text-sm">
                <li className="flex items-start space-x-4">
                   <div className="mt-1 h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-primary text-white">
                      <MapPin size={18} />
                   </div>
                   <span className="text-gray-400">123 Lake Lucerne Dr,<br />Orlando, FL 32801, USA</span>
                </li>
                <li className="flex items-center space-x-4">
                   <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-primary text-white">
                      <Phone size={18} />
                   </div>
                   <span className="text-gray-400">+1 (407) 555-0123<br />+1 (407) 555-0199</span>
                </li>
                <li className="flex items-center space-x-4">
                   <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-primary text-white">
                      <Mail size={18} />
                   </div>
                   <span className="text-gray-400">info@lakelucerne.com<br />help@lakelucerne.com</span>
                </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} <span className="text-primary font-bold">Lake Lucerne</span>. All rights reserved.
           </div>
           <div className="flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-gray-500">
               <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-primary transition-colors">Cookies Settings</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
