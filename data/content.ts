import {
  BarChart3,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  FileSearch,
  Megaphone,
  MessageSquareText,
  Network,
  PanelsTopLeft,
  Search,
  Workflow,
} from "lucide-react";

export const contact = {
  name: "Amos Gurung",
  brand: "AG Digital",
  position: "AI Marketing Expert & Consultant",
  email: "info@amosg.com.np",
  phone: "9849157349",
  location: "Kumalmarg-15, Lalitpur",
};

export type Service = {
  title: string;
  description: string;
  benefit: string;
  icon: typeof BrainCircuit;
};

export const services: Service[] = [
  {
    title: "AI Marketing Strategy",
    description:
      "Create a practical AI roadmap for audience research, content, campaigns, automation, and reporting.",
    benefit: "Know exactly where AI can improve growth.",
    icon: BrainCircuit,
  },
  {
    title: "Digital Marketing Consulting",
    description:
      "Clarify positioning, channel priorities, campaign structure, and the decisions that move revenue.",
    benefit: "Replace scattered activity with focused action.",
    icon: PanelsTopLeft,
  },
  {
    title: "Marketing Automation",
    description:
      "Build automated workflows for follow-up, segmentation, content operations, and customer journeys.",
    benefit: "Save time while improving consistency.",
    icon: Workflow,
  },
  {
    title: "AI Content Strategy",
    description:
      "Design content systems that use AI for ideation, briefs, production workflows, and repurposing.",
    benefit: "Publish smarter without lowering quality.",
    icon: MessageSquareText,
  },
  {
    title: "Lead Generation Systems",
    description:
      "Plan funnels, landing pages, lead magnets, nurture flows, and conversion paths for qualified leads.",
    benefit: "Turn attention into business opportunities.",
    icon: Network,
  },
  {
    title: "Social Media Strategy",
    description:
      "Build channel plans, content pillars, posting systems, and performance loops for social growth.",
    benefit: "Show up with clarity and consistency.",
    icon: Megaphone,
  },
  {
    title: "SEO & Content Optimization",
    description:
      "Improve search visibility through keyword strategy, content refreshes, and AI-assisted optimization.",
    benefit: "Capture demand from high-intent audiences.",
    icon: Search,
  },
  {
    title: "Paid Ads Strategy",
    description:
      "Structure campaigns, offers, landing pages, targeting, and testing plans for better ad performance.",
    benefit: "Spend with stronger strategy and measurement.",
    icon: BarChart3,
  },
  {
    title: "CRM and Funnel Optimization",
    description:
      "Improve pipeline visibility, lead scoring, follow-up paths, and conversion stages.",
    benefit: "Create a cleaner path from lead to client.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI Workflow Integration",
    description:
      "Connect AI tools into your existing marketing operations with clear roles and repeatable processes.",
    benefit: "Make AI useful inside daily work.",
    icon: Bot,
  },
  {
    title: "Campaign Analytics and Reporting",
    description:
      "Build reporting views that connect marketing activity to leads, conversion, and growth priorities.",
    benefit: "Make better decisions with clearer data.",
    icon: FileSearch,
  },
];

export type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  strategy: string;
  solution: string;
  results: string;
  methods: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "AI Content System for Local Business Growth",
    industry: "Local service business",
    challenge:
      "The business needed consistent content but lacked a repeatable planning and production process.",
    strategy:
      "Use AI-assisted audience research, content pillars, and campaign calendars to guide weekly publishing.",
    solution:
      "Built a content workflow for briefs, drafts, review, repurposing, and performance tracking.",
    results:
      "Improved publishing consistency and created a clearer connection between content and inquiries.",
    methods: "AI briefs, content calendar, SEO mapping, analytics review",
  },
  {
    title: "Lead Generation Funnel Optimization",
    industry: "Professional services",
    challenge:
      "Traffic was arriving, but the inquiry path was unclear and follow-up was inconsistent.",
    strategy:
      "Map the customer journey, improve landing page calls to action, and automate lead follow-up.",
    solution:
      "Designed a simple funnel with contact prompts, lead capture, segmentation, and nurture messages.",
    results:
      "Created a more reliable system for converting interest into qualified consultation requests.",
    methods: "Funnel mapping, CRM stages, email automation, landing page review",
  },
  {
    title: "Marketing Automation for Service-Based Business",
    industry: "Service-based business",
    challenge:
      "Manual tasks slowed campaign launches and made reporting difficult to maintain.",
    strategy:
      "Identify repeatable tasks, define automation rules, and create performance reporting habits.",
    solution:
      "Implemented workflows for campaign tasks, customer follow-up, and monthly marketing insights.",
    results:
      "Reduced manual coordination and gave the team a clearer view of campaign performance.",
    methods: "Automation design, workflow integration, dashboard planning",
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How AI Is Changing Digital Marketing",
    excerpt:
      "AI is reshaping research, content creation, personalization, campaign testing, and reporting for modern businesses.",
    date: "2026-07-01",
    dateLabel: "Jul 1, 2026",
    category: "AI Marketing",
  },
  {
    title: "Why Businesses Need Marketing Automation",
    excerpt:
      "Automation helps teams follow up faster, stay consistent, and build marketing systems that do not rely on memory.",
    date: "2026-06-18",
    dateLabel: "Jun 18, 2026",
    category: "Automation",
  },
  {
    title: "Using AI to Improve Lead Generation",
    excerpt:
      "From audience insights to landing page testing, AI can help create a clearer path from interest to inquiry.",
    date: "2026-06-05",
    dateLabel: "Jun 5, 2026",
    category: "Lead Generation",
  },
  {
    title: "The Future of SEO in an AI-Driven World",
    excerpt:
      "Search is changing, but helpful content, authority, clear structure, and user intent still matter deeply.",
    date: "2026-05-22",
    dateLabel: "May 22, 2026",
    category: "SEO",
  },
  {
    title: "How Small Businesses Can Use AI Marketing Tools",
    excerpt:
      "A practical guide to choosing simple AI workflows that save time without making marketing feel complicated.",
    date: "2026-05-08",
    dateLabel: "May 8, 2026",
    category: "Small Business",
  },
];
