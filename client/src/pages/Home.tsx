/*
 * Home page - Academic portfolio with detailed information
 * Design: Two-column layout with bio, selected publications, and news
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, GraduationCap, ExternalLink, Linkedin, Github, Users } from "lucide-react";
import { Link } from "wouter";
import ResearchAgenda from "@/components/ResearchAgenda";
import { newsItems, selectedPublications } from "@/data/homeContent";
import { CONTACT_EMAIL } from "@/siteData";

const recentNewsItems = newsItems.slice(0, 6);
const researchTags = [
  "Statistical AI",
  "LLM Evaluation",
  "Agentic AI",
  "Multimodal EHR",
  "Biomedical Data Science",
  "Reinforcement Learning",
  "Non-Euclidean Data",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="overflow-hidden bg-[#102a43] text-white">
        <div className="container max-w-7xl py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
            <div className="min-w-0">
              <p className="mb-5 text-sm font-semibold text-[#e3bd63]">
                NUS Department of Statistics and Data Science
              </p>
              <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                <span className="block">Doudou Zhou</span>
                <span className="block">Research Group</span>
              </h1>
              <p className="mt-4 max-w-3xl font-serif text-xl italic leading-snug text-[#f3cf7a] sm:text-2xl md:text-4xl">
                <span className="block sm:inline">statistical methods for AI,</span>{" "}
                <span className="block sm:inline">biomedicine, and decisions</span>
              </p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                Led by Doudou Zhou at the National University of Singapore, the group develops
                statistical methodology and machine learning tools for modern AI systems, electronic
                health records, complex data, and sequential decision making.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {researchTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/publications">
                  <Button className="bg-white text-[#102a43] hover:bg-white/90">
                    Publications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/people">
                  <Button
                    variant="outline"
                    className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    People
                  </Button>
                </Link>
                <Link href="/join">
                  <Button
                    variant="outline"
                    className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    Join
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
              <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border-2 border-[#e3bd63]/70 bg-white/10">
                <img
                  src="/assets/doudou-zhou.jpg"
                  alt="Doudou Zhou"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Doudou Zhou</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Assistant Professor, Department of Statistics and Data Science
                </p>
                <p className="mt-1 text-sm text-white/65">National University of Singapore</p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-white/85 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-[#e3bd63]" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href="https://scholar.google.com/citations?user=gXfTi00AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <GraduationCap className="h-4 w-4 shrink-0 text-[#e3bd63]" />
                  Google Scholar
                </a>
                <a
                  href="https://www.linkedin.com/in/doudou-zhou-557ba0106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-[#e3bd63]" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/DoudouZhou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Github className="h-4 w-4 shrink-0 text-[#e3bd63]" />
                  GitHub
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl py-14 md:py-16">
        <div className="space-y-14">
          <section>
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold text-primary">About</p>
              <h2 className="text-3xl font-bold">What We Work On</h2>
              <p className="mt-3 text-muted-foreground">
                We study how statistical thinking can make AI systems more reliable, interpretable,
                and useful for biomedical and scientific decision making.
              </p>
            </div>
            <ResearchAgenda />
          </section>

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
                    <Badge className="mt-1 shrink-0">
                      {pub.venue} {pub.year}
                    </Badge>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-lg font-semibold leading-tight">{pub.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{pub.authors}</p>
                      <p className="mb-3 text-sm italic text-muted-foreground">{pub.journal}</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.links.map((link, linkIdx) => (
                          <Button key={linkIdx} size="sm" variant="outline" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
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

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
            <section>
              <h2 className="mb-6 text-3xl font-bold">Education & Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">Assistant Professor</h3>
                    <span className="shrink-0 text-sm text-muted-foreground">2024 - Present</span>
                  </div>
                  <p className="mb-1 text-muted-foreground">National University of Singapore</p>
                  <p className="text-sm text-muted-foreground">Department of Statistics and Data Science</p>
                </div>

                <div className="border-l-4 border-muted pl-6">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">Postdoctoral Research Fellow</h3>
                    <span className="shrink-0 text-sm text-muted-foreground">2022 - 2024</span>
                  </div>
                  <p className="mb-1 text-muted-foreground">Harvard University</p>
                  <p className="text-sm text-muted-foreground">Department of Biostatistics</p>
                  <p className="mt-1 text-sm text-muted-foreground">Advisor: Prof. Tianxi Cai</p>
                </div>

                <div className="border-l-4 border-muted pl-6">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">Ph.D. in Statistics</h3>
                    <span className="shrink-0 text-sm text-muted-foreground">2022</span>
                  </div>
                  <p className="mb-1 text-muted-foreground">University of California, Davis</p>
                  <p className="text-sm text-muted-foreground">Advisor: Prof. Hao Chen</p>
                </div>

                <div className="border-l-4 border-muted pl-6">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">B.S. in Statistics & B.E. in Computer Science</h3>
                    <span className="shrink-0 text-sm text-muted-foreground">2019</span>
                  </div>
                  <p className="mb-1 text-muted-foreground">University of Science and Technology of China (USTC)</p>
                  <p className="text-sm text-muted-foreground">Dual Degree</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-bold">Recent Highlights</h2>
              <div className="space-y-4">
                {recentNewsItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 border-b pb-4 last:border-0">
                    <span className="w-24 shrink-0 text-sm font-medium text-muted-foreground">
                      {item.date}
                    </span>
                    <p className="text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
