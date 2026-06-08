import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Retornaremos em breve.');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-primary">
            Entre em Contato
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Dê o primeiro passo em direção ao autoconhecimento. Estou aqui para acompanhá-lo nesta jornada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-primary">Localização</h3>
                  <p className="text-foreground/70">
                    Rua das Reflexões, 456 - Centro<br />
                    Sorocaba, SP - CEP 18010-000
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-primary">Telefone</h3>
                  <p className="text-foreground/70">
                    (15) 3234-5678<br />
                    WhatsApp disponível
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-primary">E-mail</h3>
                  <p className="text-foreground/70">
                    contato@reflexaopsicanalitica.com.br
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-primary">Horário de Atendimento</h3>
                  <p className="text-foreground/70">
                    Segunda a Sexta: 8h às 20h<br />
                    Sábado: 8h às 14h<br />
                    Agendamento prévio necessário
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              className="mt-8 aspect-video bg-muted rounded-xl overflow-hidden border border-border/50 shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/10 to-accent/10">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                  <p className="text-sm text-foreground/50">Google Maps Integration</p>
                  <p className="text-xs text-foreground/40 mt-1">Centro de Sorocaba, SP</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
              <h3 className="mb-6 text-2xl text-primary">Solicite um Primeiro Contato</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-foreground/80">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-foreground/80">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm text-foreground/80">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="(15) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-foreground/80">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Conte-me um pouco sobre o que te traz aqui..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensagem
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>

              <p className="mt-6 text-xs text-center text-muted-foreground">
                Suas informações são confidenciais e serão tratadas com total sigilo profissional.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
