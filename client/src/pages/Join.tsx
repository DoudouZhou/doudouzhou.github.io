/*
 * Join Us page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, GraduationCap, Award, Heart } from "lucide-react";
import { CONTACT_EMAIL } from "@/siteData";

export default function Join() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Prospective Students
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          I welcome students, visitors, and collaborators interested in statistics, machine learning, and AI.
        </p>

        {/* Research Fit */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Fit</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Statistical AI</h3>
              <p className="text-sm text-muted-foreground">
                Inference, uncertainty, robustness, and evaluation for modern machine learning and AI systems.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Biomedical Data</h3>
              <p className="text-sm text-muted-foreground">
                Methods for electronic health records, multimodal clinical data, transfer learning, and phenotyping.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Sequential Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Reinforcement learning, policy evaluation, adaptive testing, and decision making under distribution shift.
              </p>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Research Opportunities</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* GRTII PhD Scholarship */}
            <Card id="grtii-phd" className="p-8 hover-lift">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-3">NUS GRTII-Affiliated PhD Scholarship</h3>
                  <Badge className="mb-4">One Funded Position · August 2027</Badge>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    I am recruiting one funded PhD student through the NUS Guangzhou Research Translation
                    and Innovation Institute (GRTII)-affiliated scholarship for August 2027 entry, with
                    January 2028 as the latest possible start. The student will pursue a PhD in Statistics
                    and Data Science at NUS and be based in Singapore during the programme.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Research interests are broadly in Statistics, Machine Learning, and AI. Our group works
                    on LLM evaluation and alignment, transfer and representation learning, multimodal learning,
                    and high-dimensional, structured, and non-Euclidean data. Applicants with a serious interest
                    in joining NUS and our group are welcome to contact me.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The scholarship covers tuition fees and provides a stipend, subject to the official award
                    terms. <strong>Recipients must fulfil a two-year post-graduation service obligation in
                    Huangpu District, Guangzhou, under the scheme.</strong> Please review the{" "}
                    <a
                      href="https://nusgs.nus.edu.sg/scholarships/nus-guangzhou-research-translation-and-innovation-institute-grtii-affiliated-phd-scholarship"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4"
                    >
                      official scholarship terms
                    </a>{" "}
                    before applying.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Please email your CV, academic transcript, and a brief description of your research
                    interests to{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-4">
                      {CONTACT_EMAIL}
                    </a>{" "}
                    with the subject <strong>GRTII PhD Application 2027 – Name</strong>.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Apply through the NUS Department of Statistics and Data Science via GradApp.
                    The application deadline for August 2027 entry is <strong>15 November 2026</strong>.
                    Admission and scholarship awards are subject to NUS selection and approval.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("GRTII PhD Application 2027 – Name")}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Prof. Zhou
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://www.stat.nus.edu.sg/education/graduate/phd-in-statistics-and-data-science/prospective-students/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NUS PhD Admissions
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://gradapp.nus.edu.sg/portal/app_manage" target="_blank" rel="noopener noreferrer">
                        Apply via GradApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* PhD Students */}
            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">PhD Students</h3>
                  <Badge className="mb-4">Prospective PhD Students</Badge>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We welcome motivated PhD students interested in statistical methodology, machine learning, 
                    large language models, multimodal learning, reinforcement learning, and healthcare analytics.
                    NUS offers three admission cycles: fall, spring, and early admission.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">How to Apply:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Apply through the NUS Graduate Program</li>
                      <li>• Mention Dr. Doudou Zhou as your potential advisor in your application</li>
                      <li>• Strong background in mathematics, statistics, or computer science</li>
                      <li>• Prior research experience is a plus</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild>
                      <a href="https://www.stat.nus.edu.sg/graduate-programmes/" target="_blank" rel="noopener noreferrer">
                        Apply to Program
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`mailto:${CONTACT_EMAIL}?subject=PhD Inquiry`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Prof. Zhou
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Master's & Undergraduate Students */}
            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Master's & Undergraduate Students</h3>
                  <Badge className="mb-4">Project Opportunities</Badge>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We offer research project opportunities for master's and undergraduate students at NUS. 
                    If you're interested in gaining research experience in statistical AI, LLMs, multimodal learning,
                    biomedical data science, or sequential decision making, please reach out with a short description
                    of your interests and availability.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">What We Offer:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hands-on research experience</li>
                      <li>• Mentorship from experienced researchers</li>
                      <li>• Potential for co-authorship on publications</li>
                      <li>• Flexible project timelines</li>
                    </ul>
                  </div>
                  
                  <Button variant="outline" asChild>
                    <a href={`mailto:${CONTACT_EMAIL}?subject=Research Project Inquiry`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Express Interest
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
