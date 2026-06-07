export type PublicationLink = {
  label: string;
  url: string;
};

export type SelectedPublication = {
  venue: string;
  year: string;
  title: string;
  authors: string;
  journal: string;
  links: PublicationLink[];
};

export type NewsItem = {
  date: string;
  content: string;
};

export const selectedPublications: SelectedPublication[] = [
  {
    venue: "Nat Commun",
    year: "2026",
    title: "Representation learning to advance multi-institutional studies with electronic health record data from US and France",
    authors: "Doudou Zhou, et al.",
    journal: "Nature Communications",
    links: [
      { label: "Paper", url: "https://www.nature.com/articles/s41467-026-71152-1" },
      { label: "arXiv", url: "https://arxiv.org/abs/2502.08547" },
      { label: "Code", url: "https://github.com/celehs/GAME" },
      { label: "Website", url: "https://shiny.parse-health.org/GAME/" },
    ],
  },
  {
    venue: "ICML",
    year: "2026",
    title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
    authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou",
    journal: "International Conference on Machine Learning",
    links: [
      { label: "arXiv", url: "https://arxiv.org/pdf/2601.21817" },
      { label: "Code", url: "https://github.com/TanXZfra/A-Judge-Aware-Ranking-Framework-for-Evaluating-Large-Language-Models-without-Ground-Truth" },
      { label: "Website", url: "https://wujw13.github.io/rank_llm" },
    ],
  },
  {
    venue: "IEEE TIT",
    year: "2025",
    title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
    authors: "Doudou Zhou, Hao Chen",
    journal: "IEEE Transactions on Information Theory",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/11021493/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2206.03038" },
    ],
  },
  {
    venue: "JASA",
    year: "2024",
    title: "Doubly Robust Evaluation of Receiver Operating Characteristic under Covariate Shift with High Dimensional Features",
    authors: "Doudou Zhou, Molei Liu, Mengyan Li, Tianxi Cai",
    journal: "Journal of the American Statistical Association: Theory and Methods",
    links: [
      { label: "Paper", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2356291" },
      { label: "arXiv", url: "https://arxiv.org/abs/2208.05134" },
      { label: "Code", url: "https://www.tandfonline.com/doi/suppl/10.1080/01621459.2024.2356291?scroll=top" },
    ],
  },
  {
    venue: "JASA",
    year: "2024",
    title: "Federated Offline Reinforcement Learning",
    authors: "Doudou Zhou, Yufeng Zhang, Aaron Sonabend-W, Zhaoran Wang, Junwei Lu, Tianxi Cai",
    journal: "Journal of the American Statistical Association: Theory and Methods",
    links: [
      { label: "Paper", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287" },
      { label: "arXiv", url: "https://arxiv.org/abs/2206.05581" },
      { label: "Code", url: "https://github.com/DoudouZhou/FDTR" },
    ],
  },
  {
    venue: "JMLR",
    year: "2023",
    title: "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
    authors: "Doudou Zhou, Tianxi Cai, Junwei Lu",
    journal: "Journal of Machine Learning Research",
    links: [
      { label: "Paper", url: "https://jmlr.org/papers/v24/22-0642.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2105.10360" },
      { label: "Code", url: "https://github.com/DoudouZhou/BONMI/blob/main/README.md" },
      { label: "Package", url: "https://celehs.github.io/bonmi/" },
    ],
  },
];

export const newsItems: NewsItem[] = [
  {
    date: "May 2026",
    content: "Our paper \"A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth\" appears at ICML 2026.",
  },
  {
    date: "Apr 2026",
    content: "Our paper \"Representation learning to advance multi-institutional studies with electronic health record data from US and France\" was accepted by Nature Communications.",
  },
  {
    date: "Apr 2026",
    content: "New preprints on arXiv: \"Cost-optimal Sequential Testing via Doubly Robust Q-learning\" and \"Hierarchical Contrastive Learning for Multimodal Data.\"",
  },
  {
    date: "Mar 2026",
    content: "Our paper \"RELEAP: Reinforcement-Enhanced Label-Efficient Active Phenotyping for Electronic Health Records\" was accepted at JAMIA Open 2026.",
  },
  {
    date: "Mar 2026",
    content: "Our paper \"From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences\" was accepted at AISTATS 2026.",
  },
  {
    date: "Feb 2026",
    content: "Our paper on single index bandits was accepted at ICLR 2026.",
  },
];
