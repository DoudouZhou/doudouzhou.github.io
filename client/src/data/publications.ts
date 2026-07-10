export type PublicationCategory = "methodology" | "applications";
export type PublicationType = "preprint" | "published";
export type PublicationTopic =
  | "inference-testing"
  | "ai-llm"
  | "multimodal-representation"
  | "ehr-biomedical"
  | "rl-sequential"
  | "graph-ranking"
  | "federated-transfer";

export type PublicationLink = {
  label: string;
  url: string;
};

export type Publication = {
  category: PublicationCategory;
  type: PublicationType;
  authors: string;
  title: string;
  venue: string;
  topics: PublicationTopic[];
  links: PublicationLink[];
};

export const publications: Publication[] = [
    // Preprints - Statistical Methodology and Theory
    {
      category: "methodology",
      type: "preprint",
      authors: "Junhan Yu*, Kejian Zhang*, Doudou Zhou*#, Guojun Zhu*",
      title: "Pattern-Calibrated Multimodal Prediction under Blockwise Missingness",
      venue: "Preprint, 2026+",
      topics: ["multimodal-representation", "ehr-biomedical", "federated-transfer"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2607.01821" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Junhan Yu, Yurui Chen, Juan Delgado-SanMartin, Dennis Wang, Hong Pan, Doudou Zhou",
      title: "Structured Transfer Learning for Survival Risk Stratification in Data-Sparse Clinical Cohorts",
      venue: "Preprint, 2026+",
      topics: ["ehr-biomedical", "federated-transfer"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.15633" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Yuming Zhang, Congyuan Duan, Dong Xia, Doudou Zhou#, Tianxi Cai#",
      title: "Spherical Mixture Integration for Latent Embedding Alignment across Multi-Source Feature Spaces",
      venue: "Preprint, 2026+",
      topics: ["multimodal-representation", "federated-transfer"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.08637" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Jiawei Wu, Doudou Zhou",
      title: "Unlearning What Matters: Token-Level Attribution for Precise Language Model Unlearning",
      venue: "Preprint, 2026+",
      topics: ["ai-llm"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.00364" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Doudou Zhou, Yiran Zhang, Dian Jin, Yingye Zheng, Lu Tian, Tianxi Cai",
      title: "Cost-optimal Sequential Testing via Doubly Robust Q-learning",
      venue: "Preprint, 2026+",
      topics: ["rl-sequential", "inference-testing"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2604.11165" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Mingyuan Xu, Zongqi Xia, Tianxi Cai, Doudou Zhou#, Nian Si#",
      title: "Learning Sequential Decisions from Multiple Sources via Group-Robust Markov Decision Processes",
      venue: "Preprint, 2026+",
      topics: ["rl-sequential", "federated-transfer"],
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2602.01825" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Lingfeng Lyu, Doudou Zhou#",
      title: "Preference-based Centrality and Ranking in General Metric Spaces",
      venue: "Preprint, 2026+",
      topics: ["graph-ranking"],
      links: [{ label: "arXiv", url: "https://arxiv.org/pdf/2601.18412" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Huichao Li, Junhan Yu, Doudou Zhou",
      title: "Hierarchical Contrastive Learning for Multimodal Data",
      venue: "Preprint, 2026+",
      topics: ["multimodal-representation"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2604.05462" },
        { label: "Code", url: "https://github.com/yujunhan111/HCL_public" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Qihua Zhu, Mingshuo Liu, Yuefeng Han, Doudou Zhou#",
      title: "WISE: A Weighted Similarity Aggregation Test for Serial Independence",
      venue: "Preprint, 2025+",
      topics: ["inference-testing"],
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
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2508.20327" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Kejian Zhang, Muxuan Liang, Robert Maile, Doudou Zhou#",
      title: "Two-sample Testing with Block-wise Missingness in Multi-source Data",
      venue: "Preprint, 2025+",
      topics: ["inference-testing", "federated-transfer"],
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
      topics: ["rl-sequential"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2506.00818" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zhuofan Dong, Yiwen Huang, Yan Dong, Mengying Yan, Ziye Tian, Chuan Hong, Doudou Zhou#, Molei Liu#",
      title: "Model-X Change-Point Detection of Conditional Distribution",
      venue: "Preprint, 2025+",
      topics: ["inference-testing"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.12023" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Wangxuan Fan, Siqi Li, Doudou Zhou, Yohei Okada, Chuan Hong, Molei Liu, Nan Liu",
      title: "SIM-Shapley: A Stable and Computationally Efficient Approach to Shapley Value Approximation",
      venue: "Preprint, 2025+",
      topics: ["inference-testing", "ai-llm"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.08198" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Zexi Cai, Wenbo Fei, Doudou Zhou#",
      title: "MATES: Multi-view Aggregated Two-Sample Test",
      venue: "Preprint, 2024+",
      topics: ["inference-testing", "multimodal-representation"],
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
      topics: ["federated-transfer", "inference-testing"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2410.06484" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Mingshuo Liu, Doudou Zhou, Hao Chen",
      title: "Generalized Independence Test for Modern Data",
      venue: "Preprint, 2024+",
      topics: ["inference-testing"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2409.07745" }]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Tianxi Cai*, Feiqing Huang*, Ryumei Nakada*, Linjun Zhang*, Doudou Zhou*",
      title: "Contrastive Learning on Multimodal Analysis of Electronic Health Records",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2026",
      topics: ["multimodal-representation", "ehr-biomedical"],
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2026.2698136" },
        { label: "arXiv", url: "https://arxiv.org/abs/2403.14926" }
      ]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Jiajun Liang, Yue Liu, Doudou Zhou, Sinian Zhang, Junwei Lu",
      title: "The Wreaths of Coherence: Uniform Graph Feature Selection with False Discovery Rate Control",
      venue: "Preprint, 2024+",
      topics: ["graph-ranking", "inference-testing"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2403.12284" }]
    },
    {
      category: "methodology",
      type: "preprint",
      authors: "Tianxi Cai*, Dong Xia*, Luwan Zhang*, Doudou Zhou*",
      title: "Consensus Knowledge Graph Learning via Multi-view Sparse Low Rank Block Model",
      venue: "Preprint, 2023+",
      topics: ["graph-ranking", "ehr-biomedical", "federated-transfer"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2209.13762" }]
    },
    // Published - Statistical Methodology and Theory
    {
      category: "methodology",
      type: "published",
      authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou#",
      title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
      venue: "International Conference on Machine Learning (ICML), 2026",
      topics: ["ai-llm", "graph-ranking"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/pdf/2601.21817" },
        { label: "Code", url: "https://github.com/TanXZfra/A-Judge-Aware-Ranking-Framework-for-Evaluating-Large-Language-Models-without-Ground-Truth" },
        { label: "Website", url: "https://wujw13.github.io/rank_llm" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Yue Kang, Mingshuo Liu, Bongsoo Yi, Jing Lyu,  Zhi Zhang, Doudou Zhou, Yao Li",
      title: "Single Index Bandits: Generalized Linear Contextual Bandits with Unknown Reward Functions",
      venue: "International Conference on Learning Representations (ICLR), 2026",
      topics: ["rl-sequential"],
      links: [
        { label: "Paper", url: "https://openreview.net/forum?id=aYDpQUcJTn" },
        { label: "arXiv", url: "https://arxiv.org/pdf/2506.12751" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Kaicheng Zhang, Sinian Zhang, Doudou Zhou#, Yidong Zhou#",
      title: "Wasserstein Transfer Learning",
      venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
      topics: ["federated-transfer"],
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
      topics: ["graph-ranking", "ehr-biomedical", "inference-testing"],
      links: [
        { label: "Paper", url: "https://academic.oup.com/jrsssb/advance-article-abstract/doi/10.1093/jrsssb/qkaf061/8267144?redirectedFrom=fulltext"},
        { label: "arXiv", url: "https://arxiv.org/abs/2312.15611" },
        { label: "Code", url: "https://github.com/junwei-lu/WordVec_Inference" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Hao Chen",
      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
      venue: "IEEE Transactions on Information Theory, 2025",
      topics: ["inference-testing", "graph-ranking"],
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/11021493" },
        { label: "arXiv", url: "https://arxiv.org/abs/2206.03038" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou*, Molei Liu*, Mengyan Li, Tianxi Cai",
      title: "Doubly Robust Evaluation of Receiver Operating Characteristic under Covariate Shift with High Dimensional Features",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2025",
      topics: ["inference-testing"],
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2356291" },
        { label: "arXiv", url: "https://arxiv.org/abs/2208.05134" },
        { label: "Code", url: "https://www.tandfonline.com/doi/suppl/10.1080/01621459.2024.2356291?scroll=top" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Yufeng Zhang, Aaron Sonabend-W, Zhaoran Wang, Junwei Lu, Tianxi Cai",
      title: "Federated Offline Reinforcement Learning",
      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
      topics: ["rl-sequential", "federated-transfer"],
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287?casa_token=ZsYamLI5gcwAAAAA:vpxrdw68t-U-SpN02Azg1aFFmZwjzfjmA9LJI4TUA8U6Ho01YwBWhbCXUcsS0G-tePqHeT8THU-3" },
        { label: "arXiv", url: "https://arxiv.org/abs/2206.05581" },
        { label: "Code", url: "https://github.com/DoudouZhou/FDTR" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Tianxi Cai, Junwei Lu",
      title: "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
      venue: "Journal of Machine Learning Research, 2023",
      topics: ["federated-transfer", "multimodal-representation"],
      links: [
        { label: "Paper", url: "https://jmlr.org/papers/v24/22-0642.html" },
        { label: "arXiv", url: "https://arxiv.org/abs/2105.10360" },
        { label: "Code", url: "https://github.com/DoudouZhou/BONMI/blob/main/README.md" },
        { label: "Package", url: "https://celehs.github.io/bonmi/" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Doudou Zhou, Hao Chen",
      title: "A New Ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
      venue: "Conference on Learning Theory (COLT), 2023",
      topics: ["inference-testing", "graph-ranking"],
      links: [
        { label: "Paper", url: "https://proceedings.mlr.press/v195/zhou23a/zhou23a.pdf" },
        { label: "arXiv", url: "https://arxiv.org/abs/2112.12948" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/GraphRankTest/index.html" }
      ]
    },
    {
      category: "methodology",
      type: "published",
      authors: "Molei Liu*, Yi Zhang*, Doudou Zhou*",
      title: "Double/Debiased Machine Learning for Logistic Partially Linear Model",
      venue: "The Econometrics Journal, 2021",
      topics: ["inference-testing"],
      links: [
        { label: "Paper", url: "https://academic.oup.com/ectj/article-abstract/24/3/559/6296639" },
        { label: "Code", url: "https://academic.oup.com/ectj/article/24/3/559/6296639" }
      ]
    },
    // Preprints - Applications
    {
      category: "applications",
      type: "preprint",
      authors: "Minh Duc Vu, Mingshuo Liu, Doudou Zhou#",
      title: "A Trainable Centrality Framework for Modern Data",
      venue: "Preprint, 2025+",
      topics: ["graph-ranking"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2511.22959" },
        { label: "Website", url: "https://vuminhducvmd.github.io/FUSE/" },
        { label: "Code", url: "https://github.com/vuminhducvmd/FUSE" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Jessica Gronsbell*, Vidul Ayakulangara Panickan*, Doudou Zhou*, Chris Lin, Thomas Charlon, Chuan Hong, Xin Xiong, Linshanshan Wang, Jianhui Gao, Shirley Zhou, Yuan Tian, Yaqi Shi, Ziming Gan, Tianxi Cai",
      title: "PEHRT: A Common Pipeline for Harmonizing Electronic Health Record data for Translational Research",
      venue: "Preprint, 2025+",
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/pdf/2509.08553" },
        { label: "Website", url: "https://celehs.github.io/PEHRT/" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/nlpembeds/index.html" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Yinjie Wang*, Doudou Zhou*, Yue Liu, Junwei Lu, Tianxi Cai",
      title: "Automated Hierarchical Graph Construction for Multi-source Electronic Health Records",
      venue: "Preprint, 2025+",
      topics: ["graph-ranking", "ehr-biomedical"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2509.06576" },
        { label: "Website", url: "https://celehs.github.io/MASH/" }
      ]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Junhan Yu, Zhunyi Feng, Junwei Lu, Tianxi Cai, Doudou Zhou#",
      title: "Time-Aware Attention for Enhanced Electronic Health Records Modeling",
      venue: "Preprint, 2025+",
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2507.14847" }]
    },
    {
      category: "applications",
      type: "preprint",
      authors: "Qiming Wu, Siqi Li, Doudou Zhou, Nan Liu",
      title: "Toward Fair Federated Learning under Demographic Disparities and Data Imbalance",
      venue: "Preprint, 2025+",
      topics: ["federated-transfer", "ehr-biomedical"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.09295" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Doudou Zhou, Han Tong, Linshanshan Wang, Suqi Liu, Xin Xiong, Ziming Gan, Romain Griffier, Boris P. Hejblum, Yun-Chung Liu, Chuan Hong, Clara-Lea Bonzel, Tianrun Cai, Kevin Pan, Yuk-Lam Ho, Lauren Costa, Vidul Ayakulangara Panickan, J. Michael Gaziano, Kenneth D. Mandl, Vianney Jouhet, Rodolphe Thiebaut, Zongqi Xia, Kelly Cho, Katherine P. Liao, Tianxi Cai",
      title: "Representation learning to advance multi-institutional studies with electronic health record data from US and France",
      venue: "Nature Communications, 2026",
      topics: ["ehr-biomedical", "multimodal-representation", "federated-transfer"],
      links: [
        { label: "Paper", url: "https://www.nature.com/articles/s41467-026-71152-1" },
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
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [
        { label: "medRxiv", url: "https://www.medrxiv.org/content/10.1101/2023.09.29.23296239v1" },
        { label: "KOMAP", url: "https://shiny.parse-health.org/KOMAP/" },
        { label: "ONCE", url: "https://shiny.parse-health.org/ONCE/" }
      ]
    },
    // Published - Applications
    {
      category: "applications",
      type: "published",
      authors: "Yang Yang, Kathryn Pollak, Bibhas Chakraborty, Molei Liu#, Doudou Zhou#, Chuan Hong#",
      title: "RELEAP: Reinforcement-Enhanced Label-Efficient Active Phenotyping for Electronic Health Records",
      venue: "JAMIA Open, 2026",
      topics: ["ehr-biomedical", "rl-sequential"],
      links: [
        { label: "Paper", url: "https://academic.oup.com/jamiaopen/article/9/1/ooag019/8490431" },
        { label: "Code", url: "https://github.com/yy447/AL_framework" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Xinzi Tan, Kejian Zhang, Junhan Yu, Doudou Zhou#",
      title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
      venue: "AISTATS, 2026",
      topics: ["multimodal-representation", "ai-llm"],
      links: [
        { label: "Paper", url: "https://openreview.net/attachment?id=gOOxbzB9Y5&name=pdf" },
        { label: "arXiv", url: "https://arxiv.org/pdf/2601.09220" },
        { label: "Code", url: "https://github.com/TanXZfra/Time-aware-Hawkes-Attention" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Chuan Hong, Jonathan Chong Kai Liew, Jaeyong Yu, Tomás Barry, Audrey L. Blewer, Daniel M. Buckland, Tianrun Cai, Won Chul Cha, Bibhas Chakraborty, Wei Chen, Jun Cheng, Shu-Ling Chong, Therese Djärv, Arul Earnest, Matthew Engelhard, Xiuyi Fan, Mengling Feng, Jean Feng, Huazhu Fu, Wilson Wen Bin Goh, Benjamin A. Goldstein, Jessica Gronsbell, Andrew Fu Wah Ho, Kendall Ho, Taku Iwami, Anjni Joiner, Aaron Kornblith, Siqi Li, Shir Lynn Lim, Molei Liu, Zhenghong Liu, Lei Lu, Yuan Luo, Yih Yng Ng, Yilin Ning, Yohei Okada, Ju Ok Park, Yu Rang Park, Junaid Razzak, Yuzeng Shen, Fahad Javaid Siddiqui, Peter A D Steel, Kenneth Boon Kiat Tan, Salinelat Teixayavong, Bella Vakulenko-Lagun, Joao Ricardo Nickenig Vissoci, Grzegorz Waligora, Fei Wang, Haibo Wang, Haoyuan Wang, An-Kwok Ian Wong, Feng Xie, Jie Yang, Yiye Zhang, Doudou Zhou, Li Zhou, Tingting Zhu, Robert Neumar, David Page, Michael Pencina, Roger Vaughan, Marcus Eng Hock Ong, Nan Liu",
      title: "FAIR-EC: A Global Research Network for Fair, Accountable, Interpretable, and Responsible AI in Emergency Care",
      venue: "JMIR Research Protocols, 2026",
      topics: ["ehr-biomedical", "ai-llm"],
      links: [{ label: "Paper", url: "https://preprints.jmir.org/preprint/74202" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Siqi Li, Qiming Wu, Doudou Zhou, Xin Li, Di Miao, Chuan Hong, Wenjun Gu, Yuqing Shang, Yohei Okada, Michael Hao Chen, Mengying Yan, Yilin Ning, Marcus Eng Hock Ong, Nan Liu",
      title: "FairFML: Fair Federated Machine Learning with a Case Study on Reducing Gender Disparities in Cardiac Arrest Outcome Prediction",
      venue: "npj Health Systems, 2025",
      topics: ["federated-transfer", "ehr-biomedical"],
      links: [{ label: "Paper", url: "https://www.nature.com/articles/s44401-025-00035-2" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Ziming Gan*, Doudou Zhou*, Everett Rush, Vidul A. Panickan, Yuk-Lam Ho, George Ostrouchov, Zhiwei Xu, Shuting Shen, Xin Xiong, Kimberly F. Greco, Chuan Hong, Clara-Lea Bonzel, Jun Wen, Lauren Costa, Tianrun Cai, Edmon Begoli, Zongqi Xia, J. Michael Gaziano, Katherine P. Liao, Kelly Cho, Tianxi Cai, Junwei Lu",
      title: "ARCH: Large-scale Knowledge Graph via Aggregated Narrative Codified Health Records Analysis",
      venue: "Journal of Biomedical Informatics, 2025",
      topics: ["ehr-biomedical", "graph-ranking"],
      links: [
        { label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S1532046424001795" },
        { label: "Code", url: "https://github.com/yuming14/ARCH" },
        { label: "ARCH APP", url: "https://shiny.parse-health.org/ARCH/" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Doris Yang, Doudou Zhou, Steven Cai, Ziming Gan, Michael Pencina, Paul Avillach, Tianxi Cai, Chuan Hong",
      title: "SONAR: Enabling Robust Automated Harmonization of Heterogeneous Data through Ensemble Machine Learning",
      venue: "JMIR Medical Informatics, 2025",
      topics: ["ehr-biomedical", "federated-transfer"],
      links: [{ label: "Paper", url: "https://medinform.jmir.org/2025/1/e54133" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Jun Wen, Hao Xue, Everett Rush, Vidul A. Panickan, Tianrun Cai, Doudou Zhou, Yuk-Lam Ho, Lauren Costa, Edmon Begoli, Chuan Hong, J. Michael Gaziano, Kelly Cho, Katherine P. Liao, Junwei Lu, Tianxi Cai",
      title: "DOME: Directional Medical Embedding Vectors from Electronic Health Records",
      venue: "Journal of Biomedical Informatics, 2025",
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [
        { label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S1532046424001862" },
        { label: "Code", url: "https://github.com/celehs/Directional-EHR-embedding" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yiwei Lou, Yanyuan Chen, Yu Huang, Doudou Zhou, Yongzhi Cao, Hanpin Wang",
      title: "Two-stream Feature Extraction for Self-supervised Image Quality Assessment",
      venue: "IEEE International Conference on Data Mining (ICDM), 2023",
      topics: ["multimodal-representation"],
      links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/10415683" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Bryan Cai, Sihang Zeng, Yucong Lin, Zheng Yuan, Doudou Zhou, Lu Tian",
      title: "Hierarchical Pretraining for Biomedical Term Embeddings",
      venue: "Proceedings of the 18th Conference on Computational Intelligence Methods for Bioinformatics & Biostatistics (CIBB), 2023",
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2307.00266" }]
    },
    {
      category: "applications",
      type: "published",
      authors: "Jun Wen, Xiang Zhang, Everett Rush, Vidul A. Panickan, Xingyu Li, Tianrun Cai, Doudou Zhou, Yuk-Lam Ho, Lauren Costa, Edmon Begoli, Chuan Hong, J. Michael Gaziano, Kelly Cho, Junwei Lu, Katherine P. Liao, Marinka Zitnik, Tianxi Cai",
      title: "Multimodal Representation Learning for Predicting Molecule-Disease Relations",
      venue: "Bioinformatics, 2023",
      topics: ["multimodal-representation", "ehr-biomedical"],
      links: [
        { label: "Paper", url: "https://academic.oup.com/bioinformatics/article/39/2/btad085/7034101" },
        { label: "Website", url: "https://github.com/celehs/M2REMAP" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Doudou Zhou, Ziming Gan, Xu Shi, Alina Patwari, Everett Rush, Clara-Lea Bonzel, Vidul A. Panickan, Chuan Hong, Yuk-Lam Ho, Tianrun Cai, Lauren Costa, Xiaoou Li, Victor M. Castro, Shawn N. Murphy, Gabriel Brat, Griffin Weber, Paul Avillach, J. Michael Gaziano, Kelly Cho, Katherine P. Liao, Junwei Lu, Tianxi Cai",
      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
      venue: "Journal of Biomedical Informatics, 2022",
      topics: ["ehr-biomedical", "graph-ranking", "federated-transfer"],
      links: [
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/35872266/" },
        { label: "MIKGI APP", url: "https://shiny.parse-health.org/MIKGI/" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yuri Ahuja, Liang Liang, Doudou Zhou, Selena Huang, Tianxi Cai",
      title: "Semisupervised Calibration of Risk with Noisy Event Times (SCORNET) using electronic health record data",
      venue: "Biostatistics, 2022",
      topics: ["ehr-biomedical", "inference-testing"],
      links: [
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/35166342/" },
        { label: "Website", url: "https://github.com/celehs/SCORNET" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/SCORNET/index.html" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Chuan Hong, Everett Rush, Molei Liu, Doudou Zhou, Jiehuan Sun, Aaron Sonabend, Victor M. Castro, Petra Schubert, Vidul A. Panickan, Tianrun Cai, Lauren Costa, Zeling He, Nicholas Link, Ronald Hauser, J. Michael Gaziano, Shawn N. Murphy, George Ostrouchov, Yuk-Lam Ho, Edmon Begoli, Junwei Lu, Kelly Cho, Katherine P. Liao, Tianxi Cai, VA Million Veteran Program",
      title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-Center Large Scale Electronic Health Record Data",
      venue: "npj Digital Medicine, 2021",
      topics: ["ehr-biomedical", "multimodal-representation"],
      links: [
        { label: "Paper", url: "https://www.nature.com/articles/s41746-021-00519-z" },
        { label: "Website", url: "https://celehs.github.io/KESER/" },
        { label: "KESER Network", url: "https://shiny.parse-health.org/kesernetwork-linkage/" }
      ]
    },
    {
      category: "applications",
      type: "published",
      authors: "Yuri Ahuja, Doudou Zhou, Zeling He, Jiehuan Sun, Victor M. Castro, Vivian S. Gainer, Shawn N. Murphy, Chuan Hong, Tianxi Cai",
      title: "sureLDA: A Multi-Disease Automated Phenotyping Method for the Electronic Health Record",
      venue: "Journal of the American Medical Informatics Association, 2020",
      topics: ["ehr-biomedical"],
      links: [
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/32548637/" },
        { label: "Website", url: "https://celehs.github.io/sureLDA/" },
        { label: "R package", url: "https://cran.r-project.org/web/packages/sureLDA/index.html" }
      ]
    }
  ];

export const homepagePublicationTitles: string[] = [
  "Pattern-Calibrated Multimodal Prediction under Blockwise Missingness",
  "Representation learning to advance multi-institutional studies with electronic health record data from US and France",
  "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
  "Contrastive Learning on Multimodal Analysis of Electronic Health Records",
  "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
  "Doubly Robust Evaluation of Receiver Operating Characteristic under Covariate Shift with High Dimensional Features",
  "Federated Offline Reinforcement Learning",
  "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
];

export const publicationCategoryLabels: Record<PublicationCategory, string> = {
  methodology: "Methodology & Theory",
  applications: "Applications",
};

export const publicationTopicOrder: PublicationTopic[] = [
  "inference-testing",
  "ai-llm",
  "multimodal-representation",
  "ehr-biomedical",
  "rl-sequential",
  "graph-ranking",
  "federated-transfer",
];

export const publicationTopicLabels: Record<PublicationTopic, string> = {
  "inference-testing": "Inference & Testing",
  "ai-llm": "AI / LLM Systems",
  "multimodal-representation": "Multimodal & Representation",
  "ehr-biomedical": "EHR & Biomedical Data",
  "rl-sequential": "RL & Sequential Decisions",
  "graph-ranking": "Graph, Ranking & Geometry",
  "federated-transfer": "Federated / Transfer Learning",
};

export const publicationTypeLabels: Record<PublicationType, string> = {
  preprint: "Preprint",
  published: "Published",
};

export function getPublicationYear(pub: Publication) {
  const match = pub.venue.match(/\b(19|20)\d{2}\b/);
  return match ? Number.parseInt(match[0], 10) : 0;
}

export function getPublicationYearLabel(pub: Publication) {
  const match = pub.venue.match(/\b((?:19|20)\d{2}\+?)/);
  return match ? match[1] : pub.type === "preprint" ? "Preprint" : "";
}

export function getPublicationShortVenue(pub: Publication) {
  const venue = pub.venue;
  if (venue.includes("Nature Communications")) return "Nat Commun";
  if (venue.includes("International Conference on Machine Learning")) return "ICML";
  if (venue.includes("International Conference on Learning Representations")) return "ICLR";
  if (venue.includes("Advances in Neural Information Processing Systems")) return "NeurIPS";
  if (venue.includes("IEEE Transactions on Information Theory")) return "IEEE TIT";
  if (venue.includes("Journal of the American Statistical Association")) return "JASA";
  if (venue.includes("Journal of Machine Learning Research")) return "JMLR";
  if (venue.includes("Conference on Learning Theory")) return "COLT";
  if (venue.includes("AISTATS")) return "AISTATS";
  if (venue.includes("JAMIA Open")) return "JAMIA Open";
  if (venue.startsWith("Preprint")) return "Preprint";
  return venue.split(",")[0];
}

export function getPublicationSortKey(pub: Publication) {
  const arxivLink = pub.links.find((link) => link.url.includes("arxiv.org"));
  const arxivMatch = arxivLink?.url.match(/(\d{4}\.\d{4,5})/);
  if (pub.type === "preprint" && arxivMatch) {
    return Number.parseInt(arxivMatch[1].replace(".", ""), 10);
  }
  return getPublicationYear(pub) * 100000;
}

export function findPublicationByTitle(title: string) {
  return publications.find((pub) => pub.title === title);
}
