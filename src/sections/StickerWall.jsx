import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./StickerWall.css";

export default function StickerWall() {
  const container = useRef(null);

  useGSAP(
    () => {
      // ENTRANCE — stickers pop in one by one
      gsap.from(".sticker", {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(2)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".sticker-wall__grid",
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      });

      // HOVER — wobble bigger, settle back
      const stickers = container.current.querySelectorAll(".sticker");

      stickers.forEach((sticker) => {
        sticker.addEventListener("mouseenter", () => {
          gsap.to(sticker, {
            scale: 1.2,
            rotation: "+=15",   // add 15° to whatever it already is
            duration: 0.25,
            ease: "power2.out",
          });
        });

        sticker.addEventListener("mouseleave", () => {
          gsap.to(sticker, {
            scale: 1,
            rotation: "-=15",   // take the 15° back
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <section className="section sticker-wall" ref={container}>
      <p className="label">Sticker wall — hover everything</p>

      <div className="sticker-wall__grid">
        <div className="sticker sticker--1">WOW</div>
        <div className="sticker sticker--2">✶</div>
        <div className="sticker sticker--3">PINK</div>
        <div className="sticker sticker--4">!!!</div>
        <div className="sticker sticker--5">NOISE</div>
        <div className="sticker sticker--6">:)</div>
        <div className="sticker sticker--7">100%</div>
        <div className="sticker sticker--8">♥</div>
        <div className="sticker sticker--9">OK</div>
      </div>
    </section>
  );
}