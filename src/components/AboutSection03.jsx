import React from "react";

import propic01 from "../assets/profilepic01.png";
import propic02 from "../assets/profilepic02.png";

const AboutSection03 = () => {
  return (
    <div className="bg-green-50 dark:bg-gray-900 py-10">
      <h1 className="mx-10 lg:mx-14 text-3xl text-gray-800 font-semibold py-10 dark:text-gray-100">Our Story</h1>

      <div className="flex flex-col md:flex-row gap-10 mx-8 lg:mx-12">
        <div className="w-[80%] mx-auto lg:w-[26%] flex flex-col gap-5">
          <img src={propic01} alt="" />
          <img src={propic02} alt="" />
        </div>

        <div className="text-base flex flex-col gap-5 text-gray-700 dark:text-gray-300">
          <p>
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission.
          </p>

          <p>
            Our research suggests that many Indians understand global warming,
            yet access to sustainable practices and products remains limited. We
            also noticed that there is a lack of support for eco-friendly
            businesses.
          </p>

          <p>
            We created Ecoyaan to connect consumers, businesses, and
            sustainability experts. We want to make it easy and convenient for
            people to access eco-friendly products and services, learn and share
            best practices, and support sustainability initiatives.
          </p>

          <p>
            As founders, we are not perfect, but we are passionate. We believe
            that every small step matters. Join us and be a part of the Ecoyaan
            community — together, we’ll make a difference.
          </p>

          <p>
            Connect with the founders on LinkedIn here: Abhishek Rao Sarwanjeet
            Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection03;
