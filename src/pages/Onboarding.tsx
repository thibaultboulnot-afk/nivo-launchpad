import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const PAIN_ZONES = [
  { id: 'lombaires', label: 'Lombaires', icon: '🦴', desc: 'Bas du dos' },
  { id: 'cervicales', label: 'Cervicales', icon: '🦒', desc: 'Nuque & cou' },
  { id: 'epaules', label: 'Épaules', icon: '💪', desc: 'Trapèzes' },
  { id: 'poignets', label: 'Poignets', icon: '🖐️', desc: 'Syndrome canal carpien' },
  { id: 'hanches', label: 'Hanches', icon: '🦵', desc: 'Flexeurs' },
  { id: 'general', label: 'Général', icon: '🧘', desc: 'Tout le corps' },
];

export default function Onboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const [step, setStep] = useState(1);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [stats, setStats] = useState({
    age: '',
    weight: '',
    screenHours: '',
    fullName: '',
  });

  const updateProfile = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('Not authenticated');
      
      const { error } = await supabase
        .from('profiles')
        .update({
          pain_zone: selectedZone,
          age: stats.age ? parseInt(stats.age) : null,
          weight: stats.weight ? parseInt(stats.weight) : null,
          screen_hours: stats.screenHours ? parseInt(stats.screenHours) : null,
          full_name: stats.fullName || null,
        })
        .eq('id', user.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast({
        title: 'Programme généré !',
        description: 'Votre protocole personnalisé est prêt.',
      });
      navigate('/dashboard');
    },
    onError: (error) => {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue. Réessayez.',
        variant: 'destructive',
      });
      console.error(error);
    },
  });

  const handleNext = () => {
    if (step === 1 && !selectedZone) {
      toast({
        title: 'Sélection requise',
        description: 'Choisissez une zone de douleur.',
        variant: 'destructive',
      });
      return;
    }
    if (step < 2) setStep(step + 1);
  };

  const handleSubmit = () => {
    updateProfile.mutate();
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-2xl">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-semibold">NIVO</h1>
              <p className="font-mono text-xs text-muted-foreground">Diagnostic initial</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s <= step ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Étape {step} / 2
          </p>
        </div>

        {/* Step 1: Pain Zone Selection */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-2">
              Quelle zone vous fait <span className="text-gradient italic">souffrir</span> ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Sélectionnez la zone principale à traiter. Nous générerons un protocole adapté.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {PAIN_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`p-5 rounded-xl glass border transition-all text-left ${
                    selectedZone === zone.id
                      ? 'border-primary bg-primary/10 glow-primary-sm'
                      : 'border-border/20 hover:border-border/40'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{zone.icon}</span>
                  <p className="font-semibold mb-1">{zone.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{zone.desc}</p>
                  {selectedZone === zone.id && (
                    <CheckCircle2 className="h-5 w-5 text-primary mt-2" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Stats */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-2">
              Vos <span className="text-gradient italic">stats</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ces informations nous aident à personnaliser votre programme.
            </p>

            <div className="space-y-6 glass p-6 rounded-xl border border-border/20">
              <div>
                <Label htmlFor="fullName" className="font-mono text-sm text-muted-foreground mb-2 block">
                  &gt; Nom complet (optionnel)
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={stats.fullName}
                  onChange={(e) => setStats({ ...stats, fullName: e.target.value })}
                  className="font-mono bg-background/50 border-border/30"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="age" className="font-mono text-sm text-muted-foreground mb-2 block">
                    &gt; Âge
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="28"
                    value={stats.age}
                    onChange={(e) => setStats({ ...stats, age: e.target.value })}
                    className="font-mono bg-background/50 border-border/30"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="font-mono text-sm text-muted-foreground mb-2 block">
                    &gt; Poids (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="75"
                    value={stats.weight}
                    onChange={(e) => setStats({ ...stats, weight: e.target.value })}
                    className="font-mono bg-background/50 border-border/30"
                  />
                </div>
                <div>
                  <Label htmlFor="screenHours" className="font-mono text-sm text-muted-foreground mb-2 block">
                    &gt; h/écran
                  </Label>
                  <Input
                    id="screenHours"
                    type="number"
                    placeholder="10"
                    value={stats.screenHours}
                    onChange={(e) => setStats({ ...stats, screenHours: e.target.value })}
                    className="font-mono bg-background/50 border-border/30"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <Button
              variant="ghost"
              onClick={() => setStep(step - 1)}
              className="text-muted-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          ) : (
            <div />
          )}

          {step < 2 ? (
            <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Continuer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={updateProfile.isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm"
            >
              {updateProfile.isPending ? (
                'Génération...'
              ) : (
                <>
                  Générer mon programme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
