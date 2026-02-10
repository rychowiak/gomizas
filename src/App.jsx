import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Gomitas from "./sections/Gomitas";

gsap.registerPlugin(ScrollTrigger, SplitText); //make sure plugins are ready to use globally

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gomitas />
    </main>
  );
}

export default App;
