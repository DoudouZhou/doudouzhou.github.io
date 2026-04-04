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
      authors: "Mingyuan Xu, Zongqi Xia, Tianxi Cai, Doudou Zhou#, Nian Si#",
      title: "Learning Sequential Decisions from Multiple Sources via Group-Robust Markov Decision Processes",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2602.01825" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou#",
      title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2601.21817"},
             { label: "Code", url: "https://github.com/TanXZfra/A-Judge-Aware-Ranking-Framework-for-Evaluating-Large-Language-Models-without-Ground-Truth" },
             { label: "Website", url: "https://wujw13.github.io/rank_llm" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Lingfeng Lyu, Doudou Zhou#",
      title: "Preference-based Centrality and Ranking in General Metric Spaces",
      venue: "Preprint, 2026+",
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2601.18412" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Qihua Zhu, Mingshuo Liu, Yuefeng Han, Doudou Zhou#",
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
      authors: "Parker Knight, Doudou Zhou, Zongqi Xia, Tianxi Cai, Junwei Lu",
      title: "Latent Factor Point Processes for Classification and Clustering with Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2508.20327" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Kejian Zhang, Muxuan Liang, Robert Maile, Doudou Zhou#",
      title: "Two-sample Testing with Block-wise Missingness in Multi-source Data",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2508.17411" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/BlockwiseRankTest/index.html" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Sinian Zhang, Kaicheng Zhang, Ziping Xu, Tianxi Cai#, Doudou Zhou#",
      title: "Generalized Linear Markov Decision Process",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2506.00818" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zhuofan Dong, Yiwen Huang, Yan Dong, Mengying Yan, Ziye Tian, Chuan Hong, Doudou Zhou#, Molei Liu#",
      title: "Model-X Change-Point Detection of Conditional Distribution",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.12023" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Wangxuan Fan, Siqi Li, Doudou Zhou, Yohei Okada, Chuan Hong, Molei Liu, Nan Liu",
      title: "SIM-Shapley: A Stable and Computationally Efficient Approach to Shapley Value Approximation",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.08198" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zexi Cai, Wenbo Fei, Doudou Zhou#",
      title: "MATES: Multi-view Aggregated Two-Sample Test",
      venue: "Preprint, 2024+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2412.16684" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/MATES/index.html" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Doudou Zhou, Mengyan Li, Tianxi Cai, Molei Liu",
      title: "Model-assisted and Knowledge-guided Transfer Regression for the Underrepresented Population",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2410.06484" }]
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
      authors: "Tianxi Cai*, Fei Huang*, Ryumei Nakada*, Linjun Zhang*, Doudou Zhou*",
      title: "Contrastive Learning on Multimodal Analysis of Electronic Health Records",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2403.14926" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Jiajun Liang, Yue Liu, Doudou Zhou, Sinian Zhang, Junwei Lu",
      title: "The Wreaths of Coherence: Uniform Graph Feature Selection with False Discovery Rate Control",
      venue: "Preprint, 2024+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2403.12284" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Tianxi Cai*, Dong Xia*, Luwan Zhang*, Doudou Zhou*",
      title: "Consensus Knowledge Graph Learning via Multi-view Sparse Low Rank Block Model",
      venue: "Preprint, 2023+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2209.13762" }]
    },
    // Published - Statistical Methodology and Theory
    {
      category: "methodology",
      type: "published",
      authors: "Yue Kang, Mingshuo Liu, Bongsoo Yi, Jing Lyu,  Zhi Zhang, Doudou Zhou, Yao Li",
      title: "Single Index Bandits: Generalized Linear Contextual Bandits with Unknown Reward Functions",
      venue: "International Conference on Learning Representations (ICLR), 2026",
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2506.12751" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Kejian Zhang, Sinian Zhang, Doudou Zhou#, Yidong Zhou#",
      title: "Wasserstein Transfer Learning",
      venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
      links: [
        { label: "Paper", url: "https://openreview.net/pdf/8e201e7ad25d23cf971e958d1e69539d4ab8c6de.pdf" },
        { label: "arXiv", url: "https://arxiv.org/abs/2505.17404" },
        { label: "Code", url: "https://github.com/h7nian/WaTL" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Zhiwei Xu, Ziming Gan, Doudou Zhou, Shuting Shen, Junwei Lu, Tianxi Cai",
      title: "Inference of Dependency Knowledge Graph for Electronic Health Records",
      venue: "Journal of the Royal Statistical Society Series B (Statistical Methodology), 2025",
      links: [
        { label: "Paper", url: "https://academic.oup.com/jrsssb/advance-article-abstract/doi/10.1093/jrsssb/qkaf061/8267144?redirectedFrom=fulltext"}
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Hao Chen",
      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
      venue: "IEEE Transactions on Information Theory, 2025",
      links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/11021493" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Mingshuo Liu, Mingyang Li, Tianxi Cai",
      title: "Doubly Robust Evaluation of Receiver Operating Characteristic under Covariate Shift with High Dimensional Features",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2356291" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Yufeng Zhang, Aaron Sonabend-W, Zhaoran Wang, Junwei Lu & Tianxi Cai",
      title: "Federated Offline Reinforcement Learning",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287?casa_token=ZsYamLI5gcwAAAAA:vpxrdw68t-U-SpN02Azg1aFFmZwjzfjmA9LJI4TUA8U6Ho01YwBWhbCXUcsS0G-tePqHeT8THU-3" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Tianxi Cai, Junwei Lu",
      title: "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
      venue: "Journal of Machine Learning Research, 2023",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2105.10360" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Hao Chen",
      title: "A New Ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
      venue: "Conference on Learning Theory (COLT), 2023",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2112.12948" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Mingshuo Liu, Yilin Zhang*, Doudou Zhou",
      title: "Double/Debiased Machine Learning for Logistic Partially Linear Model",
      venue: "The Econometrics Journal, 2021",
      links: [{ label: "Paper", url: "https://academic.oup.com/ectj/article-abstract/24/3/559/6296639" }]
    },
    // Preprints - Applications
    {
      category: "applications",
      type: "preprint",
      authors: "Minh Duc Vu, Mingshuo Liu, Doudou Zhou#",
      title: "A Trainable Centrality Framework for Modern Data",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2511.22959" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Jessica Gronsbell*, Vidul Ayakulangara Panickan*, Doudou Zhou*, Chris Lin, Thomas Charlon, Chuan Hong, Xin Xiong, Linshanshan Wang, Jianhui Gao, Shirley Zhou, Yuan Tian, Yaqi Shi, Ziming Gan, Tianxi Cai",
      title: "PEHRT: A Common Pipeline for Harmonizing Electronic Health Record data for Translational Research",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/pdf/2509.08553" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Yinjie Wang*, Doudou Zhou*, Yue Liu, Junwei Lu, Tianxi Cai",
      title: "Automated Hierarchical Graph Construction for Multi-source Electronic Health Records",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.06576" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Junhan Yu, Zhunyi Feng, Junwei Lu, Tianxi Cai, Doudou Zhou#",
      title: "Time-Aware Attention for Enhanced Electronic Health Records Modeling",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2507.14847" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Qiming Wu, Siqi Li, Doudou Zhou, Nan Liu",
      title: "Toward Fair Federated Learning under Demographic Disparities and Data Imbalance",
      venue: "Preprint, 2025+",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.09295" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Doudou Zhou, Han Tong, Linshanshan Wang, Suqi Liu, Xin Xiong, Ziming Gan, Romain Griffier, Boris P. Hejblum, Yun-Chung Liu, Chuan Hong, Clara-Lea Bonzel, Tianrun Cai, Kevin Pan, Yuk-Lam Ho, Lauren Costa, Vidul Ayakulangara Panickan, J. Michael Gaziano, Kenneth D. Mandl, Vianney Jouhet, Rodolphe Thiebaut, Zongqi Xia, Kelly Cho, Katherine P. Liao, Tianxi Cai",
      title: "Representation Learning to Advance Multi-institutional Studies with Electronic Health Record Data",
      venue: "Preprint, 2025+",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2502.08547" },
        { label: "Code", url: "https://github.com/celehs/GAME" },
        { label: "Website", url: "https://shiny.parse-health.org/GAME/" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Xin Xiong, Sara Morini Sweet, Molei Liu, Chuan Hong, Clara-Lea Bonzel, Vidul Ayakulangara Panickan, Doudou Zhou, Linshanshan Wang, Lauren Costa, Yuk-Lam Ho, Alon Geva, Kenneth D. Mandl, Suchun Cheng, Zongqi Xia, Kelly Cho, J. Michael Gaziano, Katherine P. Liao, Tianxi Cai, Tianrun Cai",
      title: "Bending the Learning Curve for EHR Research via Knowledge-Driven Online Multimodal Automated Phenotyping System",
      venue: "Preprint, 2023+",
      links: [
        { label: "medRxiv", url: "https://www.medrxiv.org/content/10.1101/2023.09.29.23296239v1" }
      ]
    },
    // Published - Applications
    {
      category: "applications",
      type: "published",
      authors: "Yang Yang, Kathryn Pollak, Bibhas Chakraborty, Molei Liu#, Doudou Zhou#, Chuan Hong#",
      title: "RELEAP: Reinforcement-Enhanced Label-Efficient Active Phenotyping for Electronic Health Records",
      venue: "JAMIA Open, 2026",
      links: [{ label: "Paper", url: "https://academic.oup.com/jamiaopen/article/9/1/ooag019/8490431" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Xinzi Tan, Kejian Zhang, Junhan Yu, Doudou Zhou#",
      title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
      venue: "AISTATS, 2026",
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2601.09220" },
              { label: "Code", url: "https://github.com/TanXZfra/Time-aware-Hawkes-Attention" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Chuan Hong, Jonathan Chong Kai Liew, Jaeyong Yu, Tomás Barry, Audrey L. Blewer, Daniel M. Buckland, Tianrun Cai, Won Chul Cha, Bibhas Chakraborty, Wei Chen, Jun Cheng, Shu-Ling Chong, Therese Djärv, Arul Earnest, Matthew Engelhard, Xiuyi Fan, Mengling Feng, Jean Feng, Huazhu Fu, Wilson Wen Bin Goh, Benjamin A. Goldstein, Jessica Gronsbell, Andrew Fu Wah Ho, Kendall Ho, Taku Iwami, Anjni Joiner, Aaron Kornblith, Siqi Li, Shir Lynn Lim, Molei Liu, Zhenghong Liu, Lei Lu, Yuan Luo, Yih Yng Ng, Yilin Ning, Yohei Okada, Ju Ok Park, Yu Rang Park, Junaid Razzak, Yuzeng Shen, Fahad Javaid Siddiqui, Peter A D Steel, Kenneth Boon Kiat Tan, Salinelat Teixayavong, Bella Vakulenko-Lagun, Joao Ricardo Nickenig Vissoci, Grzegorz Waligora, Fei Wang, Haibo Wang, Haoyuan Wang, An-Kwok Ian Wong, Feng Xie, Jie Yang, Yiye Zhang, Doudou Zhou, Li Zhou, Tingting Zhu, Robert Neumar, David Page, Michael Pencina, Roger Vaughan, Marcus Eng Hock Ong, Nan Liu",
      title: "FAIR-EC: A Global Research Network for Fair, Accountable, Interpretable, and Responsible AI in Emergency Care",
      venue: "JMIR Research Protocols, 2026",
      links: [{ label: "Paper", url: "https://preprints.jmir.org/preprint/74202" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Siqi Li, Qiming Wu, Doudou Zhou, Xin Li, Di Miao, Chuan Hong, Wenjun Gu, Yuqing Shang, Yohei Okada, Michael Hao Chen, Mengying Yan, Yilin Ning, Marcus Eng Hock Ong, Nan Liu",
      title: "FairFML: Fair Federated Machine Learning with a Case Study on Reducing Gender Disparities in Cardiac Arrest Outcome Prediction",
      venue: "npj Health Systems, 2025",
      links: [{ label: "Paper", url: "https://www.nature.com/articles/s44401-025-00035-2" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Ziming Gan*, Doudou Zhou*, Everett Rush, Vidul A. Panickan, Yuk-Lam Ho, George Ostrouchov, Zhiwei Xu, Shuting Shen, Xin Xiong, Kimberly F. Greco, Chuan Hong, Clara-Lea Bonzel, Jun Wen, Lauren Costa, Tianrun Cai, Edmon Begoli, Zongqi Xia, J. Michael Gaziano, Katherine P. Liao, Kelly Cho, Tianxi Cai, Junwei Lu",
      title: "ARCH: Large-scale Knowledge Graph via Aggregated Narrative Codified Health Records Analysis",
      venue: "Journal of Biomedical Informatics, 2025",
      links: [
        { label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S1532046424001795" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Doris Yang, Doudou Zhou, Steven Cai, Ziming Gan, Michael Pencina, Paul Avillach, Tianxi Cai, Chuan Hong",
      title: "SONAR: Enabling Robust Automated Harmonization of Heterogeneous Data through Ensemble Machine Learning",
      venue: "JMIR Medical Informatics, 2025",
      links: [{ label: "Paper", url: "https://medinform.jmir.org/2025/1/e54133" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Jun Wen, Hao Xue, Everett Rush, Vidul A. Panickan, Tianrun Cai, Doudou Zhou, Yuk-Lam Ho, Lauren Costa, Edmon Begoli, Chuan Hong, J. Michael Gaziano, Kelly Cho, Katherine P. Liao, Junwei Lu, Tianxi Cai",
      title: "DOME: Directional Medical Embedding Vectors from Electronic Health Records",
      venue: "Journal of Biomedical Informatics, 2025",
      links: [{ label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S1532046424001862" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yiwei Lou, Yanyuan Chen, Yu Huang, Doudou Zhou, Yongzhi Cao, Hanpin Wang",
      title: "Two-stream Feature Extraction for Self-supervised Image Quality Assessment",
      venue: "IEEE International Conference on Data Mining (ICDM), 2023",
      links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/10415683" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Bryan Cai, Sihang Zeng, Yucong Lin, Zheng Yuan, Doudou Zhou, Lu Tian",
      title: "Hierarchical Pretraining for Biomedical Term Embeddings",
      venue: "Proceedings of the 18th Conference on Computational Intelligence Methods for Bioinformatics & Biostatistics (CIBB), 2023",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2307.00266" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Jun Wen, Xiang Zhang, Everett Rush, Vidul A. Panickan, Xingyu Li, Tianrun Cai, Doudou Zhou, Yuk-Lam Ho, Lauren Costa, Edmon Begoli, Chuan Hong, J. Michael Gaziano, Kelly Cho, Junwei Lu, Katherine P. Liao, Marinka Zitnik, Tianxi Cai",
      title: "Multimodal Representation Learning for Predicting Molecule-Disease Relations",
      venue: "Bioinformatics, 2023",
      links: [{ label: "Website", url: "https://academic.oup.com/bioinformatics/article/39/2/btad085/7034101" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Doudou Zhou, Ziming Gan, Xu Shi, Alina Patwari, Everett Rush, Clara-Lea Bonzel, Vidul A. Panickan, Chuan Hong, Yuk-Lam Ho, Tianrun Cai, Lauren Costa, Xiaoou Li, Victor M. Castro, Shawn N. Murphy, Gabriel Brat, Griffin Weber, Paul Avillach, J. Michael Gaziano, Kelly Cho, Katherine P. Liao, Junwei Lu, Tianxi Cai",
      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
      venue: "Journal of Biomedical Informatics, 2022",
      links: [{ label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/35872266/" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yuri Ahuja, Liang Liang, Doudou Zhou, Selena Huang, Tianxi Cai",
      title: "Semisupervised Calibration of Risk with Noisy Event Times (SCORNET) using electronic health record data",
      venue: "Biostatistics, 2022",
      links: [
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/35166342/" },
        { label: "Website", url: "https://github.com/celehs/SCORNET" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Chuan Hong, Everett Rush, Molei Liu, Doudou Zhou, Jiehuan Sun, Aaron Sonabend, Victor M. Castro, Petra Schubert, Vidul A. Panickan, Tianrun Cai, Lauren Costa, Zeling He, Nicholas Link, Ronald Hauser, J. Michael Gaziano, Shawn N. Murphy, George Ostrouchov, Yuk-Lam Ho, Edmon Begoli, Junwei Lu, Kelly Cho, Katherine P. Liao, Tianxi Cai, VA Million Veteran Program",
      title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-Center Large Scale Electronic Health Record Data",
      venue: "npj Digital Medicine, 2021",
      links: [
        { label: "Paper", url: "https://www.nature.com/articles/s41746-021-00519-z" },
        { label: "Website", url: "https://celehs.github.io/KESER/" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yuri Ahuja, Doudou Zhou, Zeling He, Jiehuan Sun, Victor M. Castro, Vivian S. Gainer, Shawn N. Murphy, Chuan Hong, Tianxi Cai",
      title: "sureLDA: A Multi-Disease Automated Phenotyping Method for the Electronic Health Record",
      venue: "Journal of the American Medical Informatics Association, 2020",
      links: [
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/32548637/" },
        { label: "Website", url: "https://celehs.github.io/sureLDA/" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/sureLDA/index.html" }
      ]
    }
  ];

  const getYear = (venue: string) => {
    const match = venue.match(/\b(19|20)\d{2}\b/);
    return match ? Number.parseInt(match[0], 10) : 0;
  };

  const sortedPreprints = publications
    .filter((pub) => pub.type === "preprint")
    .sort((a, b) => getYear(b.venue) - getYear(a.venue) || a.title.localeCompare(b.title));

  const publishedYears = Array.from(
    new Set(
      publications
        .filter((pub) => pub.type === "published")
        .map((pub) => getYear(pub.venue))
        .filter((year) => year > 0)
    )
  ).sort((a, b) => b - a);

  const filteredPubs = filter === "all" 
    ? publications 
    : filter === "preprints"
    ? publications.filter(pub => pub.type === "preprint")
    : filter === "by-year"
    ? publications
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
          <Button
            variant={filter === "by-year" ? "default" : "outline"}
            onClick={() => setFilter("by-year")}
          >
            By Year
          </Button>
        </div>

        {/* Publications List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filter === "by-year" ? (
            <>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Preprints</h2>
                {sortedPreprints.map((pub, index) => (
                  <Card key={`preprint-${index}`} className="p-6 hover-lift border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="secondary">Preprint</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                        <h3 className="text-lg font-semibold mb-2 leading-relaxed">{pub.title}</h3>
                        <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                        {pub.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {pub.links.map((link, linkIndex) => (
                              <Button key={linkIndex} variant="outline" size="sm" asChild>
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

              {publishedYears.map((year) => {
                const pubsThisYear = publications
                  .filter((pub) => pub.type === "published" && getYear(pub.venue) === year)
                  .sort((a, b) => a.title.localeCompare(b.title));

                return (
                  <div key={year} className="space-y-4 pt-2">
                    <h2 className="text-2xl font-bold">{year}</h2>
                    {pubsThisYear.map((pub, index) => (
                      <Card key={`${year}-${index}`} className="p-6 hover-lift border-l-4 border-l-primary">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                            <h3 className="text-lg font-semibold mb-2 leading-relaxed">{pub.title}</h3>
                            <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                            {pub.links.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {pub.links.map((link, linkIndex) => (
                                  <Button key={linkIndex} variant="outline" size="sm" asChild>
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
                );
              })}
            </>
          ) : (
            filteredPubs.map((pub, index) => (
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
                          <Button key={linkIndex} variant="outline" size="sm" asChild>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
