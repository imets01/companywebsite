import React from "react";

const BlogCard = ({ Img }) => {
  return (
    <div>
      <div className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800 dark:text-white">
        <div className="overflow-hidden rounded-lg ">
          <img
            src={Img}
            alt="No image"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-neutral-600 dark:text-white">
          <p>June 22, 2024</p>
          <p className="line-clamp-1">5 min read</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">
            How to grow your business. How to grow your business.
          </h1>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
