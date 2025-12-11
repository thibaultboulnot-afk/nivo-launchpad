import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Activity, ChevronRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 pointer-events-none opacity-50" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-display text-xl font-semibold">NIVO</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Connexion
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm">
                Commencer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              System Patch v1.0 • Pour développeurs
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Debuggez votre{' '}
            <span className="text-gradient italic">posture</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            21 jours pour corriger les bugs de votre corps. 
            La routine de maintenance physique conçue pour les builders qui passent 8h+ devant un écran.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary h-14 px-8 text-lg">
                Lancer le diagnostic
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <span className="text-muted-foreground font-mono text-sm">
              &gt; 5 min setup • Gratuit
            </span>
          </div>

          {/* Visual Element */}
          <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-video max-w-3xl mx-auto rounded-2xl glass border border-border/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full glass mx-auto mb-4 flex items-center justify-center glow-primary animate-float">
                    <Activity className="h-10 w-10 text-primary" />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    Protocol: Maintenance_Physique.exe
                  </p>
                </div>
              </div>
              
              {/* Decorative Grid */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 rounded-full bg-border/30" />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl glass border border-border/20 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl glass border border-border/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: 'Diagnostic précis',
                desc: 'Identifiez votre zone de douleur principale en 2 minutes.',
              },
              {
                icon: Zap,
                title: 'Routines ciblées',
                desc: 'Exercices personnalisés pour votre profil de développeur.',
              },
              {
                icon: Shield,
                title: 'Suivi 21 jours',
                desc: 'Progression quotidienne pour ancrer les nouvelles habitudes.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl glass border border-border/10 glass-hover animate-fade-in"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border/10">
        <div className="container mx-auto text-center">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NIVO • System Patch for Developers
          </p>
        </div>
      </footer>
    </div>
  );
}
