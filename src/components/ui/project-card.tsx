import { Heart, MessageCircle, Eye, Share2, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  creator: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  creator,
  description,
  image,
  tags,
  likes,
  comments,
  views,
  featured = false
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-hover hover:-translate-y-2 transition-all duration-500 animate-scale-in">
      {featured && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}
      
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors cursor-pointer">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">by {creator}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border hover:border-primary cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-muted-foreground">+{tags.length - 3}</span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-destructive transition-colors">
              <Heart className="w-4 h-4" />
              {likes}
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              {comments}
            </button>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;