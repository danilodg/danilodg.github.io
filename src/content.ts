import auralithUiImage from './assets/project-auralith-ui.svg'
import landingTemplatesImage from './assets/project-landing-templates.svg'

export type Language = 'pt' | 'en'

export type SiteContent = {
  meta: {
    title: string
  }
  themeLabels: Record<'system' | 'light' | 'dark', string>
  languageLabel: string
  languageOptions: Record<Language, string>
  nav: {
    about: string
    services: string
    recommendations: string
    projects: string
    contact: string
  }
  hero: {
    label: string
    role: string
    description: string
    primaryCta: string
    secondaryCta: string
    technologiesAriaLabel: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    items: Array<{
      title: string
      description: string
    }>
  }
  servicesSection: {
    label: string
    title: string
    items: Array<{
      title: string
      category: string
      description: string
      highlights: string[]
    }>
  }
  recommendationsSection: {
    label: string
    title: string
    items: Array<{
      name: string
      role: string
      company: string
      quote: string
    }>
  }
  projectsSection: {
    label: string
    title: string
    featuredLabel: string
    viewMore: string
    closeModal: string
    cta: string
    items: Array<{
      title: string
      type: string
      summary: string
      image: string
      technologies: string[]
      details: string
      highlights: string[]
      projectUrl?: string
      repositoryUrl?: string
      projectLabel?: string
    }>
    openProjectLabel: string
    openRepositoryLabel: string
  }
  contact: {
    label: string
    title: string
    intro: string
    responseTitle: string
    responseText: string
    focusTitle: string
    focusText: string
    directChannelTitle: string
    directChannelFallback: string
    subjectValue: string
    formLabels: {
      name: string
      email: string
      subject: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      subject: string
      message: string
    }
    status: {
      idle: string
      sending: string
      success: string
      error: string
      missingEmail: string
      submitError: string
    }
    submit: string
    submitting: string
  }
  footer: {
    label: string
    title: string
    description: string
    availability: string
  }
  preview: {
    analytics: {
      maxLabel: string
      minLabel: string
    }
    code: {
      statsLabel: string
      repos: string
      followers: string
      following: string
    }
    revenue: {
      marketLabel: string
      bestLabel: string
    }
    githubFallback: {
      noLanguage: string
      now: string
      recently: string
    }
  }
}

export const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Python',
  'C#',
  'MySQL',
  'Git',
  'GitHub',
]

export const siteContent: Record<Language, SiteContent> = {
  pt: {
    meta: {
      title: 'Danilo Gomes | Desenvolvedor Full Stack',
    },
    themeLabels: {
      system: 'Sistema',
      light: 'Claro',
      dark: 'Escuro',
    },
    languageLabel: 'Idioma',
    languageOptions: {
      pt: 'PT',
      en: 'EN',
    },
    nav: {
      about: 'Home',
      services: 'Servicos',
      recommendations: 'Reviews',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      label: 'Portfolio',
      role: 'Desenvolvedor Full Stack',
      description: 'Construo experiencias web modernas com visual marcante, codigo bem estruturado e solucoes pensadas para negocio.',
      primaryCta: 'Ver projetos',
      secondaryCta: 'Falar comigo',
      technologiesAriaLabel: 'Principais tecnologias',
    },
    about: {
      label: 'Sobre mim',
      title: 'Desenvolvimento sob medida com foco em clareza e resultado',
      paragraphs: [
        'Sou Danilo, desenvolvedor full stack com foco em criar produtos digitais que unem interface forte, organizacao tecnica e boa experiencia de uso.',
        'Meu objetivo e transformar ideias em sistemas bem resolvidos, com front-end moderno, back-end confiavel e estrutura pronta para evoluir.',
      ],
      items: [
        { title: 'Front-end', description: 'React, TypeScript, interfaces responsivas' },
        { title: 'Back-end', description: 'Node.js, APIs, integracoes e regras de negocio' },
        { title: 'Entrega', description: 'Codigo limpo, manutencao simples e visual premium' },
      ],
    },
    servicesSection: {
      label: 'Servicos',
      title: 'Solucoes que posso desenvolver para o seu negocio ou produto',
      items: [
        {
          title: 'Plataformas web sob medida',
          category: 'Full stack',
          description: 'Aplicacoes com front moderno, API organizada e foco em experiencia clara para o usuario.',
          highlights: ['Arquitetura escalavel', 'Fluxos claros', 'Entrega responsiva'],
        },
        {
          title: 'Dashboards e integracoes',
          category: 'Dados e automacao',
          description: 'Paineis visuais, formularios inteligentes e integracoes para transformar processos em fluxos simples.',
          highlights: ['Visao operacional', 'Integracoes conectadas', 'Automacao de tarefas'],
        },
        {
          title: 'Interfaces responsivas',
          category: 'UI engineering',
          description: 'Layouts pensados para desktop e mobile com desempenho, consistencia visual e navegacao objetiva.',
          highlights: ['Performance visual', 'Consistencia mobile', 'Navegacao objetiva'],
        },
      ],
    },
    recommendationsSection: {
      label: 'Recomendacoes',
      title: 'Percepcao de quem ja construiu projetos e processos comigo',
      items: [],
    },
    projectsSection: {
      label: 'Projetos',
      title: 'Projetos reais que ja desenvolvi',
      featuredLabel: 'Projeto em destaque',
      viewMore: 'Ver mais detalhes',
      closeModal: 'Fechar modal',
      cta: 'Quero um projeto nesse nivel',
      openProjectLabel: 'Ver projeto',
      openRepositoryLabel: 'Ver repositorio',
      items: [
        {
          title: 'Auralith UI - biblioteca de componentes React',
          type: 'Design system',
          summary: 'Biblioteca publicada no npm com componentes, tokens visuais e documentacao integrada.',
          image: auralithUiImage,
          technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'npm'],
          details: 'Criei uma biblioteca de UI reutilizavel com foco em consistencia visual, produtividade e composicao de interfaces modernas.',
          projectUrl: 'https://danilodg.github.io/auralith-ui/?lang=pt',
          repositoryUrl: 'https://github.com/danilodg/auralith-ui',
          projectLabel: 'Ver documentacao',
          highlights: [
            'Pacote publicado como auralith-ui no npm',
            'Componentes prontos como Button, Input, Card, Modal e SideRail',
            'Base com tokens e estilos para manter consistencia entre projetos',
          ],
        },
        {
          title: 'Landing Pages Templates',
          type: 'Builder web',
          summary: 'Projeto para criar landing pages com wizard em etapas, temas visuais e preview em tempo real.',
          image: landingTemplatesImage,
          technologies: ['React', 'TypeScript', 'Vite', 'Material UI'],
          details: 'Desenvolvi um construtor de landing pages com configuracao guiada, variacoes de layout e personalizacao visual para acelerar entregas.',
          repositoryUrl: 'https://github.com/danilodg/landing-pages-templates',
          highlights: [
            'Wizard com etapas de negocio, estilo, layout e conteudo',
            'Preview dinamico da landing com secoes completas',
            'Arquitetura pronta para evoluir novos templates',
          ],
        },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Vamos transformar sua ideia em projeto',
      intro: 'Se voce quer tirar um projeto do papel, melhorar um sistema atual ou criar uma interface com presenca mais forte, me envie uma mensagem.',
      responseTitle: 'Resposta',
      responseText: 'Retorno por email com alinhamento inicial e proximos passos.',
      focusTitle: 'Foco',
      focusText: 'Sites profissionais, sistemas web, APIs e melhorias visuais.',
      directChannelTitle: 'Canal direto',
      directChannelFallback: 'Configure seu email para ativar o envio real.',
      subjectValue: 'Novo contato pelo portfolio',
      formLabels: {
        name: 'Nome',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
      },
      placeholders: {
        name: 'Seu nome',
        email: 'voce@email.com',
        subject: 'Sobre o que voce quer conversar?',
        message: 'Me conte um pouco sobre seu projeto',
      },
      status: {
        idle: 'Preencha os campos para enviar sua mensagem.',
        sending: 'Enviando mensagem...',
        success: 'Mensagem enviada com sucesso. Vou te responder em breve.',
        error: 'O envio falhou. Tente novamente em alguns instantes.',
        missingEmail: 'Defina `VITE_CONTACT_EMAIL` para ativar o envio automatico do formulario.',
        submitError: 'Nao foi possivel enviar agora.',
      },
      submit: 'Enviar mensagem',
      submitting: 'Enviando...',
    },
    footer: {
      label: 'Contato direto',
      title: 'Vamos conversar sobre o seu proximo projeto',
      description: 'Se voce precisa de uma landing page, dashboard ou sistema web, eu posso te ajudar a transformar a ideia em uma entrega clara e bem resolvida.',
      availability: 'Disponivel para novos projetos e freelas',
    },
    preview: {
      analytics: {
        maxLabel: 'Maxima 7 dias',
        minLabel: 'Minima',
      },
      code: {
        statsLabel: 'Profile stats',
        repos: 'Repos',
        followers: 'Followers',
        following: 'Following',
      },
      revenue: {
        marketLabel: 'BRL market',
        bestLabel: 'Melhor 24h',
      },
      githubFallback: {
        noLanguage: 'Sem linguagem',
        now: 'agora',
        recently: 'recentemente',
      },
    },
  },
  en: {
    meta: {
      title: 'Danilo Gomes | Full Stack Developer',
    },
    themeLabels: {
      system: 'System',
      light: 'Light',
      dark: 'Dark',
    },
    languageLabel: 'Language',
    languageOptions: {
      pt: 'PT',
      en: 'EN',
    },
    nav: {
      about: 'Home',
      services: 'Services',
      recommendations: 'Reviews',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      label: 'Portfolio',
      role: 'Full Stack Developer',
      description: 'I build modern web experiences with strong visual direction, well-structured code, and solutions shaped around business needs.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
      technologiesAriaLabel: 'Core technologies',
    },
    about: {
      label: 'About me',
      title: 'Custom development focused on clarity and results',
      paragraphs: [
        'I am Danilo, a full stack developer focused on building digital products that combine strong interfaces, solid technical structure, and a smooth user experience.',
        'My goal is to turn ideas into well-crafted systems with modern front-end, reliable back-end, and an architecture ready to grow.',
      ],
      items: [
        { title: 'Front-end', description: 'React, TypeScript, responsive interfaces' },
        { title: 'Back-end', description: 'Node.js, APIs, integrations, and business rules' },
        { title: 'Delivery', description: 'Clean code, simple maintenance, and premium visual quality' },
      ],
    },
    servicesSection: {
      label: 'Services',
      title: 'Solutions I can build for your business or product',
      items: [
        {
          title: 'Custom web platforms',
          category: 'Full stack',
          description: 'Applications with modern front-end, organized APIs, and a clear user experience.',
          highlights: ['Scalable architecture', 'Clear flows', 'Responsive delivery'],
        },
        {
          title: 'Dashboards and integrations',
          category: 'Data and automation',
          description: 'Visual dashboards, smart forms, and integrations that turn complex processes into simple flows.',
          highlights: ['Operational visibility', 'Connected integrations', 'Task automation'],
        },
        {
          title: 'Responsive interfaces',
          category: 'UI engineering',
          description: 'Layouts designed for desktop and mobile with performance, visual consistency, and clear navigation.',
          highlights: ['Visual performance', 'Mobile consistency', 'Clear navigation'],
        },
      ],
    },
    recommendationsSection: {
      label: 'Recommendations',
      title: 'What people say after building projects and processes with me',
      items: [],
    },
    projectsSection: {
      label: 'Projects',
      title: 'Real projects I have built',
      featuredLabel: 'Featured project',
      viewMore: 'View more details',
      closeModal: 'Close modal',
      cta: 'I want a project at this level',
      openProjectLabel: 'Open project',
      openRepositoryLabel: 'View repository',
      items: [
        {
          title: 'Auralith UI - React component library',
          type: 'Design system',
          summary: 'npm-published UI library with reusable components, visual tokens, and integrated documentation.',
          image: auralithUiImage,
          technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'npm'],
          details: 'I built a reusable UI library focused on visual consistency, implementation speed, and modern interface composition.',
          projectUrl: 'https://danilodg.github.io/auralith-ui/?lang=en',
          repositoryUrl: 'https://github.com/danilodg/auralith-ui',
          projectLabel: 'Open documentation',
          highlights: [
            'Published package as auralith-ui on npm',
            'Ready-to-use components like Button, Input, Card, Modal, and SideRail',
            'Token-based style foundation for consistency across products',
          ],
        },
        {
          title: 'Landing Pages Templates',
          type: 'Web builder',
          summary: 'A project to build landing pages with a guided wizard, visual styles, and real-time preview.',
          image: landingTemplatesImage,
          technologies: ['React', 'TypeScript', 'Vite', 'Material UI'],
          details: 'I developed a landing page builder with step-by-step configuration, layout variations, and visual customization to speed up deliveries.',
          repositoryUrl: 'https://github.com/danilodg/landing-pages-templates',
          highlights: [
            'Wizard with business type, style, layout, and content steps',
            'Dynamic landing preview with complete sections',
            'Architecture ready to evolve with new templates',
          ],
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Let us turn your idea into a project',
      intro: 'If you want to launch a project, improve an existing system, or create an interface with stronger presence, send me a message.',
      responseTitle: 'Response',
      responseText: 'I reply by email with an initial alignment and next steps.',
      focusTitle: 'Focus',
      focusText: 'Professional websites, web systems, APIs, and visual improvements.',
      directChannelTitle: 'Direct channel',
      directChannelFallback: 'Configure your email to enable real submissions.',
      subjectValue: 'New contact from portfolio',
      formLabels: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        email: 'you@email.com',
        subject: 'What would you like to talk about?',
        message: 'Tell me a bit about your project',
      },
      status: {
        idle: 'Fill in the fields to send your message.',
        sending: 'Sending message...',
        success: 'Message sent successfully. I will get back to you soon.',
        error: 'Sending failed. Please try again in a moment.',
        missingEmail: 'Set `VITE_CONTACT_EMAIL` to enable automatic form submissions.',
        submitError: 'Unable to send right now.',
      },
      submit: 'Send message',
      submitting: 'Sending...',
    },
    footer: {
      label: 'Direct contact',
      title: 'Let us talk about your next project',
      description: 'If you need a landing page, dashboard, or web system, I can help turn your idea into a clear and polished delivery.',
      availability: 'Available for new projects and freelance work',
    },
    preview: {
      analytics: {
        maxLabel: '7-day high',
        minLabel: 'Low',
      },
      code: {
        statsLabel: 'Profile stats',
        repos: 'Repos',
        followers: 'Followers',
        following: 'Following',
      },
      revenue: {
        marketLabel: 'BRL market',
        bestLabel: 'Best 24h',
      },
      githubFallback: {
        noLanguage: 'No language',
        now: 'now',
        recently: 'recently',
      },
    },
  },
}
