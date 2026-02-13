/*
 * Home page - Academic portfolio with detailed information
 * Design: Two-column layout with bio, selected publications, and news
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, GraduationCap, ExternalLink, FileText, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // Selected publications to display on homepage (first-author papers)
  const selectedPublications = [
    {
      venue: "IEEE TIT",
      year: "2025",
      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
      authors: "Doudou Zhou, Hao Chen",
      journal: "IEEE Transactions on Information Theory",
      links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/11021493/" },
              { label: "arXiv", url: "https://arxiv.org/abs/2505.17404" }]
    },
    {
      venue: "JASA",
      year: "2024",
      title: "Doubly Robust Augmented Model Accuracy Transfer Inference with High Dimensional Features",
      authors: "Doudou Zhou, Molei Liu, Mengyan Li, Tianxi Cai",
      journal: "Journal of the American Statistical Association: Theory and Methods",
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2356291" },
        { label: "arXiv", url: "https://arxiv.org/abs/2505.17404" },
         { label: "Code", url: "https://www.tandfonline.com/doi/suppl/10.1080/01621459.2024.2356291?scroll=top" }
      ]
    },
    {
      venue: "JASA",
      year: "2024",
      title: "Federated Offline Reinforcement Learning",
      authors: "Doudou Zhou, Yufeng Zhang, Aaron Sonabend-W, Zhaoran Wang, Junwei Lu, Tianxi Cai",
      journal: "Journal of the American Statistical Association: Theory and Methods",
      links: [
        { label: "Paper", url: "https://www.tandfonline.com/doi/pdf/10.1080/01621459.2024.2310287" },
        { label: "arXiv", url: "https://arxiv.org/pdf/2506.12751" },
         { label: "Code", url: "https://github.com/DoudouZhou/FDTR" }
      ]
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
         { label: "Code", url: "https://github.com/DoudouZhou/BONMI/blob/main/README.md" }
      ]
    },
    {
      venue: "COLT",
      year: "2023",
      title: "A New Ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
      authors: "Doudou Zhou, Hao Chen",
      journal: "Conference on Learning Theory",
      links: [ { label: "Paper", url: "https://proceedings.mlr.press/v195/zhou23a/zhou23a.pdf" },
               { label: "arXiv", url: "https://arxiv.org/abs/2112.12948" },
               { label: "R package", url: "https://cran.r-project.org/web/packages/GraphRankTest/index.html" }]
    }, 
    {
      venue: "JBI",
      year: "2022",
      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
      authors: "Doudou Zhou, et al.",
      journal: "Journal of Biomedical Informatics",
      links: [{ label: "MIKGI APP", url: "https://pubmed.ncbi.nlm.nih.gov/35872266/" }]
    }
  ];

  const news = [
    {
      date: "Feb 2026",
      content: "Our paper on single index bandits has been accepted at ICLR 2026."
    },
    {
      date: "Dec 2025",
      content: "Welcoming new PhD students Kejian Zhang, Jiawei Wu, and Rundong Huang to the group."
    },
    {
      date: "Sep 2025",
      content: "Our paper on Wasserstein transfer learning has been accepted at NeurIPS 2025."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Bio Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Doudou Zhou
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Assistant Professor, Department of Statistics and Data Science
              </p>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  👋 Hi! I'm Doudou Zhou, an Assistant Professor in the Department of Statistics and Data Science 
                  at the National University of Singapore. I develop rigorous statistical methodology and practical 
                  AI techniques for analyzing complex healthcare data, with a focus on transfer learning, federated 
                  learning, reinforcement learning, and electronic health records analysis.
                </p>
                
                <p>
                  🔍 My research bridges theory and application, creating tools that advance both statistical science 
                  and real-world medical research. I work on developing novel statistical methods with theoretical 
                  guarantees for transfer learning, change-point detection, and high-dimensional inference, as well as 
                  building practical AI systems for multi-institutional data integration and knowledge graph construction 
                  from electronic health records.
                </p>
                
                <p>
                  🤝 I am always open to collaborations and enthusiastic about exploring new research directions. 
                  I welcome prospective students (PhD, Master's, and undergraduate) to join my research group, 
                  and I also host visiting scholars from China and around the world for academic exchanges. 
                  Feel free to reach out if you're interested in working together!
                </p>
              </div>
            </section>

            {/* Education & Experience */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Education & Experience</h2>
              <div className="space-y-6">
                {/* Current Position */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">Assistant Professor</h3>
                    <span className="text-sm text-muted-foreground">2024 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-1">National University of Singapore</p>
                  <p className="text-sm text-muted-foreground">Department of Statistics and Data Science</p>
                </div>

                {/* Postdoc */}
                <div className="border-l-4 border-muted pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">Postdoctoral Research Fellow</h3>
                    <span className="text-sm text-muted-foreground">2022 - 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Harvard University</p>
                  <p className="text-sm text-muted-foreground">Department of Biostatistics</p>
                  <p className="text-sm text-muted-foreground mt-1">Advisor: Prof. Tianxi Cai</p>
                </div>

                {/* PhD */}
                <div className="border-l-4 border-muted pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">Ph.D. in Statistics</h3>
                    <span className="text-sm text-muted-foreground">2022</span>
                  </div>
                  <p className="text-muted-foreground mb-1">University of California, Davis</p>
                  <p className="text-sm text-muted-foreground">Advisor: Prof. Hao Chen</p>
                </div>

                {/* Bachelor */}
                <div className="border-l-4 border-muted pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">B.S. in Statistics & B.E. in Computer Science</h3>
                    <span className="text-sm text-muted-foreground">2019</span>
                  </div>
                  <p className="text-muted-foreground mb-1">University of Science and Technology of China (USTC)</p>
                  <p className="text-sm text-muted-foreground">Dual Degree</p>
                </div>
              </div>
            </section>

            {/* Selected Publications */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Selected Publications</h2>
                <Link href="/publications">
                  <Button variant="outline">
                    View All
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                {selectedPublications.map((pub, idx) => (
                  <Card key={idx} className="p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <Badge className="mt-1 shrink-0">{pub.venue} {pub.year}</Badge>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {pub.authors}
                        </p>
                        <p className="text-sm italic text-muted-foreground mb-3">
                          {pub.journal}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.links.map((link, linkIdx) => (
                            <Button
                              key={linkIdx}
                              size="sm"
                              variant="outline"
                              asChild
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
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
            </section>

            {/* News */}
            <section>
              <h2 className="text-3xl font-bold mb-6">News</h2>
              <div className="space-y-4">
                {news.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b last:border-0">
                    <span className="text-sm font-medium text-muted-foreground shrink-0 w-24">
                      {item.date}
                    </span>
                    <p className="text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Photo */}
            <div className="sticky top-24">
              <Card className="p-6 space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/bQyuYXYXDGZBOLxv.png"
                    alt="Doudou Zhou"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-medium">National University of Singapore</p>
                      <p className="text-muted-foreground">Department of Statistics and Data Science</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href="mailto:doudou@nus.edu.sg" className="hover:underline">
                      doudou@nus.edu.sg
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a
                      href="https://scholar.google.com/citations?user=YOUR_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Google Scholar
                    </a>
                  </div>

                  <a
                    href="https://www.stat.nus.edu.sg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-4">
                      Department
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
