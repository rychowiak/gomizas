import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText); //make sure plugins are ready to use globally

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black" />
    </main>
  );
}

export default App;
