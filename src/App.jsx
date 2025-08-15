import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Header from "./components/header";
import {
  AboutSection,
  FeaturesSection1,
  FeaturesSection2,
  HeroSection,
  ImageSection,
  Product,
} from "./components/hero-section";
import Footer from "./components/footer";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [animationCorde, seTanimationCorde] = useState({
    first_height: 0,
    second_height: 0,
    third_height: 0,
    four_height: 0,
    location_Y_1: 0,
    location_X_1: 0,
    location_Y_2: 0,
    location_X_2: 0,
    location_Y_3: 0,
    location_X_3: 0,
    location_Y_4: 0,
    location_X_4: 0,
    location_Y_5: 0,
    location_X_5: 0,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      console.log("Desktop")
      let master = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          scroller: "body", 
          start: "17% 95%",
          end: "75% 50%",
          scrub: 2,
        },
      });

      master
        // Section 1
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_1}px`,
            left: `${animationCorde.location_X_1}px`,
            duration: 0.4,
            rotate: "90deg",
            scale: 0.9,
          },
          "section1"
        )
        // Section 2
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_2}px`,
            left: `${animationCorde.location_X_2}px`,
            delay: 0.1,
            duration: 1,
            rotate: "0deg",
            scale: 0.8,
          },
          "section2"
        )
        // Section 3
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_3}px`,
            left: `${animationCorde.location_X_3}px`,
            scale: 0.45,
            duration: 0.3,
          },
          "section3"
        )
        // Section 4
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_4}px`,
            left: `${animationCorde.location_X_4}px`,
            duration: 0.6,
            scale: 0.85,
          },
          "section4"
        )
        // Section 5
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_5}px`,
            left: `${animationCorde.location_X_5}px`,
            duration: 0.6,
            scale: 0.65,
          },
          "section5"
        );
    }, 
    "(max-width: 767px)": function () {
      console.log("Mobile")
      let master = gsap.timeline({
        scrollTrigger: {
          trigger: "#main", 
          scroller: "body",
          start: "17% 95%",
          end: "75% 50%",
          scrub: 2,
          // markers: true,
        },
      });

      master
        // Section 1
        .addLabel("section1")
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_1}px`,
            left: `${animationCorde.location_X_1}px`,
            duration: 0.4,
            rotate: "90deg",
            scale: 0.9,
          },
          "section1"
        )
        // Section 2
        .addLabel("section2")
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_2}px`,
            left: `${animationCorde.location_X_2}px`,
            delay: 0.1,
            duration: 1,
            rotate: "0deg",
            scale: 1,
          },
          "section2"
        )
        // Section 3
        .addLabel("section3")
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_3}px`,
            left: `${animationCorde.location_X_3}px`,
            scale: 0.45,
            duration: 0.3,
          },
          "section3"
        )
        // Section 4
        .addLabel("section4")
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_4}px`,
            left: `${animationCorde.location_X_4}px`,
            duration: 0.6,
            scale: 0.85,
          },
          "section4"
        )
        // Section 5
        .addLabel("section5")
        .to(
          "#headphone",
          {
            top: `${animationCorde.location_Y_5-20}px`,
            left: `${animationCorde.location_X_5}px`,
            duration: 0.6,
            scale: 0.95,
          },
          "section5"
        );
    },
  });

  return (
    <>
      <main id="main" className="w-full font-DM-San bg-bg">
        <Header />
        <HeroSection corde={animationCorde} setCorde={seTanimationCorde} />
        <FeaturesSection1 corde={animationCorde} setCorde={seTanimationCorde} />
        <FeaturesSection2 corde={animationCorde} setCorde={seTanimationCorde} />
        <ImageSection corde={animationCorde} setCorde={seTanimationCorde} />
        <Product corde={animationCorde} setCorde={seTanimationCorde} />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
