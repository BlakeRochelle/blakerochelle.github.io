import { Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10 -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4" style={{fontSize: '1.5rem'}}>Let's Work Together</h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" asChild>
            <a href="mailto:blakerochelle@gmail.com?subject=Let's Chat!">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <a href="https://linkedin.com/in/BlakeRochelle" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <a href="https://drive.google.com/uc?export=download&id=1dzBUluJZ_9OZ1rEi5EGrJONagQFc6YqJ"  rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
        </div>
        
        <div className="pt-12 border-t border-border">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Blake Rochelle. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
