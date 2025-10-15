import Image from "next/image";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container">
        {/* Centered Main Content */}
        <div className="text-center max-w-4xl mx-auto pt-15">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tightest leading-tightest"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Add beautiful social media feeds to any website
          </h1>

          <p className="text-white/90 text-xl md:text-2xl lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Embed Instagram, Google Reviews, Tiktok and more in seconds. Works perfectly with Webflow, Framer, or any HTML site. Get started for free!
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200">
              <a href="https://github.com/shadcnblocks/mainline-nextjs-template">
                Get started for free
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
              asChild
            >
              <a
                href="https://shadcnblocks.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Learn more
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
