/*
 * Home page for personal academic website
 * Design: Clean and professional academic portfolio
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/kfAMzhUguRWrXKPD.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Doudou Zhou</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Assistant Professor
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Department of Statistics and Data Science, National University of Singapore
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/research">
                Explore My Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/publications">Publications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">My Research</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I develop rigorous statistical methodology and practical AI techniques for analyzing complex healthcare data. 
              My research bridges theory and application, creating tools that advance both statistical science and real-world 
              medical research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Research Excellence</h3>
              <p className="text-muted-foreground">
                Publishing in top-tier venues including JASA, JMLR, NeurIPS, and IEEE TIT
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Team</h3>
              <p className="text-muted-foreground">
                Working with leading researchers from Harvard, MIT, Stanford, and beyond
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact & Recognition</h3>
              <p className="text-muted-foreground">
                Award-winning research with practical applications in healthcare analytics
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Research <span className="gradient-text">Highlights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Statistical Methodology</h3>
              <p className="text-muted-foreground mb-4">
                Developing novel statistical methods for transfer learning, change-point detection, 
                and high-dimensional inference with theoretical guarantees.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Transfer Learning</Badge>
                <Badge variant="secondary">Change-Point Detection</Badge>
                <Badge variant="secondary">High-dimensional Statistics</Badge>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Healthcare AI</h3>
              <p className="text-muted-foreground mb-4">
                Building practical AI systems for electronic health records analysis, federated learning, 
                and multi-institutional data integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">EHR Analysis</Badge>
                <Badge variant="secondary">Federated Learning</Badge>
                <Badge variant="secondary">Knowledge Graphs</Badge>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/research">
                View All Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Latest <span className="gradient-text">News</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Badge className="mt-1">2026</Badge>
                <div>
                  <h3 className="font-semibold mb-2">
                    Paper accepted at ICLR 2026
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    "Single Index Bandits: Generalized Linear Contextual Bandits with Unknown Reward Functions" 
                    accepted at the International Conference on Learning Representations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Badge className="mt-1">2025</Badge>
                <div>
                  <h3 className="font-semibold mb-2">
                    Paper accepted at NeurIPS 2025
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    "Wasserstein Transfer Learning" accepted at Advances in Neural Information Processing Systems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Badge className="mt-1">2025</Badge>
                <div>
                  <h3 className="font-semibold mb-2">
                    New PhD students
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Welcoming Kejian Zhang, Jiawei Wu, and Rundong Huang to the research group.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}
