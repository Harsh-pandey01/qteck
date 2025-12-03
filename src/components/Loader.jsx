import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

function Loader() {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    await animate(
      ".logo",
      {
        height: "10rem",
        opacity: 1,
      },
      {
        duration: 0.3,
      }
    );
    await animate(".logo", {
      height: "5rem",
    });
    await animate(
      ".logo",
      {
        x: -80,
      },
      {
        delay: 0.3,
      }
    );
    await animate(".title", {
      opacity: 1,
    });
    await animate(".load-des", {
      opacity: 1,

      x: -70,
    });
    animate(
      ".logo",
      {
        x: 0,
        scale: 1.2,
      },
      {
        delay: 0.5,
      }
    );
    animate(
      ".title",
      {
        opacity: 0,
        scale: 0,
      },
      {
        delay: 0.5,
      }
    );
    animate(
      ".load-des",
      {
        opacity: 0,
        scale: 0,
      },
      {
        delay: 0.5,
      }
    );
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center justify-center  gap-1" ref={scope}>
        <motion.img
          initial={{
            height: 0,

            opacity: 0,
          }}
          exit={{
            filter: "blur(10px)",
            opacity: 0,
            scale: 0,
          }}
          layoutId="logo"
          className="logo h-20"
          src="logo.png"
          alt=""
        />

        <div>
          <motion.h1
            initial={{
              x: -70,
              opacity: 0,
              width: 0,
            }}
            className=" text-3xl title font-grot"
          >
            qTech
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              width: 0,
              x: 0,
            }}
            className="load-des text-nowrap font-light tracking-tight font-grot -mt-1"
          >
            Empowering Ideas
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
