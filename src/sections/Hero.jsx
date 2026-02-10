import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }, []);
  return (
    <>
      <div className="absolute w-full pointer-events-none ">
        <img src="images/cover2_land.jpeg" className="block max-w-full" />
      </div>
      <section id="hero" className="">
        <h1 className="title">GOMIZAS</h1>

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">sip the spirit</p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, officia eveniet ullam et quibusdam molestiae non.
              </p>
              <a href="#cocktails">view cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
