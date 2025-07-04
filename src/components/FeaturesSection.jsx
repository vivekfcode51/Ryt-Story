import React from "react";
import feature1Img from "../assets/images/feature-1.png"; // Adjust path as per your project
import feature2Img from "../assets/images/feature-2.png";

const featuresOne = [
  "Continuous integration and deployment",
  "Development workflow",
  "Knowledge management",
];

const featuresTwo = [
  "Dynamic reports and dashboards",
  "Templates for everyone",
  "Development workflow",
  "Limitless business automation",
  "Knowledge management",
];

const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 
         10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 
         001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const FeatureList = ({ items }) => (
  <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
    {items.map((item, index) => (
      <li key={index} className="flex space-x-3">
        <CheckIcon />
        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* Row 1 */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Work with tools you already use
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions. Accelerate critical development work, eliminate toil, and deploy changes
              with ease.
            </p>
            <FeatureList items={featuresOne} />
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.
            </p>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={feature1Img}
            alt="dashboard feature"
          />
        </div>

        {/* Row 2 */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={feature2Img}
            alt="feature 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions. Accelerate critical development work, eliminate toil, and deploy changes
              with ease.
            </p>
            <FeatureList items={featuresTwo} />
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
