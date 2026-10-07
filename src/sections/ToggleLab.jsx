import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./ToggleLab.css";

export default function ToggleLab() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Every box gets the same tween. Only toggleActions changes.

      gsap.from(".tbox--1", {
        x: -300, rotation: -90, opacity: 0, duration: 1,
        scrollTrigger: {
          trigger: ".tbox--1",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none",
          markers: true,
        },
      });

      gsap.from(".tbox--2", {
        x: -300, rotation: -90, opacity: 0, duration: 1,
        scrollTrigger: {
          trigger: ".tbox--2",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          markers: true,
        },
      });

      gsap.from(".tbox--3", {
        x: -300, rotation: -90, opacity: 0, duration: 1,
        scrollTrigger: {
          trigger: ".tbox--3",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reset",
          markers: true,
        },
      });

      gsap.from(".tbox--4", {
        x: -300, rotation: -90, opacity: 0, duration: 1,
        scrollTrigger: {
          trigger: ".tbox--4",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "restart none none none",
          markers: true,
        },
      });

      gsap.from(".tbox--5", {
        x: -300, rotation: -90, opacity: 0, duration: 1,
        scrollTrigger: {
          trigger: ".tbox--5",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play pause resume reset",
          markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="section section--pale toggle-lab" ref={container}>
      <p className="label">Toggle lab — onEnter · onLeave · onEnterBack · onLeaveBack</p>

      <div className="tbox tbox--1">play none none none</div>
      <div className="tbox tbox--2">play reverse play reverse</div>
      <div className="tbox tbox--3">play none none reset</div>
      <div className="tbox tbox--4">restart none none none</div>
      <div className="tbox tbox--5">play pause resume reset</div>
    </section>
  );
}