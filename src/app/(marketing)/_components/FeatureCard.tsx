import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, LucideIcon, TrendingUp, Zap } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-none bg-background/50 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="p-3 rounded-2xl bg-accent/10">
            <Icon className="size-6 text-accent" />
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe2,
      title: "Global Price Optimization",
      description:
        "Automatically adjust prices based on local purchasing power across 180+ countries",
    },
    {
      icon: TrendingUp,
      title: "Smart Revenue Analytics",
      description:
        "Track conversion rates and revenue impact of your location-based pricing strategy",
    },
    {
      icon: Zap,
      title: "One-Click Integration",
      description:
        "Seamlessly integrate with popular platforms like Stripe, Gumroad, and Paddle",
    },
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything you need for smart pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you optimize pricing and boost global
            sales
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
