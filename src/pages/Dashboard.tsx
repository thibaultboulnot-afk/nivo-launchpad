import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  LogOut, 
  Play, 
  Calendar, 
  Target, 
  Clock, 
  ChevronRight,
  Activity,
  Zap,
  FlaskConical,
  ChevronDown,
  ChevronUp,
  Volume2,
  CheckCircle2
} from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { PROGRAMS, getPhaseLabel, getCurrentSession, type ProgramTier } from '@/data/programs';

const ZONE_LABELS: Record<string, string> = {
  lombaires: 'Lombaires',
  cervicales: 'Cervicales',
  epaules: 'Épaules',
  poignets: 'Poignets',
  hanches: 'Hanches',
  general: 'Général',
};

const ZONE_ICONS: Record<string, string> = {
  lombaires: '🦴',
  cervicales: '🦒',
  epaules: '💪',
  poignets: '🖐️',
  hanches: '🦵',
  general: '🧘',
};

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [currentProgramId, setCurrentProgramId] = useState<ProgramTier>('SYSTEM_REBOOT');
  const [showRationale, setShowRationale] = useState(false);

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const currentDay = profile?.current_day || 1;
  const painZone = profile?.pain_zone || 'general';
  const currentProgram = PROGRAMS[currentProgramId];
  const totalDays = currentProgram.totalDays;
  const progress = Math.min((currentDay / totalDays) * 100, 100);
  const currentSession = getCurrentSession(currentDay, currentProgramId);
  const phaseLabel = getPhaseLabel(currentDay, currentProgramId);
  const isProgramComplete = currentDay > totalDays;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Aurora Background */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-20" />

      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-display text-lg font-semibold">NIVO</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground hidden sm:block">
              {profile?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground hover:text-foreground">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 relative z-10">
        {/* Program Selector */}
        <div className="mb-6 animate-fade-in">
          <p className="font-mono text-xs text-muted-foreground mb-2">PROGRAMME ACTIF</p>
          <div className="flex flex-wrap gap-2">
            {Object.values(PROGRAMS).map((program) => (
              <button
                key={program.id}
                onClick={() => setCurrentProgramId(program.id)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  currentProgramId === program.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border/20 text-muted-foreground hover:border-primary/50'
                }`}
              >
                {program.name.replace('NIVO ', '')}
              </button>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground mt-2">{currentProgram.description}</p>
        </div>

        {/* Welcome Section */}
        <div className="mb-10 animate-fade-in">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            &gt; Bonjour{profile?.full_name ? `, ${profile.full_name}` : ''}
          </p>
          <h1 className="font-display text-4xl font-bold">
            {isProgramComplete ? (
              <span className="text-gradient">Programme Terminé ✓</span>
            ) : (
              <>Jour <span className="text-gradient">{currentDay}</span> / {totalDays}</>
            )}
          </h1>
          <p className="font-mono text-sm text-primary mt-1">{phaseLabel}</p>
        </div>

        {/* Progress Card */}
        <div className="glass rounded-2xl border border-border/20 p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Progression</p>
                <p className="font-mono text-xs text-muted-foreground">{currentProgram.name}</p>
              </div>
            </div>
            <span className="font-mono text-2xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 font-mono text-xs text-muted-foreground">
            <span>Jour 1</span>
            <span>Jour {totalDays}</span>
          </div>
        </div>

        {isProgramComplete ? (
          /* Program Complete State */
          <div className="glass rounded-2xl border border-border/20 p-8 text-center animate-fade-in">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold mb-2">Félicitations !</h2>
            <p className="text-muted-foreground mb-6">
              Vous avez terminé le programme {currentProgram.name}. 
              Votre système a été réinitialisé avec succès.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => setCurrentProgramId('ARCHITECT_MODE')}
                className="bg-primary hover:bg-primary/90"
              >
                Passer à Architect Mode
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Recommencer le programme
              </Button>
            </div>
          </div>
        ) : currentSession ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content - Today's Session */}
            <div className="lg:col-span-2 space-y-6">
              {/* Protocol Card */}
              <div className="glass rounded-2xl border border-border/20 p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {ZONE_ICONS[painZone]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-mono text-xs text-primary">{currentSession.subtitle}</p>
                      <span className="font-mono text-xs text-muted-foreground">• {currentSession.duration}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold">
                      {currentSession.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      Objectif : {currentSession.clinicalGoal}
                    </p>
                  </div>
                </div>

                {/* Audio Cue - Intention du jour */}
                <div className="bg-card/50 rounded-xl border border-border/10 p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-primary mb-1">INSTRUCTION AUDIO</p>
                      <p className="text-foreground font-medium italic">
                        "{currentSession.audioCue}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scientific Rationale - Collapsible */}
                <div className="mb-6">
                  <button
                    onClick={() => setShowRationale(!showRationale)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-full"
                  >
                    <FlaskConical className="h-4 w-4" />
                    <span className="font-mono text-xs">FONDEMENT SCIENTIFIQUE</span>
                    {showRationale ? (
                      <ChevronUp className="h-4 w-4 ml-auto" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-auto" />
                    )}
                  </button>
                  {showRationale && (
                    <div className="mt-3 p-4 bg-card/30 rounded-lg border border-border/10 animate-fade-in">
                      <p className="text-sm text-muted-foreground">
                        {currentSession.scientificRationale}
                      </p>
                    </div>
                  )}
                </div>

                {/* Video Placeholder */}
                <div className="aspect-video rounded-xl bg-card border border-border/20 overflow-hidden relative mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary h-16 w-16 rounded-full"
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                    <div className="h-1 flex-1 rounded-full bg-border/30">
                      <div className="h-full w-0 rounded-full bg-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">0:00 / {currentSession.duration}</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-muted-foreground mb-3">ÉTAPES DE LA SESSION</p>
                  <div className="flex flex-wrap gap-2">
                    {currentSession.steps.map((step, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-card/50 border border-border/20 rounded-lg font-mono text-xs"
                      >
                        {index + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                  Commencer la session
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="glass rounded-2xl border border-border/20 p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-display text-lg font-semibold mb-4">Vos stats</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground">Zone ciblée</p>
                      <p className="font-semibold">{ZONE_LABELS[painZone]}</p>
                    </div>
                  </div>

                  {profile?.screen_hours && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-mono text-xs text-muted-foreground">Heures/écran</p>
                        <p className="font-semibold">{profile.screen_hours}h / jour</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Activity className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground">Sessions complétées</p>
                      <p className="font-semibold">{currentDay - 1} / {totalDays}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground">Statut</p>
                      <p className="font-semibold capitalize">{profile?.subscription_status || 'Active'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Card */}
              <div className="glass rounded-2xl border border-border/20 p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-display text-lg font-semibold mb-3">Conseil du jour</h3>
                <p className="text-muted-foreground text-sm">
                  Levez-vous toutes les 45 minutes pour faire quelques pas. 
                  Votre dos vous remerciera. 🚶‍♂️
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* No session found */
          <div className="glass rounded-2xl border border-border/20 p-8 text-center animate-fade-in">
            <p className="text-muted-foreground">
              Aucune session trouvée pour le jour {currentDay}.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
