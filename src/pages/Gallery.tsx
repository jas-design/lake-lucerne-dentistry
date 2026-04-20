import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Full Arch Implant', category: 'Implants', before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Porcelain Veneers', category: 'Cosmetic', before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Smile Transformation', category: 'Makeover', before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', after: 'https://images.unsplash.com/photo-1681939282781-341ac4f61996?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Dental Bonding', category: 'Cosmetic', before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', after: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Invisalign Treatment', category: 'Orthodontics', before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', after: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Teeth Whitening', category: 'Cosmetic', before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="mb-6 font-serif text-5xl font-bold md:text-7xl underline decoration-secondary decoration-4 underline-offset-8">Our Smile Gallery</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">Witness the transformative power of premium dentistry. Real patients, real results.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] bg-gray-50 p-6 shadow-sm transition-all hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-6 flex justify-between items-center px-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{item.category}</span>
                </div>
                
                {/* Before/After comparison style */}
                <div className="flex gap-4 mb-6 h-64">
                    <div className="flex-1 relative cursor-pointer group/before overflow-hidden rounded-2xl" onClick={() => setSelectedImg(item.before)}>
                        <img src={item.before} alt="Before" className="h-full w-full object-cover grayscale opacity-60 group-hover/before:grayscale-0 group-hover/before:opacity-100 transition-all duration-500" />
                        <div className="absolute top-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold tracking-widest backdrop-blur-sm">Before</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/before:opacity-100 transition-opacity bg-black/10">
                            <ZoomIn className="text-white" />
                        </div>
                    </div>
                    <div className="flex-1 relative cursor-pointer group/after overflow-hidden rounded-2xl" onClick={() => setSelectedImg(item.after)}>
                        <img src={item.after} alt="After" className="h-full w-full object-cover" />
                        <div className="absolute top-2 left-2 bg-primary text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold tracking-widest shadow-lg">After</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/after:opacity-100 transition-opacity bg-black/10">
                            <ZoomIn className="text-white" />
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed px-2 italic">A beautiful result utilizing our bespoke {item.category.toLowerCase()} techniques.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-primary transition-colors">
            <X size={48} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImg}
            alt="Enlarged gallery item"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Your Transformation?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-primary px-12 py-5 text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-accent"
          >
            Start Your Smile Journey Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}
