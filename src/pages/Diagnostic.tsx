import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BiomechanicalBody } from '@/components/BiomechanicalBody';
import { DiagnosticModuleCard } from '@/components/DiagnosticModuleCard';
import { useDiagnostic } from '@/contexts/DiagnosticContext';
import { ArrowRight, ArrowLeft, Loader2, Terminal, Skull, Shield, Target, Zap, Hand, Brain } from 'lucide-react';

const diagnosticModules = [
  {
    id: 'tech-neck',
    title: 'La Nuque (Tech Neck)',
    subtitle: 'Tensions cervicales, maux de tête, regard fixé sur l\'écran.',
    icon: Skull,
  },
  {
    id: 'kyphose',
    title: 'La Carapace (Kyphose)',
    subtitle: 'Épaules enroulées vers l\'avant, sensation d\'oppression thoracique.',
    icon: Shield,
  },
  {
    id: 'core',
    title: 'Le Core (Lombaires)',
    subtitle: 'Douleur en barre dans le bas du dos après 2h assis.',
    icon: Target,
  },
  {
    id: 'hanches',
    title: 'Les Hanches (Flexors)',
    subtitle: 'Sensation de pincement à l\'aine, difficulté à se redresser.',
    icon: Zap,
  },
  {
    id: 'peripheriques',
    title: 'Périphériques (Extrémités)',
    subtitle: 'Fourmillements poignets/mains, tensions avant-bras.',
    icon: Hand,
  },
  {
    id: 'systeme-nerveux',
    title: 'Système Nerveux (Fatigue)',
    subtitle: 'Brouillard mental, baisse de focus, fatigue oculaire.',
    icon: Brain,
  },
];

const analysisSteps = [
  'Calibrage de l\'alignement vertébral...',
  'Analyse des tensions statiques...',
  'Détection des déséquilibres musculaires...',
  'Évaluation de la chaîne postérieure...',
  'Génération de la routine de décompression...',
];

export default function Diagnostic() {
  const navigate = useNavigate();
  const { data, setData } = useDiagnostic();
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState(0);

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
    setCurrentAnalysisStep(0);
  };

  // Animate through analysis steps
  useEffect(() => {
    if (isAnalyzing && currentAnalysisStep < analysisSteps.length) {
      const timer = setTimeout(() => {
        setCurrentAnalysisStep((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (isAnalyzing && currentAnalysisStep >= analysisSteps.length) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
        navigate('/checkout');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing, currentAnalysisStep, navigate]);

  const selectedModule = diagnosticModules.find((m) => m.id === data.painZone);

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden text-white">
      {/* Background Effects */}
      <div className="aurora absolute inset-0 pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,74,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ff6b4a] flex items-center justify-center shadow-[0_0_15px_-3px_#ff6b4a]">
              <span className="font-sans font-bold text-lg text-[#050510]">N</span>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight">NIVO</span>
          </Link>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider hidden sm:block">
              Bio-Scan Progress
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-1.5 rounded-full transition-all duration-500 ${
                    s <= step ? 'bg-[#ff6b4a] shadow-[0_0_10px_rgba(255,107,74,0.5)]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 min-h-screen">
        {/* Step 1: Bio-Mechanical Interface */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-2 block">
                Module 01 — Analyse Biomécanique
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Identifiez votre <span className="text-[#ff6b4a]">Zone de Tension</span>
              </h1>
              <p className="text-slate-400 max-w-md mx-auto">
                Sélectionnez le module qui correspond le mieux à vos symptômes.
              </p>
            </div>

            {/* Split Screen Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Biomechanical Body Visualization */}
              <div className="relative">
                <div className="sticky top-24 p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse" />
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                        Interface Bio-Mécanique
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-600">v2.1.0</span>
                  </div>

                  {/* Body Visualization */}
                  <div className="aspect-[3/4] relative">
                    <BiomechanicalBody
                      selectedZone={data.painZone}
                      hoveredZone={hoveredZone}
                    />
                  </div>

                  {/* Status Bar */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    {data.painZone ? (
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-slate-400">
                          Zone sélectionnée:
                        </span>
                        <span className="font-mono text-xs text-[#ff6b4a]">
                          {selectedModule?.title}
                        </span>
                      </div>
                    ) : (
                      <p className="font-mono text-xs text-slate-500 text-center">
                        En attente de sélection...
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Module Cards Panel */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span className="font-mono text-xs text-slate-400">
                    &gt; Modules de diagnostic disponibles
                  </span>
                </div>

                <div className="space-y-3">
                  {diagnosticModules.map((module) => (
                    <DiagnosticModuleCard
                      key={module.id}
                      id={module.id}
                      title={module.title}
                      subtitle={module.subtitle}
                      icon={module.icon}
                      isSelected={data.painZone === module.id}
                      isHovered={hoveredZone === module.id}
                      onSelect={(id) => setData({ painZone: id })}
                      onHover={setHoveredZone}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Stats Form */}
        {step === 2 && (
          <div className="animate-fade-in max-w-xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-2 block">
                Module 02 — Paramètres Utilisateur
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Calibrage <span className="text-[#ff6b4a]">Système</span>
              </h1>
              <p className="text-slate-400">
                Entrez vos données pour personnaliser le protocole.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden relative">
              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
              
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute top-3 right-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 left-3 text-white/10 font-mono text-[10px]">+</div>
              <div className="absolute bottom-3 right-3 text-white/10 font-mono text-[10px]">+</div>

              <div className="relative z-10">
                <div className="font-mono text-xs text-slate-500 mb-6 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>&gt; user_config --calibrate</span>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="font-mono text-sm text-slate-300">
                      Âge <span className="text-slate-600">(années)</span>
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="28"
                      className="font-mono bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-[#ff6b4a]/50 focus:ring-[#ff6b4a]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight" className="font-mono text-sm text-slate-300">
                      Poids <span className="text-slate-600">(kg)</span>
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="75"
                      className="font-mono bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-[#ff6b4a]/50 focus:ring-[#ff6b4a]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="screenHours" className="font-mono text-sm text-slate-300">
                      Heures d'écran <span className="text-slate-600">(par jour)</span>
                    </Label>
                    <Input
                      id="screenHours"
                      type="number"
                      value={screenHours}
                      onChange={(e) => setScreenHours(e.target.value)}
                      placeholder="10"
                      className="font-mono bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-[#ff6b4a]/50 focus:ring-[#ff6b4a]/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Analysis */}
        {step === 3 && (
          <div className="animate-fade-in text-center max-w-lg mx-auto pt-12">
            <div className="mb-12">
              <span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-2 block">
                Module 03 — Traitement
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Analyse <span className="text-[#ff6b4a]">en cours</span>
              </h1>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden relative">
              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

              <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Loader */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-[#ff6b4a]/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-[#ff6b4a]/40 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                      <div className="w-16 h-16 rounded-full border-2 border-t-[#ff6b4a] border-r-[#ff6b4a] border-b-transparent border-l-transparent flex items-center justify-center animate-spin">
                        <div className="w-3 h-3 rounded-full bg-[#ff6b4a]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,107,74,0.3)]" />
                </div>

                {/* Analysis Steps */}
                <div className="w-full space-y-2 text-left">
                  {analysisSteps.map((stepText, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 font-mono text-sm transition-all duration-500 ${
                        index < currentAnalysisStep
                          ? 'text-[#ff6b4a]'
                          : index === currentAnalysisStep
                          ? 'text-white'
                          : 'text-slate-600'
                      }`}
                    >
                      <span className="w-5 h-5 rounded border border-current flex items-center justify-center text-[10px]">
                        {index < currentAnalysisStep ? '✓' : index === currentAnalysisStep ? '▸' : '○'}
                      </span>
                      <span className={index === currentAnalysisStep ? 'animate-pulse' : ''}>
                        {stepText}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff6b4a] to-[#ff856b] transition-all duration-500"
                    style={{ width: `${(currentAnalysisStep / analysisSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 3 && (
          <div className="max-w-6xl mx-auto mt-10 flex items-center justify-between">
            {step > 1 ? (
              <Button
                variant="ghost"
                onClick={() => setStep(step - 1)}
                className="text-slate-400 hover:text-white hover:bg-white/5"
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
              className="bg-[#ff6b4a] hover:bg-[#ff856b] text-[#050510] font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,107,74,0.3)] hover:shadow-[0_0_30px_rgba(255,107,74,0.5)] transition-all"
            >
              {step === 2 ? 'Lancer l\'analyse' : 'Continuer'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </main>

      {/* Custom animation for scan line */}
      <style>{`
        @keyframes scanLine {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
