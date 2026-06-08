import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Waves, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ConceptTriptych from './components/ConceptTriptych';
import InconscienteMap from './components/InconscienteMap';
import PhilosophyNotebook from './components/PhilosophyNotebook';
import AnalystProfile from './components/AnalystProfile';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ConceptTriptych />
      <InconscienteMap />
      <PhilosophyNotebook />
      <AnalystProfile />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Clínica Reflexão Psicanalítica. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            CRP: 06/123456 | Sorocaba, São Paulo
          </p>
        </div>
      </footer>
    </div>
  );
}
