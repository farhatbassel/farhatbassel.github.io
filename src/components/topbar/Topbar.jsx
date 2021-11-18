import "./topbar.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BF
          </a>
          <div className="itemContainer">
            <a href="#work"> Latest Projects</a>
            <a href="#portfolio"> About Me</a>
            <a href="#contact"> Contact Me</a>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a
              href="https://github.com/farhatbassel"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="github" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/bassel-farhat-835083159/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="linkedin" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.kaggle.com/farhatbassel"
              target="_blank"
              rel="noreferrer"
            >
              <span id="kaggle">k</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
