import "./portfolio.scss";
import { ExpandMore } from "@material-ui/icons";
import Lebenslauf from "../../Lebenslauf.pdf";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="wrapper">
        <div className="left">
          <div className="text">
            <h2>My name is Bassel Farhat,</h2>
            <h2>I am an astrophysicist who loves to code.</h2>
            <h2>Find my resume here</h2>
            <a href={Lebenslauf} target="_blank">
              <button>Resume</button>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Would love to hear from you.</h2>
            <h2>Whether it’s a project, job opportunity or just to chat. </h2>
            <h2>Feel free to contact me.</h2>
            <a href="#contact">
              <ExpandMore className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
