import { cn } from '@/lib/utils';

interface BiomechanicalBodyProps {
  selectedZone: string | null;
  hoveredZone: string | null;
}

const anchorPoints = [
  { id: 'tech-neck', cx: 100, cy: 55, label: 'Cervicales' },
  { id: 'kyphose', cx: 100, cy: 100, label: 'Thorax' },
  { id: 'core', cx: 100, cy: 165, label: 'Lombaires' },
  { id: 'hanches', cx: 100, cy: 240, label: 'Hanches' },
  { id: 'peripheriques', cx: 25, cy: 215, label: 'Poignets' },
  { id: 'systeme-nerveux', cx: 100, cy: 30, label: 'Cerveau' },
];

export function BiomechanicalBody({ selectedZone, hoveredZone }: BiomechanicalBodyProps) {
  const isHighlighted = (id: string) => selectedZone === id || hoveredZone === id;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Scanning grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,74,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
      
      {/* Pulsing background effect when zone is selected */}
      {selectedZone && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-[#ff6b4a]/5 animate-ping" style={{ animationDuration: '3s' }} />
        </div>
      )}

      <svg
        viewBox="0 0 200 400"
        className="w-full max-w-[200px] h-auto"
        fill="none"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff6b4a" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Body wireframe */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="url(#bodyGradient)">
          {/* Head */}
          <ellipse cx="100" cy="30" rx="22" ry="25" />
          
          {/* Neck */}
          <rect x="92" y="52" width="16" height="18" rx="2" />
          
          {/* Shoulders */}
          <path d="M60 70 L140 70 L148 88 L52 88 Z" />
          
          {/* Torso */}
          <path d="M60 88 L60 195 L78 215 L122 215 L140 195 L140 88 Z" />
          
          {/* Arms */}
          <path d="M52 88 L32 175 L42 178 L60 95 Z" />
          <path d="M148 88 L168 175 L158 178 L140 95 Z" />
          
          {/* Forearms */}
          <path d="M32 175 L22 240 L32 242 L42 178 Z" />
          <path d="M168 175 L178 240 L168 242 L158 178 Z" />
          
          {/* Hands */}
          <ellipse cx="25" cy="250" rx="8" ry="12" />
          <ellipse cx="175" cy="250" rx="8" ry="12" />
          
          {/* Hips */}
          <path d="M72 215 L62 255 L138 255 L128 215 Z" />
          
          {/* Legs */}
          <path d="M62 255 L58 375 L78 375 L88 255 Z" />
          <path d="M138 255 L142 375 L122 375 L112 255 Z" />
        </g>

        {/* Spine line */}
        <path
          d="M100 55 L100 215"
          stroke="rgba(255,107,74,0.3)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className={cn(selectedZone && 'animate-pulse')}
        />

        {/* Anchor Points */}
        {anchorPoints.map((point) => {
          const highlighted = isHighlighted(point.id);
          return (
            <g key={point.id}>
              {/* Outer glow ring */}
              {highlighted && (
                <>
                  <circle
                    cx={point.cx}
                    cy={point.cy}
                    r="18"
                    fill="none"
                    stroke="#ff6b4a"
                    strokeWidth="1"
                    opacity="0.3"
                    className="animate-ping"
                    style={{ animationDuration: '2s' }}
                  />
                  <circle
                    cx={point.cx}
                    cy={point.cy}
                    r="12"
                    fill="#ff6b4a"
                    opacity="0.15"
                    filter="url(#glow)"
                  />
                </>
              )}
              
              {/* Main point */}
              <circle
                cx={point.cx}
                cy={point.cy}
                r="6"
                fill={highlighted ? '#ff6b4a' : 'rgba(255,255,255,0.1)'}
                stroke={highlighted ? '#ff6b4a' : 'rgba(255,255,255,0.3)'}
                strokeWidth="1.5"
                className={cn(
                  'transition-all duration-500',
                  highlighted && 'filter drop-shadow-[0_0_8px_rgba(255,107,74,0.8)]'
                )}
              />
              
              {/* Inner dot */}
              <circle
                cx={point.cx}
                cy={point.cy}
                r="2"
                fill={highlighted ? 'white' : 'rgba(255,255,255,0.5)'}
              />
              
              {/* Connection lines when highlighted */}
              {highlighted && (
                <line
                  x1={point.cx + 8}
                  y1={point.cy}
                  x2={point.cx + 25}
                  y2={point.cy}
                  stroke="#ff6b4a"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  opacity="0.5"
                />
              )}
            </g>
          );
        })}

        {/* Data streams effect */}
        {selectedZone && (
          <g opacity="0.3">
            <path
              d="M10 100 Q50 120 90 100"
              stroke="#ff6b4a"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <path
              d="M110 100 Q150 80 190 100"
              stroke="#ff6b4a"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
          </g>
        )}
      </svg>

      {/* Status indicator */}
      {selectedZone && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b4a]/10 border border-[#ff6b4a]/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b4a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b4a]"></span>
          </span>
          <span className="font-mono text-[10px] text-[#ff6b4a] uppercase tracking-wider">
            Zone Active
          </span>
        </div>
      )}
    </div>
  );
}
