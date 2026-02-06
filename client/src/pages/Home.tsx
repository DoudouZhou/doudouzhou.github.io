/*
 * Design Philosophy: Academic Editorial
 * Magazine-style layout with elegant serif typography (Playfair Display + Lora)
 * Warm cream background (#fefce8) with deep brown text (#292524)
 * Olive green accents (#365314) for emphasis
 * Refined decorative elements and generous whitespace
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Github, 
  Linkedin, 
  GraduationCap, 
  BookOpen, 
  Award,
  Users,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/8TRWcaPOUSPlHg8pczerr4/sandbox/zaPHBq5nJ7IHB2NQ17DWBB-img-1_1770378586000_na1fn_aGVyby1hYnN0cmFjdC1kYXRh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRSV2NhUE9VU1BsSGc4cGN6ZXJyNC9zYW5kYm94L3phUEhCcTVuSjdJSEIyTlExN0RXQkItaW1nLTFfMTc3MDM3ODU4NjAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxa1lYUmgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WwkZdSfYzlhrq3712XecuBo7yM25xj48YHShJADiUKbKtp2sUhsfbCXXemBzzypzaU32z~DrZJjXV4sI~kPTlmERxBxlswsuqPMM7qj2ADm7vIYHrWIq5rIHvyih9cl2R8ZMhHSIgySYzfmRssotU508iQ~pe8NUM5OQK2~Hc4bBAZFbrOhBonFKMqalmi9TPHfJ2MgYHrnMgbeJp2g6F18gv8QR-nE5cw9T9PWxHtpE-E0ObNyH3YiV6tCqgccgAx0sH7HTDl77n0gcIUgylfvJ2LxGlzNend0kvAJ4Zz1pPOiD3B6~m4qBeAXeVw87ZJ5nvHEb5oLqOjrIEMjSTw__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              Doudou Zhou
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-body">
              Assistant Professor of Statistics & Data Science
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body">
              National University of Singapore
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-6">
              <Button variant="default" size="lg" className="font-sans" asChild>
                <a href="mailto:ddzhou@nus.edu.sg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" className="font-sans" asChild>
                <a href="https://github.com/doudouzhou" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="font-sans" asChild>
                <a href="https://www.linkedin.com/in/doudou-zhou" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I am an Assistant Professor of Statistics & Data Science at the National University of Singapore. 
                I was a Postdoctoral Research Fellow in Biostatistics at Harvard University from 2022 to 2024, 
                working with Prof. Tianxi Cai. I received a Ph.D in Statistics 2022 from the University of California, 
                Davis (UC Davis), advised by Prof. Hao Chen. Before that, I received my B.S. in Statistics and B.E. 
                in Computer Science (dual) from the University of Science and Technology of China (USTC) in 2019.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">To Prospective Students</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        If you're an undergraduate or master's student interested in doing a project with me, 
                        feel free to reach out and include your CV — I'm always happy to discuss potential collaborations.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                        For prospective PhD students, please apply directly through our PhD program, which has three 
                        admission cycles (fall, spring, and early admission). Just mention my name as a potential advisor 
                        in your application.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">Research Fellow Positions</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We are inviting applications for multiple Postdoctoral Research Fellow positions. 
                        Interested candidates are encouraged to reach out to me with your CV.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/8TRWcaPOUSPlHg8pczerr4/sandbox/zaPHBq5nJ7IHB2NQ17DWBB-img-2_1770378604000_na1fn_cmVzZWFyY2gtYmFja2dyb3VuZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRSV2NhUE9VU1BsSGc4cGN6ZXJyNC9zYW5kYm94L3phUEhCcTVuSjdJSEIyTlExN0RXQkItaW1nLTJfMTc3MDM3ODYwNDAwMF9uYTFmbl9jbVZ6WldGeVkyZ3RZbUZqYTJkeWIzVnVaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FOSSo0EjYNjwHWsBZy~mlI-LFJTaHBa4I8b7Chx2GY4x8CAgSqm8QlRVpbMfPUHLDPPKIfBA0AeLRAge4JpYqc54m2KqiIWSTBzDHINM7P2c-YdVH-d3pESB7XojhJ8Q-mvF6EoAa3QbXCnEt2Do32H7-k4AQBzZIIHKP7QlVR~caT8iSd4~ziJKHa6qxUg4eWtc8dA8TWxhdIkJgKjKvLcY8lFCZGCCHarjm6EDd5Q3~6Lg5xcobvTvymFGamlH3cTtOm2o-45331X9Rqs8AquG2tbD5VvIbj8H3aAe5LJ8viNS4tF9J6Jnq5dh5bMU76LZQrHC6FBTQt5r6AFZgA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Research Interests
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              I am interested in developing statistical methodology and theory for electronic health records (EHR) 
              data analysis. I'm also developing practical tools for analyzing high-dimensional and non-Euclidean data.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Multi-modal Data Analysis",
                "Representation Learning",
                "Federated Learning",
                "Transfer Learning",
                "Reinforcement Learning",
                "Network Analysis",
                "Graph Neural Networks",
                "Large Language Models",
                "High-dimensional Statistics",
                "Electronic Health Records"
              ].map((topic) => (
                <Badge 
                  key={topic} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-sans justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Selected Awards
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                { year: "2023", award: "Harvard Data Science Initiative Postdoctoral Fellow Research Fund" },
                { year: "2023", award: "Program in Quantitative Genomics Student/Postdoc Travel Award, Harvard" },
                { year: "2022", award: "ICSA Student Poster Award" },
                { year: "2022", award: "Student Paper Award, Statistical Learning and Data Science Section, ASA" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="font-display text-2xl font-bold text-primary min-w-[80px]">{item.year}</span>
                  <p className="text-lg text-foreground/90">{item.award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Teaching
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-display text-2xl font-bold mb-2">DSA4213</h3>
                <p className="text-lg text-foreground/90 mb-2">Natural Language Processing for Data Science</p>
                <p className="text-sm text-muted-foreground">Semester 1, AY2025/2026</p>
              </Card>
              
              <Card className="p-6 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="font-display text-2xl font-bold mb-2">ST5230</h3>
                <p className="text-lg text-foreground/90 mb-2">Applied Natural Language Processing</p>
                <p className="text-sm text-muted-foreground">Semester 2, AY2024/2025</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/8TRWcaPOUSPlHg8pczerr4/sandbox/zaPHBq5nJ7IHB2NQ17DWBB-img-3_1770378582000_na1fn_cHVibGljYXRpb25zLXRleHR1cmU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRSV2NhUE9VU1BsSGc4cGN6ZXJyNC9zYW5kYm94L3phUEhCcTVuSjdJSEIyTlExN0RXQkItaW1nLTNfMTc3MDM3ODU4MjAwMF9uYTFmbl9jSFZpYkdsallYUnBiMjV6TFhSbGVIUjFjbVUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Qd20X91rpufzQImPHhSYtxlLYvs313g5A0Z5MYpDB1JujXWsC3cxGn4uRh~svNAxOrXqA~Efdj6ZmcY3f2VWUVaAFm-ZbXY25R-gW18xdjcB9~K3EIMEnY8XFha9C6F7KkHYUDBGz~eetGqdgeUjRkdV8Xa1cfBiK3lmIG2VbeIE-FQSAnqGsmWau~0e~24jmGEPI8gGpgI8VKNy05ysUtC2kjDPs-gwjmr~3M5hUsEUVjNyWREwygud-HFynbZ7SX85uWRe2Y5KrT4iOhPlvcKVZeVEArgnQGCTQtI9-eFp6mNZJw6InVId9affR7sy8~l8zSQr8UcDWkicv45HQg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Publications & Preprints
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              *: Contributed equally or alphabetic order | #: Corresponding author
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["all", "methodology", "applications"].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="font-sans capitalize"
                >
                  {category === "all" ? "All Publications" : category}
                </Button>
              ))}
            </div>

            {/* Featured Publications */}
            {(selectedCategory === "all" || selectedCategory === "methodology") && (
              <div className="mb-16">
                <h3 className="font-display text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-primary">—</span> Statistical Methodology and Theory
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      authors: "Zhang, K., Zhang S., Zhou, D.#, Zhou, Y.#",
                      title: "Wasserstein Transfer Learning",
                      venue: "Advances in Neural Information Processing Systems, 2025",
                      links: [
                        { label: "arXiv", url: "#" },
                        { label: "code", url: "#" }
                      ]
                    },
                    {
                      authors: "Xu, Z., Gan, Z., Zhou, D., Shen, S., Lu, J., Cai, T.",
                      title: "Inference of Dependency Knowledge Graph for Electronic Health Records",
                      venue: "Journal of the Royal Statistical Society Series B (Statistical Methodology), 2025",
                      links: [
                        { label: "arXiv", url: "#" },
                        { label: "code", url: "#" }
                      ]
                    },
                    {
                      authors: "Zhou, D., Chen, H.",
                      title: "Asymptotic Distribution-Free Change-Point Detection for Modern Data Based on a New Ranking Scheme",
                      venue: "IEEE Transactions on Information Theory, 2025",
                      links: [{ label: "arXiv", url: "#" }]
                    },
                    {
                      authors: "Zhou, D.*, Liu, M.*, Li, M., Cai, T.",
                      title: "Doubly Robust Augmented Model Accuracy Transfer Inference with High Dimensional Features",
                      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
                      links: [
                        { label: "arXiv", url: "#" },
                        { label: "code", url: "#" }
                      ]
                    },
                    {
                      authors: "Zhou, D.*, Zhang, Y.*, Sonabend-W, A., Wang, Z., Lu, J., Cai, T.",
                      title: "Federated Offline Reinforcement Learning",
                      venue: "Journal of the American Statistical Association: Theory and Methods, 2024",
                      links: [
                        { label: "arXiv", url: "#" },
                        { label: "code", url: "#" }
                      ]
                    },
                    {
                      authors: "Zhou, D., Cai, T., Lu, J.",
                      title: "Multi-source Learning via Completion of Block-wise Overlapping Noisy Matrices",
                      venue: "Journal of Machine Learning Research, 2023",
                      links: [
                        { label: "code", url: "#" },
                        { label: "package", url: "#" }
                      ]
                    },
                    {
                      authors: "Zhou, D., Chen, H.",
                      title: "A New ranking Scheme for Modern Data and Its Application to Two-sample Hypothesis Testing",
                      venue: "Conference on Learning Theory (COLT), 2023",
                      links: [{ label: "R package", url: "#" }]
                    }
                  ].map((pub, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-primary"
                    >
                      <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                      <h4 className="font-body text-lg font-semibold text-foreground mb-2 leading-relaxed">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.links.map((link, linkIndex) => (
                          <Button 
                            key={linkIndex} 
                            variant="outline" 
                            size="sm" 
                            className="font-sans"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.label}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {(selectedCategory === "all" || selectedCategory === "applications") && (
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-primary">—</span> Algorithms and Applications
                </h3>
                <div className="space-y-6">
                  {[
                    {
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
                      authors: "Yang, D., Zhou, D., Cai, S., Gan, Z., Pencina, M., Avillach, P., Cai, T., Hong, C.",
                      title: "SONAR: Enabling Robust Automated Harmonization of Heterogeneous Data through Ensemble Machine Learning",
                      venue: "JMIR Medical Informatics, 2025",
                      links: [{ label: "preprint", url: "#" }]
                    },
                    {
                      authors: "Zhou, D., et al.",
                      title: "Multiview Incomplete Knowledge Graph Integration with Application to Cross-institutional EHR Data Harmonization",
                      venue: "Journal of Biomedical Informatics, 2022",
                      links: [{ label: "MIKGI APP", url: "#" }]
                    },
                    {
                      authors: "Hong, C., et al.",
                      title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-Center Large Scale Electronic Health Record Data",
                      venue: "npj Digital Medicine, 2021",
                      links: [{ label: "KESER Network", url: "#" }]
                    }
                  ].map((pub, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-accent"
                    >
                      <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                      <h4 className="font-body text-lg font-semibold text-foreground mb-2 leading-relaxed">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground italic mb-3">{pub.venue}</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.links.map((link, linkIndex) => (
                          <Button 
                            key={linkIndex} 
                            variant="outline" 
                            size="sm" 
                            className="font-sans"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.label}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="font-sans">
                View All Publications
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              © 2026 Doudou Zhou. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a 
                href="mailto:ddzhou@nus.edu.sg" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/doudouzhou" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/doudou-zhou" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
