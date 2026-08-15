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
import ResearchInterestGrid from "@/components/ResearchInterestGrid";
import { Mail, ExternalLink, GraduationCap, Users, FileText } from "lucide-react";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/siteData";
import {
  findPublicationByTitle,
  getPublicationShortVenue,
  getPublicationYearLabel,
} from "@/data/publications";

interface MemberPublication {
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
  education?: string;
  role?: string;
  photo?: string;
  publications?: MemberPublication[];
}

interface AlumniMember extends TeamMember {
  type: string;
  placement?: string;
}

export default function People() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | AlumniMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('');

  const isAlumniMember = (member: TeamMember | AlumniMember): member is AlumniMember => 'type' in member;

  const handleMemberClick = (member: TeamMember | AlumniMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const getEducationLines = (education: string) =>
    education.split(';').map((line) => line.trim()).filter(Boolean);

  const memberPublication = (title: string): MemberPublication => {
    const pub = findPublicationByTitle(title);
    if (!pub) {
      return {
        title,
        authors: "Publication details pending",
        venue: "Publication",
        year: "",
      };
    }

    return {
      title: pub.title,
      authors: pub.authors,
      venue: getPublicationShortVenue(pub),
      year: getPublicationYearLabel(pub),
      url: pub.links[0]?.url,
    };
  };

  const doctoralStudents: TeamMember[] = [
    { 
      name: "Mingyuan Xu", 
      period: "2024--", 
      institution: "NUS",
      education: "M.S. in Statistics, National University of Singapore, Aug 2022-Jan 2024; B.S. in Applied Mathematics, Xi'an Jiaotong-Liverpool University, Sep 2018-Jul 2022",
      role: "PhD Student",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/nvvbphnuOZvYCoOa.png",
      publications: [
        memberPublication("Learning Sequential Decisions from Multiple Sources via Group-Robust Markov Decision Processes"),
        memberPublication("A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth"),
      ]
    },
    { 
      name: "Kejian Zhang", 
      period: "2025--", 
      institution: "NUS",
      education: "M.S., National University of Singapore, 2025; B.S., Fudan University, 2024",
      role: "PhD Student",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/ZuiXWNAauqbXsBSU.png",
      publications: [
        memberPublication("Pattern-Calibrated Multimodal Prediction under Blockwise Missingness"),
        memberPublication("Two-sample Testing with Block-wise Missingness in Multi-source Data"),
        memberPublication("From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences"),
      ]
    },
    { 
      name: "Rundong Huang", 
      period: "2025--", 
      institution: "NUS",
      education: "B.S., Peking University",
      role: "PhD Student",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/ACFcfaPqhoVBFRJN.png",
      publications: [
        memberPublication("Personalizing Large Language Model Agents with Small Policy Models"),
      ]
    },
    {
      name: "Yiru Wang",
      period: "2026--",
      institution: "NUS",
      education: "B.S. in Mathematics and Applied Mathematics, University of Science and Technology of China, 2026",
      role: "PhD Student",
      photo: "/assets/yiru-wang.jpg"
    }
  ];

  const researchFellows: TeamMember[] = [
    {
      name: "Dian Jin",
      period: "2026--",
      institution: "NUS",
      education: "Ph.D., Rutgers University, 2025; B.E., UESTC, 2019",
      role: "Research Fellow",
      photo: "/assets/dian-jin.jpg",
      publications: [
        memberPublication("Personalizing Large Language Model Agents with Small Policy Models"),
        memberPublication("Cost-optimal Sequential Testing via Doubly Robust Q-learning"),
      ]
    },
    {
      name: "Zhaohui Xu",
      period: "2026--",
      institution: "NUS",
      education: "B.S., University of Science and Technology of China",
      role: "Research Fellow",
      photo: "/assets/zhaohui-xu.jpg"
    }
  ];

  const studentCollaborators: TeamMember[] = [
    { 
      name: "Junhan Yu", 
      period: "2024--", 
      institution: "Duke-NUS Medical School",
      education: "M.S., National University of Singapore",
      role: "PhD Student",
      publications: [
        memberPublication("Pattern-Calibrated Multimodal Prediction under Blockwise Missingness"),
        memberPublication("Structured Transfer Learning for Survival Risk Stratification in Data-Sparse Clinical Cohorts"),
        memberPublication("Hierarchical Contrastive Learning for Multimodal Data"),
        memberPublication("Time-Aware Attention for Enhanced Electronic Health Records Modeling"),
        memberPublication("From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences"),
      ]
    },
    { 
      name: "Qihua Zhu", 
      period: "2024--", 
      institution: "Duke-NUS Medical School",
      education: "M.S., National University of Singapore",
      role: "PhD Student",
      publications: [
        memberPublication("WISE: A Weighted Similarity Aggregation Test for Serial Independence"),
      ]
    },
    {
      name: "Chaoqi Wu",
      period: "2026--",
      institution: "Duke-NUS Medical School",
      role: "PhD Student",
      photo: "/assets/chaoqi-wu.jpg"
    }
  ];

  const masterStudents: TeamMember[] = [
    {
      name: "Chenghao Gao",
      period: "2026--",
      institution: "NUS",
      education: "Dual-degree B.S. in Data Science and B.Mgt. in Marketing Management, Renmin University of China, 2026",
      role: "Master's Student",
      photo: "/assets/chenghao-gao.jpg"
    },
    {
      name: "Xunheng Huang",
      period: "2026--",
      institution: "NUS",
      education: "B.S., Wuhan University, 2026",
      role: "Master's Student",
      photo: "/assets/xunheng-huang.jpg"
    }
  ];

  const undergraduateStudents: TeamMember[] = [
    { 
      name: "Xinzi Tan", 
      period: "2024--", 
      institution: "NUS",
      publications: [
        memberPublication("A Judge-Aware Ranking Framework for Evaluating Large Language Models without Ground Truth"),
        memberPublication("From Hawkes Processes to Attention: Time-Modulated Mechanisms for Event Sequences"),
      ]
    },
    { 
      name: "Minh Duc Vu", 
      period: "2024--", 
      institution: "NUS",
      publications: [
        memberPublication("A Trainable Centrality Framework for Modern Data"),
      ]
    },
    {
      name: "Xinyi Zhang",
      period: "2026--",
      institution: "NUS",
      education: "Year 2 Undergraduate in Statistics",
      photo: "/assets/xinyi-zhang.jpg"
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
        memberPublication("Wasserstein Transfer Learning"),
        memberPublication("Generalized Linear Markov Decision Process"),
      ]
    },
    {
      name: "Huichao Li",
      period: "2025--2026",
      type: "Visitor",
      institution: "University of Chinese Academy of Sciences",
      education: "University of Chinese Academy of Sciences",
      publications: [
        memberPublication("Personalizing Large Language Model Agents with Small Policy Models"),
        memberPublication("Hierarchical Contrastive Learning for Multimodal Data"),
      ]
    },
    {
      name: "Yaya Zhao",
      period: "2025--2026",
      type: "Visitor",
      institution: "Renmin University of China",
      education: "Ph.D. Student, Renmin University of China"
    }
  ];

  const visitors: TeamMember[] = [
    { 
      name: "Lingfeng Lv", 
      period: "2026--", 
      institution: "University of Science and Technology of China",
      photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300105903/YZvnGDJvnDMSNwLv.png",
      publications: [
        memberPublication("Preference-based Centrality and Ranking in General Metric Spaces"),
      ]
    },
    {
      name: "Guojun Zhu",
      period: "2026--",
      institution: "University of Chinese Academy of Sciences",
      education: "Ph.D. Candidate, University of Chinese Academy of Sciences; M.S., University of Chinese Academy of Sciences; B.S., Wuhan University",
      photo: "/assets/guojun-zhu.jpg",
      publications: [
        memberPublication("Pattern-Calibrated Multimodal Prediction under Blockwise Missingness"),
      ]
    }
  ];

  const MemberCard = ({ member, variant = "default" }: { member: TeamMember | AlumniMember, variant?: string }) => {
    const publicationCount = member.publications?.length ?? 0;
    const hasPublications = publicationCount > 0;
    const isAlumni = isAlumniMember(member);
    
    return (
      <div 
        className="cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        role="button"
        tabIndex={0}
        aria-label={`Open ${member.name}'s profile`}
        onClick={() => handleMemberClick(member)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleMemberClick(member);
          }
        }}
      >
        <Card className={`p-6 hover-lift ${hasPublications ? 'border-l-4 border-l-primary' : ''}`}>
          <div className="flex items-start gap-4">
            {member.photo ? (
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              />
            ) : (
              <div className={`w-12 h-12 ${isAlumni ? 'bg-muted/50' : variant === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold ${isAlumni ? 'text-muted-foreground' : variant === 'accent' ? 'text-accent' : 'text-primary'}`}>
                {getInitials(member.name)}
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
              {member.education && (
                <div className="text-xs text-muted-foreground mb-2 space-y-0.5">
                  {getEducationLines(member.education).map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">{member.period}</Badge>
                {member.role && <Badge variant="secondary">{member.role}</Badge>}
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
                  {publicationCount} publication{publicationCount > 1 ? 's' : ''}
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
                src="/assets/doudou-zhou.jpg"
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
                <div className="mb-6">
                  <p className="mb-3 text-sm font-semibold text-primary">Research Interests</p>
                  <ResearchInterestGrid variant="compact" showDescriptions={false} />
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${CONTACT_EMAIL}`}>
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

        {/* Research Fellows */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Research Fellows</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchFellows.map((fellow, index) => (
              <MemberCard key={index} member={fellow} />
            ))}
          </div>
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

        {/* Student Collaborators */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Student Collaborators</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {studentCollaborators.map((student, index) => (
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

      {/* Member Profile Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          {selectedMember && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-[220px_1fr]">
                {selectedMember.photo ? (
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="h-64 w-full max-w-[220px] rounded-lg object-cover mx-auto md:mx-0"
                  />
                ) : (
                  <div className="h-64 w-full max-w-[220px] rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto md:mx-0 text-4xl font-bold">
                    {getInitials(selectedMember.name)}
                  </div>
                )}

                <div className="min-w-0 space-y-4">
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                    <DialogDescription>{selectedMember.institution}</DialogDescription>
                  </DialogHeader>

                  {selectedMember.education && (
                    <div className="text-sm leading-relaxed text-muted-foreground space-y-1">
                      {getEducationLines(selectedMember.education).map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{selectedMember.period}</Badge>
                    {selectedMember.role && <Badge variant="secondary">{selectedMember.role}</Badge>}
                    {isAlumniMember(selectedMember) && <Badge variant="secondary">{selectedMember.type}</Badge>}
                  </div>

                  {isAlumniMember(selectedMember) && selectedMember.placement && selectedMember.placement !== "TBD" && (
                    <p className="text-sm text-primary font-medium">
                      → {selectedMember.placement}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Publications</h3>
                </div>

                {selectedMember.publications && selectedMember.publications.length > 0 ? (
                  <div className="space-y-4">
                    {selectedMember.publications.map((pub, index) => (
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
                ) : (
                  <p className="text-sm text-muted-foreground">No listed collaborative publications.</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
