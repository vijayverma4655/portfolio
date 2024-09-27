import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

// Items for About section stats
const aboutItems = [
  {
    label: 'Projects done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

const About = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Frontend Developer", "Designer",],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    // Cleanup the effect when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <h2 className="headline-2 m-2">About</h2>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I'm Vijay Baghela and I'm a <span className="typing-2 text-sky-400 text-lg font-semibold" ref={typingRef}></span> 
            <br></br>
            Creative Front-End Developer with a passion for crafting engaging and user-friendly web interfaces. 
            I specialize in turning ideas into responsive, interactive experiences using modern technologies 
            like React, JavaScript, HTML5, and CSS3.
          </p>

          {/* About section with items */}
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            {/* Logo Image */}
            <img
              src="/images/logo1.png"
              alt="logo"
              width={100}
              height={90}
              className="ml-auto md:w-[100px] md:h-[90px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
