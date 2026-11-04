import React, { useState, useMemo } from 'react';
import { Menu, Home, Search, X } from 'lucide-react';
import { PORTAL_ITEMS, PortalItem } from './data/portalData';
import { CardModal, renderCardIcon } from './components/CardModal';
import { SideDrawer } from './components/SideDrawer';
import { MohawkLogoHeader, FooterBrandsLockup } from './components/PortalIcons';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<PortalItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filter all portal items based on the search query
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      return PORTAL_ITEMS;
    }
    return PORTAL_ITEMS.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle?.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      const matchPath = item.sgiePath?.some((p) => p.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchDesc || matchPath;
    });
  }, [searchQuery]);

  const handleCardClick = (item: PortalItem) => {
    setSelectedItem(item);
  };

  const handleHomeClick = () => {
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden portal-bg text-white font-['Lato',sans-serif]">
      {/* Main Top Header */}
      <header className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-8 pt-7 sm:pt-9 pb-3 flex items-center justify-between">
        {/* Top Left: Mohawk Brasil Logo */}
        <button
          onClick={handleHomeClick}
          className="hover:opacity-95 active:scale-95 transition-transform text-left cursor-pointer focus:outline-none"
          title="Início - Portal Comercial"
        >
          <MohawkLogoHeader />
        </button>

        {/* Top Right: Hamburger menu & Home icon */}
        <div className="flex items-center gap-3 sm:gap-4 text-white">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 sm:p-2.5 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer focus:outline-none"
            aria-label="Menu"
            title="Abrir Menu de Acesso Rápido"
          >
            <Menu size={27} strokeWidth={1.5} />
          </button>
          <button
            onClick={handleHomeClick}
            className="p-2 sm:p-2.5 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer focus:outline-none"
            aria-label="Início"
            title="Ir para a página inicial"
          >
            <Home size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Hero Title and Subtitle */}
      <main className="relative z-10 flex-1 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-12 flex flex-col items-center">
        <div className="text-center mb-5 sm:mb-7">
          <h1 className="text-[clamp(10px,3.2vw,14px)] sm:text-2xl md:text-[27px] font-medium tracking-[0.32em] text-white uppercase font-['Lato',sans-serif] leading-tight whitespace-nowrap sm:whitespace-normal">
            P O R T A L &nbsp; C O M E R C I A L
          </h1>
          <p className="mt-2 text-[13px] sm:text-[14.5px] text-zinc-100 font-light tracking-wide">
            Acessos, Informações e Manuais.
          </p>
        </div>

        {/* Search Bar matching Screenshot 1 */}
        <div className="w-full max-w-[560px] mb-8 sm:mb-10 px-2">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar..."
              className="w-full py-2 sm:py-2.5 pl-11 pr-10 bg-transparent border border-white/30 hover:border-white/50 focus:border-white/70 text-white placeholder-zinc-300 text-sm rounded-full transition-all duration-200 outline-none shadow-sm font-['Lato',sans-serif]"
            />
            <Search
              size={16}
              className="absolute left-4 text-zinc-300 pointer-events-none"
              strokeWidth={1.7}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 text-zinc-300 hover:text-white rounded-full transition-colors cursor-pointer"
                title="Limpar busca"
              >
                <X size={15} />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-center mt-2 text-xs text-zinc-200">
              {filteredItems.length === 1
                ? '1 sistema encontrado'
                : `${filteredItems.length} sistemas encontrados`}
            </div>
          )}
        </div>

        {/* Grid of Cards matching Screenshot 1 */}
        <div className="w-full max-w-[1100px]">
          {filteredItems.length === 0 ? (
            <div className="w-full py-16 text-center bg-white/5 rounded-2xl border border-white/10 p-8">
              <p className="text-zinc-200 text-base font-medium mb-3">
                Nenhum sistema encontrado para &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
              >
                Limpar Pesquisa
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-[18px]">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="group relative bg-white text-zinc-900 rounded-2xl sm:rounded-[18px] p-3.5 sm:p-4 aspect-square flex flex-col justify-between shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.985] transition-all duration-150 cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(item);
                    }
                  }}
                  aria-label={item.subtitle || item.title.replace('\n', ' ')}
                >
                  {/* Top-left Icon */}
                  <div className="flex items-start justify-start pt-0.5 pl-0.5">
                    <div className="transform group-hover:scale-105 transition-transform duration-200">
                      {renderCardIcon(item.iconName, 55)}
                    </div>
                  </div>

                  {/* Bottom-left Title text */}
                  <div className="pb-0.5 pl-0.5 text-left">
                    <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-[#2a2c30] leading-[1.2] tracking-[0.02em] uppercase whitespace-pre-line font-['Lato',sans-serif]">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer Brand Signatures matching Screenshot 1 */}
      <footer className="relative z-10 w-full py-8 mt-2">
        <FooterBrandsLockup />
      </footer>

      {/* Modal Popup matching Screenshot 2 */}
      <CardModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Side Drawer matching Screenshot 3 */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={PORTAL_ITEMS}
        onSelectItem={(item) => setSelectedItem(item)}
      />
    </div>
  );
}
