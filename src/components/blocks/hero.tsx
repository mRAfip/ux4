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
          {/* Left-aligned Main Content */}
          <div className="text-left max-w-6xl pt-20">
            {/* Main Headline with Red Bar */}
            <div className="flex items-start gap-4 mb-12">
              {/* Red Vertical Bar */}
              <div className="w-1 bg-red-500 h-24 mt-2"></div>
              
              {/* Headline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight text-gray-900">
                  We're a Global UI UX Design Agency Curating User Experiences That
                  <br />
                  <span className="text-red-500">win hearts and awards</span>
                </h1>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-2xl  font-bold text-gray-900 mb-2">Two Billion+</div>
                <div className="text-sm text-gray-600">Lives Touched</div>
              </div>
              <div>
                <div className="text-2xl  font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Global Awards</div>
              </div>
              <div>
                <div className="text-2xl  font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
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
