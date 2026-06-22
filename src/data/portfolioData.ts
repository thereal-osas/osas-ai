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
      { label: 'Live demo', href: '#', variant: 'primary' },
      { label: 'GitHub', href: '#', variant: 'ghost' },
      { label: 'Case study →', href: '#', variant: 'case-study', caseStudyId: 'cs-1' },
    ],
    imageSrc: 'src/assets/thumbnail-propanalytix.png',
    liveBadge: 'Live project',
    placeholderType: 'dashboard',
  },
  {
    num: 'Project 02',
    title: 'Internal CRM for agencies',
    description:
      'Custom CRM for small agencies managing clients, tracking pipeline, automating follow-up emails via BullMQ, and generating invoices with server-side PDF rendering. Reduced manual admin by 80%.',
    tags: [
      { label: 'Next.js', featured: true },
      { label: 'BullMQ', featured: true },
      { label: 'PostgreSQL' },
      { label: 'Prisma' },
      { label: 'Resend' },
    ],
    links: [
      { label: 'Live demo', href: '#', variant: 'primary' },
      { label: 'GitHub', href: '#', variant: 'ghost' },
      { label: 'Case study →', href: '#', variant: 'case-study', caseStudyId: 'cs-2' },
    ],
    imageSrc: 'src/assets/thumbnail-quikprint.png',
    liveBadge: '3 paying clients',
    reverse: true,
    placeholderType: 'crm',
  },
  {
    num: 'Project 03',
    title: 'AI document intelligence platform',
    description:
      'Upload any document — contracts, reports, manuals — and query it in natural language with cited answers. An agent layer executes multi-step tasks: "Compare payment terms across all Q1 contracts and flag deviations." Built on LangGraph + pgvector RAG architecture.',
    tags: [
      { label: 'LangGraph', featured: true },
      { label: 'RAG + pgvector', featured: true },
      { label: 'FastAPI' },
      { label: 'Claude API' },
      { label: 'Next.js' },
    ],
    links: [
      { label: 'Live demo', href: '#', variant: 'primary' },
      { label: 'GitHub', href: '#', variant: 'ghost' },
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
    title: 'Multi-tenant SaaS dashboard',
    meta: [
      { label: 'Timeline', value: '3 weeks' },
      { label: 'Role', value: 'Solo engineer' },
      { label: 'Type', value: 'SaaS product' },
      { label: 'Status', value: 'Live' },
    ],
    imageSrc: 'src/assets/thumbnail-propanalytix.png',
    sections: {
      overview:
        'A production-ready, fully white-labelable SaaS dashboard boilerplate that handles the hard parts of building SaaS — authentication, multi-tenancy, billing, and real-time data — so founders can focus on their actual product logic.',
      problem:
        "Every SaaS founder spends the first 4–8 weeks building the same infrastructure: auth, org management, billing, and dashboards. That's 2 months of runway burned before writing a single line of product logic. There was no production-grade, truly multi-tenant starter that didn't lock you into a specific BaaS provider.",
      decisions: [
        {
          title: 'Why Supabase + Postgres RLS instead of a separate tenant DB per org',
          description:
            'Row-level security policies at the database level mean tenancy is enforced even if application code has a bug. A compromised API layer cannot leak cross-tenant data because the database itself rejects the query. This is the approach used by Linear and Vercel.',
        },
        {
          title: 'Why Redis for session + rate limiting instead of JWT-only',
          description:
            'JWTs cannot be revoked without a blocklist. For SaaS products where you need to invalidate sessions on password change, suspicious activity, or plan downgrade — a Redis session store with short-lived JWTs as access tokens is the correct pattern. Added ~40ms overhead, worth the security model.',
        },
        {
          title: 'Why Stripe Billing Portal instead of custom billing UI',
          description:
            "Custom billing UI is a PCI compliance surface area. Stripe's hosted portal handles all card data, reducing compliance scope to SAQ A. Saved ~2 weeks of development and reduced legal exposure.",
        },
      ],
      challenges: [
        'The hardest part was <strong>Stripe webhook idempotency</strong>. Stripe can deliver the same webhook multiple times. Without idempotency checks, a user could be granted premium access twice or have their subscription cancelled by a duplicate event. I solved this by storing processed webhook IDs in Redis with a 24-hour TTL and checking before processing.',
        'The second challenge was <strong>real-time without WebSocket complexity</strong>. For dashboard metrics I used Supabase Realtime (Postgres LISTEN/NOTIFY under the hood) which gave push updates to connected clients without managing WebSocket infrastructure. The tradeoff is Supabase-coupling, which I documented explicitly.',
      ],
      metrics: [
        { value: '<800ms', label: 'Cold load time' },
        { value: '100%', label: 'Tenant data isolation' },
        { value: '3 wks', label: 'Built and deployed' },
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
    eyebrow: 'Case study · Internal tool',
    title: 'Internal CRM for agencies',
    meta: [
      { label: 'Timeline', value: '2 weeks' },
      { label: 'Role', value: 'Solo engineer' },
      { label: 'Type', value: 'B2B SaaS' },
      { label: 'Status', value: 'Live · 3 clients' },
    ],
    imageSrc: 'src/assets/thumbnail-quikprint.png',
    sections: {
      problem:
        'Small agencies managing 20–50 clients across WhatsApp, email, and spreadsheets were losing leads, missing follow-ups, and spending 3–4 hours per week on manual invoicing. Generic CRMs like HubSpot were overkill and priced for enterprise teams.',
      decisions: [
        {
          title: 'BullMQ for email automation instead of cron jobs',
          description:
            "Cron jobs fail silently and can't be retried. BullMQ gives per-job logging, automatic retries with exponential backoff, and a dashboard to inspect the queue. When an email fails at 3am, the system retries and I know why it failed by morning.",
        },
        {
          title: 'PDF generation server-side with Puppeteer',
          description:
            "Client-side PDF generation using html2canvas breaks on complex layouts. Server-side Puppeteer renders a real Chromium page and exports pixel-perfect invoices matching the client's brand. Added to a background queue so it doesn't block the API response.",
        },
      ],
      metrics: [
        { value: '80%', label: 'Reduction in manual admin' },
        { value: '3', label: 'Paying clients on retainer' },
        { value: '2 wks', label: 'From spec to launch' },
      ],
      stack: [
        { label: 'Next.js', highlighted: true },
        { label: 'PostgreSQL', highlighted: true },
        { label: 'Prisma', highlighted: true },
        { label: 'BullMQ' },
        { label: 'Redis' },
        { label: 'Resend' },
        { label: 'Puppeteer' },
        { label: 'Shadcn UI' },
        { label: 'Railway' },
      ],
    },
    cta: {
      heading: 'Need a custom internal tool?',
      sub: 'I build CRMs, dashboards, and admin tools tailored to exactly how your business works.',
      buttonLabel: "Let's talk",
    },
  },
  {
    id: 'cs-3',
    eyebrow: 'Case study · AI engineering',
    title: 'AI document intelligence platform',
    meta: [
      { label: 'Timeline', value: '6 weeks' },
      { label: 'Role', value: 'Solo AI engineer' },
      { label: 'Type', value: 'Enterprise AI SaaS' },
      { label: 'Status', value: 'Live beta' },
    ],
    imageSrc: 'src/assets/thumbnail-quill.png',
    sections: {
      overview:
        'An enterprise-grade platform where organisations upload any document — contracts, reports, invoices, manuals — and query them in natural language. The system retrieves semantically relevant chunks, reasons across multiple documents, and produces cited answers. An agent layer allows autonomous multi-step tasks: "Compare payment terms across all Q1 contracts and flag deviations from our standard."',
      problem:
        'Knowledge workers spend an average of 2.5 hours per day searching for information inside documents. Legal teams reviewing 200-page contracts, finance teams reconciling reports, ops teams referencing manuals — all doing manual search that AI can handle in seconds. Enterprise solutions (Glean, Guru) cost $20k+/year per org. SMEs had no option.',
      decisions: [
        {
          title: 'RAG pipeline — why chunking strategy matters more than the model',
          description:
            'Naive chunking by character count loses semantic meaning at chunk boundaries. I implemented recursive hierarchical chunking with overlap, preserving paragraph structure. Combined with parent-document retrieval (fetch the surrounding context of matched chunks), answer quality improved 40% over naive chunking on the same model.',
        },
        {
          title: 'pgvector over Pinecone for this use case',
          description:
            'Pinecone is excellent for pure vector search at massive scale. But this platform also needs ACID transactions, metadata filtering by org/user/document, and joins with relational data. pgvector inside Postgres eliminates a separate service, reduces latency by ~60ms, and keeps the data model unified. At <10M vectors, Postgres is competitive on query speed.',
        },
        {
          title: 'LangGraph for the agent layer instead of LangChain AgentExecutor',
          description:
            "AgentExecutor is a black box. LangGraph models the agent as an explicit state machine — each node is a function, edges are conditional. This means I can inspect, debug, and modify the agent's reasoning graph. When the agent gets stuck in a loop, I can see exactly which node is failing and why.",
        },
      ],
      pipeline: [
        '<strong>Ingestion:</strong> Document uploaded → extracted with Unstructured.io (handles PDFs, DOCX, images with OCR) → chunked with recursive splitter → embedded with text-embedding-3-large → stored in pgvector with metadata (org_id, doc_id, page, chunk_index).',
        '<strong>Retrieval:</strong> User query → embedded → cosine similarity search in pgvector → top-k chunks retrieved → parent documents fetched for context → reranked with Cohere Rerank → passed to LLM with citations.',
        '<strong>Agent tasks:</strong> User gives a goal → LangGraph planner decides sub-tasks → tools called (vector search, web search, calculator, code interpreter) → results synthesised → structured output returned with reasoning trace visible to user.',
      ],
      metrics: [
        { value: '~2s', label: 'Query response time' },
        { value: '94%', label: 'Answer relevance (eval set)' },
        { value: '100%', label: 'Cited responses' },
      ],
      stack: [
        { label: 'LangGraph', highlighted: true },
        { label: 'LangChain', highlighted: true },
        { label: 'pgvector', highlighted: true },
        { label: 'OpenAI / Claude API', highlighted: true },
        { label: 'Unstructured.io' },
        { label: 'Cohere Rerank' },
        { label: 'Next.js' },
        { label: 'FastAPI (Python)' },
        { label: 'PostgreSQL' },
        { label: 'Redis' },
        { label: 'BullMQ' },
        { label: 'Supabase Auth' },
        { label: 'Railway' },
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
