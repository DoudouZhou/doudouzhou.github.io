/*
 * Research page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ResearchInterestGrid from "@/components/ResearchInterestGrid";
import { ExternalLink, FileText } from "lucide-react";

export default function Research() {
  const featuredProjects = [
    {
      title: "Representation Learning for Multi-institutional EHR Studies",
      description:
        "Methods and software for harmonizing and learning from electronic health records across institutions and countries.",
      badges: ["Nature Communications 2026", "EHR", "Representation Learning"],
      links: [
        { label: "Paper", url: "https://www.nature.com/articles/s41467-026-71152-1" },
        { label: "Code", url: "https://github.com/celehs/GAME" },
        { label: "Website", url: "https://shiny.parse-health.org/GAME/" },
      ],
    },
    {
      title: "Judge-Aware Ranking for LLM Evaluation",
      description:
        "A ranking framework for evaluating large language models when reliable ground-truth labels are unavailable.",
      badges: ["LLM Evaluation", "Ranking", "Agentic AI"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/pdf/2601.21817" },
        {
          label: "Code",
          url: "https://github.com/TanXZfra/A-Judge-Aware-Ranking-Framework-for-Evaluating-Large-Language-Models-without-Ground-Truth",
        },
        { label: "Website", url: "https://wujw13.github.io/rank_llm" },
      ],
    },
    {
      title: "Hierarchical Contrastive Learning for Multimodal Data",
      description:
        "Representation learning methods for integrating multimodal data through hierarchical contrastive objectives.",
      badges: ["Multimodal Learning", "Contrastive Learning", "Inference"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2604.05462" },
        { label: "Code", url: "https://github.com/yujunhan111/HCL_public" },
      ],
    },
    {
      title: "Federated Offline Reinforcement Learning",
      description:
        "Privacy-preserving statistical learning for sequential decision making across distributed healthcare data sources.",
      badges: ["JASA 2024", "Reinforcement Learning", "Federated Learning"],
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287" },
        { label: "Code", url: "https://github.com/DoudouZhou/FDTR" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-20"
        style={{
          backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/AJAzIrZOPciSbRGB.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our <span className="gradient-text">Research</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            We develop statistical foundations and machine learning methods for trustworthy AI, biomedical data science,
            and complex modern data.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Research Themes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Research Interests</h2>

          <ResearchInterestGrid showTags className="gap-6" />
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <FileText className={`h-6 w-6 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.badges.map((badge, badgeIndex) => (
                        <Badge key={badge} variant={badgeIndex === 0 ? "default" : "outline"}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <Button key={link.label} size="sm" variant="outline" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
