import React, { useEffect } from 'react';
import { X, ChevronRight, ExternalLink } from 'lucide-react';
import { PortalItem } from '../data/portalData';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortalItem[];
  onSelectItem: (item: PortalItem) => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onSelectItem,
}) => {
  // Sort alphabetically by title
  const sortedItems = [...items].sort((a, b) => {
    const titleA = (a.subtitle || a.title).replace('\n', ' ').trim();
    const titleB = (b.subtitle || b.title).replace('\n', ' ').trim();
    return titleA.localeCompare(titleB, 'pt-BR');
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer content (white right panel matching Screenshot 3) */}
      <aside
        className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] h-full bg-white text-zinc-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-250 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de Navegação Rápida"
      >
        {/* Top Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-['Lato',sans-serif]">
            ACESSO RÁPIDO
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Alphabetical list */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
          {sortedItems.map((item) => {
            const label = (item.subtitle || item.title).replace('\n', ' ');
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="w-full text-left px-4 py-3 rounded-lg text-[13px] font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 active:bg-zinc-100 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span className="tracking-wide uppercase font-['Lato',sans-serif]">
                  {label}
                </span>
                <ChevronRight
                  size={15}
                  className="text-zinc-300 group-hover:text-zinc-700 group-hover:translate-x-0.5 transition-all"
                />
              </button>
            );
          })}
        </div>

        {/* Drawer footer with fast direct link */}
        <div className="p-4 border-t border-zinc-100 bg-zinc-50/70 text-center">
          <p className="text-[11px] text-zinc-400">
            Portal Comercial · Mohawk Brasil
          </p>
        </div>
      </aside>
    </div>
  );
};
