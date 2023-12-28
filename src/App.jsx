// App.jsx
import { BrowserRouter } from "react-router-dom";

// Named imports from your components index.js
import { 
  About, 
  Contact, 
  Education, 
  Experience, 
  Achievements, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas, 
  Footer
   
} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Achievements />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
