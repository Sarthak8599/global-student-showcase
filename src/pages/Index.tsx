import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ProjectFilters from "@/components/ui/project-filters";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  // Mock project data
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      creator: "Sarah Chen",
      description: "A modern dashboard for visualizing complex data patterns using machine learning algorithms. Built with React and Python backend.",
      image: project1,
      tags: ["React", "Python", "AI/ML", "Data Visualization"],
      likes: 324,
      comments: 45,
      views: 1250,
      featured: true
    },
    {
      title: "EcoShop Mobile App",
      creator: "Marcus Rodriguez",
      description: "Sustainable shopping app that helps users find eco-friendly products. Features carbon footprint tracking and rewards system.",
      image: project2,
      tags: ["Flutter", "Firebase", "UI/UX", "Sustainability"],
      likes: 189,
      comments: 28,
      views: 890
    },
    {
      title: "Cyberpunk City 3D Scene",
      creator: "Alex Kim",
      description: "Futuristic cityscape created in Blender with advanced lighting and particle effects. Inspired by cyberpunk aesthetics.",
      image: project3,
      tags: ["Blender", "3D Art", "Animation", "Cyberpunk"],
      likes: 567,
      comments: 73,
      views: 2100,
      featured: true
    },
    {
      title: "Pixel Adventure Game",
      creator: "Emma Thompson",
      description: "2D platformer game built with Unity. Features custom pixel art, physics-based gameplay, and level editor.",
      image: project4,
      tags: ["Unity", "C#", "Game Dev", "Pixel Art"],
      likes: 412,
      comments: 56,
      views: 1670
    },
    {
      title: "Social Media Analytics Tool",
      creator: "David Park",
      description: "Web application that analyzes social media trends and provides insights for content creators and marketers.",
      image: project1,
      tags: ["Vue.js", "Node.js", "Analytics", "Social Media"],
      likes: 298,
      comments: 34,
      views: 945
    },
    {
      title: "AR Learning Platform",
      creator: "Zoe Williams",
      description: "Augmented reality educational app that makes learning interactive and engaging for students of all ages.",
      image: project2,
      tags: ["AR", "Unity", "Education", "Mobile"],
      likes: 623,
      comments: 89,
      views: 2340,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProjectFilters />
      
      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Discover amazing projects from talented students worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Load More Projects
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-primary rounded-lg p-2">
                  <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                </div>
                <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ProjectVerse
                </h3>
              </div>
              <p className="text-muted-foreground">
                The ultimate platform for students to showcase their creativity and connect with peers worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Featured Projects</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trending</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">New Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ProjectVerse. Made with ❤️ for student creators worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
