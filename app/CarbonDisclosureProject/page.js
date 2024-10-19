'use client'
import Head from 'next/head';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function CarbonDisclosureProject() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Carbon Disclosure Project</title>
        <meta name="description" content="HAZOP Study to identify and evaluate hazards and operability problems in processes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="   overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <div className=" px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white p-8 shadow-lg">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-[#0b8d7c] mb-8 animate-scale-up">
          Carbon Disclosure Project
          </h1>

          <Image
          src="/service/31.png"
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          />

      

<section data-aos="fade-up" data-aos-duration="1000"  className="mb-8  mt-8">
            <h2 className="text-2xl font-semibold mb-4">
            1.	Carbon Disclosure Project :
            </h2>

            <p className="text-gray-700 mb-4">
              {`Carbon Disclosure Project is a Environment disclosure focuses mainly on Sustainable economy by measuring and acting upon their Environmental Impacts. CDP can be processed through the below  channels for your Organisation. CDP reveals Climate Change, Forests, and Water Security through disclosures.   `}
            </p>
            

          <ul>
            <li>
              {`1.	CDP Assessment `}
            </li>
            <li>
              {`2.	CDP Strategy and Implement`}
            </li>
            <li>
              {`3.	CDP Disclosures `}
            </li>
              
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
