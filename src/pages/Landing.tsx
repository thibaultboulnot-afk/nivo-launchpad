import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Activity, ChevronRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 pointer-events-none opacity-30" />

      {/* Scanline Effect */}
      <div className="scanline absolute inset-0 pointer-events-none opacity-30" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-sans font-bold text-lg text-primary-foreground">N</span>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight">NIVO</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Connexion
              </Button>
            </Link>
            <Link to="/diagnostic">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm">
                Lancer le Diagnostic
                <ChevronRight className="ml-2 h-4 w-4" />
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
              System Patch v2.0 • Pour Digital Builders
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Étudiants, Devs, Freelances :{' '}
            <span className="text-gradient italic">NIVO</span> est le correctif système pour éliminer le mal de dos et retrouver votre <span className="text-primary">focus</span>.
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            21 jours pour corriger les bugs de votre infrastructure biologique. 
            Conçu pour les builders qui passent 8h+ devant un écran.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/diagnostic">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary h-14 px-8 text-lg">
                Lancer le Diagnostic
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <span className="text-muted-foreground font-mono text-sm">
              &gt; 2 min setup • Gratuit
            </span>
          </div>

          {/* Spine Wireframe Visual */}
          <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-[16/9] max-w-3xl mx-auto rounded-2xl glass border border-border/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              
              {/* Spine Wireframe SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 200"
                  className="h-4/5 opacity-30"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                >
                  {/* Vertebrae */}
                  {[...Array(24)].map((_, i) => (
                    <g key={i}>
                      <ellipse
                        cx="50"
                        cy={15 + i * 7.5}
                        rx={12 - Math.abs(i - 12) * 0.3}
                        ry="3"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      />
                      <line
                        x1={38 - Math.abs(i - 12) * 0.3}
                        y1={15 + i * 7.5}
                        x2={30}
                        y2={12 + i * 7.5}
                        strokeWidth="0.3"
                      />
                      <line
                        x1={62 + Math.abs(i - 12) * 0.3}
                        y1={15 + i * 7.5}
                        x2={70}
                        y2={12 + i * 7.5}
                        strokeWidth="0.3"
                      />
                    </g>
                  ))}
                </svg>

                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="font-mono text-sm text-muted-foreground">
                    &gt; scanning_vertebrae.exe
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
            &copy; {new Date().getFullYear()} NIVO • System Patch for Digital Builders
          </p>
        </div>
      </footer>
    </div>
  );
}
