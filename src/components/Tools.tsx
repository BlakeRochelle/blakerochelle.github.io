import { Search, Lightbulb, Pencil, TestTube, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Tools() {
  const tools = [
    {
      title: "Figma",
      image: "./images/icons/figma.png",
      link: "https://www.figma.com/",
    },
    {
      title: "Adobe CC",
      image: "./images/icons/adobeCC.png",
      link: "https://www.adobe.com/creativecloud.html",
    },
    {
      title: "Sketch",
      image: "./images/icons/sketch.png",
      link: "https://www.sketch.com",
    },
    {
      title: "Atomic Design",
      image: "./images/icons/atomicDesign.png",
      link: "https://atomicdesign.bradfrost.com/chapter-2/",
    },
    {
      title: "MS Teams",
      image: "./images/icons/teams.png",
      link: "https://teams.live.com/free",
    },
    {
      title: "Google Analytics",
      image: "./images/icons/googleAnalytics.png",
      link: "https://marketingplatform.google.com/about/analytics/",
    },
    {
      title: "LifeRay DXP",
      image: "./images/icons/lifeRay.png",
      link: "https://www.liferay.com",
    },
    {
      title: "GitHub",
      image: "./images/icons/github.png",
      link: "https://github.com",
    },
    {
      title: "Claude.ai",
      image: "./images/icons/claude.png",
      link: "https://claude.ai/new",
    },
    {
      title: "Microsoft Copilot",
      image: "./images/icons/microsoft.png",
      link: "https://copilot.microsoft.com",
    }    
    
  ];

  return (
    <section id="tools" className="px-6">
      <div className="max-w-6xl mx-auto" style={{padding: '4rem 0px'}}>
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{fontSize: '1.5rem'}}>My UX Toolkit</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the tools that I use as part of my design process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {tools.map((tool, index) => {
            
            return (
              <a key={tool.title} href={tool.link} target="_blank" > 
                <Card className="toolkit-card bg-gradient-to-br from-primary/5 via-background to-accent/10 hover:shadow-xl transition-all cursor-pointer group border-transparent hover:border-primary/20" style={{border: '1px solid #bcc8ed'}}>
                  <CardContent className="card-content p-6">
                    <div><img src={tool.image}/></div>
                    <h4 className="mb-3">{tool.title}</h4>
                    {/*<p className="text-muted-foreground">{tool.description}</p>*/}
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
