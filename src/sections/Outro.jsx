import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Outro.css";

export default function Outro() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. BACKGROUND WORD — grows and spins with scroll
      gsap.fromTo(
        ".outro__bg",
        { scale: 0.5, rotation: -20 },
        {
          scale: 1.4,
          rotation: 10,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // 2. CLOSING WORDS — fly in one after another
      gsap.fromTo(
        ".outro__word",
        { y: 120, rotation: 15, opacity: 0 },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".outro__words",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. BUTTON HOVER
      const button = container.current.querySelector(".outro__button");

      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.15,
          rotation: -4,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.35)",
        });
      });
    },
    { scope: container }
  );

  return (
    <section className="section section--ink outro" ref={container}>
      <span className="outro__bg" aria-hidden="true">BYE</span>

      <p className="label">End of transmission</p>

      <h2 className="display outro__words">
        <span className="outro__word">STAY</span>
        <span className="outro__word">PINK,</span>
        <span className="outro__word">STAY LOUD.</span>
      </h2>

      <button
        className="outro__button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to the top ↑
      </button>
    </section>
  );
}