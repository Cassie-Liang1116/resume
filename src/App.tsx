import { useEffect, useRef, useState } from "react";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { PageShell } from "./components/layout/PageShell";
import { ExperienceAccordion } from "./components/sections/ExperienceAccordion";
import { HeroSection } from "./components/sections/HeroSection";
import { MainSections } from "./components/sections/MainSections";
import { WelcomeHero } from "./components/sections/WelcomeHero";
import { useLiquidGlass } from "./components/ui/useLiquidGlass";

type PageView = "welcome" | "portfolio";

function App() {
  const [page, setPage] = useState<PageView>("welcome");
  const [transitioningTo, setTransitioningTo] = useState<PageView | null>(null);
  const portfolioRootRef = useRef<HTMLDivElement>(null);
  const portfolioScrollRef = useRef<HTMLDivElement>(null);
  const welcomeRootRef = useRef<HTMLDivElement>(null);

  // Portfolio page LiquidGlass: root = scroll container, all .glass panels are direct children
  useLiquidGlass(portfolioScrollRef, page === "portfolio");
  // Welcome page LiquidGlass: root = welcome container, "About me" button is a direct child
  useLiquidGlass(welcomeRootRef, page === "welcome");

  useEffect(() => {
    if (!transitioningTo) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPage(transitioningTo);
      setTransitioningTo(null);
      portfolioScrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    }, 520);

    return () => window.clearTimeout(timer);
  }, [transitioningTo]);

  const scrollToSection = (id: string) => {
    const container = portfolioScrollRef.current;
    const target = container?.querySelector<HTMLElement>(`#${id}`);

    if (!container || !target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageShell>
      {page === "welcome" ? (
        <div
          ref={welcomeRootRef}
          className={`fixed inset-0 z-30 transition-all duration-500 ease-out ${transitioningTo === "portfolio" ? "pointer-events-none opacity-0 scale-[0.985]" : "opacity-100 scale-100"}`}
        >
          <WelcomeHero onAboutMe={() => setTransitioningTo("portfolio")} />
        </div>
      ) : null}

      {page === "portfolio" ? (
        <div
          ref={portfolioRootRef}
          className={`fixed inset-0 overflow-hidden transition-all duration-500 ease-out ${transitioningTo === "welcome" ? "pointer-events-none opacity-0 scale-[1.01]" : "opacity-100 scale-100"}`}
        >
          {/* Outer fixed background — visual backdrop for the entire page */}
          <div
            aria-hidden="true"
            className="fixed inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/6.jpg')" }}
          />
          <div className="fixed inset-0 z-10 bg-slate-950/24" />
          <Header
            onBackToWelcome={() => setTransitioningTo("welcome")}
            onNavigate={scrollToSection}
          />
          <div
            ref={portfolioScrollRef}
            className="absolute inset-x-0 bottom-0 top-24 z-20 overflow-y-auto"
          >
            {/* Inner background image — captured by LiquidGlass as scene backdrop for glass shaders */}
            <img
              aria-hidden="true"
              className="fixed inset-0 z-0 h-screen w-screen object-cover"
              src="/images/6.jpg"
              alt=""
              data-dynamic
            />
            {/* All glass panels render as direct children — LiquidGlass requires this */}
            <HeroSection onScrollToSection={scrollToSection} />
            <MainSections />
            <ExperienceAccordion />
            <Footer />
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}

export default App;