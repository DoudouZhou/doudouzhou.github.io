/*
 * People page for STAR Lab with corrected publication information
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, ExternalLink, GraduationCap, Users, FileText } from "lucide-react";
import { useState } from "react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
}

interface TeamMember {
  name: string;
  period: string;
  institution: string;
  photo?: string;
  publications?: Publication[];
}

interface AlumniMember extends TeamMember {
  type: string;
  placement?: string;
}

export default function People() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    if (member.publications && member.publications.length > 0) {
      setSelectedMember(member);
      setDialogOpen(true);
    }
  };

  const doctoralStudents: TeamMember[] = [
    { 
      name: "Mingyuan Xu", 
      period: "2024--", 
      institution: "NUS",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/nvvbphnuOZvYCoOa.png",
      publications: [
        {
          title: "Learning Sequential Decisions from Multiple Sources via Group-Robust Markov Decision Processes",
          authors: "Mingyuan Xu, Zongqi Xia, Tianxi Cai, Doudou Zhou (corresponding), Nian Si (corresponding)",
          venue: "Preprint",
          year: "2026+",
          url: "https://arxiv.org/abs/2602.01825"
        },
        {
          title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
          authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou (corresponding)",
          venue: "Preprint",
          year: "2026+",
          url: "https://arxiv.org/abs/2602.01826"
        }
      ]
    },
    { 
      name: "Kejian Zhang", 
      period: "2025--", 
      institution: "NUS",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/ZuiXWNAauqbXsBSU.png",
      publications: [
        {
          title: "Two-sample Testing with Block-wise Missingness in Multi-source Data",
          authors: "Kejian Zhang, Muxuan Liang, Robert Maile, Doudou Zhou",
          venue: "Preprint",
          year: "2025+",
          url: "https://arxiv.org/abs/2508.17411"
        },
        {
          title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
          authors: "Xinzi Tan, Kejian Zhang, Junhan Yu, Doudou Zhou",
          venue: "AISTATS",
          year: "2026",
          url: "https://arxiv.org/abs/2601.09220"
        }
      ]
    },
    { 
      name: "Jiawei Wu", 
      period: "2025--", 
      institution: "NUS",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/KrOZrkXmxTnkdgrF.png",
      publications: [
        {
          title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
          authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou (corresponding)",
          venue: "Preprint",
          year: "2026+",
          url: "https://arxiv.org/abs/2602.01826"
        }
      ]
    },
    { 
      name: "Rundong Huang", 
      period: "2025--", 
      institution: "NUS",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/ACFcfaPqhoVBFRJN.png"
    }
  ];

  const masterStudents: TeamMember[] = [
    { 
      name: "Junhan Yu", 
      period: "2024--", 
      institution: "NUS",
      publications: [
        {
          title: "Time-Aware Attention for Enhanced Electronic Health Records Modeling",
          authors: "Junhan Yu, Zhunyi Feng, Junwei Lu, Tianxi Cai, Doudou Zhou",
          venue: "Preprint",
          year: "2025+",
          url: "https://arxiv.org/abs/2509.06576"
        },
        {
          title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
          authors: "Xinzi Tan, Kejian Zhang, Junhan Yu, Doudou Zhou",
          venue: "AISTATS",
          year: "2026",
          url: "https://arxiv.org/abs/2601.09220"
        }
      ]
    },
    { 
      name: "Qihua Zhu", 
      period: "2024--", 
      institution: "NUS",
      publications: [
        {
          title: "WISE: A Weighted Similarity Aggregation Test for Serial Independence",
          authors: "Qihua Zhu, Mingshuo Liu, Yuefeng Han, Doudou Zhou",
          venue: "Preprint",
          year: "2025+",
          url: "https://arxiv.org/abs/2509.05678"
        }
      ]
    }
  ];

  const undergraduateStudents: TeamMember[] = [
    { 
      name: "Xinzi Tan", 
      period: "2024--", 
      institution: "NUS",
      publications: [
        {
          title: "A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth",
          authors: "Mingyuan Xu, Xinzi Tan, Jiawei Wu, Doudou Zhou (corresponding)",
          venue: "Preprint",
          year: "2026+",
          url: "https://arxiv.org/abs/2602.01826"
        },
        {
          title: "From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences",
          authors: "Xinzi Tan, Kejian Zhang, Junhan Yu, Doudou Zhou",
          venue: "AISTATS",
          year: "2026",
          url: "https://arxiv.org/abs/2601.09220"
        }
      ]
    },
    { 
      name: "Minh Duc Vu", 
      period: "2024--", 
      institution: "NUS",
      publications: [
        {
          title: "A Trainable Centrality Framework for Modern Data",
          authors: "Minh Duc Vu, Mingshuo Liu, Doudou Zhou",
          venue: "Preprint",
          year: "2025+",
          url: "https://arxiv.org/abs/2511.22959"
        }
      ]
    }
  ];

  const alumni: AlumniMember[] = [
    { 
      name: "Kaicheng Zhang", 
      period: "2024--2025", 
      type: "Undergraduate",
      institution: "Zhejiang University",
      placement: "PhD student, UNC Biostatistics",
      publications: [
        {
          title: "Wasserstein Transfer Learning",
          authors: "Kaicheng Zhang, Sinian Zhang, Doudou Zhou (corresponding), Yidong Zhou (corresponding)",
          venue: "NeurIPS",
          year: "2025",
          url: "https://arxiv.org/abs/2505.17404"
        },
        {
          title: "Generalized Linear Markov Decision Process",
          authors: "Sinian Zhang, Kaicheng Zhang, Ziping Xu, Tianxi Cai (corresponding), Doudou Zhou (corresponding)",
          venue: "Preprint",
          year: "2025+",
          url: "https://arxiv.org/abs/2506.00818"
        }
      ]
    }
  ];

  const visitors: TeamMember[] = [
    { 
      name: "Lingfeng Lv", 
      period: "2026--", 
      institution: "University of Science and Technology of China",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/YZvnGDJvnDMSNwLv.png",
      publications: [
        {
          title: "Preference-based Centrality and Ranking in General Metric Spaces",
          authors: "Lingfeng Lv, Doudou Zhou",
          venue: "Preprint",
          year: "2026+",
          url: "https://arxiv.org/abs/2602.01827"
        }
      ]
    },
    { name: "Huichao Li", period: "2025--", institution: "University of Chinese Academy of Sciences" },
    { name: "Ruolin Ding", period: "2025--", institution: "University of Science and Technology of China", photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/hqYwHYjfkYebdXNF.png" },
    { 
      name: "Yaya Zhao", 
      period: "2025--", 
      institution: "Renmin University of China"
    }
  ];

  const MemberCard = ({ member, variant = "default" }: { member: TeamMember | AlumniMember, variant?: string }) => {
    const hasPublications = member.publications && member.publications.length > 0;
    const isAlumni = 'type' in member;
    
    return (
      <div 
        className={hasPublications ? 'cursor-pointer' : ''}
        onClick={() => hasPublications && handleMemberClick(member)}
      >
        <Card className={`p-6 ${hasPublications ? 'hover-lift border-l-4 border-l-primary' : ''}`}>
          <div className="flex items-start gap-4">
            {member.photo ? (
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              />
            ) : (
              <div className={`w-12 h-12 ${isAlumni ? 'bg-muted/50' : variant === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold ${isAlumni ? 'text-muted-foreground' : variant === 'accent' ? 'text-accent' : 'text-primary'}`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                {hasPublications && (
                  <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{member.institution}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">{member.period}</Badge>
                {isAlumni && <Badge variant="secondary">{(member as AlumniMember).type}</Badge>}
                {variant === 'accent' && <Badge variant="secondary">Visiting PhD Student</Badge>}
              </div>
              {isAlumni && (member as AlumniMember).placement && (member as AlumniMember).placement !== "TBD" && (
                <p className="text-sm text-primary font-medium">
                  → {(member as AlumniMember).placement}
                </p>
              )}
              {hasPublications && (
                <p className="text-xs text-muted-foreground mt-2">
                  Click to view {member.publications!.length} publication{member.publications!.length > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  };

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
            <span className="gradient-text">People</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborators and students I work with
          </p>
        </div>
      </section>

      <div className="container">
        {/* Principal Investigator */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Principal Investigator</span>
            </h2>
          </div>

          <Card className="p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/bQyuYXYXDGZBOLxv.png" 
                alt="Doudou Zhou"
                className="w-32 h-32 rounded-2xl object-cover flex-shrink-0 mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Doudou Zhou</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Assistant Professor, Department of Statistics and Data Science
                </p>
                <p className="text-muted-foreground mb-6">
                  National University of Singapore
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="secondary">Transfer Learning</Badge>
                  <Badge variant="secondary">Federated Learning</Badge>
                  <Badge variant="secondary">Reinforcement Learning</Badge>
                  <Badge variant="secondary">EHR Analysis</Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:doudou.zhou@nus.edu.sg">
                    <Button variant="outline" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </a>
                  <a href="https://scholar.google.com/citations?user=gXfTi00AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Google Scholar
                    </Button>
                  </a>
                  <a href="https://www.stat.nus.edu.sg/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Department
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Doctoral Students */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Doctoral Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {doctoralStudents.map((student, index) => (
              <MemberCard key={index} member={student} />
            ))}
          </div>
        </section>

        {/* Master's Students */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Master's Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {masterStudents.map((student, index) => (
              <MemberCard key={index} member={student} />
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
              <MemberCard key={index} member={student} />
            ))}
          </div>
        </section>

        {/* Visitors */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Visitors</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visitors.map((visitor, index) => (
              <MemberCard key={index} member={visitor} variant="accent" />
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
              <MemberCard key={index} member={person} />
            ))}
          </div>
        </section>


      </div>

      {/* Publications Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Publications with {selectedMember?.name}
            </DialogTitle>
            <DialogDescription>
              Collaborative research papers
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {selectedMember?.publications?.map((pub, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    {pub.url ? (
                      <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold mb-2 leading-relaxed hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        {pub.title}
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <h4 className="font-semibold mb-2 leading-relaxed">{pub.title}</h4>
                    )}
                    <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline">{pub.venue}</Badge>
                      <span className="text-muted-foreground">{pub.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
