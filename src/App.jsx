import { BrowserRouter } from "react-router-dom";
import { Contact, Experience } from "./components";

import TestComponent from "./TestComponent.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <TestComponent />
          <Contact />
          <Experience />
          hola
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
