import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Manifesto.css";

export default function Manifesto() {
  const container = useRef(null);

  useGSAP(
    () => {
      // The line slides from the right edge to the left as you scroll.
      gsap.fromTo(
        ".manifesto__line",
        { x: "60vw" },        // start: pushed off to the right
        {
          x: "-60vw",         // end: pushed off to the left
          ease: "none",       // scrubbed animations usually want a linear ease
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom", // when the section's top hits the viewport bottom
            end: "bottom top",   // when the section's bottom hits the viewport top
            scrub: true,
            markers: true,       // leave on while you learn; remove later
          },
        }
      );

      // The small paragraph just fades up once when it enters
      gsap.from(".manifesto__body", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".manifesto__body",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="section section--cream manifesto" ref={container}>
      <p className="label">Manifesto</p>

      <h2 className="display manifesto__line">
        MOTION IS NOT DECORATION ✶ MOTION IS NOT DECORATION
      </h2>

      <p className="manifesto__body">
        Things should move because they mean something. A button that
        breathes is alive. A page that slides is going somewhere. Pink
        Noise is a place to find out what moving things feel like — not a
        tutorial, a sandbox.
      </p>
    </section>
  );
}