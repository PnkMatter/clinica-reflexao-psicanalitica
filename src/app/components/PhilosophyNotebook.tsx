import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const principles = [
  {
    quote: "O analista não julga, não aconselha, não dirige. Ele escuta, acolhe e sustenta o espaço para que o analisando encontre suas próprias verdades.",
    author: "Sobre a Neutralidade Analítica"
  },
  {
    quote: "O sigilo é absoluto. O que é dito no consultório permanece no consultório, criando um espaço de total confidencialidade e segurança.",
    author: "Sobre o Sigilo Profissional"
  },
  {
    quote: "Cada sessão é única. O tempo da análise não é cronológico, mas kairológico—o tempo do inconsciente, da elaboração e da transformação.",
    author: "Sobre o Tempo Analítico"
  }
];

export default function PhilosophyNotebook() {
  return (
    <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Notebook texture background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1612367980327-7454a7276aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMHdyaXRpbmclMjBwc3ljaG90aGVyYXB5JTIwY2FsbXxlbnwxfHx8fDE3ODA4NjI5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="notebook"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-primary">
            A Ética da Psicanálise
          </h2>
          <p className="text-foreground/70">
            Princípios fundamentais que norteiam nossa prática clínica
          </p>
        </motion.div>

        {/* Notebook pages */}
        <div className="space-y-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-card border-l-4 border-accent/40 rounded-r-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Notebook line effect */}
                <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-border/0 via-border/30 to-border/0" />

                <div className="relative pl-8">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />

                  <blockquote className="text-lg text-foreground/80 leading-relaxed mb-6 italic">
                    "{principle.quote}"
                  </blockquote>

                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
                    <cite className="text-sm text-primary not-italic">
                      {principle.author}
                    </cite>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element - bookmark */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="w-1 h-24 bg-gradient-to-b from-accent via-secondary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
