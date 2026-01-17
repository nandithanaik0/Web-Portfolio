"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Navbar() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl py-3 px-4 transition-all",
            "bg-white/70 dark:bg-black/60",
            "backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-xl font-bold transition-all hover:opacity-80"
            >
              <span className="gradient-text tracking-tight">Nanditha Naik</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={item.href}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-all",
                        active
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>

                    {active && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="h-[2px] w-full bg-primary absolute -bottom-1 left-0"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop: Theme Toggle only */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-muted/50 shadow-sm"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className={cn(
                    "p-0",
                    "bg-white text-black dark:bg-black dark:text-white",
                    "border-l border-black/10 dark:border-white/10"
                  )}
                >
                  <VisuallyHidden>
                    <h2>Mobile Navigation Menu</h2>
                  </VisuallyHidden>

                  <div className="flex flex-col h-full">
                    {/* Top row: Logo + Theme Toggle */}
                    <div className="p-6 flex items-center justify-between">
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="font-display text-2xl font-bold"
                      >
                        <span className="gradient-text">Nanditha Naik</span>
                      </Link>

                      <ThemeToggle />
                    </div>

                    {/* Nav links */}
                    <div className="flex-1 px-6 py-6 flex flex-col gap-2">
                      {NAV_ITEMS.map((item) => (
                        <motion.div whileTap={{ scale: 0.97 }} key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block py-3 px-4 text-lg font-medium rounded-md transition-all",
                              "text-muted-foreground hover:text-primary",
                              "hover:bg-muted/40"
                            )}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Removed Resume button here */}
                    <div className="px-6 pb-6" />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
