import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Experience,
  Navbar,
  Hero,
  About,
  Works,
  Feedbacks,
  StarsCanvas,
  Tech,
} from "./components";

import TestComponent from "./TestComponent.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works />
        <Feedbacks /> */}
        <div className="relative z-0">
          {/* <StarsCanvas />
          <Contact /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
