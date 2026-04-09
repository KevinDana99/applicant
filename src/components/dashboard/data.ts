export type PlatformCategory = 'IT y Tech' | 'Generalista con foco Dev'
export type JobMode = 'Remoto' | 'Hibrido' | 'Presencial'
export type Seniority = 'Junior' | 'Semi Senior' | 'Senior' | 'Lead'

export interface HiringPlatform {
  id: string
  name: string
  category: PlatformCategory
  region: string
  focus: string
  strengths: string[]
  hiringType: 'Relacion de dependencia'
  language: 'Espanol'
}

export interface JobOffer {
  id: string
  title: string
  company: string
  platformId: string
  location: string
  region: string
  mode: JobMode
  seniority: Seniority
  stack: string[]
  summary: string
  salary: string
  postedAt: string
}

export const platforms: HiringPlatform[] = [
  {
    id: 'get-on-board',
    name: 'Get on Board',
    category: 'IT y Tech',
    region: 'LatAm',
    focus: 'Bolsa tech con volumen estable de producto, data y software.',
    strengths: ['Remoto', 'Startups', 'LatAm'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'manfred',
    name: 'Manfred',
    category: 'IT y Tech',
    region: 'Espana',
    focus: 'Posiciones de software para mercado espanol con matching curado.',
    strengths: ['Espana', 'Curado', 'Senior'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'infojobs-it',
    name: 'InfoJobs IT',
    category: 'IT y Tech',
    region: 'Espana',
    focus: 'Seccion IT de alto volumen para backend, frontend y soporte tecnico.',
    strengths: ['Volumen', 'Espana', 'Empresas grandes'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'tecnoempleo',
    name: 'Tecnoempleo',
    category: 'IT y Tech',
    region: 'Espana',
    focus: 'Portal especializado en tecnologia con fuerte capilaridad en Madrid y remoto.',
    strengths: ['Especializado', 'Consultoras', 'Infra'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'ticjob',
    name: 'Ticjob',
    category: 'IT y Tech',
    region: 'Espana',
    focus: 'Especializado en perfiles de desarrollo, cloud y ciberseguridad.',
    strengths: ['Cloud', 'Ciberseguridad', 'Espana'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'cuvitt-wttj',
    name: 'CuVitt / Welcome to the Jungle',
    category: 'IT y Tech',
    region: 'LatAm',
    focus: 'Reclutamiento con marca empleadora y presencia regional.',
    strengths: ['Marca empleadora', 'LatAm', 'Producto'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'talently',
    name: 'Talently',
    category: 'IT y Tech',
    region: 'LatAm',
    focus: 'Enfoque en talento tech latino para companias regionales y globales.',
    strengths: ['LatAm', 'Remoto', 'Escalamiento'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'interfell',
    name: 'Interfell',
    category: 'IT y Tech',
    region: 'LatAm',
    focus: 'Recruiting distribuido para equipos remotos en America Latina.',
    strengths: ['Remoto', 'Nearshore', 'LatAm'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'madspeak',
    name: 'Madspeak',
    category: 'IT y Tech',
    region: 'LatAm',
    focus: 'Busqueda especializada de perfiles de software y producto.',
    strengths: ['Especializado', 'Producto', 'Tech'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'linkedin-jobs',
    name: 'LinkedIn Jobs',
    category: 'Generalista con foco Dev',
    region: 'Global',
    focus: 'Marketplace amplio, util al filtrar por idioma y ubicaciones hispanas.',
    strengths: ['Volumen', 'Networking', 'Filtros'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'indeed',
    name: 'Indeed',
    category: 'Generalista con foco Dev',
    region: 'LatAm',
    focus: 'Cobertura transversal en regiones hispanas y empresas medianas.',
    strengths: ['Volumen', 'Regiones', 'Ops'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'bumeran',
    name: 'Bumeran',
    category: 'Generalista con foco Dev',
    region: 'LatAm',
    focus: 'Bolsa regional con buena presencia en Argentina, Peru y Ecuador.',
    strengths: ['LatAm', 'Mid-market', 'Volumen'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'computrabajo',
    name: 'Computrabajo',
    category: 'Generalista con foco Dev',
    region: 'LatAm',
    focus: 'Plataforma masiva con secciones IT para empresas locales y regionales.',
    strengths: ['Volumen', 'PyMEs', 'LatAm'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'chiletrabajos',
    name: 'ChileTrabajos',
    category: 'Generalista con foco Dev',
    region: 'Chile',
    focus: 'Oferta local relevante para desarrolladores y soporte TI en Chile.',
    strengths: ['Chile', 'Presencial', 'Mercado local'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'la-pieza',
    name: 'La Pieza',
    category: 'Generalista con foco Dev',
    region: 'LatAm',
    focus: 'Marketplace regional con volumen en producto, growth y tecnologia.',
    strengths: ['LatAm', 'Startups', 'Producto'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'hiring-room',
    name: 'Hiring Room',
    category: 'Generalista con foco Dev',
    region: 'LatAm',
    focus: 'ATS con portales de empleo regionales y stack variado.',
    strengths: ['ATS', 'LatAm', 'Procesos'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'Generalista con foco Dev',
    region: 'LatAm',
    focus: 'Portal regional util para vacantes tech de empresas tradicionales y fintech.',
    strengths: ['Fintech', 'Regional', 'Empresas tradicionales'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'wearedevelopers',
    name: 'WeAreDevelopers',
    category: 'Generalista con foco Dev',
    region: 'Europa',
    focus: 'Marketplace europeo util al restringir a publicaciones en espanol.',
    strengths: ['Europa', 'Producto', 'Escala'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  },
  {
    id: 'landing-jobs',
    name: 'Landing.Jobs',
    category: 'Generalista con foco Dev',
    region: 'Espana',
    focus: 'Portal europeo con foco en talento tech y filtro claro para Espana.',
    strengths: ['Espana', 'Producto', 'Ingenieria'],
    hiringType: 'Relacion de dependencia',
    language: 'Espanol'
  }
]

export const offers: JobOffer[] = [
  {
    id: 'offer-001',
    title: 'Frontend Engineer React',
    company: 'Khipu Cloud',
    platformId: 'get-on-board',
    location: 'Santiago, Chile',
    region: 'Chile',
    mode: 'Remoto',
    seniority: 'Semi Senior',
    stack: ['React', 'TypeScript', 'Design Systems'],
    summary: 'Equipo de producto B2B con ownership en dashboards y flujos de onboarding.',
    salary: 'USD 2.8k - 3.6k',
    postedAt: '2026-04-07'
  },
  {
    id: 'offer-002',
    title: 'Backend Node.js Developer',
    company: 'Nomad Hub',
    platformId: 'talently',
    location: 'Buenos Aires, Argentina',
    region: 'Argentina',
    mode: 'Remoto',
    seniority: 'Senior',
    stack: ['Node.js', 'PostgreSQL', 'AWS'],
    summary: 'Arquitectura orientada a eventos para plataforma SaaS regional.',
    salary: 'USD 4.2k - 5.3k',
    postedAt: '2026-04-08'
  },
  {
    id: 'offer-003',
    title: 'Full Stack Developer',
    company: 'Veloz Pago',
    platformId: 'interfell',
    location: 'Bogota, Colombia',
    region: 'Colombia',
    mode: 'Hibrido',
    seniority: 'Semi Senior',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    summary: 'Producto fintech con backlog fuerte en experiencia de cliente y APIs internas.',
    salary: 'USD 3.2k - 4.1k',
    postedAt: '2026-04-06'
  },
  {
    id: 'offer-004',
    title: 'QA Automation Engineer',
    company: 'Seguritech',
    platformId: 'ticjob',
    location: 'Madrid, Espana',
    region: 'Espana',
    mode: 'Hibrido',
    seniority: 'Senior',
    stack: ['Playwright', 'TypeScript', 'CI/CD'],
    summary: 'Cobertura de regresion y automatizacion end-to-end para banca digital.',
    salary: 'EUR 40k - 50k',
    postedAt: '2026-04-05'
  },
  {
    id: 'offer-005',
    title: 'Mobile Developer Flutter',
    company: 'Andina Health',
    platformId: 'computrabajo',
    location: 'Lima, Peru',
    region: 'Peru',
    mode: 'Presencial',
    seniority: 'Semi Senior',
    stack: ['Flutter', 'Dart', 'Firebase'],
    summary: 'Aplicacion de salud con fuerte roadmap de nuevas funcionalidades.',
    salary: 'PEN 8k - 10k',
    postedAt: '2026-04-04'
  },
  {
    id: 'offer-006',
    title: 'Data Engineer',
    company: 'Marea Insights',
    platformId: 'manfred',
    location: 'Barcelona, Espana',
    region: 'Espana',
    mode: 'Remoto',
    seniority: 'Senior',
    stack: ['Python', 'dbt', 'BigQuery'],
    summary: 'Squad de analytics para un producto data-first del sector retail.',
    salary: 'EUR 48k - 58k',
    postedAt: '2026-04-08'
  },
  {
    id: 'offer-007',
    title: 'Platform Engineer',
    company: 'Orbita DevOps',
    platformId: 'tecnoempleo',
    location: 'Valencia, Espana',
    region: 'Espana',
    mode: 'Hibrido',
    seniority: 'Senior',
    stack: ['Kubernetes', 'Terraform', 'AWS'],
    summary: 'Escalado de infraestructura y observabilidad para multiples productos.',
    salary: 'EUR 45k - 55k',
    postedAt: '2026-04-03'
  },
  {
    id: 'offer-008',
    title: 'Ingeniero de Software Java',
    company: 'CoreBank',
    platformId: 'infojobs-it',
    location: 'Madrid, Espana',
    region: 'Espana',
    mode: 'Presencial',
    seniority: 'Senior',
    stack: ['Java', 'Spring Boot', 'Oracle'],
    summary: 'Modernizacion de core bancario con integraciones reguladas.',
    salary: 'EUR 42k - 52k',
    postedAt: '2026-04-02'
  },
  {
    id: 'offer-009',
    title: 'Product Engineer',
    company: 'Selva Labs',
    platformId: 'cuvitt-wttj',
    location: 'Ciudad de Mexico, Mexico',
    region: 'Mexico',
    mode: 'Remoto',
    seniority: 'Semi Senior',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    summary: 'Rol de producto integral en startup B2B con ciclo corto de entrega.',
    salary: 'MXN 65k - 85k',
    postedAt: '2026-04-07'
  },
  {
    id: 'offer-010',
    title: 'Desarrollador PHP Laravel',
    company: 'Mercurio ERP',
    platformId: 'bumeran',
    location: 'Quito, Ecuador',
    region: 'Ecuador',
    mode: 'Hibrido',
    seniority: 'Semi Senior',
    stack: ['PHP', 'Laravel', 'MySQL'],
    summary: 'Evolucion de plataforma ERP con foco en performance y reportes.',
    salary: 'USD 2.1k - 2.8k',
    postedAt: '2026-04-01'
  },
  {
    id: 'offer-011',
    title: 'SRE Engineer',
    company: 'Pampa Infra',
    platformId: 'linkedin-jobs',
    location: 'Cordoba, Argentina',
    region: 'Argentina',
    mode: 'Remoto',
    seniority: 'Lead',
    stack: ['GCP', 'Terraform', 'Go'],
    summary: 'Confiabilidad y costos cloud en una plataforma de pagos.',
    salary: 'USD 5.5k - 6.5k',
    postedAt: '2026-04-08'
  },
  {
    id: 'offer-012',
    title: 'Frontend Vue Developer',
    company: 'Nexo Travel',
    platformId: 'indeed',
    location: 'Montevideo, Uruguay',
    region: 'Uruguay',
    mode: 'Hibrido',
    seniority: 'Junior',
    stack: ['Vue', 'TypeScript', 'Pinia'],
    summary: 'Front de reservas con mentoring cercano y roadmap de crecimiento.',
    salary: 'USD 1.8k - 2.3k',
    postedAt: '2026-04-06'
  },
  {
    id: 'offer-013',
    title: 'AI Engineer',
    company: 'Promptoria',
    platformId: 'madspeak',
    location: 'Bogota, Colombia',
    region: 'Colombia',
    mode: 'Remoto',
    seniority: 'Senior',
    stack: ['Python', 'LLMs', 'FastAPI'],
    summary: 'Construccion de features generativas para flujos de soporte y ventas.',
    salary: 'USD 4.5k - 5.8k',
    postedAt: '2026-04-08'
  },
  {
    id: 'offer-014',
    title: 'Desarrollador .NET',
    company: 'Red Fiscal',
    platformId: 'chiletrabajos',
    location: 'Concepcion, Chile',
    region: 'Chile',
    mode: 'Presencial',
    seniority: 'Semi Senior',
    stack: ['.NET', 'SQL Server', 'Azure'],
    summary: 'Plataforma tributaria con soporte a operaciones nacionales.',
    salary: 'CLP 2.3M - 2.8M',
    postedAt: '2026-04-05'
  },
  {
    id: 'offer-015',
    title: 'Engineering Manager',
    company: 'Savia Commerce',
    platformId: 'la-pieza',
    location: 'Ciudad de Mexico, Mexico',
    region: 'Mexico',
    mode: 'Hibrido',
    seniority: 'Lead',
    stack: ['People Management', 'Delivery', 'Ecommerce'],
    summary: 'Liderazgo de tres squads de producto en etapa de escalado.',
    salary: 'MXN 120k - 150k',
    postedAt: '2026-04-04'
  },
  {
    id: 'offer-016',
    title: 'Backend Kotlin Engineer',
    company: 'Astera Fintech',
    platformId: 'hiring-room',
    location: 'Rosario, Argentina',
    region: 'Argentina',
    mode: 'Remoto',
    seniority: 'Senior',
    stack: ['Kotlin', 'Spring', 'Kafka'],
    summary: 'Microservicios transaccionales con foco en resiliencia.',
    salary: 'USD 4.1k - 5k',
    postedAt: '2026-04-03'
  },
  {
    id: 'offer-017',
    title: 'BI Developer',
    company: 'Nova Retail',
    platformId: 'prisma',
    location: 'San Jose, Costa Rica',
    region: 'Costa Rica',
    mode: 'Hibrido',
    seniority: 'Semi Senior',
    stack: ['Power BI', 'SQL', 'ETL'],
    summary: 'Gobierno y automatizacion de reportes para operaciones regionales.',
    salary: 'USD 2.9k - 3.7k',
    postedAt: '2026-04-07'
  },
  {
    id: 'offer-018',
    title: 'Site Reliability Engineer',
    company: 'Helix Commerce',
    platformId: 'wearedevelopers',
    location: 'Madrid, Espana',
    region: 'Espana',
    mode: 'Remoto',
    seniority: 'Senior',
    stack: ['AWS', 'Grafana', 'Kubernetes'],
    summary: 'Operaciones cloud y observabilidad para ecommerce europeo.',
    salary: 'EUR 52k - 62k',
    postedAt: '2026-04-06'
  },
  {
    id: 'offer-019',
    title: 'Backend Python Engineer',
    company: 'Atlante AI',
    platformId: 'landing-jobs',
    location: 'Malaga, Espana',
    region: 'Espana',
    mode: 'Remoto',
    seniority: 'Senior',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    summary: 'APIs para producto B2B basado en automatizacion inteligente.',
    salary: 'EUR 46k - 56k',
    postedAt: '2026-04-08'
  },
  {
    id: 'offer-020',
    title: 'Desarrollador React Native',
    company: 'Brio Health',
    platformId: 'get-on-board',
    location: 'Lima, Peru',
    region: 'Peru',
    mode: 'Remoto',
    seniority: 'Semi Senior',
    stack: ['React Native', 'Expo', 'TypeScript'],
    summary: 'Aplicacion de pacientes con integracion a servicios clinicos.',
    salary: 'USD 2.7k - 3.4k',
    postedAt: '2026-04-02'
  },
  {
    id: 'offer-021',
    title: 'Tech Lead JavaScript',
    company: 'Nativa Media',
    platformId: 'talently',
    location: 'Bogota, Colombia',
    region: 'Colombia',
    mode: 'Remoto',
    seniority: 'Lead',
    stack: ['React', 'Node.js', 'Arquitectura'],
    summary: 'Definicion tecnica y coaching para un equipo full stack distribuido.',
    salary: 'USD 5.2k - 6.1k',
    postedAt: '2026-04-01'
  },
  {
    id: 'offer-022',
    title: 'DevOps Engineer',
    company: 'Bit Andes',
    platformId: 'interfell',
    location: 'Medellin, Colombia',
    region: 'Colombia',
    mode: 'Hibrido',
    seniority: 'Senior',
    stack: ['Azure', 'Docker', 'Terraform'],
    summary: 'Plataforma SaaS regional con foco en pipelines y seguridad.',
    salary: 'USD 3.8k - 4.8k',
    postedAt: '2026-04-05'
  },
  {
    id: 'offer-023',
    title: 'Support Engineer L2',
    company: 'Infra Norte',
    platformId: 'infojobs-it',
    location: 'Sevilla, Espana',
    region: 'Espana',
    mode: 'Presencial',
    seniority: 'Junior',
    stack: ['Linux', 'Networking', 'SQL'],
    summary: 'Soporte de aplicaciones de negocio e incidencias de infraestructura.',
    salary: 'EUR 24k - 29k',
    postedAt: '2026-04-04'
  },
  {
    id: 'offer-024',
    title: 'Ingeniero de Datos',
    company: 'Sur Analytics',
    platformId: 'computrabajo',
    location: 'Buenos Aires, Argentina',
    region: 'Argentina',
    mode: 'Hibrido',
    seniority: 'Senior',
    stack: ['Spark', 'Airflow', 'Python'],
    summary: 'Pipelines de datos comerciales para consumo de multiples areas.',
    salary: 'USD 3.7k - 4.6k',
    postedAt: '2026-04-06'
  }
]

export function getPlatform(platformId: string) {
  return platforms.find((platform) => platform.id === platformId)
}
