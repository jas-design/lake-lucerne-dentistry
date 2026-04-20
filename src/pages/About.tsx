import { motion } from 'motion/react';
import { Target, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-accent py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl"
           >
              <h1 className="mb-6 font-serif text-5xl font-bold italic md:text-7xl">Excellence in Every Smile</h1>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Discover the story behind Orlando's premier destination for cosmetic and implant dentistry.
              </p>
           </motion.div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-primary/20 hidden lg:block" style={{ borderBottomLeftRadius: '100%' }} />
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">Our Legacy of Care</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to redefine the dental experience, Lake Lucerne Cosmetic and Implant Dentistry has been serving the Orlando community for over two decades. Our mission is simple: to combine world-class expertise with a gentle, patient-first approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that a beautiful smile is more than just aesthetics—it's a gateway to confidence, health, and a better quality of life. That's why we invest in the latest technology and continuous education to bring you the best possible results.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                 <div>
                    <div className="text-primary font-bold text-4xl mb-1">20+</div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Years in Practice</p>
                 </div>
                 <div>
                    <div className="text-primary font-bold text-4xl mb-1">15k+</div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Successful Cases</p>
                 </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                alt="Our Team"
                className="rounded-[40px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Patient-First Philosophy',
                desc: 'Your comfort and goals are our top priority. We listen, understand, and tailor every treatment plan to your unique needs.',
                icon: Heart,
              },
              {
                title: 'Precision & Excellence',
                desc: 'We utilize state-of-the-art technology to ensure pinpoint accuracy in everything from routine cleanings to complex implants.',
                icon: Target,
              },
              {
                title: 'Commitment to Ethics',
                desc: 'Honesty and transparency are the bedrocks of our practice. We only recommend treatments that are in your best interest.',
                icon: Award,
              },
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Meet Our Specialists</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">Our team of board-certified dentists and experienced staff are here to provide you with an exceptional dental experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
             {[
               { name: 'Dr. Katherine Miller', role: 'Chief Cosmetic Dentist', img: 'https://images.unsplash.com/photo-1674775372058-c4c8813c6611?auto=format&fit=crop&q=80&w=2070' },
               { name: 'Dr. James Wilson', role: 'Implant Specialist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=2070' },
               { name: 'Dr. Elena Rodriguez', role: 'Restorative Dentist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2070' }
             ].map((member, i) => (
               <div key={i} className="group">
                  <div className="overflow-hidden rounded-[32px] bg-gray-100 mb-6 aspect-square">
                    <img src={member.img} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-primary font-semibold tracking-widest text-xs uppercase mt-1">{member.role}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
