
import React, { useEffect } from 'react';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { PortalItem } from '../data/portalData';

interface CardModalProps {
  item: PortalItem | null;
  onClose: () => void;
}

const ICON_PATHS: Record<string, string> = {
  treinamentos: '/assets/icons/Treinamentos.png',
  projuris: '/assets/icons/Projuris.png',
  'revisao-cadastro': '/assets/icons/RevisãoCadastro.png',
  'cadastro-obras': '/assets/icons/CadastroObras.png',
  'orcamento-vendas': '/assets/icons/OrçamentoVendas.png',
  'acompanhamento-metas': '/assets/icons/AcompanhamentoMetas.png',
  'power-bi': '/assets/icons/PowerBI.png',
  'politica-eliane': '/assets/icons/PoliticaEliane.png',
  'politica-elizabeth': '/assets/icons/PoliticaElizabeth.png',
  'formulario-contrato': '/assets/icons/FormularioContrato.png',
  cosmos: '/assets/icons/Cosmos.png',
  'consulta-carteira': '/assets/icons/ConsultaCarteira.png',
  'consulta-cnpj': '/assets/icons/ConsultaCNPJ.png',
  'consulta-ie': '/assets/icons/ConsultaIE.png',
  'consulta-simples': '/assets/icons/ConsultaSIMPLES.png',
  localizacao: '/assets/icons/Localização.png',
  'atendimento-comercial': '/assets/icons/AtendimentoComercial.png',
  'cadastro-ferias': '/assets/icons/CadastroFérias.png',
  'cadastro-plantao': '/assets/icons/CadastroPlantão.png',
  'consulta-estoque': '/assets/icons/ConsultaEstoque.png',
  'sgie-web': '/assets/icons/SGIEWeb.png',
  'portal-mkt': '/assets/icons/PortalMKT.png',
  'politica-dt': '/assets/icons/PoliticaDT.png',
  cisco: '/assets/icons/Cisco.png',
  'consulta-micro-meso-cidade':
    '/assets/icons/ConsultaMicroMesoCidade.png',
  'oportunidades-estoque':
    '/assets/icons/OportunidadesEstoque.png',
};

export const renderCardIcon = (
  iconName: string,
  size = 44,
  className = ''
) => {
  const src = ICON_PATHS[iconName];

  if (!src) {
    console.warn(`Ícone não cadastrado: ${iconName}`);
    return null;
  }

  const iconSize = ['politica-eliane', 'politica-elizabeth', 'politica-dt']
    .includes(iconName)
    ? size * 0.9
    : size;

  return (
    <img
      src={src}
      alt=""
      width={iconSize}
      height={iconSize}
      className={`object-contain ${className}`}
      decoding="async"
    />
  );
};

export const CardModal: React.FC<CardModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const displayTitle = item.subtitle || item.title.replace('\n', ' ');

  const handleAccess = () => {
    window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[390px] sm:max-w-[420px] bg-white text-zinc-800 rounded-3xl p-7 sm:p-9 shadow-2xl transition-all transform scale-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-2.5 flex items-center justify-center min-h-[56px]">
            {renderCardIcon(item.iconName, 54)}
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 uppercase font-['Lato',sans-serif]">
            {displayTitle}
          </h2>
        </div>

        <div className="mt-6 mb-7">
          <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase border-b border-zinc-200 pb-2 mb-4">
            {item.sgieSectionTitle || 'INFORMAÇÕES DE ACESSO'}
          </div>

          {item.sgiePath && item.sgiePath.length > 0 ? (
            <div className="space-y-2 text-sm text-zinc-700 font-medium pl-1">
              {item.sgiePath.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center"
                  style={{ paddingLeft: `${Math.max(0, idx - 1) * 14}px` }}
                >
                  <span className="text-zinc-800 leading-snug">{step}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-600 leading-relaxed">
              {item.description || 'Clique no botão abaixo para ser direcionado ao sistema corporativo correspondente.'}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            onClick={handleAccess}
            className="w-full py-3.5 px-6 bg-[#e11531] hover:bg-[#c90f28] active:bg-[#b00d23] text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-150 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{item.actionText || 'ACESSE'}</span>
            <ExternalLink size={16} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full py-2 text-xs font-medium text-zinc-500 hover:text-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span className="text-emerald-600">Link copiado com sucesso!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copiar link de acesso</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
