import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

const WORDS = ["PINK", "NOISE"];

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      // ENTRANCE: letters start below, rotated and invisible,
      // then animate TO their CSS resting position.
      gsap.from(".hero__letter", {
        y: 160,
        rotation: () => gsap.utils.random(-40, 40), // each letter gets its own tilt
        opacity: 0,
        scale: 0.6,
        duration: 1.1,
        ease: "back.out(1.7)",
        stagger: 0.06,
      });

      // the small text fades in after the letters
      gsap.from(".hero__meta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power2.out",
      });

      // HOVER: one listener pair per letter
      const letters = gsap.utils.toArray(".hero__letter");

      letters.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
          gsap.to(letter, {
            y: -24,
            rotation: gsap.utils.random(-15, 15),
            scale: 1.15,
            color: "#d6ff3c",
            duration: 0.35,
            ease: "power3.out",
          });
        });

        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            y: 0,
            rotation: 0,
            scale: 1,
            color: "#1a0b12",
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <section className="section hero" ref={container}>
      <p className="label hero__meta">An experiment in motion — vol. 01</p>

      <h1 className="display hero__title" aria-label="Pink Noise">
        {WORDS.map((word) => (
          <span className="hero__word" key={word}>
            {word.split("").map((char, i) => (
              <span className="hero__letter" data-anim key={word + i}>
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p className="hero__meta hero__hint">↓ scroll, hover, break things</p>
    </section>
  );
}