/*
 * Research page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-20"
        style={{
          backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/AJAzIrZOPciSbRGB.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our <span className="gradient-text">Research</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            We develop innovative statistical methods and AI techniques for analyzing complex healthcare data
          </p>
        </div>
      </section>

      <div className="container">
        {/* Research Themes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Research Themes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Statistical Methodology & Theory</h3>
              <p className="text-muted-foreground mb-6">
                We develop rigorous statistical methods with theoretical guarantees for modern data challenges, 
                including high-dimensional inference, change-point detection, and transfer learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Transfer Learning</Badge>
                <Badge variant="secondary">Change-Point Detection</Badge>
                <Badge variant="secondary">High-dimensional Statistics</Badge>
                <Badge variant="secondary">Ranking Methods</Badge>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Healthcare AI & Applications</h3>
              <p className="text-muted-foreground mb-6">
                We build practical AI systems for electronic health records analysis, clinical decision support, 
                and multi-institutional data integration using federated learning approaches.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">EHR Analysis</Badge>
                <Badge variant="secondary">Federated Learning</Badge>
                <Badge variant="secondary">Knowledge Graphs</Badge>
                <Badge variant="secondary">Clinical AI</Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
          <div className="space-y-6">
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Wasserstein Transfer Learning</h3>
                  <p className="text-muted-foreground mb-3">
                    A novel framework for transferring knowledge across domains using optimal transport theory, 
                    enabling robust model adaptation with theoretical guarantees.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge>NeurIPS 2025</Badge>
                    <Badge variant="outline">Transfer Learning</Badge>
                    <Badge variant="outline">Optimal Transport</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Paper
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">ARCH: Knowledge Graph for Healthcare</h3>
                  <p className="text-muted-foreground mb-3">
                    Large-scale knowledge graph construction from electronic health records, enabling automated 
                    clinical knowledge extraction and data harmonization across institutions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge>Journal of Biomedical Informatics</Badge>
                    <Badge variant="outline">EHR</Badge>
                    <Badge variant="outline">Knowledge Graph</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Paper
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Federated Offline Reinforcement Learning</h3>
                  <p className="text-muted-foreground mb-3">
                    A privacy-preserving framework for learning optimal treatment policies from distributed healthcare 
                    data without sharing patient-level information.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge>JASA 2024</Badge>
                    <Badge variant="outline">Federated Learning</Badge>
                    <Badge variant="outline">Reinforcement Learning</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Paper
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Collaborations */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Collaborations</h2>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              We actively collaborate with leading researchers and institutions worldwide:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Academic Partners</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Harvard University</li>
                  <li>• UC Davis</li>
                  <li>• Stanford University</li>
                  <li>• MIT</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Healthcare Institutions</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mass General Brigham</li>
                  <li>• Partners HealthCare</li>
                  <li>• National University Hospital</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
