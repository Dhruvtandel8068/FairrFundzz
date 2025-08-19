import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FooterSection } from "@/components/footer-section";
import { AuthModal } from "@/components/auth/auth-modal";

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<"login" | "signup">("login");

  const handleLoginClick = () => {
    setAuthDefaultTab("login");
    setAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthDefaultTab("signup");
    setAuthModalOpen(true);
  };

  const handleGetStarted = () => {
    setAuthDefaultTab("signup");
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <HowItWorksSection />
      <FooterSection />
      
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />
    </div>
  );
};

export default Index;
