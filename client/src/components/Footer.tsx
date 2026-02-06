/*
 * Footer component for SAIL Lab website
 */

import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Lab Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-bold text-lg gradient-text">SAIL Lab</div>
                <div className="text-xs text-muted-foreground">Statistical AI & Learning</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Advancing statistical methodology and AI for healthcare and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/research" className="text-muted-foreground hover:text-primary transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="/publications" className="text-muted-foreground hover:text-primary transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="/join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:ddzhou@nus.edu.sg"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                ddzhou@nus.edu.sg
              </a>
              <a
                href="https://github.com/doudouzhou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/doudou-zhou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SAIL Lab, National University of Singapore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
