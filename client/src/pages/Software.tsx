/*
 * Software page for SAIL Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Package } from "lucide-react";

export default function Software() {
  const software = [
    {
      name: "MIKGI",
      description: "Multiview Incomplete Knowledge Graph Integration for cross-institutional EHR data harmonization",
      type: "R Package",
      links: [
        { label: "GitHub", url: "#", icon: Github },
        { label: "Documentation", url: "#", icon: ExternalLink },
        { label: "Web App", url: "#", icon: ExternalLink }
      ],
      tags: ["EHR", "Knowledge Graph", "Data Integration"]
    },
    {
      name: "ARCH",
      description: "Large-scale knowledge graph construction via aggregated narrative codified health records analysis",
      type: "Python Package",
      links: [
        { label: "GitHub", url: "#", icon: Github },
        { label: "Demo", url: "#", icon: ExternalLink }
      ],
      tags: ["Knowledge Graph", "NLP", "Healthcare"]
    },
    {
      name: "FedORL",
      description: "Federated Offline Reinforcement Learning framework for privacy-preserving policy learning",
      type: "Python Package",
      links: [
        { label: "GitHub", url: "#", icon: Github },
        { label: "Documentation", url: "#", icon: ExternalLink }
      ],
      tags: ["Federated Learning", "Reinforcement Learning", "Privacy"]
    },
    {
      name: "WTL",
      description: "Wasserstein Transfer Learning toolkit for domain adaptation with optimal transport",
      type: "Python Package",
      links: [
        { label: "GitHub", url: "#", icon: Github },
        { label: "Examples", url: "#", icon: ExternalLink }
      ],
      tags: ["Transfer Learning", "Optimal Transport", "Domain Adaptation"]
    },
    {
      name: "ModernRank",
      description: "Modern ranking methods for high-dimensional data and change-point detection",
      type: "R Package",
      links: [
        { label: "CRAN", url: "#", icon: Package },
        { label: "GitHub", url: "#", icon: Github },
        { label: "Vignette", url: "#", icon: ExternalLink }
      ],
      tags: ["Ranking", "Change-Point Detection", "High-dimensional"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-20"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/8TRWcaPOUSPlHg8pczerr4/sandbox/6Kzhl1k3gH3gX1lKiEABEj-img-4_1770379138000_na1fn_c29mdHdhcmUtdG9vbHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRSV2NhUE9VU1BsSGc4cGN6ZXJyNC9zYW5kYm94LzZLemhsMWszZ0gzZ1gxbEtpRUFCRWotaW1nLTRfMTc3MDM3OTEzODAwMF9uYTFmbl9jMjltZEhkaGNtVXRkRzl2YkhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cXemSF7V09URp6b4c8CTt3fnWWMk0n5pqj2oTwdx~z3RLL3jBHg6mgQceauQHH0KI76vyfwffDGsCzK5v5PRWIRH2BauQ8vknIylcnKgt3aLZMyULH9WUl8eKEZbHPDaKfyC2GmwIVes7NSxPtgedRJ9uNWuflVp0V22Sa7ePHe2uDXSj4nYBFyF0X1tu1O~fEmj5s8BuPCPKh~pPq87r34xUwbhMPTs6qhw4aPVKTTdh8Z253cx1DVXrqVeNJVq8lvL7Yx5bWh1vuLhvpASmWoZTC9gJutJ9f0Pxb3fNfLjm6ln2hyVYMUBxWYUNjgI88dGc4pwGNjIm8JEkxH60Q__')`,
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
            Tools and packages developed by SAIL Lab to advance data science research
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

        {/* GitHub Organization */}
        <div className="mt-16 text-center">
          <Card className="p-12 max-w-3xl mx-auto">
            <Github className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Visit Our GitHub</h2>
            <p className="text-muted-foreground mb-6">
              Explore all our open-source projects, contribute to ongoing development, 
              or report issues on our GitHub organization.
            </p>
            <Button size="lg" asChild>
              <a href="https://github.com/doudouzhou" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                SAIL Lab on GitHub
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
