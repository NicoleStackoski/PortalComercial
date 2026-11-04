import React from 'react';

// Stroke and color definitions matching the Mohawk design guidelines
const STROKE_WIDTH = 1.7;
const COLOR = '#23252a';

export const TreinamentosIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Screen / Board */}
    <rect x="18" y="8" width="24" height="18" rx="2" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Graph inside board */}
    <path d="M22 21L27 16L31 19L38 12" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 12H38V16" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    {/* Presenter Person */}
    <circle cx="10" cy="14" r="4" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M6 32V25C6 22.7909 7.79086 21 10 21C12.2091 21 14 22.7909 14 25V32" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Arm pointing to board */}
    <path d="M14 23L22 17" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Stand */}
    <path d="M30 26V32M24 32H36" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const ProjurisIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Projuris circular dynamic curve */}
    <path d="M26 12C18.268 12 12 18.268 12 26C12 33.732 18.268 40 26 40C33.732 40 40 33.732 40 26C40 20.5 36.8 15.8 32.2 13.6" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    <path d="M26 18C21.5817 18 18 21.5817 18 26C18 30.4183 21.5817 34 26 34C30.4183 34 34 30.4183 34 26" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    <path d="M12 20H8" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const RevisaoCadastroIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Speech Bubble */}
    <path d="M24 8C13.5066 8 5 15.6112 5 25C5 29.5678 7.03925 33.7088 10.4287 36.7578L8.5 42L14.7174 40.2236C17.4727 41.3653 20.6133 42 24 42C34.4934 42 43 34.3888 43 25C43 15.6112 34.4934 8 24 8Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    {/* Phone Handset */}
    <path d="M18 19C18 24.5 22.5 29 28 29L30 27C30.4 26.6 31 26.5 31.5 26.8L34 28C34.6 28.3 35 29 34.8 29.6L34 31.5C33.6 32.4 32.7 33 31.7 33C23.6 33 17 26.4 17 18.3C17 17.3 17.6 16.4 18.5 16L20.4 15.2C21 15 21.7 15.4 22 16L23.2 18.5C23.5 19 23.4 19.6 23 20L21 21" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CadastroObrasIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Construction Hardhat */}
    <path d="M16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16V17H16V16Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M12 17H36C37.1046 17 38 17.8954 38 19V20H10V19C10 17.8954 10.8954 17 12 17Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M24 8V17" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Face / Head */}
    <path d="M17 20V25C17 28.866 20.134 32 24 32C27.866 32 31 28.866 31 25V20" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Shoulders & Uniform */}
    <path d="M10 40C10 35.5817 13.5817 32 18 32H30C34.4183 32 38 35.5817 38 40" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    <path d="M21 32L24 36L27 32" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const OrcamentoVendasIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Document page with folded corner */}
    <path d="M14 6H28L36 14V40C36 41.1046 35.1046 42 34 42H14C12.8954 42 12 41.1046 12 40V8C12 6.89543 12.8954 6 14 6Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M28 6V14H36" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    {/* Currency $ Symbol */}
    <path d="M24 19V33M27.5 22.5C27.5 20.8 26 19.5 24 19.5C21.8 19.5 20.5 20.8 20.5 22.5C20.5 26 27.5 24.5 27.5 28C27.5 29.8 26 31.5 24 31.5C21.8 31.5 20.5 29.8 20.5 28" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const AcompanhamentoMetasIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Magnifying Glass Outer */}
    <circle cx="21" cy="21" r="13" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Handle */}
    <path d="M30.5 30.5L40 40" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Graph line trending upward */}
    <path d="M14 26L18 22L22 24L28 16" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    {/* Arrow tip */}
    <path d="M25 16H28V19" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    {/* Nodes */}
    <circle cx="14" cy="26" r="1.5" fill={COLOR} />
    <circle cx="18" cy="22" r="1.5" fill={COLOR} />
    <circle cx="22" cy="24" r="1.5" fill={COLOR} />
  </svg>
);

export const PowerBIIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bar 1 - lowest */}
    <rect x="11" y="26" width="6" height="15" rx="1.5" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Bar 2 - medium */}
    <rect x="21" y="18" width="6" height="23" rx="1.5" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Bar 3 - highest */}
    <rect x="31" y="10" width="6" height="31" rx="1.5" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
  </svg>
);

export const PoliticaElianeIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size * 2.8} height={size * 0.9} viewBox="0 0 140 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <text x="4" y="32" fill="#1b1c1e" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="33" letterSpacing="-1.5px">
      eliane
    </text>
  </svg>
);

export const PoliticaElizabethIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size * 3.2} height={size * 0.9} viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <text x="4" y="32" fill="#1b1c1e" fontFamily="'Montserrat', 'Georgia', serif" fontWeight="600" fontSize="30" letterSpacing="-0.5px">
      Elizabeth
    </text>
  </svg>
);

export const FormularioContratoIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Document */}
    <path d="M12 6H28L36 14V38C36 39.1 35.1 40 34 40H12C10.9 40 10 39.1 10 38V8C10 6.9 10.9 6 12 6Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M28 6V14H36" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    {/* Lines on page */}
    <path d="M16 20H28M16 26H24M16 32H20" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Pencil */}
    <path d="M28 34L37 25L41 29L32 38L27 39L28 34Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
  </svg>
);

export const CosmosIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Globe */}
    <circle cx="24" cy="24" r="13" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M11 24H37" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M24 11C28 15 30 19.5 30 24C30 28.5 28 33 24 37C20 33 18 28.5 18 24C18 19.5 20 15 24 11Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Orbiting ring */}
    <path d="M8 20C12 13 32 10 39 16C44 20 42 28 34 32C26 36 10 35 7 28" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeDasharray="3 2" />
    <path d="M38 13L41 17L36 18" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ConsultaCarteiraIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Clipboard base */}
    <rect x="12" y="10" width="24" height="32" rx="3" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Clip at top */}
    <path d="M19 10V7C19 5.89543 19.8954 5 21 5H27C28.1046 5 29 5.89543 29 7V10" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Checkmarks and list items */}
    <path d="M17 18L19 20L23 16M26 19H31" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 26L19 28L23 24M26 27H31" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 34L19 36L23 32M26 35H31" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    {/* Pencil */}
    <path d="M37 28L42 23L45 26L40 31L36 32L37 28Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
  </svg>
);

export const ConsultaCnpjIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Magnifying Glass */}
    <circle cx="20" cy="20" r="14" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M30 30L41 41" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Text PJ */}
    <text x="13.5" y="24" fill={COLOR} fontFamily="'Lato', sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.5px">
      PJ
    </text>
  </svg>
);

export const ConsultaIeIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Magnifying Glass */}
    <circle cx="20" cy="20" r="14" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M30 30L41 41" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Text IE */}
    <text x="14.5" y="24" fill={COLOR} fontFamily="'Lato', sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.5px">
      IE
    </text>
  </svg>
);

export const ConsultaSimplesIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Magnifying Glass */}
    <circle cx="20" cy="20" r="14" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M30 30L41 41" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Text SIM */}
    <text x="10.5" y="24" fill={COLOR} fontFamily="'Lato', sans-serif" fontWeight="700" fontSize="9.5" letterSpacing="-0.3px">
      SIM
    </text>
  </svg>
);

export const LocalizacaoIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pin Shape */}
    <path d="M24 6C16.8203 6 11 11.8203 11 19C11 28.5 24 42 24 42C24 42 37 28.5 37 19C37 11.8203 31.1797 6 24 6Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    {/* Circle inside */}
    <circle cx="24" cy="19" r="4.5" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
  </svg>
);

export const AtendimentoComercialIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Document back */}
    <rect x="14" y="6" width="20" height="26" rx="2" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeDasharray="3 2" />
    {/* Handshake */}
    <path d="M8 26L16 20L21 24L17 28L8 26Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M40 26L32 20L27 24L31 28L40 26Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M21 24L24 27L27 24" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
    {/* Clasp */}
    <path d="M19 27C19 29.5 21 32 24 32C27 32 29 29.5 29 27" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
  </svg>
);

export const CadastroFeriasIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left Flip-Flop */}
    <path d="M15 10C18 10 20 13 20 18C20 23 18 30 19 36C19.5 39 18 41 15 41C12 41 10.5 39 11 36C12 30 10 23 10 18C10 13 12 10 15 10Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M15 18L11 24M15 18L19 24M15 18V21" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Right Flip-Flop */}
    <path d="M33 10C36 10 37.5 13 37.5 18C37.5 23 35.5 30 36.5 36C37 39 35.5 41 33 41C30 41 28.5 39 29 36C30 30 28 23 28 18C28 13 30 10 33 10Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M33 18L29 24M33 18L37 24M33 18V21" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const CadastroPlantaoIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Calendar Base */}
    <rect x="9" y="10" width="26" height="26" rx="3" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M9 17H35" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    {/* Rings */}
    <path d="M16 6V11M28 6V11" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    {/* Grid dots */}
    <circle cx="15" cy="23" r="1.2" fill={COLOR} />
    <circle cx="21" cy="23" r="1.2" fill={COLOR} />
    <circle cx="27" cy="23" r="1.2" fill={COLOR} />
    <circle cx="15" cy="29" r="1.2" fill={COLOR} />
    {/* Clock overlay */}
    <circle cx="33" cy="33" r="9" fill="white" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M33 28V33L36 35" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Additional icons from the provided ZIP collections
export const ConsultaEstoqueIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M24 6L38 14V30L24 38L10 30V14L24 6Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M24 6V38M10 14L24 22L38 14" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <circle cx="34" cy="34" r="8" fill="white" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M40 40L44 44" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const SgieWebIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="9" width="32" height="22" rx="2" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M18 39H30M24 31V39" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    <circle cx="24" cy="20" r="5" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M14 20H19M29 20H34M24 10V15M24 25V30" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const PortalMktIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 20V28M12 28L20 32V16L12 20Z" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M20 16L34 11V37L20 32" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    <path d="M16 28V36C16 37 17 38 18 38H19C20 38 21 37 21 36V32" stroke={COLOR} strokeWidth={STROKE_WIDTH} />
    <path d="M38 18C40 20 41 22 41 24C41 26 40 28 38 30" stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
  </svg>
);

export const PoliticaDtIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg width={size * 3} height={size * 0.9} viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Decortiles knot emblem */}
    <path d="M15 22C15 17 21 17 24 22C27 27 33 27 33 22C33 17 27 17 24 22C21 27 15 27 15 22Z" stroke="#1b1c1e" strokeWidth="2.5" />
    <text x="42" y="29" fill="#1b1c1e" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="17" letterSpacing="2px">
      DECORTILES
    </text>
  </svg>
);

 // Header Mohawk Logo
export const MohawkLogoHeader: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <div className={`flex flex-col items-center select-none text-white ${className}`}>
    <a href="https://www.mymohawkbr.com/" target="_blank" rel="noopener noreferrer">
      <img
        src="/assets/logos/logoMohawk.png"
        alt="Mohawk Brasil"
        className="w-[160px] h-[90px] object-contain"
      />
    </a>
  </div>
);



 // Footer Brands Lockup
export const FooterBrandsLockup: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 select-none py-3 ${className}`}>
    <img
      src="/assets/logos/logos.png"
      alt="Eliane, Decortiles, Elizabeth e Mohawk Brasil"
      className="w-full max-w-[670px] h-[130px] object-contain"
    />
  </div>
);

