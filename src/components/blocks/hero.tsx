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
            Future-Ready Digital Experiences
          </h1>

          <p className="text-white/90 text-xl md:text-2xl lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Expert consultant specializing in UI/UX design, web applications, mobile development, and AI solutions. Let's build something extraordinary together.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 rounded-full hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200">
              <a href="/contact">
                Start Your Project
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:border-white/30 gap-2 shadow-lg hover:shadow-xl transition-all duration-200 rounded-full"
              asChild
            >
              <a
                href="/about"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                View My Work
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
