import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, List, TrendingUp, Clock, Star } from "lucide-react";

const ProjectFilters = () => {
  const categories = [
    "All Projects",
    "Web Development",
    "Mobile Apps", 
    "AI/ML",
    "Game Development",
    "3D Art",
    "UI/UX Design",
    "Data Science"
  ];

  const sortOptions = [
    { icon: TrendingUp, label: "Trending", active: true },
    { icon: Clock, label: "Recent", active: false },
    { icon: Star, label: "Featured", active: false }
  ];

  return (
    <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-gradient-primary text-primary-foreground" : "hover:border-primary transition-colors"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Sort & View Options */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <div className="flex gap-2">
              {sortOptions.map((option, index) => (
                <Button
                  key={option.label}
                  variant={option.active ? "default" : "ghost"}
                  size="sm"
                  className={option.active ? "bg-gradient-primary text-primary-foreground" : ""}
                >
                  <option.icon className="w-4 h-4 mr-2" />
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;