import { Parallax } from "react-parallax";
import "./App.css";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Parallax strength={500} bgImage={one}>
          {" "}
          <div className="ParallaxHeight">
            <p>Normal Parallax</p>
          </div>
        </Parallax>
      </div>
      <div className="Container">
        <Parallax strength={-200} bgImage={three}>
          {" "}
          <div className="ParallaxHeight">
            <p>Reverse Parallax</p>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
