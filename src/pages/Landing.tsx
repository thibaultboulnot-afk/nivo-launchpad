import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ChevronRight, Map, Brain, Laptop, Zap, Target, Activity, Wind, Cpu, TrendingUp } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden text-white selection:bg-[#ff6b4a] selection:text-white">
      {/* Background Effects */}
      <div className="aurora absolute inset-0 pointer-events-none opacity-40" />
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
              <Button variant="ghost" className="text-slate-400 hover:text-white font-mono text-xs">LOG_IN</Button>
            </Link>
            <Link to="/diagnostic">
              <Button className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-medium glow-primary-sm">Diagnostic</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section (Mis à jour : Ciblage Subtil) */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b4a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b4a]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">System Patch v2.0 Available</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-[1.1] delay-100">
            Overclockez votre <span className="italic text-slate-500">cerveau</span><br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">en patchant votre dos.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Votre ambition vous demande de rester assis. Votre corps, lui, a besoin de mouvement.<br/>
            NIVO est le correctif système pour réconcilier les deux, éliminer la douleur et restaurer votre focus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <Link to="/diagnostic">
              <Button size="lg" className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] glow-primary h-14 px-8 text-lg rounded-full font-medium transition-all hover:scale-105">
                Lancer le Diagnostic Système
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-full">
                <ChevronRight className="mr-2 h-4 w-4" />
                Espace Membre
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: System Failure (PHASE 2 & 5 - Le Problème "Tech") */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase mb-4 block">⚠ Critical Hardware Errors</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-4">Pourquoi votre corps <span className="text-red-500">crash</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">La science prouve que le travail sédentaire intense est une activité à "haut risque biologique". Voici les logs d'erreur de votre corps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Zap, 
                color: "text-red-500", 
                border: "border-red-500/20", 
                bg: "bg-red-500/10", 
                code: "ERR::CINDERELLA_EFFECT", 
                title: "Hardware Burn-in", 
                desc: "L'hypothèse Cendrillon : la tension statique, même faible, maintient vos fibres musculaires en contraction continue, causant leur nécrose." 
              },
              { 
                icon: Activity, 
                color: "text-orange-500", 
                border: "border-orange-500/20", 
                bg: "bg-orange-500/10", 
                code: "ERR::CPU_THROTTLING", 
                title: "Ischémie Cérébrale", 
                desc: "La position 'Tête en avant' comprime les artères vertébrales. Résultat : -20% de débit sanguin au cerveau et apparition du 'Brain Fog'." 
              },
              { 
                icon: Wind, 
                color: "text-amber-500", 
                border: "border-amber-500/20", 
                bg: "bg-amber-500/10", 
                code: "ERR::COOLING_FAIL", 
                title: "Hypoxie Ventilatoire", 
                desc: "La posture voûtée verrouille la cage thoracique (-6% de capacité pulmonaire). Votre système tourne en manque d'oxygène." 
              }
            ].map((item, i) => (
              <div key={i} className={`group relative p-6 rounded-2xl bg-[#0a0a16] border ${item.border} hover:border-opacity-100 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className={`font-mono text-[10px] ${item.color} mb-2 tracking-wider`}>{item.code}</div>
                <h3 className="text-xl text-white font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Core Protocols (PHASE 3 - La Solution "Micro-Dosing") */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-4 block">Core Protocols</span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Biomécanique <span className="italic text-slate-400">Corrective</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Pas de "bien-être". Des protocoles de réingénierie corporelle basés sur la physiologie du micro-dosing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#0a0a16] to-[#0f0f1a] border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-300">
              <div className="mb-6"><div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center"><Zap className="w-7 h-7 text-[#ff6b4a]" /></div></div>
              <h3 className="text-2xl text-white font-medium mb-3">Fast Charge</h3>
              <p className="text-slate-400 leading-relaxed">Exploitation de la récupération viscoélastique. +3mm de hauteur discale gagnée en 15 minutes de décompression.</p>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#0a0a16] to-[#0f0f1a] border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-300">
              <div className="mb-6"><div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center"><Target className="w-7 h-7 text-[#ff6b4a]" /></div></div>
              <h3 className="text-2xl text-white font-medium mb-3">Anti-Fragilité</h3>
              <p className="text-slate-400 leading-relaxed">Réversion de l'Inhibition Musculaire Arthrogénique (AMI). Réactivation des stabilisateurs profonds éteints par la chaise.</p>
            </div>
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#0a0a16] to-[#0f0f1a] border border-white/10 hover:border-[#ff6b4a]/30 transition-all duration-300">
              <div className="mb-6"><div className="w-14 h-14 rounded-2xl bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 flex items-center justify-center"><Brain className="w-7 h-7 text-[#ff6b4a]" /></div></div>
              <h3 className="text-2xl text-white font-medium mb-3">Reboot Neural</h3>
              <p className="text-slate-400 leading-relaxed">21 jours : le temps exact nécessaire à la neuroplasticité pour réécrire vos schémas moteurs par défaut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION MEDICAL DATA (PHASE 4 - L'Autorité) */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5 bg-[#020205]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-2 block">Clinical Data</span>
              <h2 className="font-display text-3xl text-white font-bold">Pourquoi le mouvement bat la chirurgie</h2>
            </div>
            <div className="font-mono text-xs text-slate-500 text-right">
              Source : NASS Guidelines 2025<br/>& Cochrane Reviews
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-mono text-4xl text-white font-bold mb-2">96%</div>
              <div className="text-[#ff6b4a] text-xs font-mono mb-3 uppercase tracking-wider">Taux de Résorption</div>
              <p className="text-slate-400 text-sm">Des hernies discales graves se résorbent spontanément si l'inflammation est modulée par le mouvement (Macrophages M2).</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-mono text-4xl text-white font-bold mb-2">0%</div>
              <div className="text-[#ff6b4a] text-xs font-mono mb-3 uppercase tracking-wider">Différence à 2 Ans</div>
              <p className="text-slate-400 text-sm">Aucune différence de résultat clinique entre chirurgie et réhabilitation active après 24 mois.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-mono text-4xl text-white font-bold mb-2">-40%</div>
              <div className="text-[#ff6b4a] text-xs font-mono mb-3 uppercase tracking-wider">Risque de Chronicité</div>
              <p className="text-slate-400 text-sm">Réduit drastiquement chez les patients qui reprennent la marche sous 48h (vs Repos au lit).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PERFORMANCE / ROI (PHASE 6 - Le Bonus Cognitif) */}
      <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-[#0a0a16] to-[#050510]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-4 block">System Overclocking</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-4">Le ROI du Mouvement</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              NIVO ne soigne pas juste votre dos. Il libère les ressources système pour votre cerveau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-[#0f0f1a] border border-emerald-500/20 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-24 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg"><Cpu className="w-6 h-6 text-emerald-500" /></div>
                  <h3 className="text-xl text-white font-medium">Bande Passante Libérée</h3>
                </div>
                <div className="font-mono text-3xl text-white font-bold mb-2">+35% <span className="text-sm font-normal text-slate-400">Taux de décharge neuronale</span></div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  L'Hypothèse des Ressources Neuronales prouve que la douleur consomme votre focus. En supprimant le bruit proprioceptif, vous libérez du CPU pour le code complexe.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0f0f1a] border border-emerald-500/20 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-24 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg"><TrendingUp className="w-6 h-6 text-emerald-500" /></div>
                  <h3 className="text-xl text-white font-medium">Liquid Cooling</h3>
                </div>
                <div className="font-mono text-3xl text-white font-bold mb-2">+20% <span className="text-sm font-normal text-slate-400">Perfusion Cérébrale</span></div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Corriger la position de l'Atlas (C1) décomprime les artères vertébrales. L'afflux de sang oxygéné dissipe le "Brain Fog" instantanément.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Roadmap (Bento Grid) */}
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
            {/* Main Graph Card */}
            <div className="md:col-span-7 group relative rounded-3xl bg-[#0a0a16] border border-white/10 overflow-hidden hover:border-[#ff6b4a]/50 transition duration-500">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"><Map className="w-6 h-6 text-[#ff6b4a]" /></div>
                  <span className="font-mono text-xs text-slate-500 border border-white/10 px-2 py-1 rounded bg-[#050510]/50">V2.0 :: PROTOCOLE</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl text-white font-medium mb-2">Les 3 Phases de Reconstruction</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm">Un plan progressif conçu pour s'intégrer à votre emploi du temps.</p>
                  <div className="w-full flex items-end gap-2 h-32 pb-2 border-b border-white/5">
                    {[
                      { label: "SEMAINE 1", title: "SOULAGER", height: "h-10", color: "bg-white/10" },
                      { label: "SEMAINE 2", title: "ALIGNER", height: "h-16", color: "bg-white/20" },
                      { label: "SEMAINE 3", title: "RENFORCER", height: "h-24", color: "bg-gradient-to-t from-[#ff6b4a]/20 to-[#ff6b4a]" }
                    ].map((bar, i) => (
                      <div key={i} className={`flex-1 flex flex-col justify-end gap-2 transition-transform duration-500 group-hover:-translate-y-${i + 1}`}>
                        <span className={`text-[9px] text-center font-mono ${i === 2 ? 'text-[#ff6b4a]' : 'text-slate-500'}`}>{bar.label}</span>
                        <div className={`w-full ${bar.color} ${bar.height} rounded-t-sm relative border-t border-white/20`}></div>
                        <span className="text-[10px] text-white text-center font-medium">{bar.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex-1 group relative p-6 rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/30 transition duration-300 overflow-hidden">
                <div className="absolute right-0 top-0 p-32 bg-[#ff6b4a] opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-white font-medium">Focus & Productivité</h3>
                    <Brain className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b4a] transition" />
                  </div>
                  <p className="text-sm text-slate-400 font-light mb-6">Stop au brouillard mental. Une meilleure posture = un cerveau mieux oxygéné (+20% débit sanguin).</p>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                     <div className="h-full bg-[#ff6b4a] w-[85%] shadow-[0_0_10px_#ff6b4a]"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 group relative p-6 rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/30 transition duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-white font-medium">Hacks de Bureau</h3>
                    <Laptop className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b4a] transition" />
                  </div>
                  <p className="text-sm text-slate-400 font-light mb-4">Micro-exercices invisibles à faire pendant vos calls ou vos sessions de code.</p>
                  <div className="flex flex-wrap gap-2">
                    {["ASSIS", "DEBOUT", "SANS MATÉRIEL"].map(tag => (
                      <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold">Questions fréquentes</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-xl bg-[#0a0a16] px-6">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">Besoin de matériel ?</AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5"><span className="text-[#ff6b4a] font-medium">Non.</span> Poids du corps uniquement.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-white/10 rounded-xl bg-[#0a0a16] px-6">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">Durée des sessions ?</AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5"><span className="text-[#ff6b4a] font-medium">15 minutes par jour.</span> C'est la "Dose Minimale Efficace" prouvée pour réhydrater les disques et maintenir la Lipoprotéine Lipase active.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-white/10 rounded-xl bg-[#0a0a16] px-6">
              <AccordionTrigger className="text-white hover:text-[#ff6b4a] hover:no-underline py-5 text-left">Est-ce du yoga ?</AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5"><span className="text-[#ff6b4a] font-medium">Non.</span> C'est de la maintenance articulaire basée sur la biomécanique et la neurologie fonctionnelle.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5 bg-[#020205] relative z-10">
        <div className="container mx-auto text-center">
          <p className="font-mono text-xs text-slate-600">&copy; {new Date().getFullYear()} NIVO • System Patch for Builders</p>
        </div>
      </footer>
    </div>
  );
}
