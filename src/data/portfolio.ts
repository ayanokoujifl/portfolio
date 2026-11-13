import type { StaticImageData } from "next/image"

import meHome from "@/assets/projects/mobile/minhaescala/home-screen.jpeg"
import meFinancial from "@/assets/projects/mobile/minhaescala/home-financial.jpeg"
import meShiftForm from "@/assets/projects/mobile/minhaescala/plantao-form.jpeg"
import meOccurrences from "@/assets/projects/mobile/minhaescala/ocorrencias-list.jpeg"
import meAppointment from "@/assets/projects/mobile/minhaescala/compromisso-form.jpeg"

import cpe1 from "@/assets/projects/mobile/cpe/cpe-1.jpg"
import cpe2 from "@/assets/projects/mobile/cpe/cpe-2.jpg"
import cpe3 from "@/assets/projects/mobile/cpe/cpe-3.jpg"
import cpe4 from "@/assets/projects/mobile/cpe/cpe-4.jpg"
import cpe5 from "@/assets/projects/mobile/cpe/cpe-5.jpg"
import oliveiraImg from "@/assets/projects/OR.png"
import walletAgentCover from "@/assets/projects/wallet-agent.png"
import minhaEscalaCover from "@/assets/projects/minha-escala.png"
import dentistHeroImg from "@/assets/projects/web/dentist-hero.webp"
import dentistWhiteningImg from "@/assets/projects/web/dentist-clareamento.webp"
import barbershopHeroImg from "@/assets/projects/web/barbershop-hero.webp"
import advocacyHeroImg from "@/assets/projects/web/advocacy-hero.webp"
import advocacyAto2Img from "@/assets/projects/web/advocacy-ato2.webp"
import massageHeroImg from "@/assets/projects/web/massage-hero.webp"

export type Locale = "pt" | "en"
export type ProjectCategory = "backend-ai" | "mobile" | "web-3d"

export interface HeroMetric {
  value: string
  label: string
}

export interface StackGroup {
  name: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  location: string
  role: string
  period: string
  mode?: string
  highlights: string[]
  stack: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
}

export interface GalleryItem {
  src: StaticImageData
  caption: string
}

export interface WebPModelPreview {
  id: string
  label: string
  animatedSrc: string
  posterSrc: string
  liveUrl: string
  liveLabel: string
}

export interface PortfolioProject {
  id: string
  title: string
  category: ProjectCategory
  categoryLabel: string
  status: string
  featured?: boolean
  summary: string
  architectureNotes: string
  stack: string[]
  iconSrc?: string
  darkIconBg?: boolean
  staticCover?: StaticImageData
  gallery?: GalleryItem[]
  models3d?: WebPModelPreview[]
  primaryLink?: {
    url: string
    label: string
  }
  secondaryLink?: {
    url: string
    label: string
  }
}

export interface LocaleContent {
  meta: {
    homeTitle: string
    homeDescription: string
    projectsTitle: string
    projectsDescription: string
    aboutTitle: string
    aboutDescription: string
  }
  nav: {
    home: string
    projects: string
    about: string
    downloadCv: string
    switchToLabel: string
  }
  hero: {
    badge: string
    greeting: string
    roleTitle: string
    summary: string
    primaryCta: string
    secondaryCta: string
    cvCta: string
    metrics: HeroMetric[]
  }
  homeSections: {
    featuredEyebrow: string
    featuredTitle: string
    featuredSubtitle: string
    viewAllProjects: string
    stackEyebrow: string
    stackTitle: string
    stackSubtitle: string
    experiencePreviewEyebrow: string
    experiencePreviewTitle: string
    fullResumeCta: string
  }
  projectsPage: {
    eyebrow: string
    title: string
    subtitle: string
    filters: { id: "all" | ProjectCategory; label: string }[]
    inspectGalleryLabel: string
    architectureLabel: string
    blenderHeading: string
    blenderNote: string
  }
  aboutPage: {
    eyebrow: string
    title: string
    subtitle: string
    experienceHeading: string
    educationHeading: string
    certificationsHeading: string
    languagesHeading: string
    skillsHeading: string
    downloadPtLabel: string
    downloadEnLabel: string
    directContactHeading: string
  }
  footer: {
    tagline: string
    rights: string
    resumePt: string
    resumeEn: string
  }
  stackGroups: StackGroup[]
  experiences: ExperienceItem[]
  education: EducationItem[]
  certifications: string[]
  languages: { name: string; level: string }[]
  projects: PortfolioProject[]
}

export const sharedProfile = {
  name: "Luís Gustavo Leite",
  handle: "dev-atomic",
  location: "Belo Horizonte, MG · Brasil",
  email: "guleite3@gmail.com",
  phoneDisplay: "+55 (38) 99756-9902",
  whatsappUrl: "https://wa.me/5538997569902",
  githubUrl: "https://github.com/ayanokoujifl",
  linkedinUrl: "https://linkedin.com/in/luis-gustavo-dev",
  portfolioDomain: "https://dev-atomic-portfolio.ayanokoujifl.com",
  cvPtPath: "/cv/CurriculoLuisGustavo.pdf",
  cvEnPath: "/cv/ResumeLuisGustavo.pdf",
  avatarSrc: "/media/luis-gustavo.webp",
} as const

const blenderPreviewsPt: WebPModelPreview[] = [
  {
    id: "arcada",
    label: "Arcada & Alinhador",
    animatedSrc: "/media/3d/arcada.webp",
    posterSrc: "/media/3d/arcada-poster.webp",
    liveUrl: "https://dentist.ayanokoujifl.com",
    liveLabel: "dentist.ayanokoujifl.com",
  },
  {
    id: "caneta",
    label: "Caneta 4 Atos (Branch yanne)",
    animatedSrc: "/media/3d/caneta.webp",
    posterSrc: "/media/3d/caneta-poster.webp",
    liveUrl: "https://dentist.ayanokoujifl.com",
    liveLabel: "dentist.ayanokoujifl.com",
  },
  {
    id: "navalhete",
    label: "Navalhete Barbearia",
    animatedSrc: "/media/3d/navalhete.webp",
    posterSrc: "/media/3d/navalhete-poster.webp",
    liveUrl: "https://barbershop.ayanokoujifl.com",
    liveLabel: "barbershop.ayanokoujifl.com",
  },
  {
    id: "skyline",
    label: "Skyline R34 · Túnel de Luz",
    animatedSrc: "/media/3d/skyline.webp",
    posterSrc: "/media/3d/skyline-poster.webp",
    liveUrl: "https://insufilm.ayanokoujifl.com",
    liveLabel: "insufilm.ayanokoujifl.com",
  },
]

const blenderPreviewsEn: WebPModelPreview[] = [
  {
    id: "arcada",
    label: "Dental Arch & Aligner (0–80)",
    animatedSrc: "/media/3d/arcada.webp",
    posterSrc: "/media/3d/arcada-poster.webp",
    liveUrl: "https://dentist.ayanokoujifl.com",
    liveLabel: "dentist.ayanokoujifl.com",
  },
  {
    id: "caneta",
    label: "Dosing Pen · 4 Acts (yanne)",
    animatedSrc: "/media/3d/caneta.webp",
    posterSrc: "/media/3d/caneta-poster.webp",
    liveUrl: "https://dentist.ayanokoujifl.com",
    liveLabel: "dentist.ayanokoujifl.com",
  },
  {
    id: "navalhete",
    label: "Signature Straight Razor",
    animatedSrc: "/media/3d/navalhete.webp",
    posterSrc: "/media/3d/navalhete-poster.webp",
    liveUrl: "https://barbershop.ayanokoujifl.com",
    liveLabel: "barbershop.ayanokoujifl.com",
  },
  {
    id: "skyline",
    label: "Skyline R34 · Light Tunnel",
    animatedSrc: "/media/3d/skyline.webp",
    posterSrc: "/media/3d/skyline-poster.webp",
    liveUrl: "https://insufilm.ayanokoujifl.com",
    liveLabel: "insufilm.ayanokoujifl.com",
  },
]

export const portfolioData: Record<Locale, LocaleContent> = {
  pt: {
    meta: {
      homeTitle: "Luís Gustavo Leite — Engenheiro de Software Mobile, Backend & Web 3D",
      homeDescription:
        "Portfólio de engenharia de Luís Gustavo Leite. Experiência na Drogaria Araujo S/A, Ford Motor Company e PMMG. Especialista em Kotlin, Spring Boot, Next.js, Astro e Arquitetura Hexagonal.",
      projectsTitle: "Projetos & Arquitetura | Luís Gustavo Leite",
      projectsDescription:
        "Estudos de caso técnicos em Kotlin Multiplatform, Java 21 / Spring Boot WebFlux, GraalVM Native Image, agentes de IA e landing pages 3D.",
      aboutTitle: "Sobre & Currículo | Luís Gustavo Leite",
      aboutDescription:
        "Trajetória profissional, formação acadêmica, certificações AWS e downloads do currículo em PDF de Luís Gustavo Leite.",
    },
    nav: {
      home: "Início",
      projects: "Projetos",
      about: "Sobre & CV",
      downloadCv: "Baixar CV (PDF)",
      switchToLabel: "EN",
    },
    hero: {
      badge: "Engenheiro de Software • Mobile, Backend & Dados",
      greeting: "Luís Gustavo Leite",
      roleTitle: "Arquitetura limpa, aplicativos resilientes e web de alta performance.",
      summary:
        "3+ anos entregando sistemas críticos e produtos digitais em produção — atuando com pipelines corporativos na Drogaria Araujo S/A, P&D na Ford Motor Company, segurança pública na PMMG e ecossistema próprio na Google Play.",
      primaryCta: "Ver Projetos & Arquitetura",
      secondaryCta: "Trajetória & Currículo",
      cvCta: "Baixar Currículo (PT)",
      metrics: [
        { value: "99,9%", label: "Crash-free sessions no Minha Escala" },
        { value: "-40%", label: "Cold start após migração Kotlin Nativo" },
        { value: "3+ Anos", label: "Sistemas críticos e apps em produção" },
      ],
    },
    homeSections: {
      featuredEyebrow: "Casos de Engenharia Selecionados",
      featuredTitle: "Do GraalVM Native Image ao Kotlin Multiplatform",
      featuredSubtitle:
        "Decisões arquiteturais orientadas a desacoplamento (Hexagonal / Clean), baixa latência e entrega previsível em produção.",
      viewAllProjects: "Explorar todos os projetos →",
      stackEyebrow: "Ecossistema Técnico",
      stackTitle: "Competências & Arquitetura",
      stackSubtitle:
        "Domínio de ponta a ponta cobrindo mobile nativo, microsserviços reativos, dados em tempo real e interfaces 3D.",
      experiencePreviewEyebrow: "Histórico Recente",
      experiencePreviewTitle: "Experiência Profissional Comprovada",
      fullResumeCta: "Ver linha do tempo completa & baixar PDF →",
    },
    projectsPage: {
      eyebrow: "Estudos de Caso & Produtos",
      title: "Engenharia em Produção",
      subtitle:
        "Sistemas distribuídos, aplicativos publicados na Play Store, agentes de IA e vitrines 3D desenvolvidas com Blender + Astro.",
      filters: [
        { id: "all", label: "Todos" },
        { id: "backend-ai", label: "Backend, Cloud & IA" },
        { id: "mobile", label: "Mobile & KMP" },
        { id: "web-3d", label: "Web & 3D Blender" },
      ],
      inspectGalleryLabel: "Explorar telas",
      architectureLabel: "Decisão Arquitetural",
      blenderHeading: "Previews 3D em WebP",
      blenderNote: "Clique nas abas para alternar entre os modelos 3D em produção.",
    },
    aboutPage: {
      eyebrow: "Currículo & Experiência",
      title: "Trajetória Profissional",
      subtitle:
        "Construindo software escalável e arquiteturas orientadas a domínio entre engenharia corporativa de dados, interfaces automotivas de P&D e produtos próprios.",
      experienceHeading: "Experiência Profissional",
      educationHeading: "Formação Acadêmica",
      certificationsHeading: "Certificações & Especializações",
      languagesHeading: "Idiomas",
      skillsHeading: "Matriz de Competências",
      downloadPtLabel: "Download Currículo (Português PDF)",
      downloadEnLabel: "Download Resume (English PDF)",
      directContactHeading: "Contato Direto & Perfis",
    },
    footer: {
      tagline: "Engenharia de Software Mobile, Backend & Web 3D — Belo Horizonte, MG.",
      rights: "Todos os direitos reservados.",
      resumePt: "CV PT (PDF)",
      resumeEn: "Resume EN (PDF)",
    },
    stackGroups: [
      {
        name: "Mobile Nativo & Multiplataforma",
        items: ["Kotlin (Expert)", "Jetpack Compose", "Kotlin Multiplatform (KMP)", "Android SDK", "Room / SQLite", "Coroutines & Flow", "React Native"],
      },
      {
        name: "Backend & Arquitetura",
        items: ["Java 21+", "Spring Boot 3 (WebFlux)", "GraalVM Native Image", "Arquitetura Hexagonal", "Clean Architecture", "SOLID / DDD"],
      },
      {
        name: "Dados, Streaming & Integração",
        items: ["PostgreSQL (R2DBC)", "SQL Server", "Apache Kafka", "Kafka Connect", "IBM DataStage", "MuleSoft"],
      },
      {
        name: "Frontend, 3D & Cloud",
        items: ["Next.js (App Router)", "Astro SSG", "TypeScript", "Tailwind CSS", "Blender 3D / WebP", "GCP Cloud Run", "Docker", "AWS Certified"],
      },
    ],
    experiences: [
      {
        company: "Drogaria Araujo S/A",
        location: "Belo Horizonte, MG",
        role: "Engenheiro de Dados & Arquitetura",
        period: "Agosto 2025 – Presente",
        highlights: [
          "Design e manutenção de pipelines ETL/ELT corporativos com IBM DataStage e MuleSoft, garantindo integridade em fluxos de missão crítica.",
          "Implementação de streaming com Apache Kafka e Kafka Connect, integrando sistemas legados e modernos para BI em tempo real.",
          "Otimização de consultas em SQL Server e conteinerização com Docker, reduzindo pontos de falha na cadeia de dados corporativa.",
        ],
        stack: ["IBM DataStage", "MuleSoft", "Apache Kafka", "Kafka Connect", "SQL Server", "Docker"],
      },
      {
        company: "Ford Motor Company",
        location: "Remoto (P&D)",
        role: "Software Engineer – Frontend",
        period: "Agosto 2025 – Agosto 2026",
        mode: "Meio período • Inovação Automotiva Global",
        highlights: [
          "Desenvolvimento de interfaces experimentais com Next.js e React para iniciativas globais de inovação automotiva.",
          "Integração de modelos 3D (Blender) em protótipos de UI/UX para novos conceitos veiculares.",
          "Tradução de requisitos de pesquisa de usuário em implementações web performáticas e acessíveis.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Blender 3D"],
      },
      {
        company: "Polícia Militar de Minas Gerais (PMMG)",
        location: "Belo Horizonte, MG",
        role: "Engenheiro de Software – Mobile & Backend",
        period: "Junho 2023 – Junho 2025",
        highlights: [
          "Desenvolvimento e modernização de sistemas críticos de segurança pública: aplicativo de campo em React Native e APIs em Spring Boot.",
          "Arquitetura de APIs RESTful escaláveis para gestão de dados sensíveis e controle de tráfego estadual em tempo real.",
          "Implementação de dashboards analíticos com D3.js e Power BI para centros de comando e apoio à decisão operacional.",
        ],
        stack: ["Java / Spring Boot", "React Native", "REST APIs", "D3.js", "Power BI"],
      },
      {
        company: "Desenvolvedor Independente (SaaS & Mobile)",
        location: "Belo Horizonte, MG",
        role: "Owner & Lead Developer",
        period: "Janeiro 2023 – Presente",
        highlights: [
          "Minha Escala (Play Store): App Android de gestão de escalas em Arquitetura Hexagonal (Kotlin/Compose), atingindo 99,9% crash-free sessions e -40% cold start.",
          "Wallet Agent: Backend reativo Kotlin + Spring Boot 3 (WebFlux/Coroutines) compilado em GraalVM Native Image com PostgreSQL (R2DBC), Pluggy e Gemini API.",
          "Desenvolvimento e publicação de ecossistema próprio (QTC Trânsito, Dogs Guide, Ecclesia, OpenLifts) e landing pages 3D em Astro + Blender.",
        ],
        stack: ["Kotlin", "KMP", "Spring WebFlux", "GraalVM", "Next.js", "Astro", "Cloud Run"],
      },
    ],
    education: [
      {
        institution: "UNA (EAD)",
        degree: "Bacharelado em Sistemas de Informação",
        period: "Previsão de conclusão: 2026",
      },
      {
        institution: "Instituto Federal de Minas Gerais (IFMG)",
        degree: "Técnico em Informática Integrado ao Ensino Médio",
        period: "Concluído: 2022",
      },
    ],
    certifications: [
      "AWS Certified (Amazon Web Services)",
      "Especializações técnicas em Kotlin, Android Development, Spring Boot e Arquitetura de Software",
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Profissional — leitura técnica e conversação" },
    ],
    projects: [
      {
        id: "wallet-agent",
        title: "Wallet Agent",
        category: "backend-ai",
        categoryLabel: "Backend Reativo & IA",
        status: "Em Produção",
        featured: true,
        summary:
          "Plataforma financeira inteligente com assistente conversacional integrado ao WhatsApp para registro e categorização automática por voz, texto ou imagem.",
        architectureNotes:
          "Backend Kotlin + Spring Boot 3 (WebFlux/Coroutines) compilado em GraalVM Native Image no Cloud Run. Domínio isolado via Arquitetura Hexagonal, PostgreSQL assíncrono (R2DBC), Open Finance (Pluggy API) e Gemini API.",
        stack: ["Kotlin", "Spring WebFlux", "GraalVM Native", "PostgreSQL R2DBC", "Gemini AI", "Pluggy", "Next.js"],
        iconSrc: "/media/wallet-agent.webp",
        darkIconBg: true,
        staticCover: walletAgentCover,
        primaryLink: {
          url: "https://wallet-agent.ayanokoujifl.com",
          label: "Acessar Plataforma",
        },
      },
      {
        id: "minha-escala",
        title: "Minha Escala",
        category: "mobile",
        categoryLabel: "Mobile Android • Play Store",
        status: "99,9% Crash-Free",
        featured: true,
        summary:
          "Aplicativo Android publicado para profissionais em regime de escala organizarem plantões, compromissos, ocorrências e previsão financeira mensal.",
        architectureNotes:
          "Refatorado integralmente para Kotlin Nativo com Jetpack Compose em Arquitetura Hexagonal e persistência Room/SQLite offline-first, reduzindo o cold start em 40% e mantendo 99,9% crash-free sessions.",
        stack: ["Kotlin", "Jetpack Compose", "Arquitetura Hexagonal", "Room / SQLite", "AdMob"],
        iconSrc: "/media/minha-escala.webp",
        staticCover: minhaEscalaCover,
        gallery: [
          { src: meHome, caption: "Tela inicial com visão geral dos plantões" },
          { src: meFinancial, caption: "Previsão financeira e horas trabalhadas" },
          { src: meShiftForm, caption: "Cadastro detalhado de turno" },
          { src: meOccurrences, caption: "Registro de ocorrências e alterações" },
          { src: meAppointment, caption: "Agenda pessoal integrada" },
        ],
        primaryLink: {
          url: "https://play.google.com/store/apps/details?id=com.luisleite.minhaescala&hl=pt_BR",
          label: "Google Play",
        },
        secondaryLink: {
          url: "https://minha-escala.ayanokoujifl.com",
          label: "Site Oficial",
        },
      },
      {
        id: "astro-3d-lps",
        title: "Astro + Blender 3D Showcase",
        category: "web-3d",
        categoryLabel: "Frontend Performance & 3D",
        status: "4 Cenas Reais",
        featured: true,
        summary:
          "Motor de scrollytelling 2D/3D para landing pages de clínicas médicas/odontológicas, barbearias e estética automotiva, substituindo vídeos pesados por sequências WebP leves.",
        architectureNotes:
          "Renderização no Blender exportada para sequências WebP com carregamento progressivo e IntersectionObserver sobre Astro SSG + Tailwind CSS v4 + API Resend serverless no Vercel.",
        stack: ["Astro", "Tailwind v4", "Blender 3D", "WebP Scrubber", "Resend API", "Vercel Edge"],
        models3d: blenderPreviewsPt,
        primaryLink: {
          url: "https://insufilm.ayanokoujifl.com",
          label: "Ver Skyline 3D",
        },
        secondaryLink: {
          url: "https://dentist.ayanokoujifl.com",
          label: "Ver Clínica 3D",
        },
      },
      {
        id: "qtc-transito",
        title: "QTC Trânsito",
        category: "mobile",
        categoryLabel: "Mobile Android • Play Store",
        status: "Google Play",
        summary:
          "Consulta rápida de códigos de infração do CTB, enquadramentos, pontuação e medidas administrativas desenvolvida para agilidade operacional sem conexão.",
        architectureNotes:
          "Arquitetura pragmática em 3 camadas (UI Compose -> ViewModel/State -> Room Repository) garantindo busca instantânea indexada localmente.",
        stack: ["Kotlin", "Jetpack Compose", "Room Database", "Material 3", "AdMob"],
        iconSrc: "/media/qtc-transito.webp",
        primaryLink: {
          url: "https://play.google.com/store/apps/details?id=com.luisleite.qtctransito&hl=pt_BR",
          label: "Google Play",
        },
      },
      {
        id: "dogs-guide",
        title: "Dogs Guide",
        category: "mobile",
        categoryLabel: "Kotlin Multiplatform",
        status: "Web + App",
        summary:
          "Plataforma completa de cinofilia cobrindo catálogo de raças, guias nutricionais, saúde preventiva e rotinas de treinamento em aplicativo e web.",
        architectureNotes:
          "Módulo compartilhado em Kotlin Multiplatform (KMP) para regras de domínio e validação offline + landing page Astro para distribuição.",
        stack: ["Kotlin Multiplatform", "Compose UI", "SQLDelight", "Astro LP"],
        iconSrc: "/media/dogs-guide.webp",
        primaryLink: {
          url: "https://dogs-guide.ayanokoujifl.com/",
          label: "Visitar Projeto",
        },
      },
      {
        id: "ecclesia",
        title: "Ecclesia",
        category: "mobile",
        categoryLabel: "Kotlin Multiplatform",
        status: "Ativo",
        summary:
          "Aplicativo devocional católico com liturgia diária, orações e referências catequéticas disponíveis integralmente offline para Android e iOS.",
        architectureNotes:
          "Clean Architecture multiplataforma com foco em leitura de longo prazo, cache local de textos litúrgicos e baixo consumo de bateria.",
        stack: ["Kotlin Multiplatform", "Compose Multiplatform", "Clean Architecture"],
        iconSrc: "/media/ecclesia.webp",
      },
      {
        id: "social-openlifts",
        title: "SocialMediaOrchestrator & OpenLifts",
        category: "backend-ai",
        categoryLabel: "Automação IA & Ecossistema Fitness",
        status: "Interno / SaaS",
        summary:
          "Pipeline automatizado de geração e distribuição editorial por agentes de IA aliado ao projeto OpenLifts de tracking e cálculo rigoroso de métricas de treino.",
        architectureNotes:
          "Orquestração desacoplada orientada a contratos e métricas exatas de treino/carga com persistência enxuta em cloud.",
        stack: ["Java / Spring Boot", "Kotlin KMP", "LLMs", "PostgreSQL", "Docker"],
      },
      {
        id: "pmmg-cpe",
        title: "CPE / PMMG Mobile de Campo",
        category: "mobile",
        categoryLabel: "Segurança Pública • PMMG",
        status: "Produção Institucional",
        summary:
          "Aplicativo operacional desenvolvido durante atuação na PMMG para apoio em campo com sincronização via APIs Spring Boot e telemetria para centros de comando.",
        architectureNotes:
          "Cliente mobile React Native integrado a microsserviços RESTful em Java Spring Boot com dashboards D3.js e Power BI.",
        stack: ["React Native", "Java", "Spring Boot", "D3.js", "Power BI"],
        gallery: [
          { src: cpe1, caption: "Interface operacional de acesso em campo" },
          { src: cpe2, caption: "Módulo de consulta tática" },
          { src: cpe3, caption: "Listagem e detalhamento de registros" },
          { src: cpe4, caption: "Fluxo de registro em operação" },
          { src: cpe5, caption: "Visão consolidada do aplicativo" },
        ],
      },
      {
        id: "dentista-odonto",
        title: "Dr. Luís Gustavo Leite — Odontologia 3D",
        category: "web-3d",
        categoryLabel: "Landing Page 3D • Saúde",
        status: "Publicado",
        summary:
          "Landing page editorial em scrollytelling 3D para ortodontia digital, clareamento supervisionado e estética, conectando renders do Blender à reserva de consulta.",
        architectureNotes:
          "Astro SSG com sequências WebP transparentes acionadas por scroll, integração Resend serverless na Vercel e roteamento direto para avaliação em BH.",
        stack: ["Astro", "Blender 3D", "WebP Scrollytelling", "Resend API", "Vercel"],
        staticCover: dentistHeroImg,
        gallery: [
          { src: dentistHeroImg, caption: "Hero com arcada e alinhadores transparentes em 3D" },
          { src: dentistWhiteningImg, caption: "Simulação interativa 3D de clareamento dental" },
        ],
        primaryLink: {
          url: "https://dentist.ayanokoujifl.com",
          label: "Abrir Site",
        },
      },
      {
        id: "barbearia-julios",
        title: "Julio's Barbearia — Assinatura 3D",
        category: "web-3d",
        categoryLabel: "Landing Page 3D • Grooming",
        status: "Publicado",
        summary:
          "Experiência web para a Julio's Barbearia com navalhete 3D articulado animado pela rolagem e direcionamento direto para o aplicativo de agendamento.",
        architectureNotes:
          "Astro SSG + Tailwind CSS v4 com modelagem hard-surface do navalhete no Blender sincronizada ao scroll sem sacrificar Core Web Vitals.",
        stack: ["Astro", "Tailwind v4", "Blender 3D", "ScrollTrigger"],
        staticCover: barbershopHeroImg,
        primaryLink: {
          url: "https://barbershop.ayanokoujifl.com",
          label: "Abrir Site",
        },
      },
      {
        id: "advocacia-ferreira",
        title: "Advocacia Ferreira — Estratégia Digital",
        category: "web-3d",
        categoryLabel: "Web & Storytelling 3D • Direito",
        status: "Publicado",
        summary:
          "Landing page jurídica estruturada como partida de xadrez em 5 atos 3D para escritórios boutique de Direito Empresarial e Contencioso em Belo Horizonte.",
        architectureNotes:
          "Astro SSG + Vercel Edge com processamento otimizado via Sharp, renders 3D autorais e fluxo de análise preliminar via Resend API.",
        stack: ["Astro", "Blender 3D", "Resend API", "Sharp", "Vercel"],
        staticCover: advocacyHeroImg,
        gallery: [
          { src: advocacyHeroImg, caption: "Ato I — Abertura com tabuleiro estratégico 3D" },
          { src: advocacyAto2Img, caption: "Ato II — Desenvolvimento visual e leitura de cenários" },
        ],
        primaryLink: {
          url: "https://advocacy-lg.vercel.app",
          label: "Abrir Site",
        },
      },
      {
        id: "jack-massoterapia",
        title: "Jack Massoterapia — Alívio & Recuperação",
        category: "web-3d",
        categoryLabel: "Web & Ilha Interativa 3D",
        status: "Publicado",
        summary:
          "Landing page focada em recuperação muscular e tratamentos terapêuticos com arquitetura Astro combinada a ilha React e cena Spline 3D.",
        architectureNotes:
          "Astro + React Islands (@astrojs/react) com @splinetool/react-spline e Tailwind CSS v4 para carregamento seletivo da camada 3D.",
        stack: ["Astro", "React Island", "Spline 3D", "Tailwind CSS"],
        staticCover: massageHeroImg,
        primaryLink: {
          url: "https://massage-lg.vercel.app",
          label: "Abrir Site",
        },
      },
      {
        id: "oliveira-rosa",
        title: "Oliveira Rosa Advocacia",
        category: "web-3d",
        categoryLabel: "Web Institucional",
        status: "Publicado",
        summary:
          "Portal institucional para escritório jurídico com arquitetura de conteúdo clara, foco em conversão orgânica e desempenho sólido em mobile.",
        architectureNotes:
          "Next.js App Router + Tailwind CSS otimizado para Core Web Vitals e SEO local.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        staticCover: oliveiraImg,
        primaryLink: {
          url: "https://oliveira-rosa.vercel.app",
          label: "Abrir Site",
        },
      },
    ],
  },

  en: {
    meta: {
      homeTitle: "Luís Gustavo Leite — Mobile, Backend & 3D Web Software Engineer",
      homeDescription:
        "Software Engineering Portfolio of Luís Gustavo Leite. Experience across Drogaria Araujo S/A, Ford Motor Company, and PMMG. Kotlin, Spring Boot, Next.js, Astro & Hexagonal Architecture.",
      projectsTitle: "Projects & Architecture | Luís Gustavo Leite",
      projectsDescription:
        "Technical case studies in Kotlin Multiplatform, Java 21 / Spring Boot WebFlux, GraalVM Native Image, AI agents, and Blender 3D Astro landing pages.",
      aboutTitle: "About & Resume | Luís Gustavo Leite",
      aboutDescription:
        "Career timeline, academic background, AWS certification, and downloadable PDF resume of Luís Gustavo Leite.",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About & CV",
      downloadCv: "Download CV (PDF)",
      switchToLabel: "PT",
    },
    hero: {
      badge: "Software Engineer • Mobile, Backend & Data",
      greeting: "Luís Gustavo Leite",
      roleTitle: "Clean architecture, resilient apps, and high-performance 3D web.",
      summary:
        "3+ years delivering mission-critical software and production apps — building enterprise data pipelines at Drogaria Araujo S/A, R&D interfaces at Ford Motor Company, public-safety systems at PMMG, and independent Google Play apps.",
      primaryCta: "Explore Projects",
      secondaryCta: "Timeline & Resume",
      cvCta: "Download Resume (EN)",
      metrics: [
        { value: "99.9%", label: "Crash-free sessions on Minha Escala" },
        { value: "-40%", label: "Cold start reduction via Native Kotlin" },
        { value: "3+ Years", label: "Critical systems & apps in production" },
      ],
    },
    homeSections: {
      featuredEyebrow: "Selected Case Studies",
      featuredTitle: "From GraalVM Native Image to Kotlin Multiplatform",
      featuredSubtitle:
        "Architectural choices grounded in domain isolation (Hexagonal / Clean Architecture), predictable latency, and real-world reliability.",
      viewAllProjects: "Explore all engineering projects →",
      stackEyebrow: "Technical Ecosystem",
      stackTitle: "Core Skills & Architecture",
      stackSubtitle:
        "End-to-end engineering spanning native Android/KMP, reactive Spring services, streaming data pipelines, and 3D interfaces.",
      experiencePreviewEyebrow: "Verified Background",
      experiencePreviewTitle: "Industry Experience",
      fullResumeCta: "Full career timeline & PDF downloads →",
    },
    projectsPage: {
      eyebrow: "Case Studies & Products",
      title: "Production Engineering",
      subtitle:
        "Reactive microservices, published Play Store applications, AI workflows, and real Blender + Astro 3D web experiences.",
      filters: [
        { id: "all", label: "All" },
        { id: "backend-ai", label: "Backend, Cloud & AI" },
        { id: "mobile", label: "Mobile & KMP" },
        { id: "web-3d", label: "Web & 3D Blender" },
      ],
      inspectGalleryLabel: "Inspect UI screens",
      architectureLabel: "Architectural Decision",
      blenderHeading: "Interactive WebP 3D Previews",
      blenderNote: "Select any tab to inspect a live 3D Blender WebP asset used in production.",
    },
    aboutPage: {
      eyebrow: "Resume & Experience",
      title: "Career & Engineering Path",
      subtitle:
        "Shipping scalable domain-driven software across enterprise data architecture, automotive R&D prototyping, public safety, and independent products.",
      experienceHeading: "Professional Experience",
      educationHeading: "Education",
      certificationsHeading: "Certifications & Courses",
      languagesHeading: "Languages",
      skillsHeading: "Competency Matrix",
      downloadPtLabel: "Download Currículo (Portuguese PDF)",
      downloadEnLabel: "Download Resume (English PDF)",
      directContactHeading: "Direct Contact & Links",
    },
    footer: {
      tagline: "Mobile, Backend & 3D Web Software Engineering — Belo Horizonte, Brazil.",
      rights: "All rights reserved.",
      resumePt: "CV PT (PDF)",
      resumeEn: "Resume EN (PDF)",
    },
    stackGroups: [
      {
        name: "Native & Cross-Platform Mobile",
        items: ["Kotlin (Expert)", "Jetpack Compose", "Kotlin Multiplatform (KMP)", "Android SDK", "Room / SQLite", "Coroutines & Flow", "React Native"],
      },
      {
        name: "Backend & Software Architecture",
        items: ["Java 21+", "Spring Boot 3 (WebFlux)", "GraalVM Native Image", "Hexagonal Architecture", "Clean Architecture", "SOLID / DDD"],
      },
      {
        name: "Data Engineering & Streaming",
        items: ["PostgreSQL (R2DBC)", "SQL Server", "Apache Kafka", "Kafka Connect", "IBM DataStage", "MuleSoft"],
      },
      {
        name: "Frontend, 3D & Cloud",
        items: ["Next.js (App Router)", "Astro SSG", "TypeScript", "Tailwind CSS", "Blender 3D / WebP", "GCP Cloud Run", "Docker", "AWS Certified"],
      },
    ],
    experiences: [
      {
        company: "Drogaria Araujo S/A",
        location: "Belo Horizonte, Brazil",
        role: "Data & Architecture Engineer",
        period: "August 2025 – Present",
        highlights: [
          "Designed and maintained enterprise ETL/ELT pipelines with IBM DataStage and MuleSoft for mission-critical retail operations.",
          "Implemented real-time event streaming with Apache Kafka and Kafka Connect connecting legacy and modern BI workloads.",
          "Tuned SQL Server queries and containerized integration workloads with Docker, reducing pipeline failure points.",
        ],
        stack: ["IBM DataStage", "MuleSoft", "Apache Kafka", "Kafka Connect", "SQL Server", "Docker"],
      },
      {
        company: "Ford Motor Company",
        location: "Remote (R&D)",
        role: "Software Engineer – Frontend",
        period: "August 2025 – August 2026",
        mode: "Part-time • Global Automotive Innovation",
        highlights: [
          "Built experimental Next.js and React interfaces for global automotive R&D initiatives.",
          "Integrated Blender 3D models into interactive UI/UX prototypes showcasing emerging vehicle concepts.",
          "Translated user research findings into responsive, accessible, high-performance web prototypes.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Blender 3D"],
      },
      {
        company: "Military Police of Minas Gerais (PMMG)",
        location: "Belo Horizonte, Brazil",
        role: "Software Engineer – Mobile & Backend",
        period: "June 2023 – June 2025",
        highlights: [
          "Engineered and modernized mission-critical public safety software: field mobile app in React Native and Spring Boot APIs.",
          "Architected scalable RESTful APIs handling sensitive statewide traffic and operational records in real time.",
          "Built command-center analytical dashboards using D3.js and Power BI to support tactical decision-making.",
        ],
        stack: ["Java / Spring Boot", "React Native", "REST APIs", "D3.js", "Power BI"],
      },
      {
        company: "Independent Developer (SaaS & Mobile)",
        location: "Belo Horizonte, Brazil",
        role: "Owner & Lead Developer",
        period: "January 2023 – Present",
        highlights: [
          "Minha Escala (Play Store): Shift management Android app built with Hexagonal Architecture (Kotlin/Compose), reaching 99.9% crash-free sessions and -40% cold start.",
          "Wallet Agent: Reactive Kotlin + Spring Boot 3 (WebFlux/Coroutines) compiled to GraalVM Native Image with R2DBC PostgreSQL, Pluggy Open Finance, and Gemini AI.",
          "Built and shipped QTC Trânsito, Dogs Guide, Ecclesia, OpenLifts, and Blender-backed Astro 3D landing pages.",
        ],
        stack: ["Kotlin", "KMP", "Spring WebFlux", "GraalVM", "Next.js", "Astro", "Cloud Run"],
      },
    ],
    education: [
      {
        institution: "UNA (EAD)",
        degree: "B.S. in Information Systems",
        period: "Expected Graduation: 2026",
      },
      {
        institution: "Federal Institute of Minas Gerais (IFMG)",
        degree: "Technical Degree in Informatics (Integrated High School)",
        period: "Completed: 2022",
      },
    ],
    certifications: [
      "AWS Certified (Amazon Web Services)",
      "Technical specializations in Kotlin, Android Development, Spring Boot & Software Architecture",
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Professional working proficiency" },
    ],
    projects: [
      {
        id: "wallet-agent",
        title: "Wallet Agent",
        category: "backend-ai",
        categoryLabel: "Reactive Backend & AI",
        status: "In Production",
        featured: true,
        summary:
          "AI-powered financial management SaaS integrating a multimodal WhatsApp assistant for expense tracking via voice, text, and receipt photos.",
        architectureNotes:
          "Reactive Kotlin + Spring Boot 3 (WebFlux/Coroutines) compiled to GraalVM Native Image on Cloud Run. Strict Hexagonal domain, PostgreSQL R2DBC, Pluggy Open Finance, and Gemini API.",
        stack: ["Kotlin", "Spring WebFlux", "GraalVM Native", "PostgreSQL R2DBC", "Gemini AI", "Pluggy", "Next.js"],
        iconSrc: "/media/wallet-agent.webp",
        darkIconBg: true,
        staticCover: walletAgentCover,
        primaryLink: {
          url: "https://wallet-agent.ayanokoujifl.com",
          label: "Open Platform",
        },
      },
      {
        id: "minha-escala",
        title: "Minha Escala",
        category: "mobile",
        categoryLabel: "Android App • Play Store",
        status: "99.9% Crash-Free",
        featured: true,
        summary:
          "Published Android app enabling shift workers to track schedules, incidents, appointments, and monthly earnings projections cleanly offline.",
        architectureNotes:
          "Migrated to native Kotlin + Jetpack Compose under Hexagonal Architecture with offline Room/SQLite persistence, reducing cold start by 40% while sustaining 99.9% crash-free sessions.",
        stack: ["Kotlin", "Jetpack Compose", "Hexagonal Architecture", "Room / SQLite", "AdMob"],
        iconSrc: "/media/minha-escala.webp",
        staticCover: minhaEscalaCover,
        gallery: [
          { src: meHome, caption: "Home schedule & shift overview" },
          { src: meFinancial, caption: "Monthly financial & overtime projection" },
          { src: meShiftForm, caption: "Shift registration form" },
          { src: meOccurrences, caption: "Incident & operational log" },
          { src: meAppointment, caption: "Personal schedule sheet" },
        ],
        primaryLink: {
          url: "https://play.google.com/store/apps/details?id=com.luisleite.minhaescala&hl=pt_BR",
          label: "Google Play",
        },
        secondaryLink: {
          url: "https://minha-escala.ayanokoujifl.com",
          label: "Landing Page",
        },
      },
      {
        id: "astro-3d-lps",
        title: "Astro + Blender 3D Showcase",
        category: "web-3d",
        categoryLabel: "Web Performance & 3D",
        status: "4 Production Scenes",
        featured: true,
        summary:
          "2D/3D WebP scrollytelling engine built for dental clinics, luxury barbershops, and automotive film studios — delivering smooth motion without multi-megabyte video bloat.",
        architectureNotes:
          "Custom Blender hard-surface and translucent shaders exported to lightweight WebP loops paired with Astro SSG, Tailwind CSS v4, and serverless Resend capture on Vercel.",
        stack: ["Astro", "Tailwind v4", "Blender 3D", "WebP Engine", "Resend API", "Vercel Edge"],
        models3d: blenderPreviewsEn,
        primaryLink: {
          url: "https://insufilm.ayanokoujifl.com",
          label: "Skyline 3D Live",
        },
        secondaryLink: {
          url: "https://dentist.ayanokoujifl.com",
          label: "Dental 3D Live",
        },
      },
      {
        id: "qtc-transito",
        title: "QTC Trânsito",
        category: "mobile",
        categoryLabel: "Android App • Play Store",
        status: "Google Play",
        summary:
          "Offline-first Android reference tool indexing Brazilian traffic infraction codes, penalties, and administrative measures with instant search.",
        architectureNotes:
          "Pragmatic 3-layer Compose + ViewModel + Room database architecture tailored for instant field lookups without connectivity.",
        stack: ["Kotlin", "Jetpack Compose", "Room Database", "Material 3", "AdMob"],
        iconSrc: "/media/qtc-transito.webp",
        primaryLink: {
          url: "https://play.google.com/store/apps/details?id=com.luisleite.qtctransito&hl=pt_BR",
          label: "Google Play",
        },
      },
      {
        id: "dogs-guide",
        title: "Dogs Guide",
        category: "mobile",
        categoryLabel: "Kotlin Multiplatform",
        status: "Web + App",
        summary:
          "Cross-platform canine companion platform covering dog breeds, nutritional reference guides, preventive health, and obedience routines.",
        architectureNotes:
          "Shared Kotlin Multiplatform (KMP) domain core paired with offline storage and an Astro promotional site.",
        stack: ["Kotlin Multiplatform", "Compose UI", "SQLDelight", "Astro LP"],
        iconSrc: "/media/dogs-guide.webp",
        primaryLink: {
          url: "https://dogs-guide.ayanokoujifl.com/",
          label: "Visit Project",
        },
      },
      {
        id: "ecclesia",
        title: "Ecclesia",
        category: "mobile",
        categoryLabel: "Kotlin Multiplatform",
        status: "Active",
        summary:
          "Offline-first Catholic devotional app providing daily liturgy, traditional prayers, and catechism references across Android and iOS.",
        architectureNotes:
          "Multiplatform Clean Architecture designed around crisp editorial typography, local liturgical caching, and minimal battery impact.",
        stack: ["Kotlin Multiplatform", "Compose Multiplatform", "Clean Architecture"],
        iconSrc: "/media/ecclesia.webp",
      },
      {
        id: "social-openlifts",
        title: "SocialMediaOrchestrator & OpenLifts",
        category: "backend-ai",
        categoryLabel: "AI Automation & Fitness SaaS",
        status: "Proprietary",
        summary:
          "Autonomous AI content orchestration pipeline alongside OpenLifts, a KMP/cloud strength-training platform enforcing exact mathematical load tracking.",
        architectureNotes:
          "Modular contract-driven backend workflows and deterministic training/volume computation engines.",
        stack: ["Java / Spring Boot", "Kotlin KMP", "LLMs", "PostgreSQL", "Docker"],
      },
      {
        id: "pmmg-cpe",
        title: "CPE / PMMG Field Mobile App",
        category: "mobile",
        categoryLabel: "Public Safety • PMMG",
        status: "Enterprise Production",
        summary:
          "Operational field application engineered at PMMG synchronizing mobile workflows with Spring Boot microservices and command-center telemetry.",
        architectureNotes:
          "React Native field client integrated with hardened Java Spring Boot REST APIs and D3.js / Power BI command dashboards.",
        stack: ["React Native", "Java", "Spring Boot", "D3.js", "Power BI"],
        gallery: [
          { src: cpe1, caption: "Operational field access dashboard" },
          { src: cpe2, caption: "Tactical query interface" },
          { src: cpe3, caption: "Record listing & verification view" },
          { src: cpe4, caption: "Field submission flow" },
          { src: cpe5, caption: "Consolidated overview" },
        ],
      },
      {
        id: "dentista-odonto",
        title: "Dr. Luís Gustavo Leite — 3D Dental Studio",
        category: "web-3d",
        categoryLabel: "3D Landing Page • Healthcare",
        status: "Live",
        summary:
          "3D scrollytelling landing page for digital orthodontics, supervised whitening, and aesthetics — bridging custom Blender sequences with consultation booking.",
        architectureNotes:
          "Astro SSG driving scroll-scrubbed RGBA WebP renders paired with serverless Resend lead capture on Vercel.",
        stack: ["Astro", "Blender 3D", "WebP Scrollytelling", "Resend API", "Vercel"],
        staticCover: dentistHeroImg,
        gallery: [
          { src: dentistHeroImg, caption: "Hero showcase with floating 3D dental arch and aligners" },
          { src: dentistWhiteningImg, caption: "Interactive 3D teeth whitening simulation stage" },
        ],
        primaryLink: {
          url: "https://dentist.ayanokoujifl.com",
          label: "Visit Live Site",
        },
      },
      {
        id: "barbearia-julios",
        title: "Julio's Barbershop — 3D Signature Web",
        category: "web-3d",
        categoryLabel: "3D Landing Page • Grooming",
        status: "Live",
        summary:
          "Editorial barbershop showcase featuring a scroll-animated custom 3D straight razor feeding directly into online mobile booking.",
        architectureNotes:
          "Astro SSG + Tailwind CSS v4 paired with hard-surface Blender razor renders synchronized to viewport scroll without main-thread jank.",
        stack: ["Astro", "Tailwind v4", "Blender 3D", "ScrollTrigger"],
        staticCover: barbershopHeroImg,
        primaryLink: {
          url: "https://barbershop.ayanokoujifl.com",
          label: "Visit Live Site",
        },
      },
      {
        id: "advocacia-ferreira",
        title: "Advocacia Ferreira — Legal 3D Strategy",
        category: "web-3d",
        categoryLabel: "3D Narrative Web • Legal",
        status: "Live",
        summary:
          "Boutique corporate law portal structured as a 5-act interactive chess narrative for high-stakes litigation and tax planning in Brazil.",
        architectureNotes:
          "Astro SSG deployed on Vercel with Sharp image pipelines, custom Blender scenes, and confidential Resend intake forms.",
        stack: ["Astro", "Blender 3D", "Resend API", "Sharp", "Vercel"],
        staticCover: advocacyHeroImg,
        gallery: [
          { src: advocacyHeroImg, caption: "Act I — Opening dark-gold 3D chessboard stage" },
          { src: advocacyAto2Img, caption: "Act II — Strategic legal preparation walkthrough" },
        ],
        primaryLink: {
          url: "https://advocacy-lg.vercel.app",
          label: "Visit Live Site",
        },
      },
      {
        id: "jack-massoterapia",
        title: "Jack Massage Therapy — Web & 3D Island",
        category: "web-3d",
        categoryLabel: "Web & 3D React Island",
        status: "Live",
        summary:
          "Sports recovery and wellness landing page combining Astro's zero-JS shell with a React island for Spline 3D integration and booking conversion.",
        architectureNotes:
          "Astro + React (@astrojs/react) with @splinetool/react-spline and Tailwind CSS v4 for isolated 3D hydration.",
        stack: ["Astro", "React Island", "Spline 3D", "Tailwind CSS"],
        staticCover: massageHeroImg,
        primaryLink: {
          url: "https://massage-lg.vercel.app",
          label: "Visit Live Site",
        },
      },
      {
        id: "oliveira-rosa",
        title: "Oliveira Rosa Law Firm Portal",
        category: "web-3d",
        categoryLabel: "Corporate Web",
        status: "Live",
        summary:
          "Responsive institutional portal for a Brazilian law practice built for brand authority, organic search visibility, and client conversion.",
        architectureNotes:
          "Next.js App Router + Tailwind CSS engineered for fast mobile loads and local SEO.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        staticCover: oliveiraImg,
        primaryLink: {
          url: "https://oliveira-rosa.vercel.app",
          label: "Visit Live Site",
        },
      },
    ],
  },
}
