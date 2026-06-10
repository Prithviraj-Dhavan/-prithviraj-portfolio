import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary'>

        {/* Stars canvas — fixed behind everything */}
        <StarsCanvas />

        {/* Hero */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* All other sections */}
        <About />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />
        <Contact />

      </div>
    </BrowserRouter>
  );
}

export default App;
