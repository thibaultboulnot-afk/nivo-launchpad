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

      {/* 5. ROADMAP SECTION */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-2 block">Architecture du Programme</span>
              <h2 className="font-display text-4xl text-white tracking-tight font-bold">La Roadmap 21 Jours</h2>
            </div>
            <div className="hidden md:flex gap-2 items-center px-3 py-1 bg-white/5 rounded border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse"></div>
              <span className="text-slate-500 font-mono text-[10px] uppercase">ACCESSIBLE À TOUS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Carte Graphique */}
            <div className="md:col-span-7 group relative rounded-3xl bg-[#0a0a16] border border-white/10 overflow-hidden hover:border-[#ff6b4a]/50 transition duration-500">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
              
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Map className="w-6 h-6 text-[#ff6b4a]" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 border border-white/10 px-2 py-1 rounded bg-[#050510]/50">V2.0 :: PROTOCOLE</span>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl text-white font-medium mb-2">Les 3 Phases de Reconstruction</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm">
                    Un plan progressif conçu pour s'intégrer à votre emploi du temps chargé. 15 minutes par jour, pas de matériel complexe.
                  </p>
                  
                  <div className="w-full flex items-end gap-2 h-32 pb-2 border-b border-white/5">
                    <div className="flex-1 flex flex-col justify-end gap-2 group-hover:-translate-y-1 transition duration-500">
                      <span className="text-[9px] text-slate-500 text-center font-mono">SEMAINE 1</span>
                      <div className="w-full bg-white/10 h-10 rounded-t-sm relative border-t border-white/20"></div>
                      <span className="text-[10px] text-white text-center font-medium">SOULAGER</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end gap-2 group-hover:-translate-y-2 transition duration-700 delay-75">
                      <span className="text-[9px] text-slate-500 text-center font-mono">SEMAINE 2</span>
                      <div className="w-full bg-white/20 h-16 rounded-t-sm relative border-t border-white/30"></div>
                      <span className="text-[10px] text-white text-center font-medium">ALIGNER</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-end gap-2 group-hover:-translate-y-3 transition duration-1000 delay-100">
                      <span className="text-[9px] text-[#ff6b4a] text-center font-mono">SEMAINE 3</span>
                      <div className="w-full bg-gradient-to-t from-[#ff6b4a]/20 to-[#ff6b4a] h-24 rounded-t-sm relative shadow-[0_0_20px_-5px_#ff6b4a] border-t border-[#ff6b4a]">
                        <div className="absolute bottom-0 w-full h-1 bg-white/50"></div>
                      </div>
                      <span className="text-[10px] text-white text-center font-bold">RENFORCER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne de droite */}
            <div className="md:col-span-5 flex flex-col gap-6">
              
              {/* Carte Focus */}
              <div className="flex-1 group relative p-6 rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/30 transition duration-300 overflow-hidden">
                <div className="absolute right-0 top-0 p-32 bg-[#ff6b4a] opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-white font-medium">Focus & Productivité</h3>
                    <Brain className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b4a] transition" />
                  </div>
                  <p className="text-sm text-slate-400 font-light mb-6">Arrêtez d'être distrait par votre mal de dos. Une meilleure posture = un cerveau mieux oxygéné.</p>
                  
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                    <span>SESSION DE DEEP WORK</span>
                    <span className="text-[#ff6b4a] font-bold">+45 MIN</span>
                  </div>
                  
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                     <div className="h-full bg-[#ff6b4a] w-[0%] group-hover:w-[85%] transition-all duration-1000 ease-out shadow-[0_0_10px_#ff6b4a]"></div>
                  </div>
                </div>
              </div>

              {/* Carte Hacks */}
              <div className="flex-1 group relative p-6 rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/30 transition duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-white font-medium">Hacks de Bureau</h3>
                    <Laptop className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b4a] transition" />
                  </div>
                  <p className="text-sm text-slate-400 font-light mb-4">Des micro-exercices invisibles à faire pendant vos calls ou vos sessions de code.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">ASSIS</span>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">DEBOUT</span>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 text-[#ff6b4a]">SANS MATÉRIEL</span>
                  </div>
                </div>
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
