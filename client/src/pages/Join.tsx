/*
 * Join Us page for SAIL Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, GraduationCap, Award, Heart } from "lucide-react";

export default function Join() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Join <span className="gradient-text">SAIL Lab</span>
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          We're always looking for talented and motivated individuals to join our team
        </p>

        {/* Why Join Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join SAIL Lab?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Cutting-Edge Research</h3>
              <p className="text-sm text-muted-foreground">
                Work on impactful problems in statistical AI and healthcare analytics
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Collaborative Environment</h3>
              <p className="text-sm text-muted-foreground">
                Join a supportive team with strong academic and industry connections
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Mentorship & Growth</h3>
              <p className="text-sm text-muted-foreground">
                Receive personalized guidance and opportunities for professional development
              </p>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Postdoctoral Fellows */}
            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Postdoctoral Research Fellows</h3>
                  <Badge className="mb-4">Multiple Positions Available</Badge>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We are inviting applications for multiple postdoctoral research fellow positions. 
                    Successful candidates will work on cutting-edge research in statistical methodology, 
                    machine learning, and healthcare AI.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Qualifications:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ph.D. in Statistics, Computer Science, Biostatistics, or related fields</li>
                      <li>• Strong publication record in top-tier venues</li>
                      <li>• Excellent programming skills (R, Python)</li>
                      <li>• Strong communication and collaboration abilities</li>
                    </ul>
                  </div>
                  
                  <Button asChild>
                    <a href="mailto:ddzhou@nus.edu.sg?subject=Postdoc Application">
                      <Mail className="mr-2 h-4 w-4" />
                      Apply Now
                    </a>
                  </Button>
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
                  <Badge className="mb-4">Rolling Admission</Badge>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We welcome motivated PhD students interested in statistical methodology, machine learning, 
                    and healthcare analytics. NUS offers three admission cycles: fall, spring, and early admission.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">How to Apply:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Apply through the NUS Graduate Program</li>
                      <li>• Mention Prof. Doudou Zhou as your potential advisor in your application</li>
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
                      <a href="mailto:ddzhou@nus.edu.sg?subject=PhD Inquiry">
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
                    If you're interested in gaining research experience in statistical AI and learning, 
                    we'd love to hear from you.
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
                    <a href="mailto:ddzhou@nus.edu.sg?subject=Research Project Inquiry">
                      <Mail className="mr-2 h-4 w-4" />
                      Express Interest
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Application Tips */}
        <section className="max-w-4xl mx-auto">
          <Card className="p-8 bg-secondary">
            <h2 className="text-2xl font-bold mb-6">Application Tips</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>For Postdocs:</strong> Please email your CV, research statement, and representative 
                publications to Prof. Zhou. Include "Postdoc Application" in the subject line.
              </p>
              <p>
                <strong>For PhD Applicants:</strong> Apply through the official NUS graduate program. 
                You may also reach out to Prof. Zhou directly to discuss research fit before applying.
              </p>
              <p>
                <strong>For Students:</strong> Send your CV and a brief description of your interests 
                and availability. We'll get back to you about potential projects.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
