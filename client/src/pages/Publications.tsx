/*
 * Publications page for SAIL Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

export default function Publications() {
  const [filter, setFilter] = useState<string>("all");

  const publications = [
    {
      category: "methodology",
      authors: "Zhang, K., Zhang S., Zhou, D.#, Zhou, Y.#",
      title: "Wasserstein Transfer Learning",
      venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
      links: [
        { label: "arXiv", url: "#" },
        { label: "code", url: "#" }
      ]
    },
    {
      category: "methodology",
      authors: "Xu, Z., Gan, Z., Zhou, D., Shen, S., Lu, J., Cai, T.",
      title: "Inference of Dependency Knowledge Graph for Electronic Health Records",
      venue: "Journal of the Royal Statistical Society Series B (Statistical Methodology), 2025",
      links: [
        { label: "arXiv", url: "#" },
        { label: "code", url: "#" }
      ]
    },
    {
      category: "methodology",
      authors: "Zhou, D., Chen, H.",
      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
      venue: "IEEE Transactions on Information Theory, 2025",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      authors: "Zhou, D.*, Liu, M.*, Li, M., Cai, T.",
      title: "Doubly Robust Augmented Model Accuracy Transfer Inference with High Dimensional Features",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      links: [
        { label: "arXiv", url: "#" },
        { label: "code", url: "#" }
      ]
    },
    {
      category: "methodology",
      authors: "Zhou, D.*, Zhang, Y.*, Sonabend-W, A., Wang, Z., Lu, J., Cai, T.",
      title: "Federated Offline Reinforcement Learning",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      links: [
        { label: "arXiv", url: "#" },
        { label: "code", url: "#" }
      ]
    },
    {
      category: "methodology",
      authors: "Zhou, D., Cai, T., Lu, J.",
      title: "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
      venue: "Journal of Machine Learning Research, 2023",
      links: [
        { label: "code", url: "#" },
        { label: "package", url: "#" }
      ]
    },
    {
      category: "methodology",
      authors: "Zhou, D., Chen, H.",
      title: "A New Ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
      venue: "Conference on Learning Theory (COLT), 2023",
      links: [{ label: "R package", url: "#" }]
    },
    {
      category: "applications",
      authors: "Gan, Z.*, Zhou, D.*, et al.",
      title: "ARCH: Large-scale Knowledge Graph via Aggregated Narrative Codified Health Records Analysis",
      venue: "Journal of Biomedical Informatics, 2025",
      links: [
        { label: "medRxiv", url: "#" },
        { label: "code", url: "#" },
        { label: "ARCH APP", url: "#" }
      ]
    },
    {
      category: "applications",
      authors: "Yang, D., Zhou, D., Cai, S., Gan, Z., Pencina, M., Avillach, P., Cai, T., Hong, C.",
      title: "SONAR: Enabling Robust Automated Harmonization of Heterogeneous Data through Ensemble Machine Learning",
      venue: "JMIR Medical Informatics, 2025",
      links: [{ label: "preprint", url: "#" }]
    },
    {
      category: "applications",
      authors: "Zhou, D., et al.",
      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
      venue: "Journal of Biomedical Informatics, 2022",
      links: [{ label: "MIKGI APP", url: "#" }]
    },
    {
      category: "applications",
      authors: "Hong, C., et al.",
      title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-Center Large Scale Electronic Health Record Data",
      venue: "npj Digital Medicine, 2021",
      links: [{ label: "KESER Network", url: "#" }]
    }
  ];

  const filteredPubs = filter === "all" 
    ? publications 
    : publications.filter(pub => pub.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="gradient-text">Publications</span>
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          *: Contributed equally or alphabetic order | #: Corresponding author
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Publications
          </Button>
          <Button
            variant={filter === "methodology" ? "default" : "outline"}
            onClick={() => setFilter("methodology")}
          >
            Methodology & Theory
          </Button>
          <Button
            variant={filter === "applications" ? "default" : "outline"}
            onClick={() => setFilter("applications")}
          >
            Applications
          </Button>
        </div>

        {/* Publications List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredPubs.map((pub, index) => (
            <Card key={index} className="p-6 hover-lift border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <h3 className="text-lg font-semibold mb-2 leading-relaxed">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.links.map((link, linkIndex) => (
                      <Button 
                        key={linkIndex} 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Scholar Link */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            For a complete list of publications, please visit:
          </p>
          <Button size="lg" asChild>
            <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Google Scholar Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
