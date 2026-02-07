import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText); //make sure plugins are ready to use globally


function App() {
  return (
    <main className="flex-center h-screen">
      <Navbar />
    </main>
  );
}

export default App;
