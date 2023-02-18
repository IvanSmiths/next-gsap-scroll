import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

function ScrollSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section>
      <div ref={triggerRef} className="scroll-section-outer">
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section scroll-section-2">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section scroll-section-3">
            <h3>Section 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
