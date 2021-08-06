import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/work/Work"
import Work1 from "./components/work1/Work1"
import Work2 from "./components/work2/Work2"
import Contact from "./components/contact/Contact"
import './app.scss'

function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
      <Intro/>
      <Work/>
      <Work1/>
      <Work2/>
      <Portfolio/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
