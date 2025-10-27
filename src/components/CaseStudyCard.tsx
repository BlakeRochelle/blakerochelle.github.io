import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  role: string;
  duration: string;
  tags: string[];
  imageUrl: string;
  challenge: string;
  solution: string;
  impact: string[];
  onClick: () => void;
}

export function CaseStudyCard({
  title,
  description,
  role,
  duration,
  tags,
  imageUrl,
  onClick,
}: CaseStudyCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-transparent hover:border-primary/20"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="group-hover:text-primary transition-colors">{title}</h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{role}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </CardContent>
    </Card>
  );
}
