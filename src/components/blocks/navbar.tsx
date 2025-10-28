  "use client";

  import { useState } from "react";

  import Image from "next/image";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  import { ChevronRight, Github, ArrowRight } from "lucide-react";

  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import { cn } from "@/lib/utils";

  const ITEMS = [
    {
      label: "Services",
      href: "#services",
      dropdownItems: [
        {
          title: "UI/UX Design",
          href: "/#ui-ux-design",
          description:
            "Creating intuitive and beautiful user experiences that drive engagement",
        },
        {
          title: "Web & Mobile Development",
          href: "/#web-mobile",
          description: "Full-stack development for web and mobile applications",
        },
        {
          title: "AI Applications",
          href: "/#ai-solutions",
          description: "Intelligent solutions powered by artificial intelligence",
        },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    return (
      <section
        className={cn(
          "bg-transparent absolute  left-0 right-0 z-50 w-full transition-all duration-300",
          "top-0",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            {/* Logo Image */}
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/rafi.jpg"
                alt="logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Brand Text */}
            <div className="flex items-center gap-2">
              {/* <span className="text-gray-800 font-medium text-lg">Designer & Developer</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList>
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label} className="">
                    <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-1.5 text-gray-800">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] space-y-2 p-4">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                              >
                                <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                  <div className="text-sm leading-none font-medium">
                                    {item.title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label} className="">
                    <Link
                      href={link.href}
                      className={cn(
                        "relative bg-transparent px-1.5 text-sm font-medium text-gray-800 transition-opacity hover:opacity-75",
                        pathname === link.href && "text-gray-600",
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Let's Talk Button */}
            <Link href="/contact" className="max-lg:hidden">
              <span className="text-red-500 font-medium text-sm hover:underline decoration-red-500 underline-offset-4">
                Let's Talk
              </span>
            </Link>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="text-red-500 relative flex size-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/*  Mobile Menu Navigation */}
        <div
          className={cn(
            "bg-white fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col border-t border-gray-200 p-6 transition-all duration-300 ease-in-out lg:hidden shadow-lg",
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0",
          )}
        >
          <nav className="divide-border flex flex-1 flex-col divide-y">
            {/* Let's Talk Button for Mobile */}
            <div className="py-4 first:pt-0 last:pb-0">
              <Link href="/contact" className="block">
                <span className="text-red-500 font-medium text-sm hover:underline decoration-red-500 underline-offset-4">
                  Let's Talk
                </span>
              </Link>
            </div>
            
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label,
                      )
                    }
                    className="text-gray-800 flex w-full items-center justify-between text-base font-medium"
                  >
                    {link.label}
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform duration-200",
                        openDropdown === link.label ? "rotate-90" : "",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openDropdown === link.label
                        ? "mt-4 max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group hover:bg-accent block rounded-md p-2 transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <div className="transition-transform duration-200 group-hover:translate-x-1">
                            <div className="text-gray-800 font-medium">
                              {item.title}
                            </div>

                            <p className="text-gray-600 mt-1 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-gray-800 hover:text-gray-600 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                    pathname === link.href && "text-gray-600",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </section>
    );
  };
