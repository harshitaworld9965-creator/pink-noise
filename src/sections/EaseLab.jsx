import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./EaseLab.css";

export default function EaseLab() {
  const container = useRef(null);

  useGSAP(
    () => {
      const race = () => {
        gsap.to(".dot--1", { x: "80vw", duration: 2, ease: "none" });
        gsap.to(".dot--2", { x: "80vw", duration: 2, ease: "power1.out" });
        gsap.to(".dot--3", { x: "80vw", duration: 2, ease: "power4.out" });
        gsap.to(".dot--4", { x: "80vw", duration: 2, ease: "power2.inOut" });
        gsap.to(".dot--5", { x: "80vw", duration: 2, ease: "back.out(1.7)" });
        gsap.to(".dot--6", { x: "80vw", duration: 2, ease: "elastic.out(1, 0.3)" });
        gsap.to(".dot--7", { x: "80vw", duration: 2, ease: "bounce.out" });
      };

      const reset = () => {
        gsap.to(".dot", { x: 0, duration: 0.6, ease: "power2.inOut" });
      };

      // A ScrollTrigger with no tween — just a sensor that calls functions.
      ScrollTrigger.create({
        trigger: ".ease-lab__lanes",
        start: "top 60%",
        onEnter: race,
        onLeaveBack: reset,
      });

      // Clicking the button replays the race without scrolling.
      const button = container.current.querySelector(".ease-lab__replay");
      button.addEventListener("click", () => {
        gsap.to(".dot", { x: 0, duration: 0.3, onComplete: race });
      });
    },
    { scope: container }
  );

  return (
    <section className="section ease-lab" ref={container}>
      <p className="label">Ease lab — same distance, same time, different shape</p>

      <div className="ease-lab__lanes">
        <div className="lane"><span className="lane__name">none</span><div className="dot dot--1" /></div>
        <div className="lane"><span className="lane__name">power1.out</span><div className="dot dot--2" /></div>
        <div className="lane"><span className="lane__name">power4.out</span><div className="dot dot--3" /></div>
        <div className="lane"><span className="lane__name">power2.inOut</span><div className="dot dot--4" /></div>
        <div className="lane"><span className="lane__name">back.out(1.7)</span><div className="dot dot--5" /></div>
        <div className="lane"><span className="lane__name">elastic.out(1, 0.3)</span><div className="dot dot--6" /></div>
        <div className="lane"><span className="lane__name">bounce.out</span><div className="dot dot--7" /></div>
      </div>

      <button className="ease-lab__replay">↻ run it again</button>
    </section>
  );
}