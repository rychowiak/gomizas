import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./sections/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText); //make sure plugins are ready to use globally


function App() {
  return (
    <main >
      <Navbar />
    </main>
  );
};

export default App;
