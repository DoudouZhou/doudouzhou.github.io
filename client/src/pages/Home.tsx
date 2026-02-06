/*
 * Home page for SAIL Lab
 * Modern, vibrant blue theme with clean layout
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Users, Code, BookOpen, Award } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/8TRWcaPOUSPlHg8pczerr4/sandbox/6Kzhl1k3gH3gX1lKiEABEj-img-1_1770379142000_na1fn_c2FpbC1sYWItaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRSV2NhUE9VU1BsSGc4cGN6ZXJyNC9zYW5kYm94LzZLemhsMWszZ0gzZ1gxbEtpRUFCRWotaW1nLTFfMTc3MDM3OTE0MjAwMF9uYTFmbl9jMkZwYkMxc1lXSXRhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hoNDvvg52m2Im3gSsYVxGkGugIJxyJKiX94rb1HLW7wzuDOikoAlXn-k2v8gJKOQxSI3kVr~~TiEcyQ8IDedI76VJfqR5JDCbeBCuYVx8WqtTt4zw3naSxc3CfaTBWpqtwPJ3bA~0SsYXgy2BNfB6ceRFDIuOoTcDvsumyXgIWmQOhmBUkCOZeAHsB-iHYBlFW00TgDtvGYL0PL~rKjtZENnn9gNAoUfF83g7ucH8ctSbiHfuESCaS2kqE4IqhzZzo3hH8AuBqTJksdQl893Nqp3nJgd5~BJUGSHirTUwwsVgeHjX5F-jqMETrAsR~Hx8XHuf0wWxhIbv~AJrPfqOw__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Statistical AI and Learning Laboratory</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="gradient-text">SAIL Lab</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Advancing statistical methodology and artificial intelligence for healthcare and beyond
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link href="/research">
              <Button size="lg" className="gap-2">
                Explore Our Research
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/join">
              <Button size="lg" variant="outline">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              About <span className="gradient-text">SAIL Lab</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              SAIL Lab is led by <strong>Prof. Doudou Zhou</strong>, Assistant Professor of Statistics & Data Science 
              at the National University of Singapore. We focus on developing innovative statistical methods and AI 
              techniques for analyzing complex healthcare data, with applications in electronic health records, 
              multi-modal learning, and federated learning.
            </p>
            
            {/* Director Profile Card */}
            <Card className="p-8 hover-lift border-2">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                  DZ
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Prof. Doudou Zhou</h3>
                  <p className="text-muted-foreground mb-4">
                    Assistant Professor of Statistics & Data Science<br />
                    National University of Singapore
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Previously Postdoctoral Research Fellow at Harvard University (2022-2024), working with Prof. Tianxi Cai. 
                    Ph.D. in Statistics from UC Davis (2022), advised by Prof. Hao Chen. Dual B.S. in Statistics and B.E. 
                    in Computer Science from USTC (2019).
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:ddzhou@nus.edu.sg">Email</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer">
                        Google Scholar
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/doudouzhou" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.linkedin.com/in/doudou-zhou" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Research <span className="gradient-text">Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Statistical Methodology</h3>
              <p className="text-muted-foreground mb-4">
                Developing novel statistical methods for change-point detection, transfer learning, 
                and high-dimensional data analysis.
              </p>
              <Link href="/research">
                <Button variant="ghost" size="sm" className="gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare AI</h3>
              <p className="text-muted-foreground mb-4">
                Building AI systems for electronic health records analysis, clinical knowledge extraction, 
                and federated learning in healthcare.
              </p>
              <Link href="/research">
                <Button variant="ghost" size="sm" className="gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Source Tools</h3>
              <p className="text-muted-foreground mb-4">
                Creating accessible R packages and software tools for the research community 
                to advance data science applications.
              </p>
              <Link href="/software">
                <Button variant="ghost" size="sm" className="gap-2">
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Research <span className="gradient-text">Areas</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our research spans multiple domains in statistics, machine learning, and healthcare analytics
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
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
              "Electronic Health Records",
              "Change-Point Detection",
              "Knowledge Graph Construction"
            ].map((area) => (
              <Badge key={area} variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/publications">
              <Card className="p-6 hover-lift cursor-pointer">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Publications</h3>
                <p className="text-sm text-muted-foreground">
                  Explore our latest research papers and preprints
                </p>
              </Card>
            </Link>

            <Link href="/people">
              <Card className="p-6 hover-lift cursor-pointer">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">Our Team</h3>
                <p className="text-sm text-muted-foreground">
                  Meet the talented researchers in our lab
                </p>
              </Card>
            </Link>

            <Link href="/software">
              <Card className="p-6 hover-lift cursor-pointer">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Software</h3>
                <p className="text-sm text-muted-foreground">
                  Access our open-source tools and packages
                </p>
              </Card>
            </Link>

            <Link href="/join">
              <Card className="p-6 hover-lift cursor-pointer">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">Join Us</h3>
                <p className="text-sm text-muted-foreground">
                  Opportunities for students and postdocs
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Latest <span className="gradient-text">News</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                date: "Jan 2026",
                title: "New paper accepted at NeurIPS 2026",
                description: "Our work on Wasserstein Transfer Learning has been accepted for publication."
              },
              {
                date: "Dec 2025",
                title: "Lab website launched",
                description: "Welcome to the new SAIL Lab website! Explore our research and team."
              },
              {
                date: "Nov 2025",
                title: "Seeking PhD students and postdocs",
                description: "We have multiple openings for motivated researchers. See Join Us page for details."
              }
            ].map((news, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">{news.date}</Badge>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{news.title}</h3>
                    <p className="text-sm text-muted-foreground">{news.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
