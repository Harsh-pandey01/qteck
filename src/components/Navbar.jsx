/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const links = ["COMPANY", "OUR SERVICES", "PARTNERS"];
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div className="bg-secondry shadow-2xl fixed top-0 w-full z-[500]">
        <div className="px-5 flex items-center justify-between py-2 md:px-3 wrapper">
          {/* LOGO */}
          <div className="flex items-center gap-1">
            <motion.img
              layoutId="logo"
              className="h-10"
              src="logo.png"
              alt=""
            />
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="font-grot text-xl font-medium"
              >
                qTech
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.7 } }}
                className="text-xs -mt-1 font-grot"
              >
                Empowering tech
              </motion.p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            {/* DESKTOP NAV */}
            <nav className="md:block hidden">
              <ul className="flex items-center justify-center font-grot text-sm">
                {links.map((link, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className="px-7 group cursor-pointer relative rounded-full py-2"
                  >
                    {hovered === idx && (
                      <motion.div
                        layoutId="nav"
                        className="absolute inset-0 rounded-full bg-blue-500"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 group-hover:text-white transition-all duration-150">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <button className="font-grot text-sm px-4 py-2 cursor-pointer bg-blue-400 hover:bg-blue-500 rounded-md text-white">
                LETS CONNECT
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden cursor-pointer text-xl text-black"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondry shadow-xl fixed top-0 left-0 w-full h-screen pt-20 px-8 py-6 flex flex-col gap-6 font-grot z-[600]"
        >
          <div
            className="absolute top-10 cursor-pointer text-xl right-10"
            onClick={() => setOpen(false)}
          >
            <HiX />
          </div>
          {links.map((link, idx) => (
            <p
              key={idx}
              onClick={() => setOpen(false)}
              className="text-base border-b border-white/20 pb-2 hover:text-blue-400 cursor-pointer"
            >
              {link}
            </p>
          ))}

          <button
            onClick={() => setOpen(false)}
            className="font-grot text-sm px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-md text-white"
          >
            LETS CONNECT
          </button>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
