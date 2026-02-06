/*
 * People page for SAIL Lab
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, GraduationCap } from "lucide-react";

export default function People() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-20"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/8TRWcaPOUSPlHg8pczerr4/sandbox/6Kzhl1k3gH3gX1lKiEABEj-img-3_1770379144000_na1fn_dGVhbS1jb2xsYWJvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRSV2NhUE9VU1BsSGc4cGN6ZXJyNC9zYW5kYm94LzZLemhsMWszZ0gzZ1gxbEtpRUFCRWotaW1nLTNfMTc3MDM3OTE0NDAwMF9uYTFmbl9kR1ZoYlMxamIyeHNZV0p2Y21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=diYKvNh98X7ffvfbqVf9FzeicQmB~26RCJdxEKWUOs4aexB79ust5oVXUCldStcFjyhCnkwNIJFz9YFFzWjDwUrqFILjxNicfsPEuFlain-AltOoaCDrZjrfI7SnDUrBmZ8PDFKk8bPRrCKIsuXxGgiLpO1kRaTpRzWLHren2XenTmA8QPDk-nPLfT5bJ1Sj3m9NA6JDOTIi0irL5KpzUyW2AO8YUzU2bwKbHgVEdrEPbsG15m-dJ5467KpLD3xlYAr0xp4fwVpgS6e--fmoYcZV8hLe7i7rEXXhO01e2S4ITSK8knJpwJYVp2i3hc60Z6FKFjQZ6y81flYHzxgCTQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Meet the talented researchers driving innovation in statistical AI and learning
          </p>
        </div>
      </section>

      <div className="container">
        {/* Principal Investigator */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Principal Investigator</h2>
          
          <Card className="p-8 hover-lift">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
                DZ
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Prof. Doudou Zhou</h3>
                <p className="text-xl text-muted-foreground mb-4">
                  Assistant Professor of Statistics & Data Science
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Prof. Zhou leads SAIL Lab with a focus on developing statistical methodology and AI techniques 
                  for healthcare data analysis. Previously a Postdoctoral Research Fellow at Harvard University 
                  (2022-2024), working with Prof. Tianxi Cai. Ph.D. in Statistics from UC Davis (2022), advised 
                  by Prof. Hao Chen. Dual B.S. in Statistics and B.E. in Computer Science from USTC (2019).
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Research Interests</h4>
                  <p className="text-sm text-muted-foreground">
                    Statistical methodology, transfer learning, federated learning, reinforcement learning, 
                    electronic health records analysis, high-dimensional statistics, network analysis
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Selected Awards</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Harvard Data Science Initiative Postdoctoral Fellow Research Fund (2023)</li>
                    <li>• ICSA Student Poster Award (2022)</li>
                    <li>• ASA Statistical Learning and Data Science Section Student Paper Award (2022)</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button variant="outline" asChild>
                    <a href="mailto:ddzhou@nus.edu.sg">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Google Scholar
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/doudouzhou" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/doudou-zhou" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Postdoctoral Fellows */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Postdoctoral Fellows</h2>
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">
              We are actively recruiting postdoctoral fellows. If you're interested in joining our team, 
              please see our <a href="/join" className="text-primary hover:underline">Join Us</a> page for more information.
            </p>
            <Button asChild>
              <a href="/join">View Opportunities</a>
            </Button>
          </Card>
        </section>

        {/* PhD Students */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">PhD Students</h2>
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">
              We welcome motivated PhD students interested in statistical methodology, machine learning, 
              and healthcare AI. Please apply through the NUS graduate program and mention Prof. Zhou as your 
              potential advisor.
            </p>
            <Button asChild>
              <a href="/join">Learn More</a>
            </Button>
          </Card>
        </section>

        {/* Master's & Undergraduate Students */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Master's & Undergraduate Students</h2>
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">
              We offer research project opportunities for master's and undergraduate students at NUS. 
              If you're interested in working with us, feel free to reach out with your CV.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:ddzhou@nus.edu.sg">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </a>
            </Button>
          </Card>
        </section>

        {/* Alumni */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Alumni</h2>
          <Card className="p-8">
            <p className="text-muted-foreground text-center">
              As a newly established lab, we look forward to celebrating the achievements of our future alumni.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
