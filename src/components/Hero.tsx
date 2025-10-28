import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10 -z-10 bg-muted" />
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-8">
            UX/UI Designer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          Designing experiences that make complex systems feel simple
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m a UX designer, front-end thinker, and certified observer of human behavior - helping teams turn complex ideas into experiences people actually enjoy.
        </p>
        
        <Button 
          onClick={scrollToWork}
          size="lg"
          className="group"
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
