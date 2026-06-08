import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formação',
    details: 'Psicologia pela USP | Especialização em Psicanálise pelo Instituto Sedes Sapientiae'
  },
  {
    icon: Award,
    title: 'Registro',
    details: 'CRP 06/123456 | Membro da Sociedade Brasileira de Psicanálise'
  },
  {
    icon: BookOpen,
    title: 'Abordagem',
    details: 'Psicanálise Freudiana e Lacaniana | Supervisão clínica contínua'
  },
  {
    icon: Users,
    title: 'Experiência',
    details: '15+ anos de prática clínica | Atendimento individual para adultos'
  }
];

export default function AnalystProfile() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-primary">
            Sobre a Analista
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Uma prática fundamentada em rigor teórico e profundo respeito pela singularidade de cada sujeito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Area */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-muted via-card to-muted rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {/* Minimalist placeholder for profile - represents thoughtful presence */}
                <div className="text-center p-12">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/30" />
                  </div>
                  <p className="text-sm text-foreground/50 italic">
                    Dra. Ana Paula Reflexão
                  </p>
                  <p className="text-xs text-foreground/40 mt-2">
                    Psicanalista
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Qualifications */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.title}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <qual.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg text-primary">
                    {qual.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {qual.details}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Personal statement */}
            <motion.div
              className="mt-8 p-6 bg-muted/50 rounded-xl border-l-4 border-accent/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-foreground/80 leading-relaxed italic">
                "Meu compromisso é oferecer um espaço de escuta genuína, onde cada palavra encontra seu lugar e cada silêncio possui significado. A psicanálise não oferece respostas prontas, mas sim um caminho de descoberta pessoal."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
