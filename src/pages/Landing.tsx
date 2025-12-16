import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ChevronRight, Map, Brain, Laptop, Zap, Activity, Wind, Target, RotateCcw, Check, Lock, Eye } from 'lucide-react';

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
  const navigate = useNavigate();
  // État par défaut sur 'SYSTEM_REBOOT' pour montrer l'offre recommandée
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
    <div className="min-h-screen bg-[#050510] relative overflow-hidden text-white selection:bg-[#ff6b4a] selection:text-white">
      {/* Aurora Background Effect */}
      <div className="aurora absolute inset-0 pointer-events-none opacity-40" />
      
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 pointer-events-none opacity-20" />

      {/* Navbar */}
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

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 px-6 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b4a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b4a]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              System Patch v2.0 Available
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            Initialisez le <span className="italic text-slate-500">protocole</span><br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              en 21 jours chrono.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Votre ambition vous demande de rester assis. Votre corps a besoin de mouvement. 
            NIVO est le correctif système pour réconcilier les deux.
          </p>

          {/* CTA */}
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

      {/* 1.5 PRODUCT SHOWCASE - Fake Dashboard */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Floating App Window Container */}
          <div 
            className="relative animate-fade-in"
            style={{ 
              animationDelay: '0.5s',
              perspective: '1000px'
            }}
          >
            {/* Orange Glow Behind */}
            <div className="absolute inset-0 bg-[#ff6b4a]/20 blur-[80px] rounded-3xl -z-10 scale-95" />
            
            {/* The Window */}
            <div 
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl"
              style={{
                transform: 'rotateX(2deg) rotateY(-1deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Window Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-xs text-slate-400 ml-4">SESSION DU JOUR : 01</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">Système Connecté</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-8">
                {/* Audio Player Section */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 mb-6">
                  {/* Track Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#ff6b4a]/20 border border-[#ff6b4a]/30 flex items-center justify-center">
                      <Brain className="w-8 h-8 text-[#ff6b4a]" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[#ff6b4a] uppercase tracking-widest mb-1">Protocole Actif</p>
                      <h3 className="text-xl font-medium text-white">Décompression Lombaire</h3>
                    </div>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="relative h-20 mb-6 flex items-center justify-center gap-[3px]">
                    {[...Array(60)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-[#ff6b4a]/40 to-[#ff6b4a] rounded-full"
                        style={{
                          height: `${20 + Math.sin(i * 0.3) * 30 + Math.random() * 20}%`,
                          animationDelay: `${i * 0.05}s`,
                          opacity: i < 25 ? 1 : 0.3
                        }}
                      />
                    ))}
                    {/* Progress Indicator */}
                    <div className="absolute left-[40%] top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  </div>

                  {/* Play Button */}
                  <div className="flex items-center justify-center gap-8">
                    <button className="w-6 h-6 text-slate-500 hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                    </button>
                    <button className="w-16 h-16 rounded-full bg-[#ff6b4a] flex items-center justify-center shadow-[0_0_30px_-5px_#ff6b4a] hover:scale-105 transition-transform">
                      <svg className="w-7 h-7 text-[#050510] ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <button className="w-6 h-6 text-slate-500 hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                    </button>
                  </div>

                  {/* Time */}
                  <div className="flex justify-between mt-4 font-mono text-xs text-slate-500">
                    <span>04:32</span>
                    <span>12:00</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Pression Discale</p>
                    <p className="text-2xl font-bold text-green-400">-15%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Durée</p>
                    <p className="text-2xl font-bold text-white">12 <span className="text-base font-normal text-slate-400">min</span></p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Série en cours</p>
                    <p className="text-2xl font-bold text-[#ff6b4a]">1 <span className="text-base font-normal text-slate-400">Jour</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION - Hardware Latency */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase mb-4 block">⚠ Alerte Système</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Hardware Latency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte 1 */}
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

            {/* Carte 2 */}
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

            {/* Carte 3 */}
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

      {/* 3. SOCIAL PROOF / DATA - Données Cliniques */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">Données de Recherche</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Données Cliniques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">96%</p>
                <p className="text-lg text-white font-medium mb-2">de Résorption Spontanée</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: NCBI 2019 — Étude sur 283 patients</p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">0%</p>
                <p className="text-lg text-white font-medium mb-2">de Différence</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: Spine Journal 2021 — Méta-analyse</p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">-40%</p>
                <p className="text-lg text-white font-medium mb-2">de Risque</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: The Lancet 2018 — Cohorte 12 mois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION - Code Source */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Protocoles Natifs</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Code Source
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fast Charge */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <Zap className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium">Fast Charge</h3>
                <p className="text-slate-400 leading-relaxed mt-3">
                  Récupérez +3mm de hauteur discale en 15 min de décompression.
                </p>
              </div>
            </div>
            {/* Anti-Fragilité */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <Target className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium">Anti-Fragilité</h3>
                <p className="text-slate-400 leading-relaxed mt-3">
                  Réactivez les muscles stabilisateurs éteints par votre chaise.
                </p>
              </div>
            </div>
            {/* Reboot Neural */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <RotateCcw className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
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

      {/* 5. PRICING & INTERACTIVE ROADMAP SECTION */}
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
            {/* Background Grid specific to selection */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            
            {/* Active indicator bar */}
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

              {/* THE VISUAL TIMELINE */}
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

              {/* UPSELL CTA for non-complete programs */}
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

              {/* ACTION AREA */}
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

      {/* 6. FAQ SECTION */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">FAQ & Specs</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
              Questions fréquentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Besoin de matériel ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Non.</span> Poids du corps uniquement. Vous pouvez faire tous les exercices dans votre chambre ou à côté de votre bureau.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Durée des sessions ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">15 minutes par jour.</span> Conçu pour s'intégrer dans n'importe quel emploi du temps chargé, même entre deux meetings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Est-ce du yoga ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Non.</span> C'est de la maintenance articulaire ciblée. Des mouvements précis basés sur la biomécanique, pas de spiritualité ou de postures complexes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
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
