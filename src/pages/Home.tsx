import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Star, 
  Users, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Plus, 
  Minus,
  Apple,
  Briefcase,
  Search,
  MessageCircle,
  Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Basic Plan',
    price: '49',
    features: ['Standard cleaning', 'Exam & X-rays', 'Basic consultation', 'Free toothpaste kit'],
  },
  {
    name: 'Standard Plan',
    price: '99',
    features: ['Premium cleaning', 'Deep tissue care', 'Advanced imaging', '24/7 priority support', '10% off restorative'],
  },
  {
    name: 'Unlimited Plan',
    price: '149',
    features: ['Elite maintenance', 'Unlimited consultations', 'In-office whitening', 'Family priority booking', '20% off all implants'],
  },
];

const faqItems = [
  { q: 'How often should I visit the dentist?', a: 'We generally recommend a check-up and professional cleaning every six months to maintain optimal oral health.' },
  { q: 'Do you accept dental insurance?', a: 'Yes, we work with most major PPO insurance providers. Please contact our office to verify your specific plan.' },
  { q: 'What should I do in a dental emergency?', a: 'Call our office immediately at (407) 555-0199. We prioritize same-day appointments for urgent dental needs.' },
  { q: 'Are dental implants painful?', a: 'Most patients experience minimal discomfort during and after the procedure. We offer various sedation options for your comfort.' },
];

const team = [
  { name: 'Dr. Howard Holmes', role: 'Chief Dentist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Dr. Ella Thompson', role: 'Orthodontist', img: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600' },
  { name: 'Dr. Vincent Cooper', role: 'Endodontist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Dr. Danielle Bryant', role: 'Periodontist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-bg-warm py-20 lg:min-h-[85vh] lg:flex lg:items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary">
                Welcome to Lake Lucerne
              </span>
              <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-accent md:text-7xl">
                We Are Best <br />
                <span className="text-primary italic underline decoration-secondary">Dental Service</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-600">
                A beautiful smile is more than just aesthetics. It’s about health, confidence, and living life to the fullest. Experience the gold standard of dental care.
              </p>
              <div className="mt-10 flex max-w-md items-center overflow-hidden rounded-lg bg-white p-1.5 shadow-xl">
                 <input 
                   type="email" 
                   placeholder="Your Email Address..." 
                   className="flex-grow px-4 py-3 outline-none text-gray-700"
                 />
                 <button className="rounded-lg bg-primary px-8 py-3.5 font-bold uppercase tracking-widest text-white transition-colors hover:bg-accent ring-inset">
                   Get Call Back
                 </button>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative lg:h-[600px]"
            >
               {/* Background shapes */}
               <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
               <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
               
               {/* Main Image with clipped border style like reference */}
               <div className="relative mx-auto h-[500px] w-full max-w-md overflow-hidden rounded-[20%_20%_20%_20%] border-[20px] border-white shadow-2xl lg:h-full lg:max-w-none">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-2871b8868bca?auto=format&fit=crop&q=80&w=2070" 
                    alt="Smile" 
                    className="h-full w-full object-cover"
                  />
               </div>

               {/* Badge/Overlay Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="absolute -right-6 top-20 rounded-xl bg-white p-4 shadow-2xl flex items-center space-x-4 border border-gray-100"
               >
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Dr. Miller</h4>
                     <p className="text-xs text-primary font-semibold uppercase tracking-wider">Best Dental Specialist</p>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Bar */}
      <section className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="rounded-2xl bg-accent p-8 shadow-2xl lg:p-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
               <div>
                  <input type="text" placeholder="Your Name" className="w-full rounded-lg bg-white/10 px-6 py-4 text-white placeholder-white/50 outline-none ring-1 ring-white/20 focus:ring-primary" />
               </div>
               <div>
                  <select className="w-full rounded-lg bg-white/10 px-6 py-4 text-white outline-none ring-1 ring-white/20 focus:ring-primary appearance-none">
                     <option className="text-gray-900">Choose Service</option>
                     <option className="text-gray-900">Cosmetic Dentistry</option>
                     <option className="text-gray-900">Implant Surgery</option>
                     <option className="text-gray-900">Orthodontics</option>
                  </select>
               </div>
               <div>
                  <input type="date" className="w-full rounded-lg bg-white/10 px-6 py-4 text-white outline-none ring-1 ring-white/20 focus:ring-primary" />
               </div>
               <button className="flex w-full items-center justify-center rounded-lg bg-primary py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-secondary hover:text-accent">
                 Submit Now
               </button>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Services</span>
             <h2 className="mt-4 font-serif text-5xl font-bold italic">What We Provide</h2>
          </div>
          
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Left side services */}
            <div className="flex flex-1 flex-col gap-10">
               {[
                 { title: 'Root Canal', desc: 'Expert root canal therapy to save your natural tooth and relieve pain.', icon: Briefcase },
                 { title: 'Alignment Teeth', desc: 'Transform your smile with Invisalign or traditional orthodontic care.', icon: Search },
                 { title: 'Cosmetic Teeth', desc: 'Professional whitening and veneers for a brighter, more confident smile.', icon: MessageCircle }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-6 group hover:translate-x-2 transition-transform">
                    <div className="flex-grow text-right order-1">
                       <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                       <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-bg-warm text-primary order-2 group-hover:bg-primary group-hover:text-white transition-colors">
                       <item.icon size={28} />
                    </div>
                 </div>
               ))}
            </div>

            {/* Center Visual */}
            <div className="relative flex flex-1 items-center justify-center">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                 className="relative z-10 w-full max-w-[300px]"
               >
                  {/* Central Icon/Decoration - using a tooth icon or dentist SVG if available, using a placeholder image for 3D look */}
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" className="rounded-full aspect-square object-cover border-8 border-bg-warm" alt="Dental Care" />
               </motion.div>
               <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Right side services */}
            <div className="flex flex-1 flex-col gap-10">
               {[
                 { title: 'Oral Hygiene', desc: 'Comprehensive cleanings and preventative tips for long-term health.', icon: Apple },
                 { title: 'Live Advisory', desc: 'Real-time consultations to address your concerns and questions.', icon: CheckCircle2 },
                 { title: 'Cavity Inspection', desc: 'Early detection technology for precise and painless treatment.', icon: Users }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-6 group hover:-translate-x-2 transition-transform">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-bg-warm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <item.icon size={28} />
                    </div>
                    <div className="flex-grow">
                       <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                       <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col items-center gap-20 lg:flex-row">
              <div className="flex-1 relative">
                 <div className="relative z-10 overflow-hidden rounded-[20%] border-[15px] border-bg-warm">
                    <img 
                      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                      alt="Modern Clinic" 
                      className="w-full h-[500px] object-cover"
                    />
                 </div>
                 {/* Experience Badge */}
                 <div className="absolute -bottom-10 -right-10 z-20 h-44 w-44 rounded-full bg-primary border-[10px] border-white flex flex-col items-center justify-center text-white shadow-2xl">
                    <span className="text-4xl font-bold">25+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-center px-4">Years Of Experience</span>
                 </div>
                 <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl opacity-50" />
              </div>
              
              <div className="flex-1 space-y-8">
                 <div>
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">About Us</span>
                    <h2 className="mt-4 font-serif text-5xl font-bold italic leading-tight">We Care For Your <span className="text-primary">Dental Health</span></h2>
                 </div>
                 <p className="text-lg text-gray-500 leading-relaxed">
                    With decades of expertise and a commitment to using the latest dental technology, we ensure your visit is as comfortable as it is effective. Our goal is to create smiles that last a lifetime.
                 </p>
                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {[
                      { t: 'Modern Technology', d: 'Latest digital imaging and tools.' },
                      { t: 'Expert Doctors', d: 'Board-certified specialists.' },
                      { t: 'Painless Care', d: 'Advanced sedation options.' },
                      { t: 'Safe Environment', d: 'Strict sterilization protocols.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                         <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <CheckCircle2 size={14} />
                         </div>
                         <div>
                            <h4 className="font-bold text-accent">{item.t}</h4>
                            <p className="text-xs text-gray-400 mt-1">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="pt-6">
                    <button className="rounded-md bg-accent px-10 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-primary shadow-lg">
                       Learn More About Us
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Pricing Plans</span>
              <h2 className="mt-4 font-serif text-5xl font-bold italic">Our Affordable Plans</h2>
           </div>
           
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className="group relative rounded-3xl bg-white p-10 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                   {idx === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most Popular</div>}
                   <h3 className="text-2xl font-bold text-accent mb-6">{plan.name}</h3>
                   <div className="flex items-baseline mb-8">
                      <span className="text-5xl font-bold text-primary">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/ Monthly</span>
                   </div>
                   <ul className="space-y-4 mb-10">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center space-x-3 text-sm text-gray-600">
                           <CheckCircle2 size={16} className="text-primary" />
                           <span>{f}</span>
                        </li>
                      ))}
                   </ul>
                   <button className="w-full rounded-xl border-2 border-primary py-4 font-bold text-primary transition-all group-hover:bg-primary group-hover:text-white">
                      Choose Plan
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section with Image */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="flex-1 w-full">
                 <span className="text-primary font-bold uppercase tracking-widest text-sm">FAQ</span>
                 <h2 className="mt-4 mb-10 font-serif text-5xl font-bold italic leading-tight">Frequently Asked Questions</h2>
                 
                 <div className="space-y-4">
                    {faqItems.map((item, idx) => (
                       <div key={idx} className="border-b border-gray-100">
                          <button 
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="flex w-full items-center justify-between py-6 text-left"
                          >
                             <span className="font-bold text-accent text-lg">{item.q}</span>
                             {openFaq === idx ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
                          </button>
                          <AnimatePresence>
                             {openFaq === idx && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                   <p className="pb-6 text-gray-500 leading-relaxed">{item.a}</p>
                                </motion.div>
                             )}
                          </AnimatePresence>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl opacity-50" />
                 <img 
                   src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2000" 
                   alt="Patient Care" 
                   className="rounded-[40px] shadow-2xl relative z-10 w-full h-[600px] object-cover"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Testimonial</span>
              <h2 className="mt-4 font-serif text-5xl font-bold italic">What Our Clients Says</h2>
           </div>
           
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                { name: 'Margie Dose', role: 'Web Developer', content: 'The care and attention I received at Lake Lucerne was beyond my expectations. My dental health has improved significantly.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
                { name: 'Jone Walker', role: 'Designer', content: 'Excellent service and state-of-the-art facilities. The team is very professional and welcoming. Highly recommended!', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' }
              ].map((t, idx) => (
                <div key={idx} className="relative rounded-[32px] bg-bg-warm p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
                   <div className="absolute top-8 right-8 text-primary/20">
                      <MessageCircle size={60} />
                   </div>
                   <div className="h-24 w-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                      <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
                   </div>
                   <div>
                      <div className="flex text-yellow-500 mb-4">
                         {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.content}"</p>
                      <h4 className="text-xl font-bold text-accent">{t.name}</h4>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Doctors</span>
              <h2 className="mt-4 font-serif text-5xl font-bold italic">Best Expert Dentists</h2>
           </div>
           
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((doc, idx) => (
                <div key={idx} className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                   <div className="h-64 overflow-hidden relative">
                      <img src={doc.img} alt={doc.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <div className="p-8 text-center">
                      <h4 className="text-xl font-bold text-accent">{doc.name}</h4>
                      <p className="text-sm font-semibold text-primary uppercase tracking-widest mt-1">{doc.role}</p>
                      <div className="mt-6 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="h-8 w-8 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">F</div>
                         <div className="h-8 w-8 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">T</div>
                         <div className="h-8 w-8 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">I</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="relative h-[400px] overflow-hidden">
         <div className="absolute inset-0 bg-accent grayscale mix-blend-multiply opacity-20 z-10" />
         <img src="https://images.unsplash.com/photo-1517644368149-18c977Ad1f6b?auto=format+fit=crop&q=80&w=2000" className="absolute inset-0 h-full w-full object-cover grayscale" alt="Welcome" />
         <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
               <div className="relative hidden md:block">
                  <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" className="h-[500px] w-auto border-[15px] border-white/10 rounded-t-full -mb-[100px] object-cover" alt="Dentist" />
               </div>
               <div className="text-white">
                  <span className="text-secondary font-bold uppercase tracking-widest text-sm">Join Our Success</span>
                  <h2 className="mt-4 mb-8 font-serif text-5xl font-bold italic leading-tight">We Are Open And Welcoming Patients</h2>
                  <button className="rounded-md bg-primary px-10 py-5 font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:bg-white hover:text-accent">
                    Book Appointment Now
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Blog/News */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Latest Blog</span>
              <h2 className="mt-4 font-serif text-5xl font-bold italic">Our Recent News</h2>
           </div>
           
           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group rounded-[32px] border border-gray-100 bg-white shadow-sm overflow-hidden transition-all hover:shadow-2xl">
                   <div className="h-60 overflow-hidden relative">
                      <img src={`https://images.unsplash.com/photo-1629${909+i}613654-2871b8868bca?auto=format&fit=crop&q=80&w=600`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Blog" />
                      <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-lg">24 Oct 2025</div>
                   </div>
                   <div className="p-8">
                      <h4 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">Digital Dentistry: The Future of Smile Transformations</h4>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">Explore how new technologies are making dental procedures more precise, comfortable, and efficient than ever before.</p>
                      <button className="text-primary font-bold uppercase tracking-widest text-xs flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                         <span>Read More</span>
                         <ArrowRight size={14} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
