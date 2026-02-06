/*
 * Publications page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

export default function Publications() {
  const [filter, setFilter] = useState<string>("all");

  const publications = [
    // Preprints - Statistical Methodology and Theory
    {
      category: "methodology",
      type: "preprint",
      authors: "Xu, M., Xia, Z., Cai, T., Zhou, D.#, Si, N#",
      title: "Learning Sequential Decisions from Multiple Sources via Group-Robust Markov Decision Processes",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Xu, M., Tan, X., Wu, J., Zhou, D.#",
      title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Lyu, L., Zhou, D.#",
      title: "Preference-based Centrality and Ranking in General Metric Spaces",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zhu, Q., Liu M., Han Y., Zhou, D.#",
      title: "WISE: A Weighted Similarity Aggregation Test for Serial Independence",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "#" },
        { label: "R package", url: "#" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Knight, P., Zhou, D., Xia Z., Cai, T., Lu, J.",
      title: "Latent Factor Point Processes for Patient Representation in Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zhang, K., Liang M., Maile R., Zhou, D.#",
      title: "Two-sample Testing with Block-wise Missingness in Multi-source Data",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "#" },
        { label: "R package", url: "#" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zhang, S., Zhang K., Xu Z., Cai, T.#, Zhou, D.#",
      title: "Generalized Linear Markov Decision Process",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Huang, Y., Dong Y., Yan M., Tian Z., Hong, C., Zhou, D.#, Liu, M.#",
      title: "Model-X Change-Point Detection of Conditional Distribution",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Fan, W., Li S., Zhou, D., Okada, Y., Hong, C., Liu, M., Liu, N.",
      title: "SIM-Shapley: A Stable and Computationally Efficient Approach to Shapley Value Approximation",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Cai, Z.*, Fei W.*, Zhou, D.#",
      title: "MATES: Multi-view Aggregated Two-Sample Test",
      venue: "Preprint, 2024+",
      links: [
        { label: "arXiv", url: "#" },
        { label: "R package", url: "#" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zhou, D.*, Li, M.*, Cai, T., Liu, M.",
      title: "Model-assisted and Knowledge-guided Transfer Regression for the Underrepresented Population",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Liu, M.*, Zhou, D.*, Chen, H.",
      title: "Generalized Independence Test for Modern Data",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Cai, T.*, Huang, F.*, Nakada, R.*, Zhang, L.*, Zhou, D.*",
      title: "Contrastive Learning on Multimodal Analysis of Electronic Health Records",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Liang, J.*, Liu, Y.*, Zhou, D., Zhang, S., Lu, J.",
      title: "The Wreaths of Coherence: Uniform Graph Feature Selection with False Discovery Rate Control",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Cai, T.*, Xia, D.*, Zhang, L.*, Zhou, D.*",
      title: "Consensus Knowledge Graph Learning via Multi-view Sparse Low Rank Block Model",
      venue: "Preprint, 2023+",
      links: [{ label: "arXiv", url: "#" }]
    },
    // Published - Statistical Methodology and Theory
    {
      category: "methodology",
      type: "published",
      authors: "Kang, Y., Liu M., Yi B., Lyu, J., Zhang, Z., Zhou, D., Li, Y.",
      title: "Single Index Bandits: Generalized Linear Contextual Bandits with Unknown Reward Functions",
      venue: "International Conference on Learning Representations (ICLR), 2026",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "published",
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
      type: "published",
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
      type: "published",
      authors: "Zhou, D., Chen, H.",
      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
      venue: "IEEE Transactions on Information Theory, 2025",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "methodology",
      type: "published",
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
      type: "published",
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
      type: "published",
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
      type: "published",
      authors: "Zhou, D., Chen, H.",
      title: "A New Ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
      venue: "Conference on Learning Theory (COLT), 2023",
      links: [{ label: "R package", url: "#" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Liu, M.*, Zhang, Y.*, Zhou, D.*",
      title: "Double/Debiased Machine Learning for Logistic Partially Linear Model",
      venue: "The Econometrics Journal, 2021",
      links: [{ label: "code", url: "#" }]
    },
    // Preprints - Applications
    {
      category: "applications",
      type: "preprint",
      authors: "Vu, M., Liu, M., Zhou, D.#",
      title: "A Trainable Centrality Framework for Modern Data",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Yang, Y., Polla, K., Chakraborty, B., Liu M.*, Zhou, D.*, Hong, C.*",
      title: "RELEAP: Reinforcement-Enhanced Label-Efficient Active Phenotyping for Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Gronsbell J., et al.",
      title: "PEHRT: A Common Pipeline for Harmonizing Electronic Health Record data for Translational Research",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "#" },
        { label: "Website", url: "#" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Wang, Y.*, Zhou, D.*, Liu, Y., Lu, J., Cai, T.",
      title: "Automated Hierarchical Graph Construction for Multi-source Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "#" },
        { label: "MASH", url: "#" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Yu J., Feng Z., Lu J., Cai T., Zhou, D.#",
      title: "Time-Aware Attention for Enhanced Electronic Health Records Modeling",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Wu Q., Li S., Zhou D., Liu N.",
      title: "Toward Fair Federated Learning under Demographic Disparities and Data Imbalance",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Zhou, D., et al.",
      title: "Representation Learning to Advance Multi-institutional Studies with Electronic Health Record Data",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "#" },
        { label: "code", url: "#" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Xiong, X., et al.",
      title: "Knowledge-Driven Online Multimodal Automated Phenotyping System",
      venue: "Preprint, 2023+",
      links: [
        { label: "medRxiv", url: "#" },
        { label: "KOMAP", url: "#" }
      ]
    },
    // Published - Applications
    {
      category: "applications",
      type: "published",
      authors: "Tan, X., Zhang, K., Yu, J., Zhou, D.#",
      title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
      venue: "AISTATS, 2026",
      links: [{ label: "arXiv", url: "#" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Hong C., et al.",
      title: "FAIR-EC: A Global Research Network for Fair, Accountable, Interpretable, and Responsible AI in Emergency Care",
      venue: "JMIR Research Protocols, 2026",
      links: []
    },
    {
      category: "applications",
      type: "published",
      authors: "Li S., et al.",
      title: "FairFML: Fair Federated Machine Learning with a Case Study on Reducing Gender Disparities in Cardiac Arrest Outcome Prediction",
      venue: "npj Health Systems, 2025",
      links: []
    },
    {
      category: "applications",
      type: "published",
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
      type: "published",
      authors: "Yang, D., Zhou, D., Cai, S., Gan, Z., Pencina, M., Avillach, P., Cai, T., Hong, C.",
      title: "SONAR: Enabling Robust Automated Harmonization of Heterogeneous Data through Ensemble Machine Learning",
      venue: "JMIR Medical Informatics, 2025",
      links: [{ label: "preprint", url: "#" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Wen, J., et al.",
      title: "DOME: Directional Medical Embedding Vectors from Electronic Health Records",
      venue: "Journal of Biomedical Informatics, 2025",
      links: [{ label: "code", url: "#" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Lou, Y., Chen, Y., Huang, Y., Zhou, D., Cao, Y., Wang, H.",
      title: "Two-stream Feature Extraction for Self-supervised Image Quality Assessment",
      venue: "IEEE International Conference on Data Mining (ICDM), 2023",
      links: []
    },
    {
      category: "applications",
      type: "published",
      authors: "Cai, B., Zeng, S., Lin, Y., Yuan, Z., Zhou, D., Tian, L.",
      title: "Hierarchical Pretraining for Biomedical Term Embeddings",
      venue: "Proceedings of the 18th Conference on Computational Intelligence Methods for Bioinformatics & Biostatistics (CIBB), 2023",
      links: []
    },
    {
      category: "applications",
      type: "published",
      authors: "Wen, J., et. al.",
      title: "Multimodal Representation Learning for Predicting Molecule-Disease Relations",
      venue: "Bioinformatics, 2023",
      links: [{ label: "Website", url: "#" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Zhou, D., et al.",
      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
      venue: "Journal of Biomedical Informatics, 2022",
      links: [{ label: "MIKGI APP", url: "#" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Ahuja, Y., Liang, L., Zhou, D., Huang, S., Cai, T.",
      title: "Semisupervised Calibration of Risk with Noisy Event Times (SCORNET) using electronic health record data",
      venue: "Biostatistics, 2022",
      links: [
        { label: "Website", url: "#" },
        { label: "R package", url: "#" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Hong, C., et al.",
      title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-Center Large Scale Electronic Health Record Data",
      venue: "npj Digital Medicine, 2021",
      links: [{ label: "KESER Network", url: "#" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Ahuja, Y., Zhou, D., He, Z., Sun, J., Castro, V., Gainer, V., Murphy, S., Hong, C., Cai, T.",
      title: "sureLDA: A Multidisease Automated Phenotyping Method for the Electronic Health Record",
      venue: "Journal of the American Medical Informatics Association, 2020",
      links: [
        { label: "Website", url: "#" },
        { label: "R package", url: "#" }
      ]
    }
  ];

  const filteredPubs = filter === "all" 
    ? publications 
    : filter === "preprints"
    ? publications.filter(pub => pub.type === "preprint")
    : publications.filter(pub => pub.category === filter && pub.type === "published");

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
            variant={filter === "preprints" ? "default" : "outline"}
            onClick={() => setFilter("preprints")}
          >
            Preprints & Submitted
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
                  <div className="flex items-start gap-2 mb-2">
                    {pub.type === "preprint" && (
                      <Badge variant="secondary">Preprint</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <h3 className="text-lg font-semibold mb-2 leading-relaxed">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                  {pub.links.length > 0 && (
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
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Scholar Link */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            For the most up-to-date publication list and citation metrics, please visit:
          </p>
          <Button size="lg" asChild>
            <a href="https://scholar.google.com/citations?user=gXfTi00AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Google Scholar Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
