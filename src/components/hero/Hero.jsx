﻿import React from "react";
import Banner from "../../assets/hero2.png";

const Hero = () => {
  return (
    <main className="h-[650px] md:h-[500px] bg-gradient-to-r from-teal-950 to-teal-900 pt-20 dark:bg-teal-100">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-orange-500 bg-orange-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-orange-500/80">
                Get Started
              </button>
              <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Get Started
              </button>
            </div>
          </div>
          <div
            // data-aos="fade-left"
            // data-aos-duration="400"
            // data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
