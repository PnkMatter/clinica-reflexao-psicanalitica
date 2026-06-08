import { motion } from 'motion/react';
import { Ear, Sparkles, Users } from 'lucide-react';

const panels = [
  {
    icon: Ear,
    title: 'A Escuta Analítica',
    description: 'Uma atenção flutuante e não-julgadora que acolhe cada palavra, silêncio e gesto, revelando camadas profundas do psiquismo.',
    color: 'from-accent/20 to-accent/5'
  },
  {
    icon: Sparkles,
    title: 'A Associação Livre',
    description: 'O convite para falar sem censura, permitindo que pensamentos e memórias emerjam espontaneamente, abrindo portas ao inconsciente.',
    color: 'from-secondary/20 to-secondary/5'
  },
  {
    icon: Users,
    title: 'A Transferência',
    description: 'O vínculo terapêutico onde padrões relacionais se manifestam, oferecendo insights únicos sobre dinâmicas inconscientes repetidas.',
    color: 'from-primary/20 to-primary/5'
  }
];

export default function ConceptTriptych() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-primary">
            A Psicanálise como Método
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Três pilares fundamentais que sustentam o processo analítico e transformam o sofrimento em compreensão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="h-full p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${panel.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with ethereal glow */}
                  <div className="mb-6 inline-flex p-4 bg-background/80 rounded-full ring-1 ring-border/50 group-hover:ring-accent/30 transition-all duration-500">
                    <panel.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>

                  <h3 className="mb-4 text-2xl text-primary">
                    {panel.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {panel.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    className="mt-6 h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
