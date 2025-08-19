import { UserPlus, Clock, FileCheck, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Register & Setup",
      description: "Workers register with their details and get assigned to projects by administrators."
    },
    {
      icon: Clock,
      number: "02", 
      title: "Log Daily Work",
      description: "Submit daily work entries including hours worked, job type, and project details."
    },
    {
      icon: FileCheck,
      number: "03",
      title: "Admin Review",
      description: "Administrators review and approve work entries ensuring accuracy and compliance."
    },
    {
      icon: DollarSign,
      number: "04",
      title: "Get Paid Fairly",
      description: "Receive accurate wages calculated automatically based on approved work entries."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary">FairFundzz</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple 4-step process to ensure transparent and fair wage management for all construction workers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 z-0"></div>
              )}
              
              <Card className="relative z-10 bg-white hover:shadow-hover-custom transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-construction rounded-full text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-construction rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ensure Fair Wages?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of construction workers and companies using FairFundzz for transparent wage management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};