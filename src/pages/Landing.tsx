import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ChevronRight, Map, Brain, Laptop, Zap, Activity, Wind, Target, RotateCcw, Check, Lock, Eye, Shield, Cpu, Settings, X, CheckCircle } from 'lucide-react';

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white">
              Protocole Clinique Validé
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            La <span className="italic text-slate-500">Maintenance Système</span><br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              pour le Corps Humain.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Pour les entrepreneurs et créateurs qui passent leur vie assis.<br />
            <span className="text-slate-500">Basé sur les standards cliniques de décompression (Méthodes McKenzie & McGill).</span>
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

      {/* 2. PRODUCT SHOWCASE - Hyper-Realistic Dashboard (Architect Mode Theme) */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Section Label */}
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-3">Aperçu de l'Interface</span>
            <p className="text-slate-400 text-sm">Découvrez votre futur espace de travail</p>
          </div>

          {/* Floating App Window Container */}
          <div 
            className="relative animate-fade-in"
            style={{ 
              animationDelay: '0.5s',
              perspective: '2000px'
            }}
          >
            {/* Multi-layer Glow Effect */}
            <div className="absolute inset-0 scale-90 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-slate-400/20 to-transparent blur-[100px] rounded-[40px]" />
              <div className="absolute inset-x-10 top-10 bottom-20 bg-white/5 blur-[60px] rounded-[40px]" />
            </div>
            
            {/* The Main Window - Architect Mode Theme */}
            <div 
              className="relative rounded-[24px] border border-white/[0.08] bg-black overflow-hidden"
              style={{
                transform: 'rotateX(4deg) rotateY(-2deg)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 60px 120px -30px rgba(0,0,0,0.8), 0 30px 60px -20px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Gloss/Reflection Effect on top-left */}
              <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-tl-[24px]" />
              
              {/* Window Structure: Sidebar + Main */}
              <div className="flex">
                {/* Sidebar Navigation */}
                <div className="w-16 md:w-20 bg-white/[0.02] border-r border-white/[0.05] flex flex-col items-center py-6 gap-6">
                  {/* Logo */}
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                    <span className="text-black font-bold text-lg">N</span>
                  </div>
                  
                  {/* Nav Icons */}
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-slate-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-slate-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-slate-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                  {/* Header Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-white/[0.01]">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="h-4 w-px bg-white/10 ml-2" />
                      <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">Session 01 · Architect Mode</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Notification Bell */}
                      <div className="relative">
                        <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
                      </div>
                      {/* User Avatar */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-[10px] font-bold text-white">
                          JD
                        </div>
                        <span className="text-sm text-slate-400 hidden md:block">John Doe</span>
                      </div>
                      {/* Status */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 md:p-8">
                    {/* Day Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-1">Jour 12 · Phase 2</p>
                        <h2 className="text-2xl md:text-3xl font-light text-white">Décompression Vertébrale</h2>
                      </div>
                      <div className="hidden md:flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-slate-400">
                          [ ARCHITECT_MODE :: ACTIVE ]
                        </span>
                      </div>
                    </div>

                    {/* Rich Audio Player */}
                    <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-xl mb-6">
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
                      
                      <div className="relative z-10">
                        {/* Track Info */}
                        <div className="flex items-center gap-5 mb-8">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                            <Brain className="w-10 h-10 text-white/80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                          <div className="flex-1">
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">Protocole Actif</p>
                            <h3 className="text-xl md:text-2xl font-light text-white mb-1">Décompression Lombaire</h3>
                            <p className="text-sm text-slate-500">Module Focus · Anti-Fragilité</p>
                          </div>
                        </div>

                        {/* Detailed Waveform */}
                        <div className="relative h-24 mb-6 flex items-end justify-center gap-[2px] px-2">
                          {[...Array(80)].map((_, i) => {
                            const baseHeight = 20 + Math.sin(i * 0.15) * 25 + Math.cos(i * 0.08) * 15;
                            const played = i < 32;
                            return (
                              <div
                                key={i}
                                className={`w-[3px] md:w-1 rounded-full transition-all duration-300 ${
                                  played 
                                    ? 'bg-gradient-to-t from-slate-400 to-white' 
                                    : 'bg-gradient-to-t from-slate-800 to-slate-600'
                                }`}
                                style={{
                                  height: `${baseHeight + Math.random() * 15}%`,
                                  opacity: played ? 1 : 0.4
                                }}
                              />
                            );
                          })}
                          {/* Playhead */}
                          <div className="absolute left-[40%] top-0 bottom-0 flex flex-col items-center">
                            <div className="w-0.5 flex-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] -mt-1" />
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full w-[40%] bg-gradient-to-r from-slate-400 to-white rounded-full" />
                          </div>
                        </div>

                        {/* Time + Controls */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-slate-500">04:48</span>
                          
                          <div className="flex items-center gap-6">
                            <button className="w-8 h-8 text-slate-500 hover:text-white transition-colors">
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                            </button>
                            <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform">
                              <svg className="w-7 h-7 text-black ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            </button>
                            <button className="w-8 h-8 text-slate-500 hover:text-white transition-colors">
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                            </button>
                          </div>
                          
                          <span className="font-mono text-xs text-slate-500">12:00</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                        <p className="font-mono text-[9px] text-slate-600 uppercase tracking-wider mb-2">Pression Discale</p>
                        <p className="text-2xl font-light text-emerald-400">-15%</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                        <p className="font-mono text-[9px] text-slate-600 uppercase tracking-wider mb-2">Durée</p>
                        <p className="text-2xl font-light text-white">12 <span className="text-sm font-normal text-slate-500">min</span></p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                        <p className="font-mono text-[9px] text-slate-600 uppercase tracking-wider mb-2">Streak</p>
                        <p className="text-2xl font-light text-white">12 <span className="text-sm font-normal text-slate-500">jours</span></p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                        <p className="font-mono text-[9px] text-slate-600 uppercase tracking-wider mb-2">Focus Score</p>
                        <p className="text-2xl font-light text-white">94<span className="text-sm font-normal text-slate-500">%</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION - Latence Matérielle */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase mb-4 block">⚠ Alerte Système</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Latence Matérielle
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Les signaux d'alerte que votre corps envoie quand votre productivité est menacée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte 1 - Baisse de Focus */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-red-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-red-500/40 transition-all duration-300">
                    <Brain className="w-7 h-7 text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Baisse de Focus</h3>
                <p className="text-slate-400 leading-relaxed">
                  La mauvaise posture réduit l'oxygénation du cerveau de <span className="text-red-400 font-medium">20%</span>. Votre capacité de décision et créativité chutent.
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-red-400 font-mono">Impact: -2h de Deep Work/jour</span>
                </div>
              </div>
            </div>

            {/* Carte 2 - Ralentissement Métabolique */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/40 transition-all duration-300">
                    <Activity className="w-7 h-7 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Ralentissement Métabolique</h3>
                <p className="text-slate-400 leading-relaxed">
                  L'immobilité prolongée désactive les enzymes responsables de votre énergie. <span className="text-orange-400 font-medium">Fatigue chronique</span> garantie.
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-orange-400 font-mono">Impact: Crashes énergétiques à 15h</span>
                </div>
              </div>
            </div>

            {/* Carte 3 - Usure Silencieuse */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/40 transition-all duration-300">
                    <Zap className="w-7 h-7 text-yellow-500" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Usure Silencieuse</h3>
                <p className="text-slate-400 leading-relaxed">
                  La tension statique continue épuise vos muscles posturaux. Quand la douleur arrive, <span className="text-yellow-400 font-medium">c'est déjà trop tard</span>.
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-yellow-400 font-mono">Impact: Arrêt de travail forcé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW SECTION - Architecture du Protocole (La Preuve) */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Fondations Scientifiques</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Architecture du Protocole
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Basé sur les protocoles cliniques les plus éprouvés au monde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Moteur Mécanique - McKenzie */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#ff6b4a]/5 to-transparent border border-[#ff6b4a]/20 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              {/* Blueprint Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,74,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <Cpu className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-[#ff6b4a] uppercase tracking-widest">Module 01</span>
                </div>
                <h3 className="text-2xl text-white font-medium mb-1">Moteur Mécanique</h3>
                <p className="text-sm text-[#ff6b4a] font-mono mb-4">McKenzie Method®</p>
                <p className="text-slate-400 leading-relaxed">
                  Centralisation discale par mouvements directionnels. Technique utilisée par les kinés du monde entier.
                </p>
                <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="font-mono text-[10px] text-slate-500 block mb-1">OUTPUT</span>
                  <span className="text-sm text-white">Réduction pression discale -40%</span>
                </div>
              </div>
            </div>

            {/* Pare-Feu - McGill */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-cyan-500/5 to-transparent border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                    <Shield className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">Module 02</span>
                </div>
                <h3 className="text-2xl text-white font-medium mb-1">Pare-Feu</h3>
                <p className="text-sm text-cyan-400 font-mono mb-4">McGill Big 3®</p>
                <p className="text-slate-400 leading-relaxed">
                  Hygiène vertébrale & stabilité core. Les 3 exercices validés par la recherche pour protéger votre dos.
                </p>
                <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="font-mono text-[10px] text-slate-500 block mb-1">OUTPUT</span>
                  <span className="text-sm text-white">Prévention récidive 85%</span>
                </div>
              </div>
            </div>

            {/* Système - Neuro-Physio */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
                    <Settings className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest">Module 03</span>
                </div>
                <h3 className="text-2xl text-white font-medium mb-1">Système</h3>
                <p className="text-sm text-purple-400 font-mono mb-4">Neuro-Physio</p>
                <p className="text-slate-400 leading-relaxed">
                  Reprogrammation posturale par neuroplasticité. 21 jours pour créer de nouveaux schémas moteurs durables.
                </p>
                <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="font-mono text-[10px] text-slate-500 block mb-1">OUTPUT</span>
                  <span className="text-sm text-white">Automatisation posture 21j</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DONNÉES CLINIQUES */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">Données de Recherche</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Données Cliniques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">96%</p>
                <p className="text-lg text-white font-medium mb-2">de Résorption Spontanée</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: NCBI 2019 — Étude sur 283 patients</p>
              </div>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">0%</p>
                <p className="text-lg text-white font-medium mb-2">de Différence</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: Spine Journal 2021 — Méta-analyse</p>
              </div>
            </div>
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

      {/* 6. PRICING & INTERACTIVE ROADMAP SECTION */}
      <section className="py-24 px-6 relative z-10" id="pricing">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Sélection du Programme</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
              Choisissez Votre Niveau
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
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-[#ff6b4a] text-[10px] font-bold text-[#050510] uppercase tracking-wider shadow-[0_0_20px_-5px_#ff6b4a]">
                  Recommandé
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3 mt-2">
                <span className="px-2 py-0.5 rounded bg-[#ff6b4a]/20 text-[10px] font-mono uppercase tracking-wider text-[#ff6b4a]">Réalignement</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">System Reboot</h3>
              <p className="text-xs text-slate-500 mb-2">21 Jours</p>
              <p className="text-3xl font-bold text-white mb-2">99€</p>
              <p className="text-xs text-slate-500 mb-4">Paiement unique</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Le protocole complet pour reprogrammer votre posture durablement.</p>
              <div className="space-y-2 mb-6 flex-grow">
                {PROGRAM_DETAILS.SYSTEM_REBOOT.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300"><Check className="w-3 h-3 text-[#ff6b4a]" /> {f}</div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Link to="/checkout?plan=SYSTEM_REBOOT" className="w-full">
                  <Button className="w-full bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-medium glow-primary-sm">
                    Commencer ce programme
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

      {/* 7. NEW SECTION - Le Benchmark (Comparatif) */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">Analyse Comparative</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold max-w-3xl mx-auto leading-tight">
              Pourquoi le modèle classique échoue pour les pros du digital
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="rounded-3xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/5">
              <div className="p-6 border-r border-white/10"></div>
              <div className="p-6 border-r border-white/10 text-center">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Médecine Classique</span>
                <p className="text-red-400 text-sm mt-1">Réactif</p>
              </div>
              <div className="p-6 text-center bg-[#ff6b4a]/10 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff6b4a]"></div>
                <span className="font-mono text-xs text-[#ff6b4a] uppercase tracking-wider">NIVO System Patch</span>
                <p className="text-[#ff6b4a] text-sm mt-1 font-medium">Proactif</p>
              </div>
            </div>

            {/* Row 1 - Approche */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-6 border-r border-white/10">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Approche</span>
              </div>
              <div className="p-6 border-r border-white/10 flex items-center gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Réparer la casse</span>
              </div>
              <div className="p-6 bg-[#ff6b4a]/5 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff6b4a] flex-shrink-0" />
                <span className="text-white text-sm font-medium">Maintenance quotidienne</span>
              </div>
            </div>

            {/* Row 2 - Lieu */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-6 border-r border-white/10">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Lieu</span>
              </div>
              <div className="p-6 border-r border-white/10 flex items-center gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Cabinet médical (perte de temps)</span>
              </div>
              <div className="p-6 bg-[#ff6b4a]/5 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff6b4a] flex-shrink-0" />
                <span className="text-white text-sm font-medium">À votre bureau (flux de travail)</span>
              </div>
            </div>

            {/* Row 3 - Timing */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-6 border-r border-white/10">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Timing</span>
              </div>
              <div className="p-6 border-r border-white/10 flex items-center gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Attendre la douleur</span>
              </div>
              <div className="p-6 bg-[#ff6b4a]/5 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff6b4a] flex-shrink-0" />
                <span className="text-white text-sm font-medium">Prévention intégrée au quotidien</span>
              </div>
            </div>

            {/* Row 4 - Coût */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-6 border-r border-white/10">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Coût</span>
              </div>
              <div className="p-6 border-r border-white/10 flex items-center gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Dépenses récurrentes (kiné, médecin)</span>
              </div>
              <div className="p-6 bg-[#ff6b4a]/5 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff6b4a] flex-shrink-0" />
                <span className="text-white text-sm font-medium">Investissement unique (Asset)</span>
              </div>
            </div>

            {/* Row 5 - Résultat */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-6 border-r border-white/10">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Résultat</span>
              </div>
              <div className="p-6 border-r border-white/10 flex items-center gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Soulagement temporaire, récidive</span>
              </div>
              <div className="p-6 bg-[#ff6b4a]/5 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff6b4a] flex-shrink-0" />
                <span className="text-white text-sm font-medium">Autonomie & Anti-fragilité durables</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4 block">Questions Fréquentes</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
              Transparence Totale
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Est-ce dangereux si j'ai une hernie discale ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Non, au contraire.</span> Le protocole est basé sur la méthode McKenzie, utilisée mondialement par les kinésithérapeutes pour traiter les hernies. Les mouvements de décompression aident à centraliser le disque. Cependant, si vous êtes en phase aiguë (douleur intense depuis moins de 72h), consultez d'abord un professionnel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Quelle différence avec les vidéos YouTube gratuites ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Structure et progression.</span> YouTube vous donne des exercices isolés. NIVO vous donne un protocole séquencé sur 21 jours avec une logique de progression (décompression → mobilisation → renforcement → neuroplasticité). C'est la différence entre avoir des ingrédients et avoir une recette.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Combien de temps par jour ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">15 minutes.</span> Conçu pour s'intégrer dans votre flux de travail : entre deux meetings, pendant une pause café, ou juste avant de commencer votre journée. La régularité compte plus que la durée.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Y a-t-il une garantie ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Oui, 30 jours satisfait ou remboursé.</span> Si vous suivez le protocole pendant 21 jours et ne voyez aucune amélioration, nous vous remboursons intégralement. Aucune question posée.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-white/10 rounded-2xl bg-[#0a0a16] px-6 data-[state=open]:border-[#ff6b4a]/30">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">
                Besoin de matériel spécifique ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5">
                <span className="text-[#ff6b4a] font-medium">Non.</span> Tous les exercices se font au poids du corps. Vous pouvez les faire dans votre chambre, à côté de votre bureau, ou même en déplacement dans une chambre d'hôtel.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 9. FINAL SECTION - Le Manifeste (ROI pour Entrepreneurs) */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#ff6b4a]/10 to-transparent border border-[#ff6b4a]/20 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,74,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
            
            {/* Glow Effect */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff6b4a]/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <span className="font-mono text-[10px] text-[#ff6b4a] uppercase tracking-widest mb-6 block">Le Manifeste</span>
              
              <h2 className="font-display text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Votre business scale.<br />
                <span className="text-slate-400">Ne laissez pas votre corps devenir le goulot d'étranglement.</span>
              </h2>
              
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Vous investissez dans les meilleurs outils, formations et stratégies pour faire croître votre activité. 
                Mais votre actif le plus précieux, c'est votre capacité à rester assis, concentré et productif sur la durée.
                <br /><br />
                <span className="text-white font-medium">NIVO est l'assurance-vie de votre productivité.</span>
              </p>
              
              <Link to="/diagnostic">
                <Button size="lg" className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] glow-primary h-16 px-12 text-lg rounded-full font-bold transition-all hover:scale-105">
                  Sécuriser mon Actif Principal
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              
              <p className="text-xs text-slate-600 mt-6 font-mono">
                30 jours satisfait ou remboursé • Paiement unique • Accès à vie
              </p>
            </div>
          </div>
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
