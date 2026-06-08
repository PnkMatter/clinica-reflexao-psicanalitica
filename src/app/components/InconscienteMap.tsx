import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Moon, Heart, Eye, Zap, Key } from 'lucide-react';

const mindNodes = [
  {
    id: 'sonhos',
    icon: Moon,
    title: 'Sonhos',
    description: 'A via régia ao inconsciente, onde desejos reprimidos se expressam simbolicamente.',
    position: { top: '15%', left: '20%' }
  },
  {
    id: 'desejos',
    icon: Heart,
    title: 'Desejos Recalcados',
    description: 'Impulsos e anseios que foram suprimidos pela consciência, mas continuam ativos no psiquismo.',
    position: { top: '25%', left: '60%' }
  },
  {
    id: 'memorias',
    icon: Brain,
    title: 'Memórias',
    description: 'Experiências passadas que moldam o presente, especialmente aquelas da primeira infância.',
    position: { top: '50%', left: '35%' }
  },
  {
    id: 'sintomas',
    icon: Zap,
    title: 'Sintomas',
    description: 'Manifestações corporais e psíquicas de conflitos inconscientes não elaborados.',
    position: { top: '65%', left: '65%' }
  },
  {
    id: 'resistencia',
    icon: Eye,
    title: 'Resistência',
    description: 'Mecanismos de defesa que protegem o ego de conteúdos dolorosos ou ameaçadores.',
    position: { top: '70%', left: '25%' }
  },
  {
    id: 'insight',
    icon: Key,
    title: 'Insight',
    description: 'O momento de compreensão profunda onde conexões inconscientes emergem à consciência.',
    position: { top: '40%', left: '75%' }
  }
];

export default function InconscienteMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Close tooltip when tapping outside any node (mobile support)
  const handleClickOutside = useCallback((e: MouseEvent | TouchEvent) => {
    if (!mapRef.current) return;
    const target = e.target as HTMLElement;
    // If the click/tap is not inside a node circle, close
    if (!target.closest('[data-mind-node]')) {
      setActiveNode(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleNodeClick = (nodeId: string) => {
    // Toggle: tap again to close, tap different to switch
    setActiveNode(prev => prev === nodeId ? null : nodeId);
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-primary">
            Mapeando o Inconsciente
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Uma jornada visual pelos conceitos fundamentais da psicanálise. Explore cada elemento para descobrir conexões profundas.
          </p>
        </motion.div>

        {/* Interactive Mind Map */}
        <div ref={mapRef} className="relative h-[600px] max-w-5xl mx-auto">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {mindNodes.map((node, i) =>
              mindNodes.slice(i + 1).map((targetNode, j) => (
                <motion.line
                  key={`${node.id}-${targetNode.id}`}
                  x1={node.position.left}
                  y1={node.position.top}
                  x2={targetNode.position.left}
                  y2={targetNode.position.top}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  className="text-primary"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              ))
            )}
          </svg>

          {/* Nodes */}
          {mindNodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                ...node.position,
                // Active node floats above all others so its card isn't hidden
                zIndex: activeNode === node.id ? 50 : 1,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative cursor-pointer"
                data-mind-node={node.id}
                onHoverStart={() => setActiveNode(node.id)}
                onHoverEnd={() => setActiveNode(null)}
                onClick={() => handleNodeClick(node.id)}
                whileHover={{ scale: 1.1 }}
              >
                {/* Node circle */}
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center
                  bg-card border-2 transition-all duration-300
                  ${activeNode === node.id
                    ? 'border-accent shadow-xl shadow-accent/20 bg-accent/10'
                    : 'border-border/50 hover:border-accent/50 shadow-lg'
                  }
                `}>
                  <node.icon className={`w-8 h-8 transition-colors duration-300 ${
                    activeNode === node.id ? 'text-accent' : 'text-primary'
                  }`} />
                </div>

                {/* Node label */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-sm text-primary text-center px-2 py-1 bg-background/80 rounded">
                    {node.title}
                  </p>
                </div>

                {/* Info card — appears ABOVE the node to avoid overlap */}
                <AnimatePresence>
                  {activeNode === node.id && (
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-card border border-accent/30 rounded-xl shadow-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {node.description}
                      </p>
                      {/* Arrow pointing down */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-r border-b border-accent/30 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="hidden md:inline">Passe o cursor sobre cada elemento para explorar suas conexões</span>
          <span className="md:hidden">Toque em cada elemento para explorar suas conexões</span>
        </motion.p>
      </div>
    </section>
  );
}

