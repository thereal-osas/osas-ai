// ──────────────────────────────────────────────────
//  Portfolio data – edit this file to update content
// ──────────────────────────────────────────────────

/* ── Hero Stats ───────────────────────────────────── */
export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '5', suffix: '+', label: 'Years building' },
  { value: '50', suffix: '+', label: 'Projects shipped' },
  { value: '70', suffix: '+', label: 'Happy clients' },
  { value: '5', suffix: '★', label: 'Average rating' },
];

/* ── Marquee Items ────────────────────────────────── */
export const marqueeItems: string[] = [ 'LangGraph', 'LangChain', 'pgvector', 'OpenAI API', 'Claude API', 'n8n', 'Make', 'WhatsApp API',
  'Next.js', 'React', 'Node.js', 'Python', 'PostgreSQL',
  'Redis', 'Supabase',
  'Docker', 'FastAPI', 'TypeScript',
];

/* ── Skills / About ───────────────────────────────── */
export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  
  {
    title: 'AI / ML',
    items: ['LangChain / LangGraph', 'RAG pipelines', 'pgvector / Pinecone', 'Agent systems'],
  },
  {
    title: 'Backend',
    items: ['Node.js / FastAPI', 'Python / Golang', 'PostgreSQL / Redis', 'Supabase / Prisma'],
  },
  {
    title: 'Frontend',
    items: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Automation',
    items: ['n8n / Make.com', 'WhatsApp Cloud API', 'Zapier', 'Twilio'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'Railway / Vercel', 'CI/CD pipelines'],
  },
];

export const aboutParagraphs: string[] = [
  "I build <strong>AI automation systems</strong> and <strong>intelligent agents</strong> that replace the manual work businesses shouldn't be doing in 2026. My clients don't hire me to write code — they hire me because something in their business is costing them time, money, or leads, and they need it fixed",

  "I work across the <strong>full-stack</strong> - from the <strong>AI pipelines</strong> and <strong>agent systems</strong> to the <strong>web applications</strong> and <strong>dashboards</strong> that wrap around them. If it needs to be built, I build it. If it needs to run without a human in the loop, I make sure it does.",

  `Building <a href="https://creontek.framer.website/" target="_blank" style="color: #FFF;">@CreonTek</a> focused on <strong>AI-powered automation</strong> for startups and growing businesses,`,

  "Available for <strong>freelance projects, retainer partnerships,</strong> and <strong>consulting.</strong>",
];



/* ── Projects ─────────────────────────────────────── */
export interface ProjectLink {
  label: string;
  href: string;
  variant: 'primary' | 'ghost' | 'case-study';
  caseStudyId?: string;
}

export interface Project {
  num: string;
  title: string;
  description: string;
  tags: { label: string; featured?: boolean }[];
  links: ProjectLink[];
  imageSrc: string;
  liveBadge: string;
  reverse?: boolean;
  placeholderType: 'dashboard' | 'crm' | 'ai';
}

export const projects: Project[] = [
  {
    num: 'Project 01',
    title: 'PropAnalytiX',
    description:
      'Advanced Airbnb Analysis digital calculator for forecasting revenue, tracking expenses, and maximising ROI across your property portfolio with precision and confidence.',
    tags: [
      { label: 'React.js', featured: true },
      { label: 'Golang', featured: true },
      { label: 'Stripe' },
      { label: 'PostgreSQL' },
      { label: 'TypeScript' },
    ],
    links: [
      { label: 'Live demo', href: 'https://propanalytix.com/', variant: 'primary' },
      { label: 'Case study →', href: '#', variant: 'case-study', caseStudyId: 'cs-1' },
    ],
    imageSrc: 'src/assets/thumbnail-propanalytix.png',
    liveBadge: 'Live project',
    placeholderType: 'dashboard',
  },
  {
    num: 'Project 02',
    title: 'QuikPrint',
    description:
      'Custom E-Commerce website for print and media business managing customers, tracking pipeline, automating follow-up emails, and generating invoices with server-side PDF rendering. Reduced manual admin by 80%.',
    tags: [
      { label: 'React.js', featured: true },
      { label: 'Paystack', featured: true },
      { label: 'PostgreSQL' },
      { label: 'VPS' },
      { label: 'Golang' },
    ],
    links: [
      { label: 'Live demo', href: 'https://quikprint.ng/', variant: 'primary' },
      { label: 'Case study →', href: '#', variant: 'case-study', caseStudyId: 'cs-2' },
    ],
    imageSrc: 'src/assets/thumbnail-quikprint.png',
    liveBadge: 'Live project',
    reverse: true,
    placeholderType: 'crm',
  },
  {
    num: 'Project 03',
    title: 'Quill',
    description:
      'Upload any PDF document — contracts, reports, manuals, notes — and query it in natural language with cited answers. An agent responds with any question you might have about the document.',
    tags: [
      { label: 'LangGraph', featured: true },
      { label: 'RAG + pgvector', featured: true },
      { label: 'FastAPI' },
      { label: 'OpenAI' },
      { label: 'Next.js' },
    ],
    links: [
      { label: 'Live demo', href: 'https://quill-thereal-osas.vercel.app/', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/thereal-osas/quill', variant: 'ghost' },
      { label: 'Case study →', href: '#', variant: 'case-study', caseStudyId: 'cs-3' },
    ],
    imageSrc: 'src/assets/thumbnail-quill.png',
    liveBadge: 'AI · RAG · Agents',
    placeholderType: 'ai',
  },
];

/* ── Services ─────────────────────────────────────── */
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  
  {
    icon: '🧠',
    title: 'AI automation systems',
    description:
      'I replace your manual business processes with intelligent systems that run themselves.',
  },
  {
    icon: '🔧',
    title: 'AI receptionist & agent systems',
    description:
      'A 24/7 AI agent that handles inquiries, qualifies leads, and books appointments.',
  }, 
  {
    icon: '🔗',
    title: 'AI workflow automation',
    description:
      'If your team does it repeatedly, I build the automation that handles it.',
  },
  {
    icon: '⚡',
    title: 'SaaS development',
    description:
      'Full-stack SaaS products from architecture to deployment. Multi-tenancy, auth, billing, and analytics built in from day one.',
  },
  {
    icon: '📊',
    title: 'Dashboards & internal tools',
    description:
      'Custom internal tools and analytics dashboards tailored to exactly how your business operates.',
  },
  {
    icon: '🚀',
    title: 'Technical consulting',
    description:
      'System design, architecture reviews, and AI strategy for founders who need senior-level thinking.',
  },
];

/* ── Process Steps ────────────────────────────────── */
export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Understand',
    description:
      'Deep dive into your problem, users, and goals. I ask uncomfortable questions most developers skip.',
  },
  {
    num: '02',
    title: 'Architect',
    description:
      'System design before code. Data models, API contracts, and failure modes mapped before writing a line.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Fast iterations with weekly updates. You always know exactly where the project stands.',
  },
  {
    num: '04',
    title: 'Ship',
    description:
      "Deployed with CI/CD, monitoring, and documentation. I don't disappear after go-live.",
  },
];

/* ── Case Studies ─────────────────────────────────── */
export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyDecision {
  title: string;
  description: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  eyebrow: string;
  title: string;
  meta: CaseStudyMeta[];
  imageSrc: string;
  sections: {
    overview?: string;
    problem?: string;
    decisions?: CaseStudyDecision[];
    challenges?: string[];
    pipeline?: string[];
    metrics?: CaseStudyMetric[];
    stack?: { label: string; highlighted?: boolean }[];
  };
  cta: {
    heading: string;
    sub: string;
    buttonLabel: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    eyebrow: 'Case study · SaaS',
    title: 'PropAnalytiX',
    meta: [
      { label: 'Timeline', value: '4 months' },
      { label: 'Role', value: 'Lead engineer' },
      { label: 'Type', value: 'SaaS product' },
      { label: 'Status', value: 'Live · Paying users' },
    ],
    imageSrc: 'src/assets/thumbnail-propanalytix.png',
    sections: {
      overview:
        'PropAnalytiX is a professional Airbnb investment analytics platform built for property investors and Airbnb coaches. It replaces spreadsheet guesswork with a structured 5-step calculator that models seasonal rates, operating costs, deal structure, and ROI — then generates a comprehensive PDF report of every analysis. Coaches can also onboard students at a discounted rate, giving them access to the same professional-grade tooling',
      problem:
        "Airbnb investors were making six-figure property decisions using spreadsheets and gut feel. There was no dedicated tool that modelled the full picture — seasonal rate variance, expense stacking, partner ownership splits, and accurate ROI projections — in one place. Coaches teaching Airbnb investing had no way to give students access to professional analysis tools without handing over their own account. The gap was costing investors real money in bad deals and missed opportunities.",
      decisions: [
        {
          title: 'Why a 5-step guided calculator instead of a single form',
          description:
            'Breaking the analysis into discrete steps — Seasonal Rates, Property Costs, Business Expenses, Initial Investment, Deal Structure — forces investors to input the right data in the right order. Each step validates before proceeding, eliminating the garbage-in-garbage-out problem that plagues spreadsheet models. The result is an analysis the investor can actually trust.',
        },
        {
          title: 'Why a Coach/Student access system',
          description:
            "Rather than flat-rate subscriptions, we introduced a tiered access model where coaches can invite students at a discounted rate under their account. This created a distribution channel — coaches bring cohorts of students, each becoming a paying user. It also gave coaches a tool to offer their students as part of their programme, increasing PropAnalytiX's value to the coach beyond just their own analysis.",
        },
        {
          title: 'Why ElevenLabs voice integration',
          description:
            "Property analysis reports are dense. Adding AI-generated voice walkthroughs of the analysis output reduced cognitive load for investors reviewing results and made the product feel premium without adding complexity to the UI.",
        },
      ],
      challenges: [
        'The hardest problem was calculator accuracy. A 5-step model with seasonal rates, variable occupancy, expense categories, and multi-partner deal structures means thousands of possible input combinations. Getting the output to be financially accurate — not just approximately right — required building and validating the calculation logic against real investment scenarios before a single line of UI was written. A wrong ROI figure in a tool that investors trust for property decisions is not a bug, it is a liability.',
      ],
      metrics: [
        { value: '<800ms', label: 'Page load time' },
        { value: 'Instant', label: 'Real-time ROI calculations across all 5 steps' },
        { value: 'Live users', label: 'Paying subscribers across Free, Starter, and Professional tiers' },
      ],
      stack: [
        { label: 'Next.js 14 App Router', highlighted: true },
        { label: 'Supabase', highlighted: true },
        { label: 'Stripe', highlighted: true },
        { label: 'Redis (Upstash)' },
        { label: 'TypeScript' },
        { label: 'Shadcn UI' },
        { label: 'Tailwind CSS' },
        { label: 'Prisma' },
        { label: 'Vercel' },
        { label: 'GitHub Actions CI/CD' },
      ],
    },
    cta: {
      heading: 'Need something similar built?',
      sub: "I'm available for SaaS development projects, retainers, and technical consulting.",
      buttonLabel: 'Get in touch',
    },
  },
  {
    id: 'cs-2',
    eyebrow: 'Case study · E-Commerce',
    title: 'QuikPrint',
    meta: [
      { label: 'Timeline', value: '3 months' },
      { label: 'Role', value: 'Solo engineer' },
      { label: 'Type', value: 'E-Commerce platform' },
      { label: 'Status', value: 'Live · Active orders' },
    ],
    imageSrc: 'src/assets/thumbnail-quikprint.png',
    sections: {
      problem:
        'Print businesses in Nigeria ran almost entirely on WhatsApp and phone calls. Customers had no way to browse products, get instant pricing, or track their order. Every transaction required manual handling — a customer sends a message, waits for a quote, pays via transfer, and has no visibility after that. For the business, there was no centralised view of orders, no revenue tracking, and no way to scale without hiring more people to manage the back and forth. QuikPrint eliminated that entire manual layer.',
      decisions: [
        {
          title: 'Why a custom platform over Shopify',
          description:
            "Print products are not standard e-commerce items. Each product has configurable finishing options — paper weight, lamination, size, quantity — that affect pricing dynamically. Shopify's variant system couldn't handle the pricing logic required. A custom platform meant the product configurator, pricing engine, and order workflow could be built exactly to how a print business actually operates.",
        },
        {
          title: 'Why Golang for the backend',
          description:
            "Print order processing involves concurrent operations — file uploads, image processing, payment webhooks, WhatsApp notifications, and order status updates — all happening simultaneously. Golang's concurrency model handles this efficiently without the overhead of managing thread pools manually. It also produces a single compiled binary that's cheap to deploy and fast under load",
        },
        {
          title: 'Why Paystack over other payment gateways',
          description:
            "Paystack has the highest card success rate in Nigeria and natively supports bank transfers, USSD, and card payments in one checkout flow. For a Nigerian e-commerce product, reducing payment friction at checkout is directly tied to conversion rate. Paystack was the only right choice.",
        },
      ],
      metrics: [
        { value: '30%', label: 'Revenue increase after platform launch' },
        { value: 'Real-time', label: 'Order tracking for every customer' },
        { value: '₦1M+', label: 'Processed through the platform' },
      ],
      stack: [
        { label: 'React.js', highlighted: true },
        { label: 'PostgreSQL', highlighted: true },
        { label: 'Golang', highlighted: true },
        { label: 'TypeScript' },
        { label: 'Paystack' },
        { label: 'Shadcn UI' },
        { label: 'Vercel' },
      ],
    },
    cta: {
      heading: 'Need an E-Commerce or custom internal tool?',
      sub: 'I build E-Commerce, CRMs, dashboards, and admin tools tailored to exactly how your business works.',
      buttonLabel: "Let's talk",
    },
  },
  {
    id: 'cs-3',
    eyebrow: 'Case study · AI SaaS',
    title: 'Quill',
    meta: [
      { label: 'Timeline', value: '2 months' },
      { label: 'Role', value: 'Solo engineer' },
      { label: 'Type', value: 'AI SaaS' },
      { label: 'Status', value: 'Live beta' },
    ],
    imageSrc: 'src/assets/thumbnail-quill.png',
    sections: {
      overview:
        'Quill is an AI-powered document intelligence tool that lets users upload any PDF and have a real conversation with it. Students upload lecture notes and get instant summaries. Researchers upload papers and query specific findings. Professionals upload contracts and extract key clauses — all through a natural language chat interface, with answers cited directly from the document."',
      problem:
        'Reading and extracting information from dense PDF documents is one of the most time-consuming tasks in research, academia, and professional work. Highlighting, re-reading, and manually searching for specific information inside a 50-page document wastes hours that should be spent on thinking and decision-making. Existing tools either summarised the whole document without nuance or required technical setup to use. There was no simple, fast, accurate tool that let anyone just upload a PDF and start asking questions immediately.',
      decisions: [
        {
          title: 'Why RAG (Retrieval-Augmented Generation) over full-document prompting',
          description:
            'Sending an entire PDF to an LLM in one prompt is expensive, slow, and hits context window limits on large documents. RAG solves this by chunking the document into segments, embedding each chunk as a vector, and retrieving only the most relevant sections per query before generating an answer. This means Quill gives accurate, grounded answers on 200-page documents as efficiently as on a 5-page one — and every answer is traceable back to a specific part of the source document.',
        },
        {
          title: 'pgvector over Pinecone for this use case',
          description:
            'Pinecone is excellent for pure vector search at massive scale. But this platform also needs ACID transactions, metadata filtering by org/user/document, and joins with relational data. pgvector inside Postgres eliminates a separate service, reduces latency by ~60ms, and keeps the data model unified. At <10M vectors, Postgres is competitive on query speed.',
        },
        {
          title: 'Why pgvector over a dedicated vector database',
          description:
            "Purpose-built vector databases like Pinecone add infrastructure complexity and cost. For Quill's scale, storing vector embeddings directly in PostgreSQL via pgvector kept the architecture simple — one database, one deployment, zero additional services. Similarity search performance at this scale is indistinguishable from a dedicated solution, and the operational overhead is a fraction of the cost.",
        },
      ],
      // pipeline: [
      //   '<strong>Ingestion:</strong> Document uploaded → extracted with Unstructured.io (handles PDFs, DOCX, images with OCR) → chunked with recursive splitter → embedded with text-embedding-3-large → stored in pgvector with metadata (org_id, doc_id, page, chunk_index).',
      //   '<strong>Retrieval:</strong> User query → embedded → cosine similarity search in pgvector → top-k chunks retrieved → parent documents fetched for context → reranked with Cohere Rerank → passed to LLM with citations.',
      //   '<strong>Agent tasks:</strong> User gives a goal → LangGraph planner decides sub-tasks → tools called (vector search, web search, calculator, code interpreter) → results synthesised → structured output returned with reasoning trace visible to user.',
      // ],
      metrics: [
        { value: '~2s', label: 'Query response time' },
        { value: '94%', label: 'Answer relevance (eval set)' },
        { value: '100%', label: 'Cited responses' },
      ],
      stack: [
        { label: 'Next.js', highlighted: true },
        { label: 'OpenAI API', highlighted: true },
        { label: 'pgvector', highlighted: true },
        { label: 'LangChain', highlighted: true },
        { label: 'Tailwind CSS' },
        { label: 'TypeScript' },
        { label: 'Vercel' },
      ],
    },
    cta: {
      heading: 'Need AI built into your product?',
      sub: 'I design and build production-grade AI systems — RAG pipelines, agents, and multimodal applications.',
      buttonLabel: "Let's build together",
    },
  },
];

/* ── Social / Contact Links ───────────────────────── */
export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/osas-abraham/' },
  { label: 'X / Twitter', href: 'https://x.com/_therealosas' },
  { label: 'GitHub', href: 'https://github.com/thereal-osas' },
  { label: 'WhatsApp', href: 'https://wa.me/2349044692078' },
];
