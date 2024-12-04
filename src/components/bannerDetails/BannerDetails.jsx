import React from "react";
// import Banner from "../../assets/blog2.jpg";

const BannerDetails = ({ reverse }) => {
  return (
    <section>
      <main className="bg-neutral-200 dark:bg-neutral-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              //   data-aos="fade-right"
              //   data-aos-duration="400"
              //   data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                We Build Apps That Get Trending On Appworld
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
                necessitatibus?
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                    Lorem ipsum adipisicing elit. Cum, vel.
                  </li>
                  <li className="font-medium">
                    dlss ipsum adipisicing elit. Cum, vel.
                  </li>
                  <li className="font-medium">adipisicing elit. Cum, vel.</li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-orange-500 bg-orange-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-orange-500/80">
                  Get Started
                </button>
              </div>
            </div>
            <div
              //   data-aos="fade-left"
              //   data-aos-duration="400"
              //   data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src="https://picsum.photos/400/300"
                alt="No image"
                className="mx-auto w-full p-4 md:max-w-[400px] hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
