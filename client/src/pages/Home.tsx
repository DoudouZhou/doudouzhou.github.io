/*
 * Home page - Academic portfolio with detailed information
 * Design: Two-column layout with bio, selected publications, and news
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, GraduationCap, ExternalLink, Building2, Linkedin, Github, Users } from "lucide-react";
import { Link } from "wouter";
import ResearchAgenda from "@/components/ResearchAgenda";
import { newsItems, selectedPublications } from "@/data/homeContent";
import { CONTACT_EMAIL } from "@/siteData";

const recentNewsItems = newsItems.slice(0, 6);

export default function Home() {
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
                Assistant Professor, Department of Statistics and Data Science, National University of Singapore
              </p>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  My group develops statistical methodology and machine learning tools for modern AI systems,
                  high-dimensional and non-Euclidean data, electronic health records, and sequential decision making.
                </p>
                
                <p>
                  A recurring goal in my work is to keep evaluation targets, uncertainty, robustness, and decision
                  rules explicit when learning systems are deployed in scientific and biomedical settings. Current
                  projects span large language models and agentic AI, multimodal learning, transfer and federated
                  learning, reinforcement learning, and biomedical data science.
                </p>
                
                <p>
                  I welcome students, research fellows, visitors, and collaborators whose interests connect statistical
                  thinking with consequential AI and data-science problems.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/publications">
                  <Button>
                    Publications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/people">
                  <Button variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    People
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline">
                    Join
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <ResearchAgenda />
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
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Selected Publications</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Representative work across statistical AI, biomedical data science, non-Euclidean data analysis,
                    and sequential decision making.
                  </p>
                </div>
                <Link href="/publications">
                  <Button variant="outline" className="shrink-0">
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
              <h2 className="text-3xl font-bold mb-6">Recent Highlights</h2>
              <div className="space-y-4">
                {recentNewsItems.map((item, idx) => (
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
                    src="/assets/doudou-zhou.jpg"
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
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a
                      href="https://scholar.google.com/citations?user=gXfTi00AAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Google Scholar
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a
                      href="https://www.linkedin.com/in/doudou-zhou-557ba0106"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a
                      href="https://github.com/DoudouZhou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
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
