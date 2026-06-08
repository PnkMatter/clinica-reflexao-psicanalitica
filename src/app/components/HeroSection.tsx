import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Background - Layers representing depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/flagged/photo-1573676564299-1ecef7f2a1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMHdhdGVyJTIwcmVmbGVjdGlvbiUyMGxheWVycyUyMGRlcHRoJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3ODA4NjI5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract layers"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Floating geometric shapes - representing the iceberg analogy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl md:text-7xl text-primary tracking-tight">
            Onde o silêncio ganha voz.
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Um espaço seguro em Sorocaba para explorar o seu inconsciente e compreender as suas narrativas.
        </motion.p>

        <motion.button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Inicie sua Jornada
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Subtle divider */}
        <motion.div
          className="mt-20 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </section>
  );
}
