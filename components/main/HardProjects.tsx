"use client"
import React from "react";
import ProjectCard from "./sub/ProjectCard";

const HardwareProjects = () => {
  return (
    <div className="z-30">
      <h1 id="HardProjects" className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900 py-20">
        Hardware Projects
      </h1>
      <div className="flex flex-col gap-10 px-10">
      <ProjectCard
          src="/ldo pic 1.png"
          src2="/ldo pic 2.png"
          title="Desgin: LDO circuit"
          description="Constructed the circuit to accept a 5.5V input while delivering a stable 3.3V output, ensuring reliable device operation and enhancing the drone's performance in various conditions.
Utilized two 1 µF capacitors to minimize voltage fluctuations and noise, significantly improving the stability of sensitive electronics and increasing flight control accuracy.
Devised an LED indicator with a 68Ω resistor for visual power status feedback, enabling operators to quickly assess system health during missions and improve operational efficiency.
Facilitated dual input/output connectors for seamless system integration, simplifying maintenance and allowing for rapid deployment in diverse operational scenarios."
        />


<ProjectCard
          src="/vidschem pic1.png"
          src2="/vidschem pic2.png"
          title="Design: Harness Video system"
          description="Developed a dual-camera configuration using a camera multiplexer (mux), achieving seamless switching between outputs and enhancing flexibility in video capture during drone operations.
Designed the mux output routing to an on-screen display (OSD) for overlaying critical flight data, improving real-time situational awareness and operator decision-making.
Engineered stable wireless video transmission via a video transmitter (VTX) with dedicated power and ground lines, reducing signal interference and ensuring consistent video feeds during high-interference flights.
Standardized the wiring harness with correct wire gauges, color coding, and labeled connectors, simplifying installation and reducing troubleshooting time by 20%."
/>

<ProjectCard
src="/stm32 pic1.png"
src2="/stm32 pic3.png"
github="https://github.com/ahmed27037/stm32-bootcamp"
title="Embedded: Potentiometer to Servo Motor"
description="Executed a project using the STM32 microcontroller to control motor speed and direction via PWM from a potentiometer input.
Combined a potentiometer with an external ADC and established an SPI connection with the STM32 for accurate data communication.
Crafted software routines to configure SPI and generate a PWM signal, enabling precise motor control based on potentiometer readings.
"
/>

<ProjectCard
  src="/LED pic1.jpg"
  title="Solder: LED REV3 circuit"
  description="Assembled a 5.5V to 3.3V regulated circuit with 1 µF capacitors, ensuring reliable operation and improved drone performance.
Integrated an LED indicator with a 68Ω resistor, providing clear visual feedback of power status, allowing for quick system diagnostics and reducing mission downtime.
Created 3D component footprints, streamlining PCB fabrication and ensuring precise part placement, which enhanced production efficiency and reduced assembly errors."

/>

      </div>

    </div>
  );
};

export default HardwareProjects;