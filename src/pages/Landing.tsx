import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, ChevronRight, Map, Zap, Activity, Wind, Target, RotateCcw, Check, Lock, 
  Settings, Shield, BrainCircuit, Play, HelpCircle, Terminal, Eye 
} from 'lucide-react';

// --- CONFIGURATION DU CONTENU DYNAMIQUE ---
const PROGRAM_DETAILS = {
  RAPID_PATCH: {
    title: "Rapid Patch Protocol",
    duration: "14 Jours",
    phases: [
      { name: "SEMAINE 1", label: "SOULAGER", active: true, desc: "Décompression d'urgence & baisse de l'inflammation." },
      { name: "SEMAINE 2", label: "MOBILISER", active: true, desc: "Récupération des amplitudes articulaires clés." },
      { name: "SEMAINE 3", label: "RENFORCER", active: false, desc: "Non inclus : Stabilisation durable." },
      { name: "SEMAINE 4", label: "PERFORMER", active: false, desc: "Non inclus : Optimisation neurale." }
    ],
    features: ["Décompression Lombaire", "Protocole Tech-Neck", "Audio-Guide Basique"],
    price: "49€",
    color: "slate"
  },
  SYSTEM_REBOOT: {
    title: "System Reboot Protocol",
    duration: "21 Jours",
    phases: [
      { name: "SEMAINE 1", label: "SOULAGER", active: true, desc: "Décompression & Reset du système nerveux." },
      { name: "SEMAINE 2", label: "ALIGNER", active: true, desc: "Reprogrammation de la posture neutre." },
      { name: "SEMAINE 3", label: "RENFORCER", active: true, desc: "Verrouillage musculaire de la nouvelle posture." },
      { name: "SEMAINE 4", label: "PERFORMER", active: false, desc: "Non inclus : Optimisation avancée." }
    ],
    features: ["Tout le Rapid Patch", "Reprogrammation Neurale", "Neuroplasticité", "Scientific Rationale"],
    price: "99€",
    color: "#ff6b4a"
  },
  ARCHITECT_MODE: {
    title: "Architect Mode Protocol",
    duration: "30 Jours",
    phases: [
      { name: "SEMAINE 1", label: "SOULAGER", active: true, desc: "Décompression & Reset complet." },
      { name: "SEMAINE 2", label: "ALIGNER", active: true, desc: "Correction structurelle profonde." },
      { name: "SEMAINE 3", label: "RENFORCER", active: true, desc: "Construction de l'armure posturale." },
      { name: "SEMAINE 4+", label: "PERFORMER", active: true, desc: "Focus Visuel, Vestibulaire & Deep Work." }
    ],
    features: ["Programme Complet (30j)", "Protocoles Vision (Focus)", "Routine Deep Work", "Support Prioritaire"],
    price: "149€",
    color: "white"
  }
};

export default function Landing() {
  const [selectedProgram, setSelectedProgram] = useState<'RAPID_PATCH' | 'SYSTEM_REBOOT' | 'ARCHITECT_MODE'>('SYSTEM_REBOOT');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const details = PROGRAM_DETAILS[selectedProgram];

  const handleSelectProgram = (program: 'RAPID_PATCH' | 'SYSTEM_REBOOT' | 'ARCHITECT_MODE') => {
    if (program !== selectedProgram) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedProgram(program);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden text-white selection:bg-[#ff6b4a] selection:text-white font-sans">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="aurora absolute inset-0 pointer-events-none opacity-40" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-20" />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ff6b4a] flex items-center justify-center shadow-[0_0_15px_-3px_#ff6b4a]">
              <span className="font-sans text-[#050510] font-bold text-lg">N</span>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight">NIVO</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-400 hover:text-white font-mono text-xs">
                Connexion Système
              </Button>
            </Link>
            <Link to="/diagnostic">
              <Button className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-medium glow-primary-sm">
                Lancer le Scan
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b4a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b4a]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-300">
              PROTOCOLE CLINIQUE VALIDÉ
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            La Maintenance Système <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              pour le Corps Humain.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Basé sur les protocoles de décompression discale et de stabilité du rachis. <br/>
            Conçu pour les ingénieurs, par des ingénieurs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/diagnostic">
              <Button size="lg" className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] glow-primary h-14 px-8 text-lg rounded-full font-medium transition-all hover:scale-105">
                Lancer le Scan Corporel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-full">
                <ChevronRight className="mr-2 h-4 w-4" />
                Connexion Système
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 1.5 PRODUCT SHOWCASE (Ghost Dashboard) --- */}
      <section className="py-12 px-6 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden transform md:rotate-x-2 transition-all hover:rotate-0 duration-700 group">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-slate-400">SESSION LIVE : JOUR 01</span>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

              <div className="relative z-10 w-full max-w-lg text-center">
                <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full border border-white/10 bg-white/5 shadow-[0_0_30px_-5px_rgba(255,107,74,0.3)] group-hover:scale-105 transition-transform duration-500">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Initialisation Système</h3>
                <p className="text-slate-400 font-mono text-sm mb-8">Protocole : Décompression Lombaire L5-S1</p>
                
                <div className="flex items-center gap-1 h-12 justify-center mb-6">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 bg-[#ff6b4a] rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }}></div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>02:14</span>
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[25%] bg-[#ff6b4a]"></div>
                  </div>
                  <span>12:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. PROBLEM SECTION (Latence Matérielle) --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase mb-4 block">⚠ Alerte Système</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Latence Matérielle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-red-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-red-500/40 transition-all duration-300">
                    <Zap className="w-7 h-7 text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Usure Silencieuse</h3>
                <p className="text-slate-400 leading-relaxed">
                  La tension statique continue épuise vos muscles posturaux sans que vous le sentiez.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/40 transition-all duration-300">
                    <Activity className="w-7 h-7 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Brouillard Mental</h3>
                <p className="text-slate-400 leading-relaxed">
                  La mauvaise posture réduit l'oxygénation du cerveau (-20%), freinant vos performances.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/40 transition-all duration-300">
                    <Wind className="w-7 h-7 text-yellow-500" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Métabolisme au Ralenti</h3>
                <p className="text-slate-400 leading-relaxed">
                  L'immobilité prolongée désactive les enzymes responsables de votre énergie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2.5 AUTHORITY SECTION (System Kernel) --- */}
      <section className="py-24 px-6 relative z-10 bg-[#020205]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">System Kernel</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Architecture du Protocole
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              NIVO ne réinvente pas la roue. Nous avons compilé les standards cliniques de référence (Gold Standards) en une routine exécutable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <Settings className="w-10 h-10 text-white mb-6 opacity-80" />
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                Moteur Mécanique
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">McKenzie®</span>
              </h4>
              <p className="text-sm font-mono text-[#ff6b4a] mb-4">module: CENTRALISATION</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Utilisation des mouvements d'extension (MDT) pour repousser mécaniquement le disque vers son centre. La référence mondiale pour la douleur discale.
              </p>
            </div>

            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <Shield className="w-10 h-10 text-white mb-6 opacity-80" />
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                Pare-Feu
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">McGill Method</span>
              </h4>
              <p className="text-sm font-mono text-[#ff6b4a] mb-4">module: HYGIÈNE VERTÉBRALE</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Principes de stabilité du Dr. Stuart McGill. Créer une ceinture de force naturelle (Core Stiffness) pour protéger le dos des micro-mouvements nocifs.
              </p>
            </div>

            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <BrainCircuit className="w-10 h-10 text-white mb-6 opacity-80" />
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                Système d'Exploitation
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">Neuro-Physio</span>
              </h4>
              <p className="text-sm font-mono text-[#ff6b4a] mb-4">module: REPROGRAMMATION</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Exploitation de la neuroplasticité pour changer votre posture par défaut (inconsciente) en 21 jours, sans effort volontaire constant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. DATA SECTION --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">Données de Recherche</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Données Cliniques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center">
              <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent mb-3">96%</p>
              <p className="text-lg text-white font-medium mb-2">de Résorption Spontanée</p>
              <p className="text-slate-400 text-sm mb-4">des hernies avec le mouvement adapté</p>
              <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: NCBI 2019</p>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center">
              <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent mb-3">0%</p>
              <p className="text-lg text-white font-medium mb-2">de Différence</p>
              <p className="text-slate-400 text-sm mb-4">entre chirurgie et réhab active à 2 ans</p>
              <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: Spine Journal 2021</p>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center">
              <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent mb-3">-40%</p>
              <p className="text-lg text-white font-medium mb-2">de Risque</p>
              <p className="text-slate-400 text-sm mb-4">de chronicité en restant actif</p>
              <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: The Lancet 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SOLUTION SECTION (Code Source) --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Protocoles Natifs</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Code Source
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-[#ff6b4a]" />
                </div>
                <h3 className="text-2xl text-white font-medium">Fast Charge</h3>
                <p className="text-slate-400 leading-relaxed mt-3">
                  Récupérez +3mm de hauteur discale en 15 min de décompression.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#ff6b4a]" />
                </div>
                <h3 className="text-2xl text-white font-medium">Anti-Fragilité</h3>
                <p className="text-slate-400 leading-relaxed mt-3">
                  Réactivez les muscles stabilisateurs éteints par votre chaise.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center">
                  <RotateCcw className="w-7 h-7 text-[#ff6b4a]" />
                </div>
                <h3 className="text-2xl text-white font-medium">Reboot Neural</h3>
                <p className="text-slate-400 leading-relaxed mt-3">
                  21 jours pour reprogrammer votre posture par neuroplasticité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. PRICING & INTERACTIVE ROADMAP SECTION --- */}
      <section className="py-24 px-6 relative z-10" id="pricing">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Select Protocol</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Choisissez votre Niveau
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Cliquez sur une carte pour révéler l'architecture du programme.
            </p>
          </div>

          {/* A. PRICING CARDS (SELECTORS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-0">
            {/* CARD 1: RAPID PATCH */}
            <div 
              className={`group flex flex-col p-6 rounded-t-3xl md:rounded-3xl md:rounded-b-none border transition-all duration-300 relative ${selectedProgram === 'RAPID_PATCH' ? 'bg-[#0a0a16] border-white/40 border-b-0 md:border-b shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]' : 'bg-[#0a0a16] border-white/10 hover:border-white/20'}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono uppercase tracking-wider text-slate-400">Urgence & Douleur</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Rapid Patch</h3>
              <p className="text-xs text-slate-500 mb-2">14 Jours</p>
              <p className="text-3xl font-bold text-white mb-2">49€</p>
              <p className="text-xs text-slate-500 mb-4">Paiement unique</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Éteindre l'inflammation et stopper la douleur en 2 semaines.</p>
              <div className="space-y-2 mb-6 flex-grow">
                {PROGRAM_DETAILS.RAPID_PATCH.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300"><Check className="w-3 h-3 text-[#ff6b4a]" /> {f}</div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Link to="/checkout?plan=RAPID_PATCH" className="w-full">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                    Commencer ce programme
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSelectProgram('RAPID_PATCH')}
                  className={`w-full text-slate-400 hover:text-white hover:bg-white/5 text-xs ${selectedProgram === 'RAPID_PATCH' ? 'text-[#ff6b4a]' : ''}`}
                >
                  <Eye className="mr-2 w-4 h-4" />
                  Explorer l'architecture
                </Button>
              </div>
              {selectedProgram === 'RAPID_PATCH' && (
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/40 hidden md:block"></div>
              )}
            </div>

            {/* CARD 2: SYSTEM REBOOT */}
            <div 
              className={`group flex flex-col p-6 rounded-t-3xl md:rounded-3xl md:rounded-b-none border transition-all duration-300 relative transform md:-translate-y-4 ${selectedProgram === 'SYSTEM_REBOOT' ? 'bg-[#0a0a16] border-[#ff6b4a] border-b-0 md:border-b shadow-[0_0_40px_-10px_rgba(255,107,74,0.4)]' : 'bg-[#0a0a16] border-white/10 hover:border-[#ff6b4a]/50'}`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#ff6b4a] text-[#050510] text-[10px] font-bold rounded-full uppercase tracking-widest">
                Recommandé • Standard
              </div>
              <div className="flex items-center gap-2 mb-3 mt-2">
                <span className="px-2 py-0.5 rounded bg-[#ff6b4a]/20 text-[10px] font-mono uppercase tracking-wider text-[#ff6b4a]">Le Protocole Standard</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">System Reboot</h3>
              <p className="text-xs text-slate-500 mb-2">21 Jours</p>
              <p className="text-3xl font-bold text-white mb-2">99€</p>
              <p className="text-xs text-slate-500 mb-4">Paiement unique</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">La correction complète. Réalignez votre posture par défaut.</p>
              <div className="space-y-2 mb-6 flex-grow">
                {PROGRAM_DETAILS.SYSTEM_REBOOT.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300"><Check className="w-3 h-3 text-[#ff6b4a]" /> {f}</div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Link to="/checkout?plan=SYSTEM_REBOOT" className="w-full">
                  <Button className="w-full bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-bold glow-primary">
                    Initialiser le Protocole
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSelectProgram('SYSTEM_REBOOT')}
                  className={`w-full text-slate-400 hover:text-white hover:bg-white/5 text-xs ${selectedProgram === 'SYSTEM_REBOOT' ? 'text-[#ff6b4a]' : ''}`}
                >
                  <Eye className="mr-2 w-4 h-4" />
                  Explorer l'architecture
                </Button>
              </div>
              {selectedProgram === 'SYSTEM_REBOOT' && (
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#ff6b4a] hidden md:block"></div>
              )}
            </div>

            {/* CARD 3: ARCHITECT MODE */}
            <div 
              className={`group flex flex-col p-6 rounded-t-3xl md:rounded-3xl md:rounded-b-none border transition-all duration-300 relative ${selectedProgram === 'ARCHITECT_MODE' ? 'bg-[#0a0a16] border-slate-500 border-b-0 md:border-b shadow-[0_0_30px_-10px_rgba(148,163,184,0.3)]' : 'bg-[#0a0a16] border-white/10 hover:border-slate-500/50'}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded bg-slate-700 text-[10px] font-mono uppercase tracking-wider text-slate-300">Performance & Pro</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Architect Mode</h3>
              <p className="text-xs text-slate-500 mb-2">30 Jours</p>
              <p className="text-3xl font-bold text-white mb-2">149€</p>
              <p className="text-xs text-slate-500 mb-4">Paiement unique</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Devenez Anti-Fragile. Pour ceux qui veulent optimiser leur focus.</p>
              <div className="space-y-2 mb-6 flex-grow">
                {PROGRAM_DETAILS.ARCHITECT_MODE.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300"><Check className="w-3 h-3 text-[#ff6b4a]" /> {f}</div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Link to="/checkout?plan=ARCHITECT_MODE" className="w-full">
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-600">
                    Commencer ce programme
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSelectProgram('ARCHITECT_MODE')}
                  className={`w-full text-slate-400 hover:text-white hover:bg-white/5 text-xs ${selectedProgram === 'ARCHITECT_MODE' ? 'text-slate-300' : ''}`}
                >
                  <Eye className="mr-2 w-4 h-4" />
                  Explorer l'architecture
                </Button>
              </div>
              {selectedProgram === 'ARCHITECT_MODE' && (
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-slate-500 hidden md:block"></div>
              )}
            </div>
          </div>

          {/* B. DYNAMIC ROADMAP DISPLAY */}
          <div className={`bg-[#0a0a16] rounded-b-3xl md:rounded-3xl md:rounded-t-none border border-white/10 border-t-0 md:border-t p-8 md:p-12 relative overflow-hidden transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            
            <div className={`absolute top-0 left-0 right-0 h-1 transition-colors duration-300 ${
              selectedProgram === 'RAPID_PATCH' ? 'bg-white/40' :
              selectedProgram === 'SYSTEM_REBOOT' ? 'bg-[#ff6b4a]' :
              'bg-slate-500'
            }`}></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Map className={`w-5 h-5 ${selectedProgram === 'SYSTEM_REBOOT' ? 'text-[#ff6b4a]' : 'text-white'}`} />
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Architecture du Programme</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-white font-bold">{details.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">
                    {selectedProgram === 'RAPID_PATCH' && 'Focus : Soulagement Urgent & Décompression'}
                    {selectedProgram === 'SYSTEM_REBOOT' && 'Focus : Réalignement & Habitude'}
                    {selectedProgram === 'ARCHITECT_MODE' && 'Focus : Anti-Fragilité & Performance Cognitive'}
                  </p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-sm text-slate-400">Durée totale</p>
                  <p className="text-2xl font-mono font-bold text-white">{details.duration}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {details.phases.map((phase, idx) => (
                  <div key={idx} className={`relative flex flex-col gap-3 p-4 rounded-xl border transition-all duration-500 ${phase.active ? 'bg-white/5 border-white/10' : 'bg-black/40 border-white/5 opacity-50 grayscale'}`}>
                    {!phase.active && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 rounded-xl">
                        <div className="flex flex-col items-center gap-1">
                          <Lock className="w-5 h-5 text-slate-500" />
                          <span className="text-[10px] text-slate-500 font-mono">NON INCLUS</span>
                        </div>
                      </div>
                    )}
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${phase.active ? 'text-[#ff6b4a]' : 'text-slate-600'}`}>{phase.name}</span>
                    <div className={`h-1 w-full rounded-full ${phase.active ? (selectedProgram === 'SYSTEM_REBOOT' ? 'bg-[#ff6b4a]' : selectedProgram === 'ARCHITECT_MODE' ? 'bg-slate-400' : 'bg-white') : 'bg-slate-800'}`}></div>
                    <h4 className={`text-lg font-bold ${phase.active ? 'text-white' : 'text-slate-500'}`}>{phase.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
                  </div>
                ))}
              </div>

              {selectedProgram === 'RAPID_PATCH' && (
                <div className="mb-8 p-4 rounded-xl border border-[#ff6b4a]/20 bg-[#ff6b4a]/5 flex items-center justify-between">
                  <p className="text-sm text-slate-300">
                    <span className="text-[#ff6b4a] font-medium">Débloquez tout le parcours</span> — Passez au System Reboot pour un réalignement complet.
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => handleSelectProgram('SYSTEM_REBOOT')}
                    className="text-[#ff6b4a] hover:text-[#ff6b4a] hover:bg-[#ff6b4a]/10 text-xs"
                  >
                    Voir System Reboot →
                  </Button>
                </div>
              )}

              {selectedProgram === 'SYSTEM_REBOOT' && (
                <div className="mb-8 p-4 rounded-xl border border-slate-500/20 bg-slate-500/5 flex items-center justify-between">
                  <p className="text-sm text-slate-300">
                    <span className="text-slate-300 font-medium">Ajoutez la phase Performance</span> — Passez à Architect Mode pour les protocoles Focus & Deep Work.
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => handleSelectProgram('ARCHITECT_MODE')}
                    className="text-slate-300 hover:text-white hover:bg-slate-500/10 text-xs"
                  >
                    Voir Architect Mode →
                  </Button>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {details.features.map((feat, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#ff6b4a]" /> {feat}
                    </span>
                  ))}
                </div>
                <Link to={`/checkout?plan=${selectedProgram}`}>
                  <Button size="lg" className={`h-14 px-8 rounded-full font-bold text-lg transition-all ${
                    selectedProgram === 'SYSTEM_REBOOT' 
                      ? 'bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] glow-primary' 
                      : selectedProgram === 'ARCHITECT_MODE'
                      ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                      : 'bg-white text-black hover:bg-slate-200'
                  }`}>
                    Commencer — {details.price}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 5.5 LE BENCHMARK (COMPARISON) --- */}
      <section className="py-24 px-6 relative z-10 bg-[#020205]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">Benchmark</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
              Pourquoi le modèle classique <br/> échoue pour les pros du digital
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 overflow-x-auto">
            <div className="min-w-[600px] grid grid-cols-3 bg-white/5 p-4 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500">
              <div className="col-span-1 pl-4">Feature</div>
              <div className="col-span-1 text-center">Médecine Classique</div>
              <div className="col-span-1 text-center text-[#ff6b4a]">NIVO System Patch</div>
            </div>

            {/* Rows */}
            <div className="min-w-[600px] grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
              <div className="col-span-1 text-white font-bold pl-4">Approche</div>
              <div className="col-span-1 text-center text-slate-500">Réactive (Quand c'est cassé)</div>
              <div className="col-span-1 text-center text-white font-medium bg-[#ff6b4a]/10 py-2 rounded-lg border border-[#ff6b4a]/20">Proactive (Maintenance)</div>
            </div>
            <div className="min-w-[600px] grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
              <div className="col-span-1 text-white font-bold pl-4">Fréquence</div>
              <div className="col-span-1 text-center text-slate-500">1h / semaine (Insuffisant)</div>
              <div className="col-span-1 text-center text-white font-medium bg-[#ff6b4a]/10 py-2 rounded-lg border border-[#ff6b4a]/20">15 min / jour (Neuroplasticité)</div>
            </div>
            <div className="min-w-[600px] grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
              <div className="col-span-1 text-white font-bold pl-4">Contexte</div>
              <div className="col-span-1 text-center text-slate-500">Cabinet médical (Hors contexte)</div>
              <div className="col-span-1 text-center text-white font-medium bg-[#ff6b4a]/10 py-2 rounded-lg border border-[#ff6b4a]/20">Au poste de travail (Réel)</div>
            </div>
            <div className="min-w-[600px] grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
              <div className="col-span-1 text-white font-bold pl-4">Coût</div>
              <div className="col-span-1 text-center text-slate-500">Trajet + Co-paiement</div>
              <div className="col-span-1 text-center text-white font-medium bg-[#ff6b4a]/10 py-2 rounded-lg border border-[#ff6b4a]/20">Accès à vie (Prix unique)</div>
            </div>
            <div className="min-w-[600px] grid grid-cols-3 p-6 items-center hover:bg-white/[0.02] transition-colors">
              <div className="col-span-1 text-white font-bold pl-4">Objectif</div>
              <div className="col-span-1 text-center text-slate-500">"Moins de douleur"</div>
              <div className="col-span-1 text-center text-white font-medium bg-[#ff6b4a]/10 py-2 rounded-lg border border-[#ff6b4a]/20">Performance & Anti-Fragilité</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm italic">
              "Ne choisissez pas. Utilisez NIVO pour ne plus avoir besoin d'y aller."
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. EXPANDED FAQ SECTION --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/5 rounded-full border border-white/10">
              <HelpCircle className="w-6 h-6 text-[#ff6b4a]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-4">
              Vous hésitez toujours ?
            </h2>
            <p className="text-slate-400">Nous répondons à vos questions en toute transparence.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left text-lg">
                J'ai déjà mal au dos, est-ce dangereux ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5 leading-relaxed">
                NIVO est conçu pour la "bobologie" du travailleur assis (tensions, raideurs, fatigue). <br/><br/>
                <strong className="text-white">Attention :</strong> Si vous avez une douleur aiguë (type "coup de poignard"), des fourmillements dans les jambes ou une perte de sensibilité, consultez impérativement un médecin avant. NIVO est un outil de maintenance, pas de chirurgie.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left text-lg">
                Quelle différence avec une vidéo YouTube gratuite ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5 leading-relaxed">
                YouTube vous donne des exercices en vrac ("randomness"). NIVO vous donne une <strong className="text-white">architecture</strong>. C'est la différence entre lire des bouts de code sur StackOverflow et suivre une documentation structurée. La progression jour après jour est calculée pour ne pas vous blesser.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left text-lg">
                Ai-je besoin de matériel ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Non.</span> Tout se fait au poids du corps. Pour certains exercices de la phase 3, une bande élastique ou une bouteille d'eau peut être utile, mais c'est optionnel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left text-lg">
                Et si ça ne marche pas pour moi ? (Garantie)
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                Nous prenons le risque. Si après 14 jours d'application du protocole, vous ne sentez aucune amélioration sur votre posture ou votre niveau d'énergie, envoyez un simple email. <strong className="text-white">Remboursement intégral, sans question.</strong>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left text-lg">
                C'est un abonnement caché ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Absolument pas.</span> C'est un paiement unique (One-Time Payment). Vous payez une fois, vous gardez l'accès au programme et à ses futures mises à jour à vie.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* --- 7. FINAL CTA (MISSION) --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-[#ff6b4a]/5 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex mb-6 p-4 bg-[#ff6b4a]/10 rounded-full border border-[#ff6b4a]/20">
            <Terminal className="w-8 h-8 text-[#ff6b4a]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-bold mb-6">
            Ne laissez pas votre chaise gagner.
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Votre carrière est un marathon, pas un sprint. Vous mettez à jour vos langages, vos frameworks et vos outils. 
            Il est temps de mettre à jour le hardware qui permet tout cela : <strong className="text-white">Vous.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/diagnostic">
              <Button size="lg" className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] h-16 px-10 text-xl rounded-full font-bold glow-primary transition-transform hover:scale-105">
                Commencer la Maintenance
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs font-mono text-slate-500">
            Rejoignez 1200+ Builders qui ont déjà patché leur dos.
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 px-6 border-t border-white/5 bg-[#020205] relative z-10">
        <div className="container mx-auto text-center">
          <p className="font-mono text-xs text-slate-600">
            &copy; {new Date().getFullYear()} NIVO • System Patch for Builders
          </p>
        </div>
      </footer>
    </div>
  );
}
