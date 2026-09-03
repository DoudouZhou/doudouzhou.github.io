export const CONTACT_EMAIL = "ddzhou@nus.edu.sg";
export const NUS_STATS_FACULTY_URL = "https://www.stat.nus.edu.sg/faculty-members/";

export const RESEARCH_INTEREST_DETAILS = [
  {
    title: "Statistical Foundations of AI",
    description: "Inference, uncertainty, and theory for trustworthy AI systems.",
    tags: ["Inference", "Uncertainty", "Theory"],
  },
  {
    title: "Machine Learning",
    description: "Robust learning methods for modern scientific and clinical data.",
    tags: ["Robustness", "Prediction", "Generalization"],
  },
  {
    title: "Large Language Models and Agentic AI",
    description: "Evaluation, ranking, adaptation, and agent workflows for LLMs.",
    tags: ["LLM Evaluation", "Agents", "Ranking"],
  },
  {
    title: "Multimodal Learning and Inference",
    description: "Representation learning across text, codes, images, and clinical modalities.",
    tags: ["Alignment", "Representation", "Multimodal Data"],
  },
  {
    title: "Electronic Health Records and Biomedical Data Science",
    description: "AI and statistical methods for EHRs, knowledge graphs, and biomedical discovery.",
    tags: ["EHR", "Biomedical AI", "Knowledge Graphs"],
  },
  {
    title: "High-Dimensional and Non-Euclidean Data Analysis",
    description: "Rank, graph, and geometric methods for complex structured data.",
    tags: ["Graphs", "Geometry", "Rank Methods"],
  },
  {
    title: "Reinforcement Learning and Sequential Decision Making",
    description: "Policy learning and sequential testing from observational and distributed data.",
    tags: ["Policy Learning", "Testing", "Decision Making"],
  },
] as const;

export const RESEARCH_INTERESTS = RESEARCH_INTEREST_DETAILS.map(
  (interest) => interest.title
);
