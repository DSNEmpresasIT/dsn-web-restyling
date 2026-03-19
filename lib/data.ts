export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  year?: string;
  sector?: string;
  client?: string;
  scope?: string[];
  tech?: string[];
  results?: { label: string; value: string }[];
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  number: number;
  suffix?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const METRICS: Metric[] = [
  { label: "Operación Crítica", value: "150+", description: "Proyectos en ejecución continua", number: 150 },
  { label: "Organismos", value: "45+", description: "Instituciones integradas", number: 45 },
  { label: "Plataformas", value: "12", description: "Productos de software propios", number: 12 },
  { label: "Infraestructura", value: "500km", description: "Redes de fibra y conectividad", number: 500, suffix: "km" }
];

export const PROJECTS: Project[] = [
  {
    id: "comodoro-pierrestegui",
    title: "Aeropuerto Internacional Comodoro Pierrestegui",
    category: "Infraestructura Crítica",
    location: "Concordia, Entre Ríos",
    description: "Provisión e integración de equipamiento tecnológico: megafonía/PA, control de accesos, racks y servidores, networking, cableado estructurado, CCTV y sistemas de protección contra incendios (PCI), con ejecución llave en mano.",
    image: "/images/1500x700_aep.webp",
    year: "2023",
    sector: "Infraestructura Aeroportuaria",
    client: "Gobierno de Entre Ríos",
    scope: [
      "Sistemas de Balizamiento: Luminarias LED de alta intensidad.",
      "Controladores de Potencia: Reguladores de corriente constante.",
      "Obra Civil Eléctrica: Canalizaciones estancas de media tensión.",
      "Respaldo Energético: Grupos electrógenos y UPS redundantes."
    ],
    tech: ["IoT & Telemetría", "Smart Grids", "Protocolos OACI", "BIM Modeling"],
    results: [
      { label: "Cumplimiento Normativo", value: "100%" },
      { label: "Ahorro Energético (LED)", value: "40%" },
      { label: "Categoría Aproximación", value: "CAT I" }
    ]
  },
  {
    id: "panorama-xxi",
    title: "Panorama XXI",
    category: "BIM / Lean Construction",
    location: "Concordia, Entre Ríos",
    description: "Edificio de 14 pisos, Construcción, desarrollo y comercialización. Empleo de capital propio y de inversores. Concepción total, abarcando diseño, planos, arquitectura, construcción y provisión de equipamiento, utilizando herramientas BIM y metodología de Last Planner System (LPS) basadas en Lean Construction. Edificio situado  en una de las mejores esquinas de la Ciudad de Concordia. Diseño, proyecto ejecutivo, planos presentaciones y construcción de todo el proyecto. En etepa final de construcción.",
    image: "/images/panorama-21.webp"
  },
  {
    id: "paso-frontera",
    title: "Paso de Frontera Concordia - Salto",
    category: "Software + Infraestructura",
    location: "Binacional",
    description: "Sistemas de control y automatización fronteriza para flujos migratorios de alta densidad.",
    image: "/images/1500x700_pasofronterizo.webp"
  },
  {
    id: "aeropuerto-tucuman",
    title: "Aeropuerto Benjamín Matienzo, Tucumán",
    category: "Infraestructura Crítica",
    location: "Tucumán, Argentina",
    description: "Proyecto de infraestructura aeroportuaria para continuidad operativa en entorno de alta exigencia.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuHC3Z7q3K4_O-j0MNsa9dMGFZpUVrDR101kf5TKEIBIUN5a7Pjn8B8Z1oYNSwK2HXGVc-1gvNEJJswrDi1eQGaU8N_2ol20Hl8Z5Iyq3x03De0t_yldfxlfuqSImt6j8wYREEeXVeLZ4mXceSFe79C1GDtZLe6uhdVwsjETIV6vddx8hUvAvOfoVcDAJCc1yLtObO6dAGfGmXmRjvGjUdJ5Z8GSUyfmei9JhYvo4386OGVMKDMW-PzDdgGXYkECfXAqPfA5pPZEY"
  },
  {
    id: "redes-saneamiento",
    title: "Ampliación y refacción de redes de saneamiento",
    category: "Obras Urbanas",
    location: "Concordia, Entre Ríos",
    description: "Argentina Construcciones Civiles (Grupo DSN Empresas) ejecutó obras de ampliación y refacción de redes de saneamiento para el Municipio de Concordia, alcanzando más de 300 cuadras construidas y renovadas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXVybmXIq28601sAn-Z_GAnPA1UfsdoTUlOD4OQ5h2Q2zjHCuIEstGGB64zV0rhbaXKyf7K_lDecaGMdF1GsHXkYOCGB0RTZ3A0j756DQMuVzH3YwgT8RlKhvGl7ScUDSfa0WlprePv4f_gj2bO9v27Jl42blCt91RVCz6t_8-gQrxi-Dpogp3jm0d0HpeVUcElS76cRZDfLqGOyBBdLfBkTFAjRJsfqcIapQV6LRdXs7tRgYk-ttedGxgUwa3yphhNV6gYDLyAqA"
    ,
    sector: "Infraestructura Urbana",
    client: "Municipio de Concordia"
  }
];

export const SERVICES: Service[] = [
  { icon: "construction", title: "Soluciones llave en mano", description: "Ingeniería, implementación, commissioning y soporte. Optimización desde el origen que garantiza sistemas rápidos, seguros y sin errores de compatibilidad." },
  { icon: "developer_board", title: "Productos propios", description: "Border Pass, Border Ticket, Border Access, Sistemas FIDS, Sistemas de IA para Megafonía, Analítica de Video, Telemetría, iOT, Catálogo Digital y Micrositios." },
  { icon: "settings_input_component", title: "Infraestructura crítica", description: "Señales débiles, comunicaciones, energía, datacenter y continuidad operativa." },
  { icon: "security", title: "Ciberseguridad transversal", description: "Segmentación, auditoría y hardening según alcance." }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}
