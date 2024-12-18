﻿import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="container h-12 md:h-32 p-3">
      <div className="grid grid-cols-4 divide-x divide-orange-500 mx-auto w-full md:max-w-[800px] shadoq-lg bg-neutral-100 -translate-y-20 md:-translate-y-12 p-2 my-4 md:p-8 dark:bg-neutral-800 dark:text-white/70">
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={510} suffix="+" duration={2.75} />

            <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={45} suffix="+" duration={2.75} />
            <h1 className="sm:text-md text-xs md:text-lg">Projects</h1>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={12450} suffix="+" duration={2.75} />
            <h1 className="sm:text-md text-xs md:text-lg">Subscribers</h1>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={5320} suffix="+" duration={2.75} />
            <h1 className="sm:text-md text-xs md:text-lg">Customers</h1>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Counter;
