"use client";

import { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  const wordsToAnimate = [
    "Apps Designing",
    "Apps Development",
    "UI/UX Designing",
    "Unity Games Development",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % wordsToAnimate.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [wordsToAnimate.length]);

  return (
    <section id="home">
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
          className="h-screen w-full dark:bg-black-100 bg-white  
      dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center 
      justify-center absolute top-0 left-0"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center 
        justify-center dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-2 z-10">
          <div
            className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col 
        items-center justify-center"
          >
            <h2
              className="uppercase tracking-widest text-xs text-center 
          text-blue-100 max-w-80"
            >
              Raccoon Tech
            </h2>

            <TextGenerateEffect
              words="Empowering The Future Of IT"
              className="text-center text-[30px] md:text-5xl lg:text-6xl"
            />
            <span>
              {wordsToAnimate.map((word, index) => (
                <>
                  {index === activeIndex && (
                    <span className="flex items-center gap-2 justify-center text-[16px] md:text-2xl lg:text-3xl">
                      <span
                        key={index}
                        className={
                          index === activeIndex
                            ? "max-w-max text-center typing"
                            : ""
                        }
                      >
                        {wordsToAnimate[activeIndex]}
                      </span>
                      <span className=" self-stretch block z-50 w-2 common-gradient cursor" />
                    </span>
                  )}
                </>
              ))}
            </span>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
          <img
            src="/hero.png"
            alt="bgimg"
            width={"30%"}
            className="hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
