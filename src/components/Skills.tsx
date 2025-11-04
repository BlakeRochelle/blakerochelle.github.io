import { Search, Lightbulb, Pencil, TestTube, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Skills() {
  const skills = [
    {
      title: "Product Design Leader"
    },
    {
      title: "Figma"
    },
    {
      title: "UI Design"
    },
    {
      title: "UX Research"
    },
    {
      title: "Design Iteration"
    },
    {
      title: "Prototyping"
    },
    {
      title: "Usability Testing"
    },
    {
      title: "Frontend Developer"
    },
    {
      title: "Web Accessibility"
    },
    {
      title: "Design Systems"
    },
    {
      title: "Adobe CC"
    },
    {
      title: "Sketch"
    },
    {
      title: "Visual Design"
    },
    {
      title: "Digital Strategy"
    },
    {
      title: "AI & LLM"
    }    
    
  ];

  return (
    <section id="tools" className="px-6 bg-muted">
      <div className="max-w-6xl mx-auto" style={{padding: '4rem 0px'}}>
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{fontSize: '1.5rem'}}>Skills and Expertise</h2>
          {/*<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the tools that I use as part of my design process.
          </p>*/}
        </div>
        
        <div className="flex flex-wrap gap-4 gap-4 justify-center">
          {skills.map((skill, index) => {
            
            return (
              <span key={skill.title} className="skill-chip inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary">
            {skill.title}
          </span>
              
            );
          })}
        </div>
      </div>
    </section>
  );
}
