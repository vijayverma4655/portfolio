import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
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
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-Box w-9 h-9 rounded-lg">
                <img src="/images/avatar.jpg" width={40} height={40} alt="vijay "  className="img-cover"/>
            </figure>

            <div className="flex items-center gap-4 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-3 h-3 rounded-full bg-emerald-500 animate-ping">
                   
                </span>

                Hello, My Name Is
            </div>
          </div>
          <h2 className="headline-3 max-w-[15ch] sm:max-w-20ch lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
           Vijay Baghela
           <h4 className="animation">And I' Am <span className="typing-2 text-sky-500 text-3xl font-semibold" ref={typingRef}></span></h4>
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary 
              href="/images/vijay-resume.pdf"
                label= "Download CV" 
                icon= "download"
            />

            <ButtonOutline
            href="#contact"
            label ="Hire Me"
            icon="contacts_product"
            />

          </div>
        </div>

        <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-800 via-25% via-sky-500/40 to-65% rounded-[60px] overflow-hidden ">
                <img src="/images/hero-banner1.png" alt="" 
                width={656}
                height={800}
                className="w-full"/>
            </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
