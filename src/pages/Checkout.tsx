import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useDiagnostic } from '@/contexts/DiagnosticContext';
import { AlertTriangle, Check, Lock, Zap, CreditCard } from 'lucide-react';

const zoneLabels: Record<string, string> = {
  cou: 'Cervicales',
  epaules: 'Épaules',
  'dos-haut': 'Haut du Dos',
  lombaires: 'Lombaires',
  hanches: 'Hanches',
  poignets: 'Poignets',
};

const programDays = [
  'Diagnostic initial & Setup',
  'Mobilité fondamentale',
  'Renforcement postural',
  'Étirements actifs',
  'Recovery profond',
  // ... more days blurred
];

export default function Checkout() {
  const { data } = useDiagnostic();
  const zoneName = data.painZone ? zoneLabels[data.painZone] || data.painZone : 'Zone';

  const handlePayment = () => {
    // Redirect to Lemon Squeezy (simulated)
    window.open('https://lemonsqueezy.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-30" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-sans font-bold text-lg text-primary-foreground">N</span>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight">NIVO</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 container mx-auto max-w-4xl">
        {/* Alert Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="font-mono text-sm text-destructive">ANOMALIE DÉTECTÉE</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Douleur <span className="text-destructive">{zoneName}</span> détectée
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Notre analyse a identifié un dysfonctionnement au niveau de votre zone {zoneName.toLowerCase()}.
            Le protocole de récupération est prêt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Program Preview */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="glass rounded-2xl p-6 h-full">
              <h2 className="font-display text-xl font-semibold mb-4">
                Protocole : {zoneName} Recovery
              </h2>

              <div className="space-y-3">
                {programDays.map((day, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      i < 2 ? 'bg-secondary/50' : 'bg-secondary/20 blur-sm'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono ${
                      i < 2 ? 'bg-primary/20 text-primary' : 'bg-border text-muted-foreground'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className={i < 2 ? 'text-foreground' : 'text-muted-foreground'}>
                      {day}
                    </span>
                  </div>
                ))}

                {/* More days indicator */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 blur-sm">
                  <div className="w-8 h-8 rounded-lg bg-border flex items-center justify-center">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">+ 16 jours de programme...</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-background/50 border border-border/30">
                <p className="font-mono text-xs text-muted-foreground text-center">
                  21 jours • Vidéos HD • Suivi quotidien • Accès à vie
                </p>
              </div>
            </div>
          </div>

          {/* Titanium Card & Payment */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-6 h-full flex flex-col">
              {/* Virtual Card */}
              <div className="relative mb-6">
                <div className="aspect-[1.6/1] rounded-2xl bg-gradient-to-br from-secondary via-card to-background border border-border/30 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-transparent blur-3xl" />
                  </div>

                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <p className="font-mono text-xs text-muted-foreground mb-1">LICENCE</p>
                      <p className="font-sans font-bold text-lg tracking-tight">NIVO TITANIUM</p>
                    </div>
                    <Zap className="w-8 h-8 text-primary" />
                  </div>

                  <div className="relative z-10">
                    <p className="font-mono text-xs text-muted-foreground mb-1">ACCÈS</p>
                    <p className="font-mono text-sm">À VIE • ILLIMITÉ</p>
                  </div>
                </div>
              </div>

              {/* Price & Features */}
              <div className="flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm line-through mb-1">99€</p>
                  <p className="text-4xl font-bold">
                    49<span className="text-xl">€</span>
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Paiement unique</p>
                </div>

                <div className="space-y-2 mb-6">
                  {[
                    'Programme 21 jours personnalisé',
                    'Vidéos HD explicatives',
                    'Mises à jour gratuites',
                    'Accès à vie',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <Button
                    onClick={handlePayment}
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Initialiser le Système (49€)
                  </Button>

                  <Link to="/login" className="block">
                    <Button variant="ghost" className="w-full text-muted-foreground text-sm">
                      J'ai déjà une licence
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}