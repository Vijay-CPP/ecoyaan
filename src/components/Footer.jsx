import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-300 dark:bg-slate-800">
      <div className="flex flex-col md:flex-row gap-10 mx-10 py-28">
        <div className="w-[80%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-xl font-semibold dark:text-gray-200 mb-3">Registered Address:</h1>
          <p className="text-base text-gray-500 dark:text-gray-400">
            1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR),
            Mangalore, Dakshina Kannada- 575006, Karnataka, India
          </p>
        </div>

        <div className="w-[80%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-xl font-semibold dark:text-gray-200 mb-3">Legal Business Name:</h1>
          <p className="text-base text-gray-500 dark:text-gray-400">
            Kindkarma E-Retail Private Limited
            <br />
            <br />
            CIN: U47912KA2023PTC182592 Telephone: +91 9980490777
          </p>
        </div>
      </div>

      <div className="bg-black h-12 text-center flex items-center justify-center">
        <p className="text-white">© 2023 - 2024, Ecoyaan TM</p>
      </div>
    </div>
  );
};

export default Footer;
