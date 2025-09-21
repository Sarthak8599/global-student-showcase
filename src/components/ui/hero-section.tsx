import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-showcase.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Join 50K+ Creative Students Worldwide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Share Your
            </span>
            <br />
            <span className="text-foreground">Amazing Projects</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with students globally, showcase your work, get inspired, and build your portfolio on the ultimate creative platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-4 rounded-xl shadow-glow">
              Start Sharing Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-card text-lg px-8 py-4 rounded-xl">
              Explore Gallery
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">125K+</div>
                <div className="text-muted-foreground">Projects Shared</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">180+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;