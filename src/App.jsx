import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoaded = () => setIsLoading(false);

    // Wait for all assets, images & scripts to load
    setTimeout(() => {
      if (document.readyState === "complete") {
        handleLoaded();
      } else {
        window.addEventListener("load", handleLoaded);
        return () => window.removeEventListener("load", handleLoaded);
      }
    }, 3000);
  }, []);

  return (
    <div className="bg-primary h-fit relative text-text">
      <AnimatePresence>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Hero />

            <div className="bg-linear-to-r from-purple-50 via-blue-50 to-teal-50">
              <div className="wrapper  font-grot text-textSec py-10 flex items-center justify-center divide-x divide-border gap-10 px-5 h-fit">
                <div className=" px-10 flex items-center justify-center flex-col ">
                  <img className="h-20" src="award1.png" alt="" />
                  <p className="sm:text-2xl text-center gap-3">
                    Awarded 6 times as global travel planner
                  </p>
                </div>
                <div className="px-10 flex gap-3 items-center justify-center flex-col">
                  <img className="" src="award2.png" alt="" />
                  <p className="font-grot text-center sm:text-2xl">
                    Rated 5 Star on Capterra
                  </p>
                </div>
              </div>
            </div>

            <Solutions />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
