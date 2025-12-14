import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface DiagnosticModuleCardProps {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

export function DiagnosticModuleCard({
  id,
  title,
  subtitle,
  icon: Icon,
  isSelected,
  isHovered,
  onSelect,
  onHover,
}: DiagnosticModuleCardProps) {
  return (
    <button
      onClick={() => onSelect(id)}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        'group relative w-full p-4 rounded-2xl text-left transition-all duration-500 overflow-hidden',
        'bg-gradient-to-b from-white/5 to-transparent border',
        isSelected
          ? 'border-[#ff6b4a]/70 shadow-[0_0_30px_-5px_rgba(255,107,74,0.3)]'
          : isHovered
          ? 'border-[#ff6b4a]/40'
          : 'border-white/10 hover:border-white/20'
      )}
    >
      {/* Grid texture background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 text-white/10 font-mono text-[8px]">+</div>
      <div className="absolute top-2 right-2 text-white/10 font-mono text-[8px]">+</div>
      <div className="absolute bottom-2 left-2 text-white/10 font-mono text-[8px]">+</div>
      <div className="absolute bottom-2 right-2 text-white/10 font-mono text-[8px]">+</div>
      
      {/* Glow effect */}
      <div
        className={cn(
          'absolute -top-10 -right-10 w-20 h-20 bg-[#ff6b4a] blur-[40px] rounded-full transition-opacity duration-500',
          isSelected ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
        )}
      />
      
      {/* Scanning animation overlay */}
      {isSelected && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b4a]/10 via-transparent to-transparent animate-pulse" />
          <div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff6b4a] to-transparent"
            style={{
              animation: 'scanLine 2s ease-in-out infinite',
              top: '0%',
            }}
          />
        </div>
      )}
      
      <div className="relative z-10 flex items-start gap-3">
        {/* Icon */}
        <div
          className={cn(
            'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
            isSelected
              ? 'bg-[#ff6b4a]/20 border border-[#ff6b4a]/40'
              : 'bg-white/5 border border-white/10 group-hover:border-white/20'
          )}
        >
          <Icon
            className={cn(
              'w-5 h-5 transition-colors duration-300',
              isSelected ? 'text-[#ff6b4a]' : 'text-slate-400 group-hover:text-white'
            )}
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3
              className={cn(
                'text-sm font-medium transition-colors duration-300',
                isSelected ? 'text-[#ff6b4a]' : 'text-white'
              )}
            >
              {title}
            </h3>
            {isSelected && (
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-[#ff6b4a]/20 border border-[#ff6b4a]/30 text-[#ff6b4a] animate-pulse">
                SCAN
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {subtitle}
          </p>
        </div>
        
        {/* Selection indicator */}
        <div
          className={cn(
            'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300',
            isSelected
              ? 'border-[#ff6b4a] bg-[#ff6b4a]'
              : 'border-white/20 bg-transparent group-hover:border-white/40'
          )}
        >
          {isSelected && (
            <div className="w-2 h-2 rounded-full bg-white" />
          )}
        </div>
      </div>
    </button>
  );
}
