"use client";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".header-info",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".revealer", { rotation });
      },
    });

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
          ${45 - 45 * progress}% ${0 + 0 * progress}%,
          ${55 + 45 * progress}% ${0 + 0 * progress}%,
          ${55 + 45 * progress}% ${100 - 0 * progress}%,
          ${45 - 45 * progress}% ${100 - 0 * progress}%
        )`;
        gsap.to(".revealer-1, .revealer-2", {
          clipPath: clipPath,
          ease: "none",
          duration: 0,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".header-info",
      start: "top top",
      end: "bottom 50%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const left = 35 + 15 * progress;
        gsap.to(".revealer", {
          left: `${left}%`,
          ease: "none",
          duration: 0,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".whitespace",
      start: "top 50%",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const scale = 1 + 12 * self.progress;
        gsap.to(".revealer", {
          scale: scale,
          ease: "none",
          duration: 0,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove(gsap.ticker.lagSmoothing);
    };
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <h1>BARON-INC EVENTS</h1>
      </section>

      <section className="info">
        <div className="header-rows">
          <div className="header-row">
            <h1>BARON-INC</h1>
          </div>
          <div className="header-row">
            <h1>EVENTS</h1>
          </div>
        </div>
      </section>

      <section className="header-info">
        <p>
          Welcome to Baron-inc Events, where passion meets performance. We are
          the ultimate fusion of entertainment and sports excellence, crafting
          unforgettable experiences and empowering talent to shine on the global
          stage. Our mission is to be the premier destination for those who
          value the thrill of competition, the art of entertainment, and the
          pursuit of greatness.
        </p>

        <div className="header-images">
          <div className="img">
            <Image
              src="/images/image1.jpg"
              alt="Image 1"
              width={500}
              height={500}
            />
          </div>
          <div className="img">
            <Image
              src="/images/image2.jpg"
              alt="Image 2"
              width={500}
              height={500}
            />
          </div>
          <div className="img">
            <Image
              src="/images/image3.jpg"
              alt="Image 3"
              width={500}
              height={500}
            />
          </div>
          <div className="img">
            <Image
              src="/images/image4.jpg"
              alt="Image 4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="whitespace"></section>

      <section className="pinned">
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
      </section>

      <section className="website-content">
        <h1 className="about">About us</h1>
        <h1>
          At Baron-inc Events, we’re driven by a passion for delivering
          unparalleled experiences in entertainment and sports. From curating
          unforgettable events to nurturing top-tier talent, we’re here to bring
          your visions to life and help you achieve your goals. Every project we
          undertake is thoughtfully crafted with precision and creativity,
          ensuring that you feel empowered, celebrated, and at the center of the
          action. Our team is dedicated to providing exceptional support,
          whether you’re an athlete, entertainer, or enthusiast. At Elite Edge
          Management, it’s about creating a legacy worth remembering.
        </h1>
      </section>
    </div>
  );
}
