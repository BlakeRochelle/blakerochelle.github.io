import { Search, Lightbulb, Pencil, TestTube, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Research & Discovery",
      description: "Engage users and stakeholders to uncover workflows, pain points, and real-world context that guide meaningful solutions.",
    },
    {
      icon: Lightbulb,
      title: "Ideation & Strategy",
      description: "Brainstorm ideas, map multi-role workflows, and structure information to balance user needs, business goals, and technical feasibility.",
    },
    {
      icon: Pencil,
      title: "Design & Prototyping",
      description: "Translate concepts into wireframes, high-fidelity mockups, and interactive prototypes, keeping designs practical, clear, and adaptable.",
    },
    {
      icon: TestTube,
      title: "Testing & Iteration",
      description: "Validate designs through usability testing and feedback, refining solutions for accessibility, compliance, and multi-role effectiveness.",
    },
    {
      icon: TrendingUp,
      title: "Implementation & Impact",
      description: "Collaborate with engineering to deliver scalable, consistent solutions and measure outcomes like adoption, efficiency, and error reduction.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">My Design Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A human-centered approach that blends research, creativity, and iteration to solve complex problems and deliver meaningful impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl text-muted-foreground/30">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
