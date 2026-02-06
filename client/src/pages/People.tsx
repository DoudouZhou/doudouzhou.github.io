/*
 * People page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink, GraduationCap, Users } from "lucide-react";

export default function People() {
  const doctoralStudents = [
    { name: "Mingyuan Xu", period: "2024--", institution: "NUS" },
    { name: "Kejian Zhang", period: "2025--", institution: "NUS" },
    { name: "Jiawei Wu", period: "2025--", institution: "NUS" },
    { name: "Rundong Huang", period: "2025--", institution: "NUS" }
  ];

  const masterStudents = [
    { name: "Junhan Yu", period: "2024--", institution: "NUS" },
    { name: "Qihua Zhu", period: "2024--", institution: "NUS" }
  ];

  const undergraduateStudents = [
    { name: "Haozhan Chu", period: "2025--", institution: "Nanjing University" },
    { name: "Xinzi Tan", period: "2024--", institution: "NUS" },
    { name: "Minh Duc Vu", period: "2024--", institution: "NUS" },
    { name: "Xihua Zhu", period: "2024--2025", institution: "NUS" },
    { name: "Mario Francisco Montana", period: "2024--2025", institution: "NUS" }
  ];

  const alumni = [
    { 
      name: "Kaicheng Zhang", 
      period: "2024--2025", 
      type: "Undergraduate",
      institution: "Zhejiang University",
      placement: "PhD student, UNC Biostatistics"
    },
    { 
      name: "Yiran Zhang", 
      period: "2024--2025", 
      type: "Master's",
      institution: "NUS",
      placement: "TBD"
    }
  ];

  const visitingStudents = [
    { name: "Lingfeng Lv", period: "2026--", institution: "USTC", type: "CSC visiting student" },
    { name: "Huichao Li", period: "2025--", institution: "UCAS", type: "CSC visiting student" },
    { name: "Ruolin Ding", period: "2025--", institution: "USTC", type: "CSC visiting student" },
    { name: "Yaya Zhao", period: "2025--", institution: "Renmin University of China", type: "CSC visiting student" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-12"
        style={{
          backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/eQPssOVvWcbnQusb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the talented researchers driving innovation at STAR Lab
          </p>
        </div>
      </section>

      <div className="container">
        {/* Principal Investigator */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Principal Investigator</span>
          </h2>
          
          <Card className="max-w-4xl mx-auto p-8 hover-lift">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Photo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-6xl font-bold text-white">
                  DZ
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2">Doudou Zhou (周豆豆)</h3>
                <p className="text-xl text-muted-foreground mb-4">
                  Assistant Professor of Statistics & Data Science
                </p>
                <p className="text-lg mb-4">National University of Singapore</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ph.D. in Statistics, UC Davis, 2022 (Advisor: Prof. Hao Chen)</li>
                      <li>• Postdoc, Harvard University, 2022-2024 (Mentor: Prof. Tianxi Cai)</li>
                      <li>• B.S. in Statistics & B.E. in Computer Science, USTC, 2019</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1">Research Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Transfer Learning</Badge>
                      <Badge variant="secondary">Federated Learning</Badge>
                      <Badge variant="secondary">EHR Analysis</Badge>
                      <Badge variant="secondary">High-dimensional Statistics</Badge>
                      <Badge variant="secondary">Reinforcement Learning</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:ddzhou@nus.edu.sg">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://scholar.google.com/citations?user=gXfTi00AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Google Scholar
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/doudouzhou" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/doudou-zhou" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Doctoral Students */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Doctoral Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {doctoralStudents.map((student, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-primary">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{student.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{student.institution}</p>
                    <Badge variant="outline">{student.period}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Master's Students */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Master's Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {masterStudents.map((student, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-accent">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{student.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{student.institution}</p>
                    <Badge variant="outline">{student.period}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Undergraduate Students */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Undergraduate Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {undergraduateStudents.map((student, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-primary">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{student.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{student.institution}</p>
                    <Badge variant="outline" className="mb-2">{student.period}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Visiting Students */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Visiting Doctoral Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visitingStudents.map((student, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-accent">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{student.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{student.institution}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{student.period}</Badge>
                      <Badge variant="secondary">{student.type}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-muted-foreground" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Alumni</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {alumni.map((person, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-muted-foreground">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{person.institution}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">{person.period}</Badge>
                      <Badge variant="secondary">{person.type}</Badge>
                    </div>
                    {person.placement && person.placement !== "TBD" && (
                      <p className="text-sm text-primary font-medium">
                        → {person.placement}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="mt-20">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Join <span className="gradient-text">Our Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented and motivated students and postdocs. 
              Check out our open positions and learn how to apply.
            </p>
            <Button size="lg" asChild>
              <a href="/join">
                View Open Positions
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
}
