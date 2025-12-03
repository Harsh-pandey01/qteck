import { CornerDownRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
function Solutions() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div className="">
      <div className="wrapper px-5 pt-8 sm:pt-20">
        <h1 className="text-3xl font-semibold font-grot text-textSec">
          Explore Our Solutions
        </h1>
        <span>-</span>
        <span className="font-grot text-sm text-textSec ">
          Travel Technology. Booking Re-verification. Software Development
        </span>

        {/* OTRAMS */}
        <div className="py-10 md:h-[80vh] md:max-h-150 ">
          <div className="h-full w-full flex-col md:flex-row flex md:items-center gap-10">
            <div className="md:w-100 h-full md:py-10">
              <h1 className="text-2xl font-grot font-semibold text-blue-600">
                OTRAMS Travel ERP
              </h1>
              <p className="text-xl tracking-tight leading-tight mt-1 text-textSec font-grot ">
                Online Travel Reservation and Management System
              </p>
              <p className="mt-5 font-grot text-textSec/70 text-[14px]">
                OTRAMS by Qtech Software is a leading travel ERP platform
                powering global B2B and B2C travel businesses. It offers
                end-to-end travel technology solutions including booking
                engines, API integrations, agent management, and dynamic
                packaging.
              </p>

              <div className="divide-y mt-10 divide-border">
                <h1 className="py-2.5 hover:px-2.5 transition-all ease-in-out duration-75 hover:bg-blue-500/10">
                  {" "}
                  For Destination Management
                </h1>
                <h1 className="py-2.5 hover:px-2.5 transition-all ease-in-out duration-75 hover:bg-blue-500/10">
                  For Travel Management Companies
                </h1>
                <h1 className="py-2.5 hover:px-2.5 transition-all ease-in-out duration-75 hover:bg-blue-500/10">
                  For Online Travel Agencies
                </h1>
              </div>
            </div>
            <div className="flex-1 h-full">
              <img
                className="h-full w-full rounded-xl"
                src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2024/06/what-is-a-private-limited-company.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-100 text-center flex py-10 text-white items-center justify-center"
        style={{
          backgroundImage: "url(bannerb.png)",
        }}
      >
        <div className="max-w-2xl px-5">
          <h1 className="md:text-5xl text-4xl font-grot font-bold">
            OTRAMS GO
          </h1>
          <p className="text-xl font-grot mt-2">
            Scalable Travel Software Solution for Fast-Growing Travel Businesses
          </p>
          <p className="text-white/70 font-grot text-sm mt-2 tracking-tight ">
            Unlock the power of OTRAMS Go – the ultimate travel booking platform
            to launch, manage, and grow your online travel business
            effortlessly.
          </p>
          <button className="px-10 border-2 cursor-pointer hover:bg-blue-400 hover:text-white transition-all ease-in duration-150 border-black py-4 bg-white text-black rounded-full mt-5 font-grot ">
            See how you benefit
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="wrapper px-5 flex flex-col md:flex-row items-center justify-center h-fit md:max-h-150"
      >
        <div className="h-full">
          <motion.img
            style={{
              x,
            }}
            className="h-full rounded-xl"
            src="pc.png"
            alt=""
          />
        </div>
        <div className="py-10 md:px-10">
          <h1 className="text-4xl font-grot text-blue-500 font-bold">
            rePUSHTI
          </h1>
          <p className="font-grot text-textSec text-xs">
            AI Powered Travel Booking Re-verification Platform
          </p>
          <p className="py-4 text-2xl font-grot tracking-tight leading-tight">
            World’s first booking re-verification platform for the travel
            industry.
          </p>

          <div className="mt-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-grot text-textSec">
              <CornerDownRight className="text-textSec/60" />
              <p>Automated re-verification</p>
            </div>
            <div className="flex items-center gap-2 font-grot text-textSec">
              <CornerDownRight className="text-textSec/60" />
              <p>API Connection to all Travel Platforms</p>
            </div>
            <div className="flex items-center gap-2 font-grot text-textSec">
              <CornerDownRight className="text-textSec/60" />
              <p>Improve your Customer Experience</p>
            </div>
            <div className="flex items-center gap-2 font-grot text-textSec">
              <CornerDownRight className="text-textSec/60" />
              <p>Pay as you go service</p>
            </div>
          </div>

          <p className="count mt-3 font-grot text-4xl">
            300,000 <span className="text-blue-400">+</span>
          </p>
          <button className="px-10 py-2.5 bg-blue-400 rounded-full font-grot mt-5 text-white cursor-pointer hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>

      {/* CSBT */}

      <div className="py-10 px-5 wrapper ">
        <h1 className="text-2xl font-grot font-semibold">
          Corporate Self Booking Tool (CSBT)
        </h1>
        <p className=" tracking-tight leading-tight font-grot text-textSec mt-2">
          Introducing a CSBT module designed to enhance efficiency, alleviate
          administrative burdens, and promote adherence to corporate policies.
        </p>
        <div className="h-50 w-full mt-5 rounded-4xl overflow-clip">
          <img className="h-full w-full object-cover" src="board.jpg" alt="" />
        </div>

        <div className="grid md:grid-cols-3 gap-3 mt-10">
          <div className="px-5 flex  hover:border-blue-400 flex-col gap-2 border border-border rounded-xl border-dashed py-2 text-center">
            <h1 className="text-xl font-grot ">Customizable Travel Policies</h1>
            <p className="text-textSec leading-tight ">
              Implement company-specific travel policies and guidelines directly
              into the tool to ensure compliance with corporate regulations.
            </p>
          </div>
          <div className="px-5 flex  hover:border-blue-400 flex-col gap-2 border border-border rounded-xl border-dashed py-2 text-center">
            <h1 className="text-xl font-grot ">Approval Workflows</h1>
            <p className="text-textSec leading-tight ">
              Implement approval workflows to ensure that travel bookings adhere
              to company policies and budgetary constraints, with options for
              multiple levels of approval.
            </p>
          </div>
          <div className="px-5 flex hover:border-blue-400  flex-col gap-2 border border-border rounded-xl border-dashed py-2 text-center">
            <h1 className="text-xl font-grot ">
              Travel Policy Compliance Checks
            </h1>
            <p className="text-textSec leading-tight ">
              Conduct automated checks during the booking process to ensure that
              travel arrangements comply with company policies, avoiding
              unauthorised bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
