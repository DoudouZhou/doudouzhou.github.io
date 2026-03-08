/*
 * Software page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Package } from "lucide-react";

export default function Software() {
  const software = [
    {
      name: "GAME",
      description: "Tools for representation learning to advance multi-institutional studies with electronic health record data.",
      type: "Code + Web App",
      links: [
        { label: "GitHub", url: "https://github.com/celehs/GAME", icon: Github },
        { label: "Web App", url: "https://shiny.parse-health.org/GAME/", icon: ExternalLink },
        { label: "Paper", url: "https://arxiv.org/abs/2502.08547", icon: ExternalLink }
      ],
      tags: ["EHR", "Representation Learning", "Multi-institutional"]
    },
    {
      name: "WaTL",
      description: "Reference implementation for Wasserstein Transfer Learning.",
      type: "Python Package",
      links: [
        { label: "GitHub", url: "https://github.com/h7nian/WaTL", icon: Github },
        { label: "Paper", url: "https://arxiv.org/abs/2505.17404", icon: ExternalLink }
      ],
      tags: ["Transfer Learning", "Optimal Transport", "Machine Learning"]
    },
    {
      name: "Time-aware Hawkes Attention",
      description: "Codebase for time-modulated mechanisms for event sequence modeling.",
      type: "Python Package",
      links: [
        { label: "GitHub", url: "https://github.com/TanXZfra/Time-aware-Hawkes-Attention", icon: Github },
        { label: "arXiv", url: "https://arxiv.org/pdf/2601.09220", icon: ExternalLink }
      ],
      tags: ["Temporal Modeling", "Attention", "Event Sequences"]
    },
    {
      name: "Judge-Aware LLM Ranking",
      description: "Judge-aware ranking framework for evaluating LLMs without ground truth.",
      type: "Python Package",
      links: [
        { label: "GitHub", url: "https://github.com/TanXZfra/A-Judge-Aware-Ranking-Framework-for-Evaluating-Large-Language-Models-without-Ground-Truth", icon: Github },
        { label: "Project Website", url: "https://wujw13.github.io/rank_llm", icon: ExternalLink },
        { label: "arXiv", url: "https://arxiv.org/pdf/2601.21817", icon: ExternalLink }
      ],
      tags: ["LLM Evaluation", "Ranking", "Benchmarking"]
    },
    {
      name: "SimIndep",
      description: "R package for weighted similarity aggregation testing of serial independence.",
      type: "R Package",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org/web/packages/SimIndep/index.html", icon: Package },
        { label: "arXiv", url: "https://arxiv.org/pdf/2509.05678", icon: ExternalLink }
      ],
      tags: ["Statistics", "Independence Testing", "Time Series"]
    },
    {
      name: "BlockwiseRankTest",
      description: "R package for two-sample testing with block-wise missingness in multi-source data.",
      type: "R Package",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org/web/packages/BlockwiseRankTest/index.html", icon: Package },
        { label: "arXiv", url: "https://arxiv.org/abs/2508.17411", icon: ExternalLink }
      ],
      tags: ["Two-sample Test", "Missing Data", "Multi-source Data"]
    },
    {
      name: "MATES",
      description: "R package for multi-view aggregated two-sample testing.",
      type: "R Package",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org/web/packages/MATES/index.html", icon: Package },
        { label: "arXiv", url: "https://arxiv.org/abs/2412.16684", icon: ExternalLink }
      ],
      tags: ["Two-sample Test", "Multi-view", "Statistical Inference"]
    },
    {
      name: "sureLDA",
      description: "R package and project site for multi-disease automated phenotyping from EHR data.",
      type: "R Package + Website",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org/web/packages/sureLDA/index.html", icon: Package },
        { label: "Website", url: "https://celehs.github.io/sureLDA/", icon: ExternalLink },
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/32548637/", icon: ExternalLink }
      ],
      tags: ["EHR", "Phenotyping", "Topic Models"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-20"
        style={{
          backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/cDajxlTPCIDQPjqx.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Open Source <span className="gradient-text">Software</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Tools and packages developed to advance data science research
          </p>
        </div>
      </section>

      <div className="container">
        <div className="max-w-5xl mx-auto space-y-8">
          {software.map((item, index) => (
            <Card key={index} className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link, linkIndex) => {
                      const Icon = link.icon;
                      return (
                        <Button 
                          key={linkIndex} 
                          variant="outline"
                          asChild
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-4 w-4 mr-2" />
                            {link.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
