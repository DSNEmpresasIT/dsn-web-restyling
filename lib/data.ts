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
    title: "Aeropuerto Comodoro Pierrestegui",
    category: "Infraestructura Crítica",
    location: "Concordia, Entre Ríos",
    description: "Renovación integral de sistemas de balizamiento y control de tráfico aéreo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt8Alwx8rWz7QXVqyjqFeQn-3l4T37m5NazFcT5bVvahdIxyK0ZWYbKetYWaIlVxiKeEeI91vNnXybSTNluJmZlX9Pfslif_A8wbqfde_W6mmK5nSjhHCCxbuoF_u_zfS7rBm8tqPX-LC2j_gEuZtdNuVWSfnM9Cug3gbPZ7RNaWQWE7TYyXhPU0dKeNKT3anFHVLgTXwmRvSOu_AnOr5jka2stwm8_g45HNNRGfzae3w0jX0smu7j6uq5gFkHjetrnK-N5qHZyTk",
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
    title: "Panorama XXI – Torre Corp.",
    category: "BIM / Lean Construction",
    location: "Edificación Corporativa",
    description: "Torre corporativa de 14 pisos. Implementación completa de redes, control de acceso y BMS.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEjaKvC61NLs_VXKKHUs9HIiw3_4TJM0paAk9t4uaqtaMdmdDimoeFn7aoFQgooSaNHagroOmwAIfmYWxTK-jaLJp1TQ9tMGMbzwLuk3-12MvHWeA15Dl49xChOXSt3OhuOTQHmMEXrM2zP2C3hP752zL9N9MwZNTkcJoX_BPwCTRv00NQr88BdH2K-5goRaCiAOF-djBAMK0i_wADlYP1UkIvvHR-KdbHYRbeZWgdJtGycWOnsM4NWk9e1-JPveOz6g8Uk0oWi1Q"
  },
  {
    id: "paso-frontera",
    title: "Paso de Frontera Concordia – Salto",
    category: "Software + Infraestructura",
    location: "Binacional",
    description: "Sistemas de control y automatización fronteriza para flujos migratorios de alta densidad.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH37Ph5WTehbUw-4o_BKr_Nmqe5hQws8Shy-c8TVoiXcF2QNTj_tOrZu4UDOWenEqAFy5qGRLFzjXfN4UX4ZGLUwbKZVuaeFp52ePe89Nn1csbKJbvl5kXHIhuLENmXhkZAdQogX3yvdJuOtLzWgR_Moyp6hJH_14aKgdNLA69jj_nompeSX9yOdK8_YR3h6pORBuX9JHoUitVf-HPw-AhvsBag_9G-fFnbOYEGxyaAs2tZbvnPyRqh2zuuSVfBbhciMsuANEW5lU"
  },
  {
    id: "aeropuerto-tucuman",
    title: "Aeropuerto Int. de Tucumán",
    category: "Infraestructura",
    location: "Tucumán, Argentina",
    description: "Ampliación de plataforma comercial y logística técnica para operaciones de carga y pasajeros.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuHC3Z7q3K4_O-j0MNsa9dMGFZpUVrDR101kf5TKEIBIUN5a7Pjn8B8Z1oYNSwK2HXGVc-1gvNEJJswrDi1eQGaU8N_2ol20Hl8Z5Iyq3x03De0t_yldfxlfuqSImt6j8wYREEeXVeLZ4mXceSFe79C1GDtZLe6uhdVwsjETIV6vddx8hUvAvOfoVcDAJCc1yLtObO6dAGfGmXmRjvGjUdJ5Z8GSUyfmei9JhYvo4386OGVMKDMW-PzDdgGXYkECfXAqPfA5pPZEY"
  },
  {
    id: "redes-saneamiento",
    title: "Redes de Saneamiento",
    category: "Obras Urbanas",
    location: "Impacto Social",
    description: "Infraestructura urbana masiva con más de 300 cuadras intervenidas para el Municipio de Concordia.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXVybmXIq28601sAn-Z_GAnPA1UfsdoTUlOD4OQ5h2Q2zjHCuIEstGGB64zV0rhbaXKyf7K_lDecaGMdF1GsHXkYOCGB0RTZ3A0j756DQMuVzH3YwgT8RlKhvGl7ScUDSfa0WlprePv4f_gj2bO9v27Jl42blCt91RVCz6t_8-gQrxi-Dpogp3jm0d0HpeVUcElS76cRZDfLqGOyBBdLfBkTFAjRJsfqcIapQV6LRdXs7tRgYk-ttedGxgUwa3yphhNV6gYDLyAqA"
  }
];

export const SERVICES: Service[] = [
  { icon: "construction", title: "Soluciones llave en mano", description: "Desarrollo integral desde el diseño conceptual hasta la implementación." },
  { icon: "developer_board", title: "Productos propios", description: "Software escalable diseñado para resolver necesidades específicas de industria." },
  { icon: "settings_input_component", title: "Infraestructura crítica", description: "Soporte técnico para operaciones donde el tiempo de inactividad no es opción." },
  { icon: "security", title: "Ciberseguridad", description: "Protección transversal de datos y procesos en toda la cadena digital." }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}
