import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BodyMap } from '@/components/BodyMap';
import { useDiagnostic } from '@/contexts/DiagnosticContext';
import { ArrowRight, ArrowLeft, Loader2, Terminal } from 'lucide-react';

const zoneLabels: Record<string, string> = {
  cou: 'Cervicales',
  epaules: 'Épaules',
  'dos-haut': 'Haut du Dos',
  lombaires: 'Lombaires',
  hanches: 'Hanches',
  poignets: 'Poignets',
};

export default function Diagnostic() {
  const navigate = useNavigate();
  const { data, setData } = useDiagnostic();
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Local form state
  const [age, setAge] = useState(data.age?.toString() || '');
  const [weight, setWeight] = useState(data.weight?.toString() || '');
  const [screenHours, setScreenHours] = useState(data.screenHours?.toString() || '');

  const canProceedStep1 = data.painZone !== null;
  const canProceedStep2 = age && weight && screenHours;

  const handleNextStep = () => {
    if (step === 1 && canProceedStep1) {
      setStep(2);
    } else if (step === 2 && canProceedStep2) {
      setData({
        age: parseInt(age),
        weight: parseInt(weight),
        screenHours: parseInt(screenHours),
      });
      setStep(3);
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate('/checkout');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-30" />
      <div className="scanline absolute inset-0 pointer-events-none opacity-50" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-sans font-bold text-lg text-primary-foreground">N</span>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight">NIVO</span>
          </Link>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-1 rounded-full transition-colors ${
                  s <= step ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 container mx-auto max-w-2xl">
        {/* Step 1: Body Map */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Localisez le <span className="text-destructive">Bug</span>
              </h1>
              <p className="text-muted-foreground">
                Cliquez sur la zone qui vous cause le plus de problèmes.
              </p>
            </div>

            <BodyMap
              selectedZone={data.painZone}
              onSelectZone={(zone) => setData({ painZone: zone })}
            />

            {data.painZone && (
              <div className="mt-8 p-4 rounded-xl glass border border-destructive/30 text-center animate-fade-in">
                <span className="font-mono text-sm text-destructive">
                  &gt; Zone identifiée : {zoneLabels[data.painZone] || data.painZone}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Stats Form */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Paramètres <span className="text-primary">Système</span>
              </h1>
              <p className="text-muted-foreground">
                Quelques données pour calibrer votre protocole.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-6">
              <div className="font-mono text-xs text-muted-foreground mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>&gt; system_config --user</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="font-mono text-sm">
                    Âge <span className="text-muted-foreground">(années)</span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="28"
                    className="font-mono bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="font-mono text-sm">
                    Poids <span className="text-muted-foreground">(kg)</span>
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="75"
                    className="font-mono bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="screenHours" className="font-mono text-sm">
                    Heures d'écran <span className="text-muted-foreground">(par jour)</span>
                  </Label>
                  <Input
                    id="screenHours"
                    type="number"
                    value={screenHours}
                    onChange={(e) => setScreenHours(e.target.value)}
                    placeholder="10"
                    className="font-mono bg-background/50 border-border/50"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Analysis */}
        {step === 3 && (
          <div className="animate-fade-in text-center">
            <div className="mb-12">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Analyse en <span className="text-primary">cours</span>
              </h1>
            </div>

            <div className="glass rounded-2xl p-8 max-w-md mx-auto">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-primary animate-spin" />
                  <div className="absolute inset-0 rounded-full glow-primary animate-pulse" />
                </div>

                <div className="font-mono text-sm text-muted-foreground space-y-2">
                  <p className="animate-pulse">&gt; Scanning biomécanique...</p>
                  <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                    &gt; Analyse de la posture...
                  </p>
                  <p className="animate-pulse" style={{ animationDelay: '1s' }}>
                    &gt; Génération du protocole...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 3 && (
          <div className="mt-10 flex items-center justify-between">
            {step > 1 ? (
              <Button
                variant="ghost"
                onClick={() => setStep(step - 1)}
                className="text-muted-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            ) : (
              <div />
            )}

            <Button
              onClick={handleNextStep}
              disabled={step === 1 ? !canProceedStep1 : !canProceedStep2}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm"
            >
              {step === 2 ? 'Lancer l\'analyse' : 'Continuer'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}