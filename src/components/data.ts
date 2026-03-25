import financeAppImage from '../assets/project-finance-app.svg'
import medicalLandingImage from '../assets/project-medical-landing.svg'
import salesDashboardImage from '../assets/project-sales-dashboard.svg'

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

export const services = [
  {
    title: 'Plataformas web sob medida',
    category: 'Full stack',
    description:
      'Aplicacoes com front moderno, API organizada e foco em experiencia clara para o usuario.',
    highlights: ['Arquitetura escalavel', 'Fluxos claros', 'Entrega responsiva'],
  },
  {
    title: 'Dashboards e integracoes',
    category: 'Dados e automacao',
    description:
      'Painis visuais, formularios inteligentes e integracoes para transformar processos em fluxos simples.',
    highlights: ['Visao operacional', 'Integracoes conectadas', 'Automacao de tarefas'],
  },
  {
    title: 'Interfaces responsivas',
    category: 'UI engineering',
    description:
      'Layouts pensados para desktop e mobile com desempenho, consistencia visual e navegacao objetiva.',
    highlights: ['Performance visual', 'Consistencia mobile', 'Navegacao objetiva'],
  },
]

export const completedProjects = [
  {
    title: 'Landing page para medico especialista',
    type: 'Landing page',
    summary:
      'Pagina focada em autoridade, agendamento e conversao para consultas particulares.',
    image: medicalLandingImage,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    details:
      'Projeto pensado para apresentar servicos medicos com uma comunicacao mais confiavel, destacar especialidades e reduzir atrito no agendamento.',
    highlights: [
      'Hero com CTA direto para WhatsApp e formulario de contato',
      'Secoes de especialidades, depoimentos e perguntas frequentes',
      'Layout responsivo com foco em leitura clara no mobile',
    ],
  },
  {
    title: 'Dashboard de vendas e indicadores',
    type: 'Dashboard',
    summary:
      'Painel para acompanhar receita, metas e desempenho comercial em tempo real.',
    image: salesDashboardImage,
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    details:
      'Sistema desenhado para centralizar metricas de vendas, facilitar leitura por equipe comercial e apoiar decisoes rapidas com dados visuais.',
    highlights: [
      'Cards de KPIs com receita, ticket medio e conversao',
      'Graficos comparativos por periodo, canal e vendedor',
      'Filtros para acompanhamento diario, semanal e mensal',
    ],
  },
  {
    title: 'Carteira de gestao financeira',
    type: 'Aplicativo web',
    summary:
      'Produto para organizar contas, metas financeiras e acompanhamento de fluxo de caixa.',
    image: financeAppImage,
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    details:
      'Aplicacao voltada para controle financeiro pessoal, com visao de entradas e saidas, metas mensais e categorizacao de lancamentos.',
    highlights: [
      'Resumo de saldo, gastos por categoria e metas do mes',
      'Cadastro de receitas e despesas com filtros rapidos',
      'Experiencia mobile-first para acompanhar a carteira no dia a dia',
    ],
  },
]

export const recommendations = [
  {
    name: 'Mariana Costa',
    role: 'Product Designer',
    company: 'Studio Norte',
    quote:
      'Danilo transforma requisitos complexos em interfaces limpas e bem resolvidas. O processo sempre fica mais claro quando ele entra no projeto.',
  },
  {
    name: 'Rafael Mendes',
    role: 'Founder',
    company: 'LeadOps',
    quote:
      'Conseguiu unir velocidade de entrega com organizacao tecnica. O resultado final ficou mais solido do que o escopo inicial imaginava.',
  },
  {
    name: 'Camila Rocha',
    role: 'Project Manager',
    company: 'Nova Stack',
    quote:
      'Tem um olhar muito bom para experiencia de uso e para estrutura de codigo. Isso ajuda bastante quando o produto precisa evoluir sem retrabalho.',
  },
]
