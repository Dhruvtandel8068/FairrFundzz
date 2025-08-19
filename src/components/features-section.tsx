import { Users, FileCheck, BarChart3, Smartphone, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Worker Management",
      description: "Complete worker registration, role assignment, and profile management system."
    },
    {
      icon: FileCheck,
      title: "Work Entry Submission",
      description: "Simple daily work logging with job type classification and hours tracking."
    },
    {
      icon: BarChart3,
      title: "Automated Calculations",
      description: "Smart wage calculation based on predefined policies, overtime, and bonuses."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access from any device - smartphones, tablets, or desktop computers."
    },
    {
      icon: Calendar,
      title: "Monthly Reports",
      description: "Comprehensive monthly wage summaries and detailed work history reports."
    },
    {
      icon: CheckCircle,
      title: "Admin Approval",
      description: "Secure approval workflow with admin oversight for all wage calculations."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for <span className="text-primary">Fair Wages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage construction worker wages transparently and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover-custom transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-construction rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};