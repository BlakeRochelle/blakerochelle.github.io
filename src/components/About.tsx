import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center" style={{fontSize: '1.5rem'}}>About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hi, I’m Blake Rochelle - a UX designer who believes that great design lives at the intersection of empathy, storytelling and simplicity.
            </p>
            
            <p className="text-muted-foreground">
              I started my career in web design and front-end development after earning my B.S. in MIS from Auburn University. 
              Over time, I realized what I loved most wasn’t just how things looked or worked - it was how people felt when they used them. 
              That curiosity led me deep into UX, where I could combine technical insight with human understanding.
            </p>
            
            <p className="text-muted-foreground">
              I’ve designed for industries where clarity and trust matter most - healthcare and insurance. In my current role, 
              I’m leading design for a practitioner portal that simplifies the day-to-day experience for behavioral practitioners. 
              Before that, I designed and help build applications for both the personal and commercial auto insurance industry, I've 
              designed and assited in the development of a tax resolution workflow management application and served as both designer and/or developer on dozens of other prjoects. 
              Along the way, I’ve honed my process through user testing, prototyping, iterative design. listening and lots of collaboration
              backed by my NNG UX Certification, a solid grounding in Agile & Lean methodologies and loads of empathy.
            </p>
            <p className="text-muted-foreground">
              What keeps me going is the belief that even the most complex systems can feel effortless when designed with intention. 
              Whether I’m sketching wireframes or mapping service flows, my goal is to make every interaction, digital or human, a little clearer, 
              kinder and more meaningful.
            </p>
            <p className="text-muted-foreground">
              Outside of work, I recharge through music, good food and time with my family. I play the ukulele (terribly but proudly), 
              travel as often as possible and can often be found kayaking in the waters around Gulf Breeze, FL with my golden retriever, Woogie, 
              our full-time creative director and sometimes foot stool.
            </p>
            <p className="text-muted-foreground">
              If you’re looking for someone who brings heart, humor and hands-on skill to UX - let’s connect. I'll put on a strong pot of Café Bustelo!
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="./images/profile/IMG_2845.jpeg"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
