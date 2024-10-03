"use client"; 
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion'; // Importing motion
import { HomeIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define animation variants
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    open: { rotate: 90, transition: { duration: 0.3 } },
    closed: { rotate: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full h-fit fixed top-0 shadow-lg shadow-orange-800/50 bg-orange-900/50 z-50">
      <div className="flex flex-col space-y-10 items-center justify-between">
        {/* Bars icon for small screens with animation */}
        <motion.button
          className="flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variants={buttonVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <Bars3Icon className="h-8 w-8 text-gray-300" />
        </motion.button>

        {isMenuOpen && (
          <motion.div
            initial="closed" 
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="h-full flex flex-col items-center justify-center"
          >
            <a href="/" className="flex justify-center items-center">
              <HomeIcon
                width={60}
                height={60}
                className="cursor-pointer hover:animate-slowspin rounded-full hover:bg-slate-900 transition-colors"
              />
            </a>

            <div className="flex flex-row items-center justify-evenly gap-8 mt-2 w-full h-auto border border-[#ff6a50] bg-[#060302] px-[2rem] py-[2rem] rounded text-gray-200 scale-4">
              <a href="#about-me" className="cursor-pointer hover:text-slate-900">
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-slate-900 scale-4">
                Skills
              </a>


              <a href="#SoftProjects" className="cursor-pointer hover:text-slate-900 scale-4">
                Software Projects
              </a>
              <a href="#HardProjects" className="cursor-pointer hover:text-slate-900 scale-4">
                Hardware Projects
              </a>
            </div>

            <div className="flex flex-row my-5 gap-20">
              {Socials.map((social) => (
                <div key={social.name} className="flex flex-col items-center">
                  <a className="z-30" href={social.href}>
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={27}
                      height={26}
                      className="m-auto hover:opacity-10"
                    />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
