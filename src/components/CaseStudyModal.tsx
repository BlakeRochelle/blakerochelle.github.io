import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollArea } from "./ui/scroll-area";
import ReactMarkdown from 'react-markdown';

interface CaseStudy {
  title: string;
  description: string;
  role: string;
  duration: string;
  tags: string[];
  imageUrl: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
  additionalImages?: Array<{ url: string; caption: string }>;
  // Extended content for detailed case studies
  detailedContent?: {
    overview?: {
      roleAndTeam?: string;
      problemStatement?: string;
      solution?: string;
    };
    contributions?: string[];
    research?: string;
    design?: {
      earlyConcepts?: string;
      prototyping?: string;
      finalUI?: string;
    };
    testing?: string;
    outcomes?: string;
    lessons?: string[];
    nextSteps?: string[];
  };
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CaseStudyModal({ caseStudy, open, onOpenChange }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl mb-4">{caseStudy.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {caseStudy.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 text-muted-foreground">
                <span>{caseStudy.role}</span>
                <span>•</span>
                <span>{caseStudy.duration}</span>
              </div>
            </DialogHeader>

            <div className="aspect-video overflow-hidden rounded-lg mb-8 bg-muted">
              <ImageWithFallback
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              {/* Render detailed content if available */}
              {caseStudy.detailedContent ? (
                <>
                  {/* Overview Section */}
                  {caseStudy.detailedContent.overview && (
                    <div>
                      <h3 className="mb-4">Overview</h3>
                      
                      {caseStudy.detailedContent.overview.roleAndTeam && (
                        <div className="mb-4">
                          <h4 className="mb-2">Role & Team</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            <ReactMarkdown>{caseStudy.detailedContent.overview.roleAndTeam}</ReactMarkdown>
                          </p>
                        </div>
                      )}
                      
                      {caseStudy.detailedContent.overview.problemStatement && (
                        <div className="mb-4">
                          <h4 className="mb-2">Problem Statement</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            <ReactMarkdown>{caseStudy.detailedContent.overview.problemStatement}</ReactMarkdown>
                          </p>
                        </div>
                      )}
                      
                      {caseStudy.detailedContent.overview.solution && (
                        <div>
                          <h4 className="mb-2">Solution</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            <ReactMarkdown>{caseStudy.detailedContent.overview.solution}</ReactMarkdown>
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* My Contributions */}
                  {caseStudy.detailedContent.contributions && caseStudy.detailedContent.contributions.length > 0 && (
                    <div>
                      <h3 className="mb-3">My Contributions</h3>
                      <ul className="space-y-2">
                        {caseStudy.detailedContent.contributions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground"><ReactMarkdown>{item}</ReactMarkdown></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research */}
                  {caseStudy.detailedContent.research && (
                    <div>
                      <h3 className="mb-3">Research</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        <ReactMarkdown>{caseStudy.detailedContent.research}</ReactMarkdown>
                      </p>
                    </div>
                  )}

                  {/* Design */}
                  {caseStudy.detailedContent.design && (
                    <div>
                      <h3 className="mb-4">Design</h3>
                      
                      {caseStudy.detailedContent.design.earlyConcepts && (
                        <div className="mb-4">
                          <h4 className="mb-2">Early Concepts</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            <ReactMarkdown>{caseStudy.detailedContent.design.earlyConcepts}</ReactMarkdown>
                          </p>
                        </div>
                      )}
                      
                      {caseStudy.detailedContent.design.prototyping && (
                        <div className="mb-4">
                          <h4 className="mb-2">Prototyping</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {caseStudy.detailedContent.design.prototyping}
                          </p>
                        </div>
                      )}
                      
                      {caseStudy.detailedContent.design.finalUI && (
                        <div>
                          <h4 className="mb-2">Final UI Highlights</h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            <ReactMarkdown>{caseStudy.detailedContent.design.finalUI}</ReactMarkdown>
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Testing */}
                  {caseStudy.detailedContent.testing && (
                    <div>
                      <h3 className="mb-3">Testing</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        <ReactMarkdown>{caseStudy.detailedContent.testing}</ReactMarkdown>
                      </p>
                    </div>
                  )}

                  {/* Additional Images */}
                  {caseStudy.additionalImages && caseStudy.additionalImages.length > 0 && (
                    <div>
                      <h3 className="mb-4">Design Screens</h3>
                      <div className="space-y-6">
                        {caseStudy.additionalImages.map((image, index) => (
                          <div key={index}>
                            <div className="overflow-hidden rounded-lg bg-muted mb-2 case-study-image">
                              <ImageWithFallback
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground text-center italic">
                              <i>{image.caption}</i>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcomes */}
                  {caseStudy.detailedContent.outcomes && (
                    <div>
                      <h3 className="mb-3">Outcomes</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        <ReactMarkdown>{caseStudy.detailedContent.outcomes}</ReactMarkdown>
                      </p>
                    </div>
                  )}

                  {/* Lessons & Takeaways */}
                  {caseStudy.detailedContent.lessons && caseStudy.detailedContent.lessons.length > 0 && (
                    <div>
                      <h3 className="mb-3">Lessons & Takeaways</h3>
                      <ul className="space-y-2">
                        {caseStudy.detailedContent.lessons.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground"><ReactMarkdown>{item}</ReactMarkdown></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Next Steps */}
                  {caseStudy.detailedContent.nextSteps && caseStudy.detailedContent.nextSteps.length > 0 && (
                    <div>
                      <h3 className="mb-3">Next Steps</h3>
                      <ul className="space-y-2">
                        {caseStudy.detailedContent.nextSteps.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Standard case study format */}
                  <div>
                    <h4 className="mb-3">Overview</h4>
                    <p className="text-muted-foreground">{caseStudy.description}</p>
                  </div>

                  {caseStudy.challenge && (
                    <div>
                      <h4 className="mb-3">The Challenge</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                  )}

                  {caseStudy.solution && (
                    <div>
                      <h4 className="mb-3">The Solution</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  )}

                  {caseStudy.additionalImages && caseStudy.additionalImages.length > 0 && (
                    <div>
                      <h4 className="mb-4">Design Screens</h4>
                      <div className="space-y-6">
                        {caseStudy.additionalImages.map((image, index) => (
                          <div key={index}>
                            <div className="overflow-hidden rounded-lg bg-muted mb-2">
                              <ImageWithFallback
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground text-center italic">
                              {image.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {caseStudy.impact && caseStudy.impact.length > 0 && (
                    <div>
                      <h4 className="mb-3">Impact</h4>
                      <ul className="space-y-2">
                        {caseStudy.impact.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
