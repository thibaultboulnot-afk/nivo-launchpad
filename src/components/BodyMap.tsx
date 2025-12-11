import { cn } from '@/lib/utils';

interface BodyMapProps {
  selectedZone: string | null;
  onSelectZone: (zone: string) => void;
}

const zones = [
  { id: 'cou', label: 'Cou', top: '12%', left: '50%', width: '30%', height: '8%' },
  { id: 'epaules', label: 'Épaules', top: '22%', left: '50%', width: '60%', height: '10%' },
  { id: 'dos-haut', label: 'Haut du Dos', top: '34%', left: '50%', width: '45%', height: '12%' },
  { id: 'lombaires', label: 'Lombaires', top: '48%', left: '50%', width: '40%', height: '14%' },
  { id: 'hanches', label: 'Hanches', top: '64%', left: '50%', width: '55%', height: '12%' },
  { id: 'poignets', label: 'Poignets', top: '50%', left: '15%', width: '12%', height: '8%' },
  { id: 'poignets-r', label: 'Poignets', top: '50%', left: '85%', width: '12%', height: '8%' },
];

export function BodyMap({ selectedZone, onSelectZone }: BodyMapProps) {
  const handleZoneClick = (zoneId: string) => {
    // Normalize poignets zones
    const normalizedId = zoneId === 'poignets-r' ? 'poignets' : zoneId;
    onSelectZone(normalizedId);
  };

  const isZoneSelected = (zoneId: string) => {
    if (zoneId === 'poignets-r') return selectedZone === 'poignets';
    return selectedZone === zoneId;
  };

  return (
    <div className="relative w-full max-w-xs mx-auto aspect-[1/2]">
      {/* Body Wireframe SVG */}
      <svg
        viewBox="0 0 200 400"
        className="w-full h-full"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="1"
      >
        {/* Head */}
        <ellipse cx="100" cy="30" rx="25" ry="28" className="fill-card/30" />
        
        {/* Neck */}
        <rect x="90" y="55" width="20" height="20" className="fill-card/30" />
        
        {/* Shoulders */}
        <path d="M60 75 L140 75 L150 90 L50 90 Z" className="fill-card/30" />
        
        {/* Torso */}
        <path d="M60 90 L60 200 L80 220 L120 220 L140 200 L140 90 Z" className="fill-card/30" />
        
        {/* Arms */}
        <path d="M50 90 L30 180 L40 185 L60 100 Z" className="fill-card/30" />
        <path d="M150 90 L170 180 L160 185 L140 100 Z" className="fill-card/30" />
        
        {/* Forearms */}
        <path d="M30 180 L20 250 L30 252 L40 185 Z" className="fill-card/30" />
        <path d="M170 180 L180 250 L170 252 L160 185 Z" className="fill-card/30" />
        
        {/* Hips */}
        <path d="M70 220 L60 260 L140 260 L130 220 Z" className="fill-card/30" />
        
        {/* Legs */}
        <path d="M60 260 L55 380 L75 380 L85 260 Z" className="fill-card/30" />
        <path d="M140 260 L145 380 L125 380 L115 260 Z" className="fill-card/30" />
      </svg>

      {/* Interactive Zones Overlay */}
      {zones.map((zone) => (
        <button
          key={zone.id}
          onClick={() => handleZoneClick(zone.id)}
          className={cn(
            'absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 transition-all duration-300 cursor-pointer',
            'hover:border-destructive/50 hover:bg-destructive/10',
            isZoneSelected(zone.id)
              ? 'border-destructive bg-destructive/30 glow-danger'
              : 'border-border/30 bg-transparent'
          )}
          style={{
            top: zone.top,
            left: zone.left,
            width: zone.width,
            height: zone.height,
          }}
          aria-label={`Sélectionner ${zone.label}`}
        >
          <span
            className={cn(
              'absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs whitespace-nowrap transition-colors',
              isZoneSelected(zone.id) ? 'text-destructive' : 'text-muted-foreground'
            )}
          >
            {zone.id !== 'poignets-r' && zone.label}
          </span>
        </button>
      ))}

      {/* Bug Alert Indicator */}
      {selectedZone && (
        <div className="absolute -top-2 -right-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/20 border border-destructive/50 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-destructive" />
          <span className="font-mono text-xs text-destructive">BUG DÉTECTÉ</span>
        </div>
      )}
    </div>
  );
}