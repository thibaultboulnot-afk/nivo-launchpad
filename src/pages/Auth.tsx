import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Auth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-6">
      {/* Aurora Background */}
      <div className="aurora absolute inset-0 pointer-events-none" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-30" />

      <div className="w-full max-w-md relative z-10">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Retour</span>
        </Link>

        {/* Auth Card */}
        <div className="glass rounded-2xl border border-border/20 p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-semibold">NIVO</h1>
              <p className="font-mono text-xs text-muted-foreground">System Patch</p>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold mb-2">
            Bienvenue
          </h2>
          <p className="text-muted-foreground mb-8">
            Connectez-vous pour accéder à votre programme de maintenance.
          </p>

          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(14, 100%, 64%)',
                    brandAccent: 'hsl(14, 100%, 54%)',
                    brandButtonText: 'hsl(0, 0%, 2%)',
                    defaultButtonBackground: 'hsl(215, 16%, 12%)',
                    defaultButtonBackgroundHover: 'hsl(215, 16%, 16%)',
                    defaultButtonBorder: 'hsl(215, 16%, 20%)',
                    defaultButtonText: 'hsl(0, 0%, 98%)',
                    dividerBackground: 'hsl(215, 16%, 16%)',
                    inputBackground: 'hsl(0, 0%, 4%)',
                    inputBorder: 'hsl(215, 16%, 16%)',
                    inputBorderHover: 'hsl(215, 16%, 24%)',
                    inputBorderFocus: 'hsl(14, 100%, 64%)',
                    inputText: 'hsl(0, 0%, 98%)',
                    inputLabelText: 'hsl(215, 16%, 56%)',
                    inputPlaceholder: 'hsl(215, 16%, 40%)',
                    messageText: 'hsl(0, 0%, 98%)',
                    messageTextDanger: 'hsl(0, 84%, 60%)',
                    anchorTextColor: 'hsl(14, 100%, 64%)',
                    anchorTextHoverColor: 'hsl(14, 100%, 54%)',
                  },
                  space: {
                    inputPadding: '14px',
                    buttonPadding: '14px',
                  },
                  borderWidths: {
                    buttonBorderWidth: '1px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '8px',
                    buttonBorderRadius: '8px',
                    inputBorderRadius: '8px',
                  },
                  fonts: {
                    bodyFontFamily: 'Inter, sans-serif',
                    buttonFontFamily: 'Inter, sans-serif',
                    inputFontFamily: 'JetBrains Mono, monospace',
                    labelFontFamily: 'Inter, sans-serif',
                  },
                },
              },
              className: {
                container: 'auth-container',
                button: 'auth-button',
                input: 'auth-input',
              },
            }}
            providers={[]}
            redirectTo={`${window.location.origin}/dashboard`}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email',
                  password_label: 'Mot de passe',
                  email_input_placeholder: 'votre@email.com',
                  password_input_placeholder: '••••••••',
                  button_label: 'Se connecter',
                  loading_button_label: 'Connexion...',
                  link_text: "Vous avez déjà un compte ? Connectez-vous",
                },
                sign_up: {
                  email_label: 'Email',
                  password_label: 'Mot de passe',
                  email_input_placeholder: 'votre@email.com',
                  password_input_placeholder: '••••••••',
                  button_label: "S'inscrire",
                  loading_button_label: 'Inscription...',
                  link_text: "Pas encore de compte ? Inscrivez-vous",
                },
                forgotten_password: {
                  email_label: 'Email',
                  password_label: 'Mot de passe',
                  email_input_placeholder: 'votre@email.com',
                  button_label: 'Envoyer les instructions',
                  loading_button_label: 'Envoi...',
                  link_text: 'Mot de passe oublié ?',
                },
              },
            }}
          />
        </div>

        {/* Footer */}
        <p className="text-center font-mono text-xs text-muted-foreground mt-8">
          &gt; Prêt à debugger votre posture
        </p>
      </div>
    </div>
  );
}
