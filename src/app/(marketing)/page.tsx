import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import { formatCompactNumber } from "@/lib/formatters";

import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import FeaturesSection from "./_components/FeatureCard";

// Define trusted companies data with unique identifiers
// const trustedCompanies = [
//   { id: "neon-1", icon: NeonIcon, href: "https://neon.tech" },
//   { id: "clerk-1", icon: ClerkIcon, href: "https://clerk.com" },
//   { id: "neon-2", icon: NeonIcon, href: "https://neon.tech" },
//   { id: "clerk-2", icon: ClerkIcon, href: "https://clerk.com" },
//   { id: "neon-3", icon: NeonIcon, href: "https://neon.tech" },
//   { id: "clerk-3", icon: ClerkIcon, href: "https://clerk.com" },
//   { id: "neon-4", icon: NeonIcon, href: "https://neon.tech" },
//   { id: "clerk-4", icon: ClerkIcon, href: "https://clerk.com" },
//   { id: "neon-5", icon: NeonIcon, href: "https://neon.tech" },
//   { id: "clerk-5", icon: ClerkIcon, href: "https://clerk.com" },
// ];

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell bigger!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <FeaturesSection />
      {/* <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            {trustedCompanies.map((company, index) => {
              const Icon = company.icon;
              return (
                <Link
                  key={company.id}
                  href={company.href}
                  className={cn(
                    "md:max-xl:hidden",
                    index === 9 ? "md:max-xl:hidden" : ""
                  )}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </section> */}
      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <div className="flex flex-col gap-2">
          <Link href="/" className="inline-block">
            <BrandLogo />
          </Link>
          <p className="text-md text-muted-foreground">
            Developed by Zaid Bhati
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            {/* <FooterLinkGroup
              title="Help"
              links={[
                { id: "help-1", label: "PPP Discounts", href: "#" },
                { id: "help-2", label: "Discount API", href: "#" },
              ]}
            /> */}
            {/* <FooterLinkGroup
              title="Solutions"
              links={[
                { id: "solutions-1", label: "Newsletter", href: "#" },
                { id: "solutions-2", label: "SaaS Business", href: "#" },
                { id: "solutions-3", label: "Online Courses", href: "#" },
              ]}
            /> */}
          </div>
          <div className="flex flex-col gap-8">
            {/* <FooterLinkGroup
              title="Features"
              links={[{ id: "features-1", label: "PPP Discounts", href: "#" }]}
            /> */}
            {/* <FooterLinkGroup
              title="Tools"
              links={[
                { id: "tools-1", label: "Salary Converter", href: "#" },
                { id: "tools-2", label: "Coupon Generator", href: "#" },
                { id: "tools-3", label: "Stripe App", href: "#" },
              ]}
            /> */}
            {/* <FooterLinkGroup
              title="Company"
              links={[
                { id: "company-1", label: "Affiliate", href: "#" },
                { id: "company-2", label: "Twitter", href: "#" },
                { id: "company-3", label: "Terms of Service", href: "#" },
              ]}
            /> */}
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                {
                  id: "integrations-1",
                  label: "Github",
                  href: "https://github.com/Zaidbhati10114",
                },
                {
                  id: "integrations-2",
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/zaid-bhati-427a79192/",
                },
                {
                  id: "integrations-3",
                  label: "Twitter",
                  href: "https://x.com/Zaidbhati4",
                },
              ]}
            />
            {/* <FooterLinkGroupß
              title="Tutorials"
              links={[
                { id: "tutorials-1", label: "Any Website", href: "#" },
                { id: "tutorials-2", label: "Lemon Squeezy", href: "#" },
                { id: "tutorials-3", label: "Gumroad", href: "#" },
                { id: "tutorials-4", label: "Stripe", href: "#" },
                { id: "tutorials-5", label: "Chargebee", href: "#" },
                { id: "tutorials-6", label: "Paddle", href: "#" },
              ]}
            /> */}
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Price Pair branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { id: string; label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-md">
        {links.map((link) => (
          <li key={link.id}>
            <Link target="_blank" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
