import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const textRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    var tl = gsap.timeline();

    gsap.fromTo(
      ".wrapperText",
      {
        y: "-50%",
        opacity: 0,
      },
      {
        opacity: 1,
        y: "0%",
        duration: 1.5,
      }
    );
  }, []);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 60,
      startDelay: 1800,
      strings: ["Astrophysicist", "Programmer", "Data Analyst"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapperText" ref={ref}>
          <h2>Hey There, I'm</h2>
          <h1>Bassel Farhat</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <div className="right">
        <a href="#work">
          <ExpandMore className="arrow" />
        </a>
      </div>
    </div>
  );
}
