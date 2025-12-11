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
  Zap
} from 'lucide-react';
import { Loader2 } from 'lucide-react';

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
  const progress = (currentDay / 21) * 100;

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
        {/* Welcome Section */}
        <div className="mb-10 animate-fade-in">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            &gt; Bonjour{profile?.full_name ? `, ${profile.full_name}` : ''}
          </p>
          <h1 className="font-display text-4xl font-bold">
            Jour <span className="text-gradient">{currentDay}</span> / 21
          </h1>
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
                <p className="font-mono text-xs text-muted-foreground">Programme 21 jours</p>
              </div>
            </div>
            <span className="font-mono text-2xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 font-mono text-xs text-muted-foreground">
            <span>Jour 1</span>
            <span>Jour 21</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Today's Session */}
          <div className="lg:col-span-2 space-y-6">
            {/* Protocol Card */}
            <div className="glass rounded-2xl border border-border/20 p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  {ZONE_ICONS[painZone]}
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-primary mb-1">PROTOCOLE ACTIF</p>
                  <h2 className="font-display text-2xl font-bold">
                    {ZONE_LABELS[painZone] || 'Général'}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Routine ciblée pour soulager vos douleurs de {ZONE_LABELS[painZone]?.toLowerCase()}.
                  </p>
                </div>
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
                  <span className="font-mono text-xs text-muted-foreground">0:00 / 12:30</span>
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
                    <p className="font-semibold">{currentDay - 1} / 21</p>
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
      </main>
    </div>
  );
}
