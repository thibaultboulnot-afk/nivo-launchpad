import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Lock, Shield, CreditCard, ArrowLeft } from 'lucide-react';
import { type ProgramTier } from '@/data/programs';

// Données des programmes pour la page checkout
const CHECKOUT_PROGRAMS: Record<ProgramTier, {
  name: string;
  price: number;
  duration: string;
  tag: string;
  promise: string;
  features: string[];
}> = {
  RAPID_PATCH: {
    name: 'NIVO RAPID PATCH',
    price: 49,
    duration: '14 Jours',
    tag: 'URGENCE & DOULEUR',
    promise: 'Éteindre l\'inflammation et stopper la douleur en 2 semaines.',
    features: [
      'Décompression Lombaire d\'Urgence',
      'Protocole Tech-Neck',
      'Audio-Guide basique',
      '14 sessions vidéo HD',
      'Accès à vie'
    ]
  },
  SYSTEM_REBOOT: {
    name: 'NIVO SYSTEM REBOOT',
    price: 99,
    duration: '21 Jours',
    tag: 'RECOMMANDÉ • STANDARD',
    promise: 'La correction complète. Réalignez votre posture par défaut.',
    features: [
      'Tout le contenu Rapid Patch',
      'Reprogrammation Neuromotrice',
      'Intégration Habitude (Neuroplasticité)',
      'Accès "Scientific Rationale"',
      '21 sessions vidéo HD',
      'Mises à jour gratuites',
      'Accès à vie'
    ]
  },
  ARCHITECT_MODE: {
    name: 'NIVO ARCHITECT MODE',
    price: 149,
    duration: '30 Jours',
    tag: 'PERFORMANCE & PRO',
    promise: 'Devenez Anti-Fragile. Pour ceux qui veulent optimiser leur focus.',
    features: [
      'Programme Complet (Reboot + Hardening)',
      'Protocoles Vision & Vestibulaire (Focus)',
      'Routine "Deep Work"',
      'Support Prioritaire',
      '30 sessions vidéo HD',
      'Bonus: Micro-exercices de bureau',
      'Accès à vie'
    ]
  }
};

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get('plan') as ProgramTier | null;
  
  // Fallback to SYSTEM_REBOOT if no plan or invalid plan
  const selectedPlan: ProgramTier = planParam && CHECKOUT_PROGRAMS[planParam] 
    ? planParam 
    : 'SYSTEM_REBOOT';
  
  const program = CHECKOUT_PROGRAMS[selectedPlan];

  const handlePayment = () => {
    // Redirect to Lemon Squeezy (simulated)
    window.open('https://lemonsqueezy.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden text-white">
      {/* Background Effects */}
      <div className="aurora absolute inset-0 pointer-events-none opacity-40" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-20" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ff6b4a] flex items-center justify-center shadow-[0_0_15px_-3px_#ff6b4a]">
              <span className="font-sans text-[#050510] font-bold text-lg">N</span>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight">NIVO</span>
          </Link>
          
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm hidden sm:block">Retour</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b4a]/10 border border-[#ff6b4a]/30 mb-6">
            <Lock className="w-4 h-4 text-[#ff6b4a]" />
            <span className="font-mono text-sm text-[#ff6b4a]">PAIEMENT SÉCURISÉ</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Finalisez votre accès
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Vous êtes à une étape de débloquer votre protocole de récupération personnalisé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gauche - Récapitulatif */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 h-full">
              {/* Programme Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#ff6b4a]/10 border border-[#ff6b4a]/30 text-[#ff6b4a]">
                    {program.tag}
                  </span>
                  <h2 className="font-display text-2xl font-bold mt-3">{program.name}</h2>
                  <p className="text-slate-500 font-mono text-sm mt-1">{program.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{program.price}€</p>
                  <p className="text-slate-500 text-xs">paiement unique</p>
                </div>
              </div>
              
              {/* Promise */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <p className="text-slate-300 italic">"{program.promise}"</p>
              </div>

              {/* Modules Débloqués */}
              <div className="mb-6">
                <h3 className="font-mono text-xs text-slate-500 mb-4 uppercase tracking-wider">Modules Débloqués</h3>
                <div className="space-y-3">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ff6b4a]/10 border border-[#ff6b4a]/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#ff6b4a]" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secure Badge */}
              <div className="p-4 rounded-xl bg-[#0a0a16] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#ff6b4a]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Protocole Sécurisé</p>
                  <p className="text-slate-500 text-xs">Paiement chiffré SSL • Satisfait ou remboursé 14j</p>
                </div>
              </div>
            </div>
          </div>

          {/* Droite - Formulaire de paiement */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 h-full flex flex-col">
              <h3 className="font-display text-xl font-semibold mb-6">Informations de paiement</h3>

              {/* Simulated Form */}
              <div className="space-y-4 flex-1">
                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ff6b4a]/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-2">NOM SUR LA CARTE</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ff6b4a]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-2">NUMÉRO DE CARTE</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="4242 4242 4242 4242"
                      className="w-full h-12 px-4 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ff6b4a]/50 transition-colors"
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-slate-500 block mb-2">EXPIRATION</label>
                    <input 
                      type="text" 
                      placeholder="MM/AA"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ff6b4a]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-slate-500 block mb-2">CVC</label>
                    <input 
                      type="text" 
                      placeholder="123"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ff6b4a]/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-white/10 my-6"></div>

              {/* Total & CTA */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Total</span>
                  <span className="text-2xl font-bold text-white">{program.price}€</span>
                </div>

                <Button
                  onClick={handlePayment}
                  className="w-full h-14 bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-bold text-lg glow-primary transition-all hover:scale-[1.02]"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Confirmer l'accès — {program.price}€
                </Button>

                <p className="text-center text-slate-600 text-xs">
                  En confirmant, vous acceptez nos conditions générales de vente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Already have access */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/login">
            <Button variant="ghost" className="text-slate-500 hover:text-white text-sm">
              J'ai déjà une licence → Connexion Système
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
