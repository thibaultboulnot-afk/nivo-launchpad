// NIVO Theme System - Visual identities per program

export type ThemeId = 'RAPID_PATCH' | 'SYSTEM_REBOOT' | 'ARCHITECT_MODE';

export interface NivoTheme {
  id: ThemeId;
  name: string;
  vibe: string;
  // Background colors
  bg: string;
  bgSecondary: string;
  // Primary accent color
  accent: string;
  accentForeground: string;
  accentGlow: string;
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  // Border
  border: string;
  borderAccent: string;
  // Card styles
  cardBg: string;
  cardBorder: string;
  // Button styles
  buttonPrimary: string;
  buttonPrimaryHover: string;
  buttonText: string;
  // Icon backgrounds
  iconBg: string;
  // Progress bar
  progressBg: string;
  progressFill: string;
  // Special effects
  glowEffect: string;
  glassBg: string;
}

export const NIVO_THEMES: Record<ThemeId, NivoTheme> = {
  // RAPID PATCH - Clinical, Clean, Soothing
  RAPID_PATCH: {
    id: 'RAPID_PATCH',
    name: 'Clinical Mode',
    vibe: 'Médical • Propre • Apaisant',
    // Slate dark background
    bg: 'bg-slate-900',
    bgSecondary: 'bg-slate-950',
    // Cyan/Turquoise accents
    accent: 'text-cyan-400',
    accentForeground: 'text-slate-900',
    accentGlow: 'shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]',
    // Clean white text
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-500',
    // Subtle borders
    border: 'border-slate-700/50',
    borderAccent: 'border-cyan-500/30',
    // Cards
    cardBg: 'bg-slate-800/50',
    cardBorder: 'border-slate-700/50',
    // Buttons
    buttonPrimary: 'bg-cyan-500 hover:bg-cyan-400',
    buttonPrimaryHover: 'hover:bg-cyan-400',
    buttonText: 'text-slate-900',
    // Icons
    iconBg: 'bg-cyan-500/10',
    // Progress
    progressBg: 'bg-slate-700',
    progressFill: 'bg-cyan-500',
    // Effects
    glowEffect: 'shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]',
    glassBg: 'bg-slate-800/30 backdrop-blur-lg',
  },

  // SYSTEM REBOOT - Bio-Hacker, Energy, Warmth
  SYSTEM_REBOOT: {
    id: 'SYSTEM_REBOOT',
    name: 'Bio-Hacker Mode',
    vibe: 'Énergie • Chaleur • Système actif',
    // Deep blue/black background
    bg: 'bg-[#02040A]',
    bgSecondary: 'bg-[#050510]',
    // Orange NIVO accents
    accent: 'text-[#ff6b4a]',
    accentForeground: 'text-[#050510]',
    accentGlow: 'shadow-[0_0_40px_-10px_rgba(255,107,74,0.5)]',
    // Warm text
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-500',
    // Orange-tinted borders
    border: 'border-white/10',
    borderAccent: 'border-[#ff6b4a]/30',
    // Cards with warm tint
    cardBg: 'bg-white/5',
    cardBorder: 'border-white/10',
    // Orange buttons
    buttonPrimary: 'bg-[#ff6b4a] hover:bg-[#ff856b]',
    buttonPrimaryHover: 'hover:bg-[#ff856b]',
    buttonText: 'text-[#050510]',
    // Icons
    iconBg: 'bg-[#ff6b4a]/10',
    // Progress
    progressBg: 'bg-slate-800',
    progressFill: 'bg-[#ff6b4a]',
    // Effects - warm glow
    glowEffect: 'shadow-[0_0_40px_-10px_rgba(255,107,74,0.3)]',
    glassBg: 'bg-white/5 backdrop-blur-xl',
  },

  // ARCHITECT MODE - Stealth/Elite, Luxury, Apple Dark Mode
  ARCHITECT_MODE: {
    id: 'ARCHITECT_MODE',
    name: 'Stealth Mode',
    vibe: 'Minimaliste • Luxe • Anti-Fragile',
    // Pure black background
    bg: 'bg-black',
    bgSecondary: 'bg-[#0a0a0a]',
    // Silver/Platinum accents
    accent: 'text-slate-200',
    accentForeground: 'text-black',
    accentGlow: 'shadow-[0_0_40px_-10px_rgba(226,232,240,0.3)]',
    // Monochrome text
    textPrimary: 'text-white',
    textSecondary: 'text-slate-400',
    textMuted: 'text-slate-600',
    // Metallic borders
    border: 'border-slate-800',
    borderAccent: 'border-slate-500/30',
    // Deep glass cards
    cardBg: 'bg-white/[0.02]',
    cardBorder: 'border-white/[0.08]',
    // Platinum buttons
    buttonPrimary: 'bg-white hover:bg-slate-200',
    buttonPrimaryHover: 'hover:bg-slate-200',
    buttonText: 'text-black',
    // Icons
    iconBg: 'bg-white/5',
    // Progress
    progressBg: 'bg-slate-900',
    progressFill: 'bg-gradient-to-r from-slate-400 to-white',
    // Effects - sophisticated glass
    glowEffect: 'shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)]',
    glassBg: 'bg-white/[0.03] backdrop-blur-2xl',
  },
};

// Helper to get theme-specific CSS class
export function getThemeClass(theme: NivoTheme, property: keyof NivoTheme): string {
  return theme[property] as string;
}
