import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ChevronRight, Map, Brain, Laptop, Zap, Activity, Wind, Target, RotateCcw } from 'lucide-react';

export default function Landing() {
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
            {/* Carte 1 - Usure Silencieuse */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-red-500/50 transition-all duration-500 overflow-hidden">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500 opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full"></div>
              
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

            {/* Carte 2 - Brouillard Mental */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500 opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full"></div>
              
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

            {/* Carte 3 - Métabolisme au Ralenti */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500 opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full"></div>
              
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

      {/* 3. SOCIAL PROOF / DATA - Données Cliniques (Déplacé ici) */}
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
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
              
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">96%</p>
                <p className="text-lg text-white font-medium mb-2">de Résorption Spontanée</p>
                <p className="text-slate-400 text-sm mb-4">des hernies avec le mouvement adapté</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: NCBI 2019 — Étude sur 283 patients</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
              
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">0%</p>
                <p className="text-lg text-white font-medium mb-2">de Différence</p>
                <p className="text-slate-400 text-sm mb-4">entre chirurgie et réhab active à 2 ans</p>
                <p className="text-[10px] font-mono text-slate-600 border-t border-white/5 pt-3">Source: Spine Journal 2021 — Méta-analyse</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-500 overflow-hidden text-center">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
              
              <div className="relative z-10">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6b4a] group-hover:to-[#ff856b] transition-all duration-500">-40%</p>
                <p className="text-lg text-white font-medium mb-2">de Risque</p>
                <p className="text-slate-400 text-sm mb-4">de chronicité en restant actif</p>
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
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6b4a] opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <Zap className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl text-white font-medium">Fast Charge</h3>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 text-[#ff6b4a]">01</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Récupérez +3mm de hauteur discale en 15 min de décompression.
                </p>
              </div>
            </div>

            {/* Anti-Fragilité */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6b4a] opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <Target className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl text-white font-medium">Anti-Fragilité</h3>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 text-[#ff6b4a]">02</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Réactivez les muscles stabilisateurs éteints par votre chaise.
                </p>
              </div>
            </div>

            {/* Reboot Neural */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#ff6b4a]/50 transition-all duration-500 overflow-hidden">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6b4a] opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff6b4a]/40 transition-all duration-300">
                    <RotateCcw className="w-7 h-7 text-[#ff6b4a]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl text-white font-medium">Reboot Neural</h3>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 text-[#ff6b4a]">03</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  21 jours pour reprogrammer votre posture par neuroplasticité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Sélectionnez votre Patch</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Choisissez votre Protocole
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Paiement unique. Accès à vie. Pas d'abonnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* RAPID PATCH - Carte 1 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-red-500/10 border border-red-500/20 text-red-400">
                    URGENCE & DOULEUR
                  </span>
                </div>
                
                {/* Title & Price */}
                <h3 className="text-2xl text-white font-bold mb-2">RAPID PATCH</h3>
                <p className="text-slate-500 text-sm mb-4">14 Jours</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">49€</span>
                  <span className="text-slate-500 text-sm ml-2">paiement unique</span>
                </div>
                
                {/* Promise */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Éteindre l'inflammation et stopper la douleur en 2 semaines.
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Décompression Lombaire d'Urgence</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Protocole Tech-Neck</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Audio-Guide basique</span>
                  </div>
                </div>
                
                {/* CTA */}
                <Link to="/checkout?plan=RAPID_PATCH" className="block mt-auto">
                  <Button className="w-full h-12 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium transition-all">
                    Sélectionner
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* SYSTEM REBOOT - Carte 2 (Phare) */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#ff6b4a]/10 to-transparent border-2 border-[#ff6b4a]/50 hover:border-[#ff6b4a] transition-all duration-500 overflow-hidden flex flex-col shadow-[0_0_40px_-15px_#ff6b4a]">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,74,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Glow effect */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#ff6b4a] opacity-10 blur-[80px] rounded-full"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-[#ff6b4a]/30 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-[#ff6b4a]/30 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-[#ff6b4a]/30 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-[#ff6b4a]/30 font-mono text-[10px]">+</div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Tag */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#ff6b4a]/20 border border-[#ff6b4a]/40 text-[#ff6b4a]">
                    RECOMMANDÉ
                  </span>
                  <span className="px-2 py-1 rounded text-[9px] font-mono bg-white/10 text-white">
                    STANDARD
                  </span>
                </div>
                
                {/* Title & Price */}
                <h3 className="text-2xl text-white font-bold mb-2">SYSTEM REBOOT</h3>
                <p className="text-[#ff6b4a] text-sm mb-4 font-medium">21 Jours</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">99€</span>
                  <span className="text-slate-400 text-sm ml-2">paiement unique</span>
                </div>
                
                {/* Promise */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  La correction complète. Réalignez votre posture par défaut.
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]"></div>
                    <span>Tout le contenu Rapid Patch</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]"></div>
                    <span>Reprogrammation Neuromotrice</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]"></div>
                    <span>Intégration Habitude (Neuroplasticité)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]"></div>
                    <span>Accès "Scientific Rationale"</span>
                  </div>
                </div>
                
                {/* CTA */}
                <Link to="/checkout?plan=SYSTEM_REBOOT" className="block mt-auto">
                  <Button className="w-full h-14 bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-bold text-lg glow-primary transition-all hover:scale-[1.02]">
                    Initialiser le Protocole
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* ARCHITECT MODE - Carte 3 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-slate-800/30 to-transparent border border-slate-700/50 hover:border-slate-600 transition-all duration-500 overflow-hidden flex flex-col">
              {/* Grid texture background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-slate-700 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-slate-700 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-slate-700 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-slate-700 font-mono text-[10px]">+</div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-slate-800 border border-slate-600 text-slate-300">
                    PERFORMANCE & PRO
                  </span>
                </div>
                
                {/* Title & Price */}
                <h3 className="text-2xl text-white font-bold mb-2">ARCHITECT MODE</h3>
                <p className="text-slate-500 text-sm mb-4">30 Jours</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">149€</span>
                  <span className="text-slate-500 text-sm ml-2">paiement unique</span>
                </div>
                
                {/* Promise */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Devenez Anti-Fragile. Pour ceux qui veulent optimiser leur focus.
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Programme Complet (Reboot + Hardening)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Protocoles Vision & Vestibulaire</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Routine "Deep Work"</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    <span>Support Prioritaire</span>
                  </div>
                </div>
                
                {/* CTA */}
                <Link to="/checkout?plan=ARCHITECT_MODE" className="block mt-auto">
                  <Button className="w-full h-12 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-medium transition-all">
                    Sélectionner
                    <ChevronRight className="ml-2 h-4 w-4" />
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
