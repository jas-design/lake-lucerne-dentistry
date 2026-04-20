import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-serif text-5xl font-bold md:text-7xl italic"
          >
            Get In Touch
          </motion.h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
            We're here to answer your questions and help you schedule your next appointment.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600">
                  <div className="flex flex-col space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Phone size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                    <p>Office: (407) 555-0123</p>
                    <p>Emergency: (407) 555-0199</p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Email</h3>
                    <p>info@lakelucernedentistry.com</p>
                    <p>support@lakelucernedentistry.com</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">123 Lake Lucerne Dr, Orlando, FL 32801</p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Monday – Friday: 8:00 AM – 5:00 PM</li>
                  <li>Saturday: By Appointment Only</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-[40px] bg-white p-8 shadow-2xl border border-gray-100 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16" />
                
                {submitted ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-full text-center space-y-6"
                    >
                        <div className="rounded-full bg-primary/20 p-6 text-primary">
                            <CheckCircle2 size={64} />
                        </div>
                        <h3 className="text-3xl font-bold">Thank You!</h3>
                        <p className="text-gray-600 max-w-sm">Your message has been received. Our team will contact you shortly to confirm your appointment or answer your questions.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="text-primary font-bold underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold mb-8">Schedule a Consultation</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                                    <input required type="tel" placeholder="(123) 456-7890" className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                <input required type="email" placeholder="john@example.com" className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Service Interested In</label>
                                <select className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white">
                                    <option>Cosmetic Dentistry</option>
                                    <option>Dental Implants</option>
                                    <option>Smile Makeover</option>
                                    <option>General Consultation</option>
                                    <option>Emergency Service</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                                <textarea rows={4} placeholder="How can we help you?" className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
                            </div>
                            <button 
                                type="submit" 
                                className="flex w-full items-center justify-center space-x-2 rounded-full bg-primary py-5 text-lg font-bold text-white transition-all hover:bg-accent hover:shadow-xl shadow-primary/30"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 grayscale opacity-40">
             <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" alt="Map Placeholder" className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center max-w-sm text-center">
             <MapPin size={48} className="text-primary mb-4" />
             <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
             <p className="text-gray-600 mb-6 font-medium">123 Lake Lucerne Dr, Orlando, FL 32801</p>
             <a target="_blank" href="https://maps.google.com" className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-accent transition-all">Get Directions</a>
          </div>
      </section>
    </div>
  );
}
