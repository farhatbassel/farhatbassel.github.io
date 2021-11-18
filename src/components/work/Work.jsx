import "./work.scss";
import { GitHub } from "@material-ui/icons";
import fullThesis from "../../Density_Perturbations_From_Magnetic_Fields.pdf";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import data from "./data";

export default function Work() {
  const [works, setWorks] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = works.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, works]);

  return (
    <div className="work" id="work">
      <div className="title">
        <h1>Work</h1>
      </div>
      <section>
        {data.map((work, workIndex) => {
          const {
            image,
            title,
            text,
            bothButtons,
            githubLink,
            firstButton,
            kaggle,
            cssReference,
          } = work;

          let position = "nextSlide";
          if (workIndex === index) {
            position = "activeSlide";
          }
          if (
            workIndex === index - 1 ||
            (index === 0 && workIndex === work.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={`wrapper ${position}`}>
              <section className="left">
                <img
                  src={image}
                  alt={`${title}`}
                  className={`${cssReference}`}
                />
              </section>
              <section className="right">
                <div className="text">
                  <h1>{title}</h1>
                  <h2>{text}</h2>
                </div>
                <div className="fullwrap">
                  {bothButtons && (
                    <div className="buttonwrap">
                      <a href={fullThesis} target="_blank" rel="noreferrer">
                        <button id="first-btn">{firstButton}</button>
                      </a>
                    </div>
                  )}
                  <div
                    className={`${bothButtons ? "buttonwrap" : "second-btn"}`}
                  >
                    <a href={githubLink} target="_blank" rel="noreferrer">
                      <button>
                        {!kaggle ? (
                          <GitHub className="github" />
                        ) : (
                          <span className="kaggleButton">k</span>
                        )}
                      </button>
                    </a>
                  </div>
                </div>
              </section>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </section>
    </div>
  );
}
