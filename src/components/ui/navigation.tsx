import { useState } from "react";
import { Menu, X, HardHat, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

interface NavigationProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export const Navigation = ({ onLoginClick, onSignupClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoIcon} alt="FairFundzz" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-primary">FairFundzz</h1>
              <p className="text-xs text-muted-foreground">Fair Wages Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={onLoginClick} className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
              <Button onClick={onSignupClick} className="flex items-center space-x-2 bg-gradient-construction text-white hover:shadow-hover-custom transition-all duration-300">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" onClick={onLoginClick} className="flex items-center justify-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
                <Button onClick={onSignupClick} className="flex items-center justify-center space-x-2 bg-gradient-construction text-white">
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};