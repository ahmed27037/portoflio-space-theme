"use client";

import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex gap-7 z-30"
    >
      <div className="h-full w-full flex flex-col gap-10 justify-between text-start col-span-1 md:col-span-1">
=

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Motto:
            Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-900"> {" "} to {" "} </span>
            learn
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="grid auto-rows-1fr gap-y-1 text-lg font-bold text-gray-400"
        >

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700">
              Hey my name is Ahmed Osman and I am an Electrical Engineering student at the University of Waterloo.
            </span>


            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-yellow-700 text-3xl font-bold">
              A little about myself:
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-700">
              I am currently in the Waterloo Aerial Robotics Groups Design Team
            </span>


            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800">
             I love building things.
            </span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800">
              I am also in the Physics club and Leetcode club and love doing fun problems in my free time.
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-blue-800">
              This website also works on mobile btw.
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-800">
              I also love black holes :)
            </span>
        </motion.p>
      
        <Link
          href="https://docs.google.com/document/d/1zQTLUq9UCJcfy1BKluCL35MxPCAU5eYqcThldmFqIII/edit"
          className="py-2 text-center text-white cursor-pointer rounded-lg max-w-[7rem] border-2 border-orange-800 bg-orange-900 hover:bg-orange-950 transition-colors"
        >
          Hardware Porfolio
        </Link>
      </div>


      {/* Image in its own row */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-20"
      >
        <Image
        className='rounded-3xl'
          src="/35604028241_7b653334e3_b.webp"
          alt="this is supposed to load"
          height={550}
          width={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
