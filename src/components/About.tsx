import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center" style={{fontSize: '1.5rem'}}>About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hi, I’m Blake Rochelle - a UX designer who believes that great design lives at the intersection of empathy, storytelling, 
              and simplicity.
            </p>
            
            <p className="text-muted-foreground">
              I started my career in web design and front-end development after earning my B.S. in Information Technology from Auburn University. 
              Over time, I realized what I loved most wasn’t just how things looked or worked - it was how people felt when they used them. 
              That curiosity led me deep into UX, where I could combine technical insight with human understanding.
            </p>
            
            <p className="text-muted-foreground">
              I’ve designed for industries where clarity and trust matter most - healthcare and insurance. At Magellan, 
              I’m currently leading design for a Provider Portal that simplifies the day-to-day experience for clinicians. 
              Before that, I helped build an Underwriter Research Tool at Infinity Auto Insurance, giving analysts faster insights and better 
              decision-making. Along the way, I’ve honed my process through user testing, prototyping, and iterative design, 
              backed by my NNG UX Certification and a solid grounding in Agile and Lean methodologies.
            </p>
            <p className="text-muted-foreground">
              What keeps me going is the belief that even the most complex systems can feel effortless when designed with intention. 
              Whether I’m sketching wireframes or mapping service flows, my goal is to make every interaction, digital or human, a little clearer, 
              kinder, and more meaningful.
            </p>
            <p className="text-muted-foreground">
              Outside of work, I recharge through music, good food, and time with my family. I play the ukulele (badly but enthusiastically), 
              travel whenever possible, and can often be found kayaking with my golden retriever, Woogie, who insists on being the creative director 
              of most adventures.
            </p>
            <p className="text-muted-foreground">
              If you’re looking for someone who brings heart, humor, and hands-on skill to UX - let’s connect.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="src/images/profile/IMG_2845.jpeg"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
