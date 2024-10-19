"use client";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
        {/* <Head>
          <title> Life Cycle Assessment of Products and Services </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head> */}

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          	Instrumentation Engineering
          </h1>

          <Image
          src="/images/engineeringPics/EngineeringInstrumentation.jpg"
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          />

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <ul>
              <li>{`•	Preparation of Instrument Schedules`}</li>
              <li>{`•	Preparation Instrument Data sheet, Bid Specifications `}</li>
              <li>{`•	Preparation of Process safety/interlock system drawings. `}</li>
              <li>{`•	Specifications for control panel`}</li>
              <li>{`•	Loop & Hook up drawings`}</li>
              <li>{`•	Sizing of Control valves, Flow elements and Safety valves`}</li>
              <li>{`•	Preparation of Instrument layout drawings, cable routing drawing and cable schedules`}</li>
              <li>{`•	Specifications of electronic instrumentation and Distributed Digital Control System`}</li>
           
            </ul>
          </section>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-slide {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateX(-50px);
        }

        .animate-scale-up {
          animation: scale-up 0.8s ease-in-out forwards;
        }

        @keyframes scale-up {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
