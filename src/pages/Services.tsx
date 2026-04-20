import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Zap, ShieldCheck, Microscope, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    title: 'Cosmetic Dentistry',
    id: 'cosmetic',
    description: 'Transform your smile with veneers, bonding, and professional whitening tailored to your aesthetic goals.',
    features: ['Porcelain Veneers', 'Teeth Whitening', 'Dental Bonding', 'Gum Contouring'],
    icon: Sparkles,
  },
  {
    title: 'Dental Implants',
    id: 'implants',
    description: 'Permanent, natural-looking solutions for missing teeth using advanced titanium post technology.',
    features: ['Single Tooth Implants', 'Multiple Tooth Replacement', 'All-on-4® Solutions', 'Bone Grafting'],
    icon: ShieldCheck,
  },
  {
    title: 'Smile Makeovers',
    id: 'makeover',
    description: 'A comprehensive combination of cosmetic treatments designed to completely revitalize your appearance.',
    features: ['Digital Smile Design', 'Comprehensive Planning', 'Full Arch Rehabilitation', 'Mock-up Previews'],
    icon: Zap,
  },
  {
    title: 'Specialized Treatments',
    id: 'specialized',
    description: 'Advanced restorative and periodontal care using the latest clinical technologies.',
    features: ['Invisalign® Clear Aligners', 'Laser Dentistry', 'TMJ Therapy', 'Sleep Apnea Solutions'],
    icon: Microscope,
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 font-serif text-5xl font-bold md:text-7xl"
            >
                Our Comprehensive Services
            </motion.h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
                Tailored dental solutions using state-of-the-art technology to ensure your health and confidence.
            </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
                {allServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col gap-12 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary/10 text-primary">
                                <service.icon size={36} />
                            </div>
                            <h2 className="mb-6 font-serif text-4xl font-bold">{service.title}</h2>
                            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feat, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-700 font-semibold">
                                        <CheckCircle2 size={20} className="text-primary" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-accent hover:shadow-lg"
                            >
                                Inquire About {service.title}
                            </Link>
                        </div>
                        <div className="flex-1 overflow-hidden rounded-[40px] shadow-2xl relative">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                            <img 
                                src={`https://images.unsplash.com/photo-1629${909+index}613654-2871b8868bca?auto=format&fit=crop&q=80&w=1000`} 
                                alt={service.title} 
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQs or Small CTA */}
      <section className="bg-accent py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-8 font-serif text-4xl font-bold italic">Unsure which treatment is right for you?</h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/80 font-light">
                Schedule a consultation with our experts. We'll assess your oral health and discuss your aesthetic goals to create a personalized plan.
            </p>
            <Link 
                to="/contact" 
                className="inline-flex items-center space-x-2 rounded-full border-2 border-white px-10 py-4 font-bold transition-all hover:bg-white hover:text-accent"
            >
                <span>Book a Consultation</span>
                <ChevronRight size={20} />
            </Link>
        </div>
      </section>
    </div>
  );
}
