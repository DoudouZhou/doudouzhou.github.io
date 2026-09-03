import { Badge } from "@/components/ui/badge";
import { RESEARCH_INTEREST_DETAILS } from "@/siteData";
import {
  Bot,
  Brain,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

type AgendaPillar = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  interests: string[];
};

const agendaPillars: AgendaPillar[] = [
  {
    label: "Foundations",
    title: "Reliable statistical foundations for AI",
    description:
      "Developing inference, uncertainty quantification, ranking, and robustness tools for modern learning systems.",
    icon: ShieldCheck,
    accent: "border-primary/25 bg-primary/10 text-primary",
    interests: [
      "Statistical Foundations of AI",
      "Machine Learning",
      "High-Dimensional and Non-Euclidean Data Analysis",
    ],
  },
  {
    label: "AI Systems",
    title: "Language, agents, and multimodal learning",
    description:
      "Building and evaluating AI systems that combine language, structured signals, clinical text, and multiple data modalities.",
    icon: Bot,
    accent: "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    interests: [
      "Large Language Models and Agentic AI",
      "Multimodal Learning and Inference",
    ],
  },
  {
    label: "Biomedical Decisions",
    title: "Biomedical data science and sequential decision making",
    description:
      "Translating statistical and AI methodology into EHR research, phenotyping, treatment learning, and sequential decisions.",
    icon: Stethoscope,
    accent: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    interests: [
      "Electronic Health Records and Biomedical Data Science",
      "Reinforcement Learning and Sequential Decision Making",
    ],
  },
];

const methodHighlights = [
  {
    label: "AI evaluation",
    detail: "Ranking, uncertainty, and ground-truth-light evaluation for LLM and agentic systems.",
    icon: Brain,
  },
  {
    label: "Multimodal EHR",
    detail: "Representation learning and inference with structured, textual, and partially observed clinical data.",
    icon: Layers,
  },
  {
    label: "Sequential learning",
    detail: "Policy evaluation, robust learning, and adaptive decisions under distributional shifts.",
    icon: GitBranch,
  },
  {
    label: "Geometry and networks",
    detail: "Rank-based and graph-aware methods for high-dimensional and non-Euclidean data.",
    icon: Network,
  },
];

function findInterest(title: string) {
  return RESEARCH_INTEREST_DETAILS.find((interest) => interest.title === title);
}

export default function ResearchAgenda() {
  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-border bg-background">
      <div className="border-b border-border bg-secondary/60 p-5">
        <p className="mb-1 text-sm font-semibold text-primary">Research Interests</p>
        <h2 className="text-2xl font-bold">Statistics for AI, complex data, and biomedical decisions</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          My work connects statistical theory with practical AI systems, with particular emphasis on
          trustworthy learning, multimodal data, electronic health records, and decision making.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="divide-y divide-border">
          {agendaPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div key={pillar.title} className="p-5">
                <div className="flex gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${pillar.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">
                        {String(index + 1).padStart(2, "0")} / {pillar.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pillar.interests.map((title) => {
                        const interest = findInterest(title);

                        return (
                          <Badge key={title} variant="secondary" className="rounded-md">
                            {interest?.title ?? title}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border bg-secondary/30 p-5 lg:border-l lg:border-t-0">
          <h3 className="text-sm font-semibold text-primary">Current Themes</h3>
          <div className="mt-4 space-y-4">
            {methodHighlights.map((method) => {
              const Icon = method.icon;

              return (
                <div key={method.label} className="rounded-lg bg-background px-4 py-3">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold">{method.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{method.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
