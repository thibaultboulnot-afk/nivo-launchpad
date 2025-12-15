export type ProgramTier = 'RAPID_PATCH' | 'SYSTEM_REBOOT' | 'ARCHITECT_MODE';

export interface ProgramSession {
  day: number;
  title: string;
  subtitle: string;
  duration: string;
  clinicalGoal: string;
  scientificRationale: string;
  audioCue: string;
  steps: string[];
  audioUrl: string;
  imageUrl: string;
}

export interface Program {
  id: ProgramTier;
  name: string;
  description: string;
  totalDays: number;
  sessions: ProgramSession[];
}

// --- CONTENU CLINIQUE PHASE 6 ---

const SYSTEM_REBOOT_SESSIONS: ProgramSession[] = [
  {
    day: 1,
    title: "Initialisation Système",
    subtitle: "Lumbar Decompression",
    duration: "12 min",
    clinicalGoal: "Décomprimer L5-S1",
    scientificRationale: "La position 90/90 réduit la pression intradiscale lombaire au plus bas niveau possible, permettant la réhydratation passive.",
    audioCue: "Allongez-vous dos au sol, mollets sur une chaise. Laissez le bas du dos fondre dans le sol.",
    steps: ["Position 90/90", "Respiration diaphragmatique", "Relâchement psoas"],
    audioUrl: "/audio/reboot/day1.mp3",
    imageUrl: "/images/reboot/day1.png"
  },
  {
    day: 2,
    title: "Core Stability",
    subtitle: "Lumbar Axis",
    duration: "14 min",
    clinicalGoal: "Activation Transverse",
    scientificRationale: "Activation isométrique du transverse de l'abdomen pour stabiliser la colonne lombaire sans compression.",
    audioCue: "Dos plaqué au sol. Descendez un bras derrière la tête sans laisser le dos se décoller. Contrôle lent.",
    steps: ["Dead Bug Static", "Maintien lombaire", "Mouvement bras"],
    audioUrl: "/audio/reboot/day2.mp3",
    imageUrl: "/images/reboot/day2.png"
  },
  {
    day: 3,
    title: "The Power Plant",
    subtitle: "Pelvic Axis",
    duration: "12 min",
    clinicalGoal: "Réveil Fessiers",
    scientificRationale: "Lutte contre l'amnésie fessière (Gluteal Amnesia) causée par la compression statique assise.",
    audioCue: "Poussez sur vos talons pour lever le bassin. Contractez fort les fesses en haut, pas le dos.",
    steps: ["Glute Bridge", "Contraction sommet", "Descente contrôlée"],
    audioUrl: "/audio/reboot/day3.mp3",
    imageUrl: "/images/reboot/day3.png"
  },
  {
    day: 4,
    title: "McKenzie Reset",
    subtitle: "Lumbar Axis",
    duration: "12 min",
    clinicalGoal: "Restauration Lordose",
    scientificRationale: "Restaure la lordose lombaire et repousse le nucleus pulposus vers le centre (centralisation).",
    audioCue: "Sur le ventre, redressez-vous sur les avant-bras comme un Sphinx. Regardez devant, fesses molles.",
    steps: ["Sphinx Pose", "Relâchement fessier", "Extension passive"],
    audioUrl: "/audio/reboot/day4.mp3",
    imageUrl: "/images/reboot/day4.png"
  },
  {
    day: 5,
    title: "Hip Release",
    subtitle: "Pelvic Axis",
    duration: "10 min",
    clinicalGoal: "Mobilité Rotateurs",
    scientificRationale: "Relâchement des rotateurs externes de hanche (Piriforme), souvent contractés pour compenser l'instabilité.",
    audioCue: "Assis, cheville sur genou opposé (figure 4). Penchez le buste droit vers l'avant.",
    steps: ["Figure 4 Assis", "Dos droit", "Flexion hanche"],
    audioUrl: "/audio/reboot/day5.mp3",
    imageUrl: "/images/reboot/day5.png"
  },
  {
    day: 6,
    title: "Deep Stability",
    subtitle: "Lumbar Axis",
    duration: "15 min",
    clinicalGoal: "Renforcement Croisé",
    scientificRationale: "Renforcement des multifides (stabilisateurs profonds) sans charge compressive.",
    audioCue: "Quatre pattes. Tendez bras droit et jambe gauche. Ne renversez pas le verre d'eau imaginaire sur votre dos.",
    steps: ["Bird-Dog", "Alignement horizontal", "Gainage"],
    audioUrl: "/audio/reboot/day6.mp3",
    imageUrl: "/images/reboot/day6.png"
  },
  {
    day: 7,
    title: "Vertical Integration",
    subtitle: "Full Body",
    duration: "20 min",
    clinicalGoal: "Intégration Proprioceptive",
    scientificRationale: "Intégration de l'alignement lombo-pelvien dans la marche dynamique.",
    audioCue: "Marchez. Imaginez un fil tirant le sommet du crâne. Ancrez le bassin. Grandissez-vous.",
    steps: ["Marche active", "Auto-grandissement", "Scan corporel"],
    audioUrl: "/audio/reboot/day7.mp3",
    imageUrl: "/images/reboot/day7.png"
  },
  {
    day: 8,
    title: "Thoracic Opener",
    subtitle: "Thoracic Axis",
    duration: "14 min",
    clinicalGoal: "Mobilité Thoracique",
    scientificRationale: "Restauration de l'extension thoracique pour réduire la compensation lombaire.",
    audioCue: "À genoux, mains sur une chaise. Laissez la poitrine s'enfoncer vers le sol.",
    steps: ["Cat-Cow", "Extension thoracique", "Rotation"],
    audioUrl: "/audio/reboot/day8.mp3",
    imageUrl: "/images/reboot/day8.png"
  },
  {
    day: 9,
    title: "Psoas Release",
    subtitle: "Pelvic Axis",
    duration: "12 min",
    clinicalGoal: "Étirement Psoas",
    scientificRationale: "Le psoas raccourci tire sur les lombaires. Son relâchement réduit la lordose excessive.",
    audioCue: "Fente basse, genou arrière au sol. Poussez le bassin vers l'avant.",
    steps: ["Fente basse", "Bascule bassin", "Étirement profond"],
    audioUrl: "/audio/reboot/day9.mp3",
    imageUrl: "/images/reboot/day9.png"
  },
  {
    day: 10,
    title: "Neural Flossing",
    subtitle: "Neural Axis",
    duration: "10 min",
    clinicalGoal: "Mobilité Neurale",
    scientificRationale: "Le glissement neural réduit les adhérences et améliore la conduction nerveuse.",
    audioCue: "Assis, tendez une jambe. Flex/point du pied en regardant haut/bas.",
    steps: ["Sciatic Floss", "Femoral Floss", "Mobilisation douce"],
    audioUrl: "/audio/reboot/day10.mp3",
    imageUrl: "/images/reboot/day10.png"
  },
  {
    day: 11,
    title: "Core Integration",
    subtitle: "Lumbar Axis",
    duration: "16 min",
    clinicalGoal: "Coordination Globale",
    scientificRationale: "Activation coordonnée transverse-multifides-diaphragme pour stabilité dynamique.",
    audioCue: "Planche sur avant-bras. Maintenez le dos plat comme une table.",
    steps: ["Plank modifié", "Respiration active", "Maintien 30s"],
    audioUrl: "/audio/reboot/day11.mp3",
    imageUrl: "/images/reboot/day11.png"
  },
  {
    day: 12,
    title: "Hip Mobility",
    subtitle: "Pelvic Axis",
    duration: "14 min",
    clinicalGoal: "Amplitude Hanche",
    scientificRationale: "Une hanche mobile réduit le stress compensatoire sur la colonne lombaire.",
    audioCue: "Position 90/90 au sol. Basculez d'un côté à l'autre.",
    steps: ["90/90 Switches", "Rotation interne", "Rotation externe"],
    audioUrl: "/audio/reboot/day12.mp3",
    imageUrl: "/images/reboot/day12.png"
  },
  {
    day: 13,
    title: "Breath Work",
    subtitle: "Diaphragm Axis",
    duration: "12 min",
    clinicalGoal: "Respiration 360°",
    scientificRationale: "La respiration diaphragmatique stabilise le core et réduit la tension musculaire.",
    audioCue: "Allongé, mains sur le ventre. Gonflez le ventre comme un ballon.",
    steps: ["Respiration abdominale", "Expansion costale", "Relaxation"],
    audioUrl: "/audio/reboot/day13.mp3",
    imageUrl: "/images/reboot/day13.png"
  },
  {
    day: 14,
    title: "Active Recovery",
    subtitle: "Full Body",
    duration: "18 min",
    clinicalGoal: "Récupération Active",
    scientificRationale: "La circulation sanguine accrue accélère la guérison des tissus.",
    audioCue: "Mouvements fluides et lents. Écoutez votre corps.",
    steps: ["Mobilité douce", "Étirements légers", "Relaxation"],
    audioUrl: "/audio/reboot/day14.mp3",
    imageUrl: "/images/reboot/day14.png"
  },
  {
    day: 15,
    title: "Strength Phase",
    subtitle: "Lumbar Axis",
    duration: "16 min",
    clinicalGoal: "Force Endurance",
    scientificRationale: "Les muscles stabilisateurs doivent développer l'endurance pour maintenir la posture.",
    audioCue: "Glute bridge avec maintien 10 secondes en haut.",
    steps: ["Glute Bridge Hold", "Bird-Dog Hold", "Side Plank"],
    audioUrl: "/audio/reboot/day15.mp3",
    imageUrl: "/images/reboot/day15.png"
  },
  {
    day: 16,
    title: "Fascial Release",
    subtitle: "Full Body",
    duration: "14 min",
    clinicalGoal: "Mobilité Fasciale",
    scientificRationale: "Les fascias restreignent le mouvement. Leur mobilisation améliore la fluidité.",
    audioCue: "Utilisez une balle de tennis sous les fessiers. Roulez lentement.",
    steps: ["Auto-massage fessiers", "Libération thoracique", "Pieds"],
    audioUrl: "/audio/reboot/day16.mp3",
    imageUrl: "/images/reboot/day16.png"
  },
  {
    day: 17,
    title: "Posture Check",
    subtitle: "Cervical Axis",
    duration: "12 min",
    clinicalGoal: "Alignement Cervical",
    scientificRationale: "La position de la tête influence toute la chaîne posturale.",
    audioCue: "Chin tuck: rentrez le menton comme pour faire un double menton.",
    steps: ["Chin Tuck", "Rétraction scapulaire", "Auto-correction"],
    audioUrl: "/audio/reboot/day17.mp3",
    imageUrl: "/images/reboot/day17.png"
  },
  {
    day: 18,
    title: "Dynamic Flow",
    subtitle: "Full Body",
    duration: "20 min",
    clinicalGoal: "Fluidité Mouvement",
    scientificRationale: "L'enchaînement fluide des mouvements améliore la coordination neuromusculaire.",
    audioCue: "Enchaînez les positions comme une danse lente et contrôlée.",
    steps: ["Sun Salutation modifié", "Flow lombaire", "Transitions"],
    audioUrl: "/audio/reboot/day18.mp3",
    imageUrl: "/images/reboot/day18.png"
  },
  {
    day: 19,
    title: "Resistance Band",
    subtitle: "Scapular Axis",
    duration: "14 min",
    clinicalGoal: "Force Scapulaire",
    scientificRationale: "Les muscles rhomboïdes et trapèzes inférieurs contrent l'enroulement des épaules.",
    audioCue: "Tirez l'élastique vers vous en serrant les omoplates.",
    steps: ["Face Pull", "Band Pull Apart", "Rows"],
    audioUrl: "/audio/reboot/day19.mp3",
    imageUrl: "/images/reboot/day19.png"
  },
  {
    day: 20,
    title: "Integration Day",
    subtitle: "Full Body",
    duration: "22 min",
    clinicalGoal: "Synthèse Globale",
    scientificRationale: "Intégration de tous les apprentissages dans un mouvement fonctionnel.",
    audioCue: "Combinez tous les exercices appris dans un flow personnel.",
    steps: ["Révision complète", "Flow personnel", "Auto-évaluation"],
    audioUrl: "/audio/reboot/day20.mp3",
    imageUrl: "/images/reboot/day20.png"
  },
  {
    day: 21,
    title: "Certification Complete",
    subtitle: "System Reboot",
    duration: "15 min",
    clinicalGoal: "Consolidation Finale",
    scientificRationale: "21 jours établissent les bases d'une nouvelle habitude neuroplastique.",
    audioCue: "Félicitations. Votre système a été réinitialisé. Maintenez la pratique.",
    steps: ["Session finale", "Évaluation progrès", "Plan maintenance"],
    audioUrl: "/audio/reboot/day21.mp3",
    imageUrl: "/images/reboot/day21.png"
  }
];

const RAPID_PATCH_SESSIONS: ProgramSession[] = [
  {
    day: 1,
    title: "Urgence Lombaire",
    subtitle: "Decompression",
    duration: "15 min",
    clinicalGoal: "Réduire la pression discale",
    scientificRationale: "La traction gravitationnelle 90/90 inverse la charge axiale.",
    audioCue: "Jambes sur chaise, respiration abdominale profonde.",
    steps: ["90/90 Position", "Respiration 4-7-8"],
    audioUrl: "/audio/rapid/day1.mp3",
    imageUrl: "/images/rapid/day1.png"
  },
  {
    day: 2,
    title: "Tech Neck Release",
    subtitle: "Cervical Axis",
    duration: "12 min",
    clinicalGoal: "Décompression C0-C1",
    scientificRationale: "La traction axiale réduit la tension des sous-occipitaux liée à la PTA.",
    audioCue: "Allongé, petite serviette roulée sous le crâne. Rentrez le menton.",
    steps: ["Traction Serviette", "Chin Tuck passif"],
    audioUrl: "/audio/rapid/day2.mp3",
    imageUrl: "/images/rapid/day2.png"
  },
  {
    day: 3,
    title: "Inflammation Control",
    subtitle: "Lumbar Axis",
    duration: "10 min",
    clinicalGoal: "Réduction œdème",
    scientificRationale: "La position allongée avec surélévation favorise le drainage lymphatique.",
    audioCue: "Allongé, jambes surélevées contre un mur. Respirez calmement.",
    steps: ["Legs Up Wall", "Respiration calme"],
    audioUrl: "/audio/rapid/day3.mp3",
    imageUrl: "/images/rapid/day3.png"
  },
  {
    day: 4,
    title: "Gentle Mobility",
    subtitle: "Pelvic Axis",
    duration: "12 min",
    clinicalGoal: "Mobilité sans douleur",
    scientificRationale: "Le mouvement doux maintient la lubrification articulaire sans aggraver.",
    audioCue: "Sur le dos, genoux pliés. Balancez doucement les genoux gauche-droite.",
    steps: ["Knee Drops", "Rotation douce"],
    audioUrl: "/audio/rapid/day4.mp3",
    imageUrl: "/images/rapid/day4.png"
  },
  {
    day: 5,
    title: "McKenzie Intro",
    subtitle: "Lumbar Axis",
    duration: "10 min",
    clinicalGoal: "Centralisation douleur",
    scientificRationale: "L'extension répétée centralise la douleur référée.",
    audioCue: "À plat ventre, redressez-vous sur les coudes. Extension douce.",
    steps: ["Prone Press Up", "Extension progressive"],
    audioUrl: "/audio/rapid/day5.mp3",
    imageUrl: "/images/rapid/day5.png"
  },
  {
    day: 6,
    title: "Core Activation",
    subtitle: "Lumbar Axis",
    duration: "12 min",
    clinicalGoal: "Réveil musculaire",
    scientificRationale: "Activation isométrique légère sans stress discal.",
    audioCue: "Allongé, contractez légèrement le ventre comme pour protéger un œuf.",
    steps: ["TA Activation", "Bracing léger"],
    audioUrl: "/audio/rapid/day6.mp3",
    imageUrl: "/images/rapid/day6.png"
  },
  {
    day: 7,
    title: "Recovery Check",
    subtitle: "Full Body",
    duration: "15 min",
    clinicalGoal: "Évaluation progrès",
    scientificRationale: "Le suivi des progrès motive et ajuste le protocole.",
    audioCue: "Testez vos mouvements du jour 1. Notez les améliorations.",
    steps: ["Tests de mobilité", "Auto-évaluation"],
    audioUrl: "/audio/rapid/day7.mp3",
    imageUrl: "/images/rapid/day7.png"
  },
  {
    day: 8,
    title: "Progressive Load",
    subtitle: "Lumbar Axis",
    duration: "14 min",
    clinicalGoal: "Charge progressive",
    scientificRationale: "L'augmentation graduelle de charge stimule l'adaptation tissulaire.",
    audioCue: "Glute bridge léger. Montez le bassin sans forcer.",
    steps: ["Glute Bridge modifié", "Progression douce"],
    audioUrl: "/audio/rapid/day8.mp3",
    imageUrl: "/images/rapid/day8.png"
  },
  {
    day: 9,
    title: "Hip Integration",
    subtitle: "Pelvic Axis",
    duration: "12 min",
    clinicalGoal: "Mobilité hanche",
    scientificRationale: "La mobilité de hanche réduit le stress lombaire.",
    audioCue: "Figure 4 stretch doux. Respectez vos limites.",
    steps: ["Figure 4", "Rotation externe"],
    audioUrl: "/audio/rapid/day9.mp3",
    imageUrl: "/images/rapid/day9.png"
  },
  {
    day: 10,
    title: "Standing Practice",
    subtitle: "Full Body",
    duration: "10 min",
    clinicalGoal: "Verticalisation",
    scientificRationale: "La reprise de la position debout sans douleur est un marqueur clé.",
    audioCue: "Debout, pieds écartés. Balancez le poids gauche-droite.",
    steps: ["Weight Shifts", "Balance training"],
    audioUrl: "/audio/rapid/day10.mp3",
    imageUrl: "/images/rapid/day10.png"
  },
  {
    day: 11,
    title: "Stabilization",
    subtitle: "Lumbar Axis",
    duration: "14 min",
    clinicalGoal: "Stabilité dynamique",
    scientificRationale: "La stabilité dynamique prépare le retour aux activités.",
    audioCue: "Bird-Dog très lent et contrôlé.",
    steps: ["Bird-Dog modifié", "Contrôle lent"],
    audioUrl: "/audio/rapid/day11.mp3",
    imageUrl: "/images/rapid/day11.png"
  },
  {
    day: 12,
    title: "Endurance Build",
    subtitle: "Core Axis",
    duration: "15 min",
    clinicalGoal: "Endurance posturale",
    scientificRationale: "L'endurance musculaire maintient la correction posturale.",
    audioCue: "Maintenez chaque position 20 secondes.",
    steps: ["Holds progressifs", "Temps sous tension"],
    audioUrl: "/audio/rapid/day12.mp3",
    imageUrl: "/images/rapid/day12.png"
  },
  {
    day: 13,
    title: "Movement Flow",
    subtitle: "Full Body",
    duration: "16 min",
    clinicalGoal: "Fluidité retrouvée",
    scientificRationale: "Le mouvement fluide indique une récupération fonctionnelle.",
    audioCue: "Enchaînez les mouvements appris sans pause.",
    steps: ["Flow doux", "Transitions fluides"],
    audioUrl: "/audio/rapid/day13.mp3",
    imageUrl: "/images/rapid/day13.png"
  },
  {
    day: 14,
    title: "Graduation Day",
    subtitle: "Complete",
    duration: "12 min",
    clinicalGoal: "Validation finale",
    scientificRationale: "14 jours suffisent pour résoudre la majorité des douleurs aiguës.",
    audioCue: "Session finale. Vous êtes prêt pour System Reboot ou le quotidien.",
    steps: ["Bilan complet", "Plan de maintien"],
    audioUrl: "/audio/rapid/day14.mp3",
    imageUrl: "/images/rapid/day14.png"
  }
];

const ARCHITECT_HARDENING_SESSIONS: ProgramSession[] = [
  {
    day: 22,
    title: "Scapular Armor",
    subtitle: "Thoracic Axis",
    duration: "18 min",
    clinicalGoal: "Stabilité Omoplate",
    scientificRationale: "Renforcement trapèzes inférieurs pour contrer l'enroulement.",
    audioCue: "À plat ventre. Levez les bras en Y, T, W. Serrez les omoplates.",
    steps: ["Y-T-W Raises", "Focus rhomboïdes"],
    audioUrl: "/audio/architect/day22.mp3",
    imageUrl: "/images/architect/day22.png"
  },
  {
    day: 23,
    title: "Neuro-Balance",
    subtitle: "Vestibular Axis",
    duration: "15 min",
    clinicalGoal: "Stabilité Réflexe",
    scientificRationale: "Couple le système vestibulaire et proprioceptif.",
    audioCue: "Debout sur une jambe. Tournez la tête gauche-droite sans tomber.",
    steps: ["Single Leg Balance", "Head Turns"],
    audioUrl: "/audio/architect/day23.mp3",
    imageUrl: "/images/architect/day23.png"
  },
  {
    day: 24,
    title: "Power Endurance",
    subtitle: "Full Body",
    duration: "20 min",
    clinicalGoal: "Endurance Musculaire",
    scientificRationale: "La capacité à maintenir la force sous fatigue protège la colonne.",
    audioCue: "Circuit de 5 exercices. 30 secondes chaque. 3 tours.",
    steps: ["Circuit Training", "Tempo contrôlé"],
    audioUrl: "/audio/architect/day24.mp3",
    imageUrl: "/images/architect/day24.png"
  },
  {
    day: 25,
    title: "Loaded Mobility",
    subtitle: "Hip Axis",
    duration: "16 min",
    clinicalGoal: "Mobilité sous charge",
    scientificRationale: "La mobilité active sous charge améliore le contrôle articulaire.",
    audioCue: "Squat gobelet profond. Maintenez 30 secondes en bas.",
    steps: ["Goblet Squat Hold", "Hip CARs"],
    audioUrl: "/audio/architect/day25.mp3",
    imageUrl: "/images/architect/day25.png"
  },
  {
    day: 26,
    title: "Anti-Extension",
    subtitle: "Core Axis",
    duration: "14 min",
    clinicalGoal: "Contrôle Extension",
    scientificRationale: "Le contrôle anti-extension protège contre l'hyperextension lombaire.",
    audioCue: "Dead Bug avec extension complète. Le dos ne bouge pas.",
    steps: ["Dead Bug avancé", "Hollow Body"],
    audioUrl: "/audio/architect/day26.mp3",
    imageUrl: "/images/architect/day26.png"
  },
  {
    day: 27,
    title: "Rotation Power",
    subtitle: "Thoracic Axis",
    duration: "18 min",
    clinicalGoal: "Rotation thoracique",
    scientificRationale: "La rotation thoracique épargne les lombaires dans les mouvements de torsion.",
    audioCue: "Assis, tournez le buste sans bouger les hanches.",
    steps: ["Seated Rotation", "Pallof Press"],
    audioUrl: "/audio/architect/day27.mp3",
    imageUrl: "/images/architect/day27.png"
  },
  {
    day: 28,
    title: "Athletic Prep",
    subtitle: "Full Body",
    duration: "22 min",
    clinicalGoal: "Préparation Sport",
    scientificRationale: "Transition vers les activités sportives avec un core solide.",
    audioCue: "Mouvements plus dynamiques. Gardez le contrôle.",
    steps: ["Lunges dynamiques", "Step-ups"],
    audioUrl: "/audio/architect/day28.mp3",
    imageUrl: "/images/architect/day28.png"
  },
  {
    day: 29,
    title: "Peak Performance",
    subtitle: "Full Body",
    duration: "25 min",
    clinicalGoal: "Performance maximale",
    scientificRationale: "Test de capacité maximale avec maintien de la forme.",
    audioCue: "Poussez vos limites en gardant une technique parfaite.",
    steps: ["Challenge complet", "Auto-régulation"],
    audioUrl: "/audio/architect/day29.mp3",
    imageUrl: "/images/architect/day29.png"
  },
  {
    day: 30,
    title: "Architect Certified",
    subtitle: "Complete",
    duration: "15 min",
    clinicalGoal: "Certification Finale",
    scientificRationale: "30 jours transforment les habitudes en réflexes automatiques.",
    audioCue: "Vous êtes maintenant l'architecte de votre propre corps.",
    steps: ["Évaluation finale", "Plan autonome"],
    audioUrl: "/audio/architect/day30.mp3",
    imageUrl: "/images/architect/day30.png"
  }
];

export const PROGRAMS: Record<ProgramTier, Program> = {
  RAPID_PATCH: {
    id: 'RAPID_PATCH',
    name: "NIVO RAPID PATCH",
    description: "14 Jours • Urgence & Douleur Aiguë",
    totalDays: 14,
    sessions: RAPID_PATCH_SESSIONS
  },
  SYSTEM_REBOOT: {
    id: 'SYSTEM_REBOOT',
    name: "NIVO SYSTEM REBOOT",
    description: "21 Jours • Le Protocole Standard",
    totalDays: 21,
    sessions: SYSTEM_REBOOT_SESSIONS
  },
  ARCHITECT_MODE: {
    id: 'ARCHITECT_MODE',
    name: "NIVO ARCHITECT MODE",
    description: "30 Jours • Performance & Anti-Fragilité",
    totalDays: 30,
    sessions: [...SYSTEM_REBOOT_SESSIONS, ...ARCHITECT_HARDENING_SESSIONS]
  }
};

export const getPhaseLabel = (day: number, programId: ProgramTier): string => {
  if (programId === 'RAPID_PATCH') {
    if (day <= 7) return "Phase 1: Urgence";
    return "Phase 2: Récupération";
  }
  if (programId === 'SYSTEM_REBOOT' || programId === 'ARCHITECT_MODE') {
    if (day <= 7) return "Phase 1: Reset Système";
    if (day <= 14) return "Phase 2: Reconstruction";
    if (day <= 21) return "Phase 3: Intégration";
    if (day <= 30) return "Phase 4: Hardening";
  }
  return "Phase Active";
};

export const getCurrentSession = (day: number, programId: ProgramTier): ProgramSession | null => {
  const program = PROGRAMS[programId];
  if (!program) return null;
  return program.sessions.find(s => s.day === day) || null;
};
