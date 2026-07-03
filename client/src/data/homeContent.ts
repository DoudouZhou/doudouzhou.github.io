import {
  findPublicationByTitle,
  getPublicationShortVenue,
  getPublicationYearLabel,
  homepagePublicationTitles,
  type Publication,
  type PublicationLink,
} from "@/data/publications";

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

function cleanAuthors(pub: Publication) {
  const authors = pub.authors.replace(/[#*]/g, "");
  return authors.length > 140 ? "Doudou Zhou, et al." : authors;
}

function cleanVenue(pub: Publication) {
  return pub.venue
    .replace(/,\s*(19|20)\d{2}\+?$/, "")
    .replace(/\s+\((ICML|ICLR|COLT)\)$/, "");
}

export const selectedPublications: SelectedPublication[] = homepagePublicationTitles.flatMap(
  (title) => {
    const pub = findPublicationByTitle(title);
    if (!pub) return [];

    return {
      venue: getPublicationShortVenue(pub),
      year: getPublicationYearLabel(pub),
      title: pub.title,
      authors: cleanAuthors(pub),
      journal: cleanVenue(pub),
      links: pub.links,
    };
  }
);

export const newsItems: NewsItem[] = [
  {
    date: "Jul 2026",
    content: "New preprint on arXiv: \"Pattern-Calibrated Multimodal Prediction under Blockwise Missingness.\"",
  },
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
