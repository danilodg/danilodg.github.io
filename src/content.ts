import financeAppImage from './assets/project-finance-app.svg'
import medicalLandingImage from './assets/project-medical-landing.svg'
import salesDashboardImage from './assets/project-sales-dashboard.svg'

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
    }>
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
      about: 'Sobre',
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
      items: [
        {
          name: 'Mariana Costa',
          role: 'Product Designer',
          company: 'Studio Norte',
          quote: 'Danilo transforma requisitos complexos em interfaces limpas e bem resolvidas. O processo sempre fica mais claro quando ele entra no projeto.',
        },
        {
          name: 'Rafael Mendes',
          role: 'Founder',
          company: 'LeadOps',
          quote: 'Conseguiu unir velocidade de entrega com organizacao tecnica. O resultado final ficou mais solido do que o escopo inicial imaginava.',
        },
        {
          name: 'Camila Rocha',
          role: 'Project Manager',
          company: 'Nova Stack',
          quote: 'Tem um olhar muito bom para experiencia de uso e para estrutura de codigo. Isso ajuda bastante quando o produto precisa evoluir sem retrabalho.',
        },
      ],
    },
    projectsSection: {
      label: 'Projetos',
      title: 'Alguns projetos que ja tiramos do papel',
      featuredLabel: 'Projeto em destaque',
      viewMore: 'Ver mais detalhes',
      closeModal: 'Fechar modal',
      cta: 'Quero um projeto nesse nivel',
      items: [
        {
          title: 'Landing page para medico especialista',
          type: 'Landing page',
          summary: 'Pagina focada em autoridade, agendamento e conversao para consultas particulares.',
          image: medicalLandingImage,
          technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
          details: 'Projeto pensado para apresentar servicos medicos com uma comunicacao mais confiavel, destacar especialidades e reduzir atrito no agendamento.',
          highlights: [
            'Hero com CTA direto para WhatsApp e formulario de contato',
            'Secoes de especialidades, depoimentos e perguntas frequentes',
            'Layout responsivo com foco em leitura clara no mobile',
          ],
        },
        {
          title: 'Dashboard de vendas e indicadores',
          type: 'Dashboard',
          summary: 'Painel para acompanhar receita, metas e desempenho comercial em tempo real.',
          image: salesDashboardImage,
          technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
          details: 'Sistema desenhado para centralizar metricas de vendas, facilitar leitura por equipe comercial e apoiar decisoes rapidas com dados visuais.',
          highlights: [
            'Cards de KPIs com receita, ticket medio e conversao',
            'Graficos comparativos por periodo, canal e vendedor',
            'Filtros para acompanhamento diario, semanal e mensal',
          ],
        },
        {
          title: 'Carteira de gestao financeira',
          type: 'Aplicativo web',
          summary: 'Produto para organizar contas, metas financeiras e acompanhamento de fluxo de caixa.',
          image: financeAppImage,
          technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
          details: 'Aplicacao voltada para controle financeiro pessoal, com visao de entradas e saidas, metas mensais e categorizacao de lancamentos.',
          highlights: [
            'Resumo de saldo, gastos por categoria e metas do mes',
            'Cadastro de receitas e despesas com filtros rapidos',
            'Experiencia mobile-first para acompanhar a carteira no dia a dia',
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
      about: 'About',
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
      items: [
        {
          name: 'Mariana Costa',
          role: 'Product Designer',
          company: 'Studio Norte',
          quote: 'Danilo turns complex requirements into clean, well-resolved interfaces. The whole process becomes clearer when he joins the project.',
        },
        {
          name: 'Rafael Mendes',
          role: 'Founder',
          company: 'LeadOps',
          quote: 'He combined delivery speed with technical organization. The final result was more solid than what we had originally imagined.',
        },
        {
          name: 'Camila Rocha',
          role: 'Project Manager',
          company: 'Nova Stack',
          quote: 'He has a strong eye for user experience and code structure. That makes a big difference when the product needs to evolve without rework.',
        },
      ],
    },
    projectsSection: {
      label: 'Projects',
      title: 'A few projects I have helped bring to life',
      featuredLabel: 'Featured project',
      viewMore: 'View more details',
      closeModal: 'Close modal',
      cta: 'I want a project at this level',
      items: [
        {
          title: 'Landing page for a medical specialist',
          type: 'Landing page',
          summary: 'A page designed for authority, appointment booking, and conversion for private consultations.',
          image: medicalLandingImage,
          technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
          details: 'This project was designed to present medical services with a stronger sense of trust, highlight specialties, and reduce friction in the booking flow.',
          highlights: [
            'Hero section with direct CTA to WhatsApp and contact form',
            'Specialties, testimonials, and FAQ sections',
            'Responsive layout focused on readable mobile content',
          ],
        },
        {
          title: 'Sales dashboard and KPI tracking',
          type: 'Dashboard',
          summary: 'A panel to monitor revenue, goals, and commercial performance in real time.',
          image: salesDashboardImage,
          technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
          details: 'This system was designed to centralize sales metrics, simplify reading for the commercial team, and support faster decisions with visual data.',
          highlights: [
            'KPI cards with revenue, average ticket, and conversion',
            'Comparative charts by period, channel, and salesperson',
            'Filters for daily, weekly, and monthly tracking',
          ],
        },
        {
          title: 'Financial management wallet',
          type: 'Web app',
          summary: 'A product to organize bills, financial goals, and cash flow tracking.',
          image: financeAppImage,
          technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
          details: 'An application focused on personal finance control with visibility into income and expenses, monthly goals, and transaction categorization.',
          highlights: [
            'Balance overview, category spending, and monthly goals',
            'Income and expense entries with quick filters',
            'Mobile-first experience for daily monitoring',
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
