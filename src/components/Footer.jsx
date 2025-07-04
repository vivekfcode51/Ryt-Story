import React from "react";
import logo from "../assets/images/logo.svg"; // update the path as per your project

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Section 1: Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
            <ul className="text-gray-500 dark:text-gray-400">
              {["About", "Careers", "Brand Center", "Blog"].map((item, index) => (
                <li className="mb-4" key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Help Center */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
            <ul className="text-gray-500 dark:text-gray-400">
              {["Discord Server", "Twitter", "Facebook", "Contact Us"].map((item, index) => (
                <li className="mb-4" key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Legal */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
            <ul className="text-gray-500 dark:text-gray-400">
              {["Privacy Policy", "Licensing", "Terms"].map((item, index) => (
                <li className="mb-4" key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Company (duplicate) */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
            <ul className="text-gray-500 dark:text-gray-400">
              {["About", "Careers", "Brand Center", "Blog"].map((item, index) => (
                <li className="mb-4" key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Download */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h3>
            <ul className="text-gray-500 dark:text-gray-400">
              {["iOS", "Android", "Windows", "MacOS"].map((item, index) => (
                <li className="mb-4" key={index}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
            Landwind
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 Landwind™. All Rights Reserved. Built with{" "}
            <a href="https://flowbite.com" className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>. Distributed by{" "}
            <a href="https://themewagon.com/" className="text-purple-600 hover:underline dark:text-purple-500">ThemeWagon</a>
          </span>

          {/* Social Icons */}
          <ul className="flex justify-center mt-5 space-x-5">
            {[
              "M22 12c0-5.523-4.477-10-10-10S2...",
              "M12.315 2c2.43 0 2.784.013 3.808...",
              "M8.29 20.251c7.547 0 11.675-6.253...",
              "M12 2C6.477 2 2 6.484 2 12.017c0...",
              "M12 2C6.48 2 2 6.48 2 12s4.48 10..."
            ].map((d, idx) => (
              <li key={idx}>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={d} clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
