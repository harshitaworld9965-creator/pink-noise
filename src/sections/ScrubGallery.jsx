import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./ScrubGallery.css";

export default function ScrubGallery() {
  const container = useRef(null);

  useGSAP(
    () => {
      // CARD 1 — scrub: true (locked to scroll, no lag)
      gsap.fromTo(
        ".card--1",
        { rotation: -12, scale: 0.8, opacity: 0.3 },
        {
          rotation: 12, scale: 1, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".card--1",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // CARD 2 — scrub: 1 (one second of catch-up)
      gsap.fromTo(
        ".card--2",
        { rotation: -12, scale: 0.8, opacity: 0.3 },
        {
          rotation: 12, scale: 1, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".card--2",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // CARD 3 — scrub: 2 (two seconds of catch-up)
      gsap.fromTo(
        ".card--3",
        { rotation: -12, scale: 0.8, opacity: 0.3 },
        {
          rotation: 12, scale: 1, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".card--3",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section className="section section--ink scrub-gallery" ref={container}>
      <p className="label">Scrub gallery — scroll fast, then stop</p>

      <div className="scrub-gallery__row">
        <div className="card card--1">
          <span className="card__big">true</span>
          <span className="card__small">locked to scroll</span>
        </div>

        <div className="card card--2">
          <span className="card__big">1</span>
          <span className="card__small">one second lag</span>
        </div>

        <div className="card card--3">
          <span className="card__big">2</span>
          <span className="card__small">two second lag</span>
        </div>
      </div>
    </section>
  );
}