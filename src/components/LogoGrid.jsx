import React from "react";

const LogoGrid = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {/* Each anchor below wraps a logo SVG. You can break them into individual components if needed. */}
          <a href="#" className="flex items-center lg:justify-center">
            <svg
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              viewBox="0 0 125 35"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64.828 7.11521C64.828 8.52061 63.6775 9.65275..."
              />
            </svg>
          </a>

          <a href="#" className="flex items-center lg:justify-center">
            <svg
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              viewBox="0 0 86 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6008 10.2627V13.2312L18.6907..."
              />
            </svg>
          </a>

          {/* Add the remaining <a> blocks with SVGs from your HTML as needed */}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
