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
import { NIVO_THEMES, type ThemeId } from '@/lib/themes';

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

  // Get current theme based on program
  const theme = NIVO_THEMES[currentProgramId as ThemeId];

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
      <div className={`min-h-screen ${theme.bg} flex items-center justify-center`}>
        <Loader2 className={`h-8 w-8 animate-spin ${theme.accent}`} />
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

  // Theme-specific accent color for inline styles
  const accentColor = currentProgramId === 'RAPID_PATCH' ? '#22d3ee' 
    : currentProgramId === 'ARCHITECT_MODE' ? '#e2e8f0' 
    : '#ff6b4a';

  return (
    <div className={`min-h-screen ${theme.bg} relative transition-colors duration-500`}>
      {/* Background Effects - Theme Specific */}
      {currentProgramId === 'SYSTEM_REBOOT' && (
        <>
          <div className="aurora absolute inset-0 pointer-events-none" />
          <div className="grid-background absolute inset-0 pointer-events-none opacity-20" />
        </>
      )}
      {currentProgramId === 'RAPID_PATCH' && (
        <div className="absolute inset-0 pointer-events-none opacity-30" 
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.1), transparent)'
          }} 
        />
      )}
      {currentProgramId === 'ARCHITECT_MODE' && (
        <>
          <div className="absolute inset-0 pointer-events-none" 
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,255,255,0.02), transparent)'
            }} 
          />
          {/* Subtle grid for Architect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </>
      )}

      {/* Header */}
      <header className={`sticky top-0 z-50 ${theme.glassBg} border-b ${theme.border} transition-colors duration-500`}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
              currentProgramId === 'RAPID_PATCH' ? 'bg-cyan-500' :
              currentProgramId === 'ARCHITECT_MODE' ? 'bg-white' :
              'bg-[#ff6b4a]'
            } ${theme.glowEffect}`}>
              <span className={`font-sans font-bold text-lg ${
                currentProgramId === 'ARCHITECT_MODE' ? 'text-black' : 'text-[#050510]'
              }`}>N</span>
            </div>
            <span className={`font-sans text-lg font-semibold ${theme.textPrimary}`}>NIVO</span>
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${theme.cardBg} ${theme.textMuted} uppercase tracking-wider hidden sm:block`}>
              {theme.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className={`font-mono text-sm ${theme.textMuted} hidden sm:block`}>
              {profile?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={signOut} className={`${theme.textMuted} hover:${theme.textPrimary}`}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 relative z-10">
        {/* Program Selector - Themed Tabs */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <p className={`font-mono text-xs ${theme.textMuted}`}>PROGRAMME</p>
            <div className={`flex-1 h-px ${theme.border}`}></div>
          </div>
          
          <div className={`${theme.glassBg} rounded-2xl border ${theme.border} p-2 inline-flex gap-2`}>
            {Object.values(PROGRAMS).map((program) => {
              const isActive = currentProgramId === program.id;
              const programTheme = NIVO_THEMES[program.id as ThemeId];
              
              return (
                <button
                  key={program.id}
                  onClick={() => setCurrentProgramId(program.id)}
                  className={`relative px-5 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
                    isActive
                      ? `${programTheme.buttonPrimary} ${programTheme.buttonText} ${programTheme.accentGlow}`
                      : `${theme.textMuted} hover:${theme.textPrimary} hover:${theme.cardBg}`
                  }`}
                >
                  <span className="relative z-10">{program.name.replace('NIVO ', '')}</span>
                  {isActive && (
                    <span className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-[8px] font-bold ${
                      currentProgramId === 'ARCHITECT_MODE' ? 'bg-black/20 text-black' : 'bg-black/20 text-white'
                    }`}>
                      ACTIVE
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          
          <p className={`font-mono text-xs ${theme.textMuted} mt-3`}>{currentProgram.description}</p>
        </div>

        {/* Welcome Section with Badge */}
        <div className="mb-10 animate-fade-in">
          <p className={`font-mono text-sm ${theme.textMuted} mb-2`}>
            &gt; Bonjour{profile?.full_name ? `, ${profile.full_name}` : ''}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className={`font-display text-4xl font-bold ${theme.textPrimary}`}>
              {isProgramComplete ? (
                <span style={{ 
                  background: `linear-gradient(to right, ${accentColor}, ${currentProgramId === 'ARCHITECT_MODE' ? '#94a3b8' : '#fbbf24'})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Programme Terminé ✓</span>
              ) : (
                <>Jour <span style={{ 
                  background: `linear-gradient(to right, ${accentColor}, ${currentProgramId === 'ARCHITECT_MODE' ? '#94a3b8' : '#fbbf24'})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{currentDay}</span> / {totalDays}</>
              )}
            </h1>
            {!isProgramComplete && (
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono ${theme.iconBg} border ${theme.borderAccent} ${theme.accent}`}>
                [ {currentProgramId} :: ACTIVE ]
              </span>
            )}
          </div>
          <p className={`font-mono text-sm ${theme.accent} mt-1`}>{phaseLabel}</p>
        </div>

        {/* Progress Card */}
        <div className={`${theme.glassBg} rounded-2xl border ${theme.cardBorder} p-6 mb-8 animate-fade-in ${theme.glowEffect}`} style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center`}>
                <Calendar className={`h-5 w-5 ${theme.accent}`} />
              </div>
              <div>
                <p className={`font-semibold ${theme.textPrimary}`}>Progression</p>
                <p className={`font-mono text-xs ${theme.textMuted}`}>{currentProgram.name}</p>
              </div>
            </div>
            <span className={`font-mono text-2xl font-bold ${theme.accent}`}>{Math.round(progress)}%</span>
          </div>
          <div className={`h-2 rounded-full ${theme.progressBg} overflow-hidden`}>
            <div 
              className={`h-full rounded-full transition-all duration-500 ${theme.progressFill}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={`flex justify-between mt-2 font-mono text-xs ${theme.textMuted}`}>
            <span>Jour 1</span>
            <span>Jour {totalDays}</span>
          </div>
        </div>

        {isProgramComplete ? (
          /* Program Complete State */
          <div className={`${theme.glassBg} rounded-2xl border ${theme.cardBorder} p-8 text-center animate-fade-in ${theme.glowEffect}`}>
            <CheckCircle2 className={`h-16 w-16 ${theme.accent} mx-auto mb-4`} />
            <h2 className={`font-display text-2xl font-bold mb-2 ${theme.textPrimary}`}>Félicitations !</h2>
            <p className={`${theme.textSecondary} mb-6`}>
              Vous avez terminé le programme {currentProgram.name}. 
              Votre système a été réinitialisé avec succès.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => setCurrentProgramId('ARCHITECT_MODE')}
                className={`${theme.buttonPrimary} ${theme.buttonText}`}
              >
                Passer à Architect Mode
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className={`border ${theme.border} ${theme.textSecondary}`}>
                Recommencer le programme
              </Button>
            </div>
          </div>
        ) : currentSession ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content - Today's Session */}
            <div className="lg:col-span-2 space-y-6">
              {/* Protocol Card */}
              <div className={`${theme.glassBg} rounded-2xl border ${theme.cardBorder} p-6 animate-fade-in ${theme.glowEffect}`} style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${theme.iconBg} flex items-center justify-center text-2xl`}>
                    {ZONE_ICONS[painZone]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className={`font-mono text-xs ${theme.accent}`}>{currentSession.subtitle}</p>
                      <span className={`font-mono text-xs ${theme.textMuted}`}>• {currentSession.duration}</span>
                    </div>
                    <h2 className={`font-display text-2xl font-bold ${theme.textPrimary}`}>
                      {currentSession.title}
                    </h2>
                    <p className={`${theme.textSecondary} text-sm mt-1`}>
                      Objectif : {currentSession.clinicalGoal}
                    </p>
                  </div>
                </div>

                {/* Audio Cue - Intention du jour */}
                <div className={`${theme.cardBg} rounded-xl border ${theme.cardBorder} p-4 mb-6`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Volume2 className={`h-4 w-4 ${theme.accent}`} />
                    </div>
                    <div>
                      <p className={`font-mono text-xs ${theme.accent} mb-1`}>INSTRUCTION AUDIO</p>
                      <p className={`${theme.textPrimary} font-medium italic`}>
                        "{currentSession.audioCue}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scientific Rationale - Collapsible */}
                <div className="mb-6">
                  <button
                    onClick={() => setShowRationale(!showRationale)}
                    className={`flex items-center gap-2 ${theme.textMuted} hover:${theme.textPrimary} transition-colors w-full`}
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
                    <div className={`mt-3 p-4 ${theme.cardBg} rounded-lg border ${theme.cardBorder} animate-fade-in`}>
                      <p className={`text-sm ${theme.textSecondary}`}>
                        {currentSession.scientificRationale}
                      </p>
                    </div>
                  )}
                </div>

                {/* Video Placeholder */}
                <div className={`aspect-video rounded-xl ${theme.cardBg} border ${theme.cardBorder} overflow-hidden relative mb-6`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className={`${theme.buttonPrimary} ${theme.buttonText} ${theme.accentGlow} h-16 w-16 rounded-full`}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                    <div className={`h-1 flex-1 rounded-full ${theme.progressBg}`}>
                      <div className={`h-full w-0 rounded-full ${theme.progressFill}`} />
                    </div>
                    <span className={`font-mono text-xs ${theme.textMuted}`}>0:00 / {currentSession.duration}</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-6">
                  <p className={`font-mono text-xs ${theme.textMuted} mb-3`}>ÉTAPES DE LA SESSION</p>
                  <div className="flex flex-wrap gap-2">
                    {currentSession.steps.map((step, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1.5 ${theme.cardBg} border ${theme.cardBorder} rounded-lg font-mono text-xs ${theme.textSecondary}`}
                      >
                        {index + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className={`w-full ${theme.buttonPrimary} ${theme.buttonText} h-12 ${theme.accentGlow}`}>
                  Commencer la session
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className={`${theme.glassBg} rounded-2xl border ${theme.cardBorder} p-6 animate-fade-in`} style={{ animationDelay: '0.3s' }}>
                <h3 className={`font-display text-lg font-semibold mb-4 ${theme.textPrimary}`}>Vos stats</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center`}>
                      <Target className={`h-5 w-5 ${theme.accent}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-mono text-xs ${theme.textMuted}`}>Zone ciblée</p>
                      <p className={`font-semibold ${theme.textPrimary}`}>{ZONE_LABELS[painZone]}</p>
                    </div>
                  </div>

                  {profile?.screen_hours && (
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center`}>
                        <Clock className={`h-5 w-5 ${theme.accent}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-mono text-xs ${theme.textMuted}`}>Heures/écran</p>
                        <p className={`font-semibold ${theme.textPrimary}`}>{profile.screen_hours}h / jour</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center`}>
                      <Activity className={`h-5 w-5 ${theme.accent}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-mono text-xs ${theme.textMuted}`}>Sessions complétées</p>
                      <p className={`font-semibold ${theme.textPrimary}`}>{currentDay - 1} / {totalDays}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center`}>
                      <Zap className={`h-5 w-5 ${theme.accent}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-mono text-xs ${theme.textMuted}`}>Statut</p>
                      <p className={`font-semibold capitalize ${theme.textPrimary}`}>{profile?.subscription_status || 'Active'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Card */}
              <div className={`${theme.glassBg} rounded-2xl border ${theme.cardBorder} p-6 animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                <h3 className={`font-display text-lg font-semibold mb-3 ${theme.textPrimary}`}>Conseil du jour</h3>
                <p className={`text-sm ${theme.textSecondary}`}>
                  {currentProgramId === 'RAPID_PATCH' && 'Appliquez du froid sur la zone douloureuse après chaque session pour réduire l\'inflammation.'}
                  {currentProgramId === 'SYSTEM_REBOOT' && 'Levez-vous toutes les 45 minutes pour faire quelques pas. Votre dos vous remerciera. 🚶‍♂️'}
                  {currentProgramId === 'ARCHITECT_MODE' && 'Pratiquez le "20-20-20" : toutes les 20 minutes, regardez à 20 mètres pendant 20 secondes.'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* No session found */
          <div className={`${theme.glassBg} rounded-2xl border ${theme.cardBorder} p-8 text-center animate-fade-in`}>
            <p className={theme.textSecondary}>
              Aucune session trouvée pour le jour {currentDay}.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
