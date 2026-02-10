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
      authors: "Mingyuan Xu, Zongqi Xia, Tianxi Cai, Doudou Zhou (corresponding), Nian Si (corresponding)",
      title: "Learning Sequential Decisions from Multiple Sources via Group-Robust Markov Decision Processes",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2602.01825" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou (corresponding)",
      title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2601.21817" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Lingfeng Lv, Doudou Zhou (corresponding)",
      title: "Preference-based Centrality and Ranking in General Metric Spaces",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2601.18412" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Qihua Zhu, Mingshuo Liu, Yuefeng Han, Doudou Zhou (corresponding)",
      title: "WISE: A Weighted Similarity Aggregation Test for Serial Independence",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2509.05678" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/SimIndep/index.html" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Patrick Knight, Doudou Zhou, Zongqi Xia, Tianxi Cai, Junwei Lu",
      title: "Latent Factor Point Processes for Patient Representation in Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.05678" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Kejian Zhang, Muxuan Liang, Robert Maile, Doudou Zhou (corresponding)",
      title: "Two-sample Testing with Block-wise Missingness in Multi-source Data",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2508.17411" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Sinian Zhang, Kejian Zhang, Ziping Xu, Tianxi Cai (corresponding), Doudou Zhou (corresponding)",
      title: "Generalized Linear Markov Decision Process",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2506.00818" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Yiwen Huang, Yan Dong, Mengying Yan, Zitao Tian, Chuan Hong, Doudou Zhou (corresponding), Molei Liu (corresponding)",
      title: "Model-X Change-Point Detection of Conditional Distribution",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.12023" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Wangxuan Fan, Siqi Li, Doudou Zhou, Yohei Okada, Chuan Hong, Molei Liu, Nan Liu",
      title: "SIT-KSHAP: Stable and Computationally Efficient Shapley Value Approximation",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.08198" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Ziang Cai, Wanrong Fei, Doudou Zhou (corresponding)",
      title: "MATES: Multi-view Aggregated Two-Sample Test",
      venue: "Preprint, 2024+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2508.17411" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/BlockwiseRankTest/index.html" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/MATES/index.html" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Doudou Zhou, Mingyang Li*, Tianxi Cai, Mingshuo Liu",
      title: "Model-assisted and Knowledge-guided Transfer Regression for the Underrepresented Population",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2602.01825" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Mingshuo Liu, Doudou Zhou, Hao Chen",
      title: "Generalized Independence Test for Modern Data",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2409.07745" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Tianxi Cai, Fei Huang, Ryumei Nakada, Linjun Zhang*, Doudou Zhou",
      title: "Contrastive Learning on Multimodal Analysis of Electronic Health Records",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2601.21817" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Jiajun Liang, Yue Liu*, Doudou Zhou, Sinian Zhang, Junwei Lu",
      title: "The Wreaths of Coherence: Uniform Graph Feature Selection with False Discovery Rate Control",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2403.12284" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Tianxi Cai, Dong Xia, Linjun Zhang*, Doudou Zhou",
      title: "Consensus Knowledge Graph Learning via Multi-view Sparse Low Rank Block Model",
      venue: "Preprint, 2023+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2601.18412" }]
    },
    // Published - Statistical Methodology and Theory
    {
      category: "methodology",
      type: "published",
      authors: "Yilin Kang, Mingshuo Liu, Bin Yi, Jiaqi Lyu, Zhiwei Zhang, Doudou Zhou, Yingying Li",
      title: "Single Index Bandits: Generalized Linear Contextual Bandits with Unknown Reward Functions",
      venue: "International Conference on Learning Representations (ICLR), 2026",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2506.12751" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Kejian Zhang, Sinian Zhang, Doudou Zhou (corresponding), Yidong Zhou (corresponding)",
      title: "Wasserstein Transfer Learning",
      venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2505.17404" },
        { label: "code", url: "https://arxiv.org/pdf/2506.12751" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Ziping Xu, Zihao Gan, Doudou Zhou, Shanghong Shen, Junwei Lu, Tianxi Cai",
      title: "Inference of Dependency Knowledge Graph for Electronic Health Records",
      venue: "Journal of the Royal Statistical Society Series B (Statistical Methodology), 2025",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2509.05678" },
        { label: "code", url: "https://academic.oup.com/jrsssb/advance-article-abstract/doi/10.1093/jrsssb/qkaf061/8267144" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Hao Chen",
      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
      venue: "IEEE Transactions on Information Theory, 2025",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.17404" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Mingshuo Liu, Mingyang Li, Tianxi Cai",
      title: "Doubly Robust Augmented Model Accuracy Transfer Inference with High Dimensional Features",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2505.17404" },
        { label: "code", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2356291" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Yilin Zhang*, Aldo Sonabend-W, Zhengling Wang, Junwei Lu, Tianxi Cai",
      title: "Federated Offline Reinforcement Learning",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      links: [
        { label: "arXiv", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287" },
        { label: "code", url: "https://arxiv.org/pdf/2506.12751" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Tianxi Cai, Junwei Lu",
      title: "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
      venue: "Journal of Machine Learning Research, 2023",
      links: [
        { label: "code", url: "https://arxiv.org/abs/2105.10360" },
        { label: "package", url: "https://academic.oup.com/jrsssb/advance-article-abstract/doi/10.1093/jrsssb/qkaf061/8267144" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Hao Chen",
      title: "A New Ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
      venue: "Conference on Learning Theory (COLT), 2023",
      links: [{ label: "R package", url: "https://arxiv.org/abs/2112.12948" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Mingshuo Liu, Yilin Zhang*, Doudou Zhou",
      title: "Double/Debiased Machine Learning for Logistic Partially Linear Model",
      venue: "The Econometrics Journal, 2021",
      links: [{ label: "code", url: "https://academic.oup.com/ectj/article-abstract/24/3/559/6296639" }]
    },
    // Preprints - Applications
    {
      category: "applications",
      type: "preprint",
      authors: "Minh Duc Vu, Mingshuo Liu, Doudou Zhou (corresponding)",
      title: "A Trainable Centrality Framework for Modern Data",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2511.22959" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Yang, Y., Polla, K., Chakraborty, B., Mingshuo Liu*, Doudou Zhou, Chuan Hong*",
      title: "RELEAP: Reinforcement-Enhanced Label-Efficient Active Phenotyping for Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2511.22959" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Gronsbell J., et al.",
      title: "PEHRT: A Common Pipeline for Harmonizing Electronic Health Record data for Translational Research",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2105.10360" },
        { label: "Website", url: "https://www.nature.com/articles/s41746-021-00519-z" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Wang, Y.*, Doudou Zhou, Yue Liu, Junwei Lu, Tianxi Cai",
      title: "Automated Hierarchical Graph Construction for Multi-source Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2112.12948" },
        { label: "MASH", url: "https://arxiv.org/abs/2509.06576" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Yu J., Zhunyi Feng, Junwei Lu, Cai T., Doudou Zhou (corresponding)",
      title: "Time-Aware Attention for Enhanced Electronic Health Records Modeling",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.06576" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Wu Q., Siqi Li, Zhou D., Nan Liu",
      title: "Toward Fair Federated Learning under Demographic Disparities and Data Imbalance",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2507.14847" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Doudou Zhou, et al.",
      title: "Representation Learning to Advance Multi-institutional Studies with Electronic Health Record Data",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2509.06576" },
        { label: "code", url: "https://pubmed.ncbi.nlm.nih.gov/35872266/" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Xiong, X., et al.",
      title: "Knowledge-Driven Online Multimodal Automated Phenotyping System",
      venue: "Preprint, 2023+",
      links: [
        { label: "medRxiv", url: "https://pubmed.ncbi.nlm.nih.gov/32548637/" },
        { label: "KOMAP", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2356291" }
      ]
    },
    // Published - Applications
    {
      category: "applications",
      type: "published",
      authors: "Xinzi Tan, Kejian Zhang, Junhan Yu, Doudou Zhou (corresponding)",
      title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
      venue: "AISTATS, 2026",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2601.09220" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Chuan Hong, et al.",
      title: "FAIR-EC: A Global Research Network for Fair, Accountable, Interpretable, and Responsible AI in Emergency Care",
      venue: "JMIR Research Protocols, 2026",
      links: []
    },
    {
      category: "applications",
      type: "published",
      authors: "Siqi Li, et al.",
      title: "FairFML: Fair Federated Machine Learning with a Case Study on Reducing Gender Disparities in Cardiac Arrest Outcome Prediction",
      venue: "npj Health Systems, 2025",
      links: []
    },
    {
      category: "applications",
      type: "published",
      authors: "Zihao Gan*, Doudou Zhou, et al.",
      title: "ARCH: Large-scale Knowledge Graph via Aggregated Narrative Codified Health Records Analysis",
      venue: "Journal of Biomedical Informatics, 2025",
      links: [
        { label: "medRxiv", url: "https://www.sciencedirect.com/science/article/abs/pii/S1532046424001795" },
        { label: "code", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287" },
        { label: "ARCH APP", url: "https://arxiv.org/abs/2105.10360" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yang, D., Doudou Zhou, Cai, S., Zihao Gan, Pencina, M., Avillach, P., Tianxi Cai, Chuan Hong",
      title: "SONAR: Enabling Robust Automated Harmonization of Heterogeneous Data through Ensemble Machine Learning",
      venue: "JMIR Medical Informatics, 2025",
      links: [{ label: "preprint", url: "https://medinform.jmir.org/2025/1/e54133" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Wen, J., et al.",
      title: "DOME: Directional Medical Embedding Vectors from Electronic Health Records",
      venue: "Journal of Biomedical Informatics, 2025",
      links: [{ label: "code", url: "https://www.sciencedirect.com/science/article/abs/pii/S1532046424001862" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Lou, Y., Chen, Y., Yiwen Huang, Doudou Zhou, Cao, Y., Wang, H.",
      title: "Two-stream Feature Extraction for Self-supervised Image Quality Assessment",
      venue: "IEEE International Conference on Data Mining (ICDM), 2023",
      links: []
    },
    {
      category: "applications",
      type: "published",
      authors: "Cai, B., Zeng, S., Lin, Y., Yuan, Z., Doudou Zhou, Tian, L.",
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
      links: [{ label: "Website", url: "https://academic.oup.com/bioinformatics/article/39/2/btad085/7034101" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Doudou Zhou, et al.",
      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
      venue: "Journal of Biomedical Informatics, 2022",
      links: [{ label: "MIKGI APP", url: "https://pubmed.ncbi.nlm.nih.gov/35872266/" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Ahuja, Y., Liang, L., Doudou Zhou, Huang, S., Tianxi Cai",
      title: "Semisupervised Calibration of Risk with Noisy Event Times (SCORNET) using electronic health record data",
      venue: "Biostatistics, 2022",
      links: [
        { label: "Website", url: "https://pubmed.ncbi.nlm.nih.gov/35166342/" },
        { label: "R package", url: "https://arxiv.org/abs/2112.12948" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Chuan Hong, et al.",
      title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-Center Large Scale Electronic Health Record Data",
      venue: "npj Digital Medicine, 2021",
      links: [{ label: "KESER Network", url: "https://www.nature.com/articles/s41746-021-00519-z" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Ahuja, Y., Doudou Zhou, He, Z., Sun, J., Castro, V., Gainer, V., Murphy, S., Chuan Hong, Tianxi Cai",
      title: "sureLDA: A Multidisease Automated Phenotyping Method for the Electronic Health Record",
      venue: "Journal of the American Medical Informatics Association, 2020",
      links: [
        { label: "Website", url: "https://pubmed.ncbi.nlm.nih.gov/32548637/" },
        { label: "R package", url: "https://academic.oup.com/ectj/article-abstract/24/3/559/6296639" }
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
                        <a 
                          key={linkIndex}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            size="sm"
                          >
                            {link.label}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
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
