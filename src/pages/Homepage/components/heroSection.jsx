import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCard from "./heroCards";

import { GhostButton, PrimaryButton } from "../../../components/buttons";
import { heroMiniCard } from "../../../../UI-data/info";
import heroImage from "../../../assets/images/hero-image.png";
import heroAnimation from "../../../assets/images/hero-animation.png";

import image1 from "../../../assets/icons/hero-card-icon-1.svg";
import image2 from "../../../assets/icons/hero-card-icon-2.svg";
import image3 from "../../../assets/icons/hero-card-icon-3.svg";
import image4 from "../../../assets/icons/hero-card-icon-4.svg";

gsap.registerPlugin(ScrollTrigger);

// ✏️ TWEAKABLE: Heading
const HEADING_START_DELAY = 1; // ✏️ initial delay before heading starts (in seconds)
const HEADING_STAGGER = 0.3; // seconds between heading lines
const HEADING_DURATION = 0.7; // duration of each line reveal
const HEADING_Y_OFFSET = 40; // pixels to translate from

// ✏️ TWEAKABLE: Description
const DESC_DELAY_AFTER_HEADING = 0.1; // delay after heading finishes
const DESC_STAGGER = 0.25; // stagger between description lines
const DESC_DURATION = 0.5;
const DESC_Y_OFFSET = 30;

// ✏️ TWEAKABLE: Buttons + mini cards
const GROUP_DELAY_AFTER_DESC = 0.1; // delay after description finishes
const GROUP_DURATION = 0.7;
const GROUP_Y_OFFSET = 30;

// ✏️ TWEAKABLE: Small hero image entrance
const HERO_IMG_DELAY = 0.3; // starts on its own on load

// ✏️ TWEAKABLE: ScrollTrigger (mobile/tablet)
const TRIGGER_START = "top 10%";
const TRIGGER_END = "top 40%";

const HeroSection = () => {
  const navigate = useNavigate();

  // Refs for GSAP targets
  const headingLines = useRef([]);
  const descLines = useRef([]);
  const buttonsRef = useRef(null);
  const miniCardsRef = useRef(null);
  const heroImageWrapperRef = useRef(null);
  const heroContainerRef = useRef(null);
  const timelineContainerRef = useRef(null);

  const handleAnimationClick = () => {
    navigate("/properties");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Small hero image: animates independently on load (all screens) ──
      gsap.fromTo(
        heroImageWrapperRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: HERO_IMG_DELAY,
          ease: "power2.out",
        },
      );

      // ── Desktop timeline (autoplay on load) ──
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline();

        // Phase 1: Heading lines stagger from bottom
        tl.fromTo(
          headingLines.current,
          { y: HEADING_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: HEADING_DURATION,
            stagger: HEADING_STAGGER,
            ease: "power3.out",
          },
          `+=${HEADING_START_DELAY}`,
        );

        // Phase 2: Description lines stagger from bottom
        tl.fromTo(
          descLines.current,
          { y: DESC_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: DESC_DURATION,
            stagger: DESC_STAGGER,
            ease: "power3.out",
          },
          `+=${DESC_DELAY_AFTER_HEADING}`,
        );

        // Phase 3: Buttons + mini cards reveal together at the same time
        tl.fromTo(
          buttonsRef.current,
          { y: GROUP_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: GROUP_DURATION,
            ease: "power3.out",
          },
          `+=${GROUP_DELAY_AFTER_DESC}`,
        );

        tl.fromTo(
          miniCardsRef.current,
          { y: GROUP_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: GROUP_DURATION,
            ease: "power3.out",
          },
          "<",
        );
      });

      // ── Mobile/Tablet timeline (ScrollTrigger, fires once) ──
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: timelineContainerRef.current,
            start: TRIGGER_START,
            end: TRIGGER_END,
            toggleActions: "play none none none",
            once: true,
          },
        });

        // Same phases as desktop, triggered on scroll
        tl.fromTo(
          headingLines.current,
          { y: HEADING_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: HEADING_DURATION,
            stagger: HEADING_STAGGER,
            ease: "power3.out",
          },
          `+=${HEADING_START_DELAY}`,
        );

        tl.fromTo(
          descLines.current,
          { y: DESC_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: DESC_DURATION,
            stagger: DESC_STAGGER,
            ease: "power3.out",
          },
          `+=${DESC_DELAY_AFTER_HEADING}`,
        );

        tl.fromTo(
          buttonsRef.current,
          { y: GROUP_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: GROUP_DURATION,
            ease: "power3.out",
          },
          `+=${GROUP_DELAY_AFTER_DESC}`,
        );

        tl.fromTo(
          miniCardsRef.current,
          { y: GROUP_Y_OFFSET, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: GROUP_DURATION,
            ease: "power3.out",
          },
          "<",
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={timelineContainerRef}
        className="wrapper flex flex-col-reverse lg:flex-row items-center gap-14"
      >
        {/* Hero Info */}
        <div ref={heroContainerRef} className="flex-1">
          {/* ── Heading (2 lines, same split on all screens) ── */}
          <h1 className="text-heading-1 max-w-[clamp(22.375rem,11.125rem+30vw,38.125rem)] mb-[clamp(1rem,0.821rem+0.476vw,1.25rem)]">
            <span className="block overflow-hidden">
              <span
                ref={(el) => (headingLines.current[0] = el)}
                className="inline-block"
              >
                Discover Your Dream
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={(el) => (headingLines.current[1] = el)}
                className="inline-block"
              >
                Property with Estatein
              </span>
            </span>
          </h1>

          {/* ── Description (2 lines) ── */}
          <p className="text-dark-60 md:pe-50 lg:pe-0">
            <span className="block overflow-hidden">
              <span
                ref={(el) => (descLines.current[0] = el)}
                className="inline-block"
              >
                Your journey to finding the perfect property begins here.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={(el) => (descLines.current[1] = el)}
                className="inline-block"
              >
                Explore our listings to find the home that matches your dreams.
              </span>
            </span>
          </p>

          {/* ── Buttons ── */}
          <div
            ref={buttonsRef}
            className="flex flex-col md:flex-row gap-3 pbs-[clamp(2.5rem,2.054rem+1.19vw,3.125rem)] pbe-[clamp(2.5rem,2.054rem+1.19vw,3.125rem)]"
          >
            <GhostButton title="Learn More" path="/about" />{" "}
            <PrimaryButton title="Browse Properties" path="/properties" />
          </div>

          {/* ── Hero Mini Cards ── */}
          <div
            ref={miniCardsRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {heroMiniCard.map(({ title, info }, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center md:items-start items-center py-4 px-2 rounded-md border border-dark-15 bg-dark-10 ${index === heroMiniCard.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <h3 className="text-heading-3">{title}</h3>
                <p className="text-dark-60">{info}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative flex-1 lg:-me-11">
          <div
            ref={heroImageWrapperRef}
            className="absolute top-[90%] left-[5%] md:top-[93%] md:left-[80%] lg:top-[30%] lg:-left-10 z-10 opacity-0"
          >
            <img
              onClick={handleAnimationClick}
              className="w-[clamp(5rem,10rem+6vw,5.5rem)] cursor-pointer animate-slow-spin"
              src={heroAnimation}
              alt=""
            />
          </div>
          <img
            className="w-full lg:w-172.5 rounded-2xl lg:rounded-none mbs-10 lg:mbs-0"
            src={heroImage}
            alt=""
          />
        </div>
      </div>

      {/* Secondary Hero cards */}
      <div className="px-2 lg:px-0 pbs-10 md:pbs-2 lg:pbs-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 border-3 border-dark-15 rounded-lg lg:rounded-none p-2">
          <HeroCard image={image1} title="Find Your Dream Home" />
          <HeroCard image={image2} title="Unlock Property Value" />
          <HeroCard image={image3} title="Effortless Property Management" />
          <HeroCard
            image={image4}
            title="Smart Investments, Informed Decisons"
          />
        </div>
      </div>
    </>
  );
};

// [clamp(22.375rem,7.554rem+39.524vw,43.125rem)]
export default HeroSection;
