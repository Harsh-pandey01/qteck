import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url(/banner.jpg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="md:h-screen h-150 w-full"
    >
      <div className="wrapper font-grot px-5 h-full w-full flex items-center">
        <div>
          <h1 className="md:text-6xl text-5xl tracking-tight  max-w-3xl font-bold text-white">
            Let’s collaborate at WTM London to accelerate your business growth
          </h1>
          <p className="text-white/70  text-xl mt-5">
            Empowering travel connections worldwide!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
