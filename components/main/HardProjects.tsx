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
          description="Input Voltage: Designed for a 5.5V input and provided a regulated 3.3V output for reliable operation of connected devices.
Capacitance: Used two 1 µF capacitors in the design. One capacitor is placed at the input to stabilize the incoming voltage and the other at the output to filter noise and stabilize the output voltage.
LED Indicator: Incorporated an LED with a forward voltage of 2V at a current of 20mA. To limit the current through the LED, a resistor was calculated to be 68Ω, which helps protect the LED from excessive current while still allowing it to light up brightly.
Connectors: Included two connectors, one for input and one for output, to facilitate integration into different systems. This makes it easier to connect and disconnect the power supply as needed.
Design Review: Collaborated with electrical engineering leads for a detailed review of the circuit. This step validated the design and made sure all components met the necessary specifications.
3D Footprints: Created 3D footprints for each component used in the design. This aids in the PCB fabrication process by providing accurate dimensions and layouts for each part."
        />


<ProjectCard
          src="/vidschem pic1.png"
          src2="/vidschem pic2.png"
          title="Design: Harness Video system"
          description="Camera Configuration: The system includes two cameras connected to a camera multiplexer (mux). The mux allows seamless switching between the two camera outputs, enabling flexible video capture without the need for manual disconnection.

Camera Mux to OSD: The output from the camera mux is routed to an on-screen display (OSD) module. The OSD overlays critical flight data, such as altitude, speed, and battery voltage, onto the video feed. This arrangement provides pilots with real-time information, enhancing situational awareness during flight. The OSD module is powered directly from the harness, ensuring consistent operation.

OSD to VTX: After processing by the OSD, the combined video feed is sent to a video transmitter (VTX). The VTX transmits the video signal wirelessly to the ground station or receiver. The harness includes dedicated power and ground lines for the VTX to ensure stable operation. Careful attention was paid to minimize voltage drop and signal interference through appropriate gauge wiring and shielding.

Wire Color Standards: The schematic follows industry standards for wire color coding:

Red is used for power connections to indicate positive voltage.
Black is designated for ground connections, providing a clear reference for the return path.
Yellow is utilized for the display connector, clearly marking the wires associated with the video signal to the OSD.
Wiring and Connectors: The harness is designed with clearly labeled wiring and connectors for each component, simplifying installation and troubleshooting. Each connection is made according to these color standards, ensuring clarity and consistency.

Correct Gauge and Length: The schematic utilizes the correct wire gauge for each connection based on the current requirements of the components. Additionally, the lengths of the wires are calculated to reduce potential signal loss while allowing for practical installation in various configurations. This consideration of wire gauge and length helps ensure optimal performance and reliability throughout the system.

Integration with Power Supply: The harness includes connections for power supply lines to each component, with proper filtering capacitors placed to reduce noise and improve signal integrity. This ensures that each part of the system receives the correct voltage without introducing interference.

Modular Design: The harness design is modular, allowing for easy replacement or upgrades of any individual component. This feature facilitates maintenance and customization based on specific project needs."
/>

<ProjectCard
  src="/LED pic1.jpg"
  src2="/LED pic2.jpg.png"
  title="Solder: LED REV3 circuit"
  description="I helped assemble and solder the LED REV3 board. The LED REV board is designed to accept 12V for LED power and 5V GPIO input, enabling straightforward control of LED strips based on GPIO signals.
Power and Control Inputs: The board accepts a +12V power supply to drive the LED strips, along with a 5V GPIO input to manage the switching of LEDs, facilitating efficient operation and control of multiple LED channels.
LED Strip Configuration: The design accommodates LED strips with four main inputs:
+12V for powering the LED strip.
Three ground connections for the RGB channels (R, G, B). It is noted that two of these inputs are mislabeled, which requires verification for correct operation.
Switching Mechanism: The board utilizes N-channel MOSFETs as switching elements. The DMG2302UKQ-7 MOSFET is selected for its appropriate ratings and is included in the parts library. The configuration includes:
Source Terminals: Connected to the power ground for a common reference.
Drain Terminals: Connected to the R and G channels of the LED strip, controlling the illumination of the respective colors.
Gate Terminals: Connected to the control signal input, allowing the MOSFETs to turn on and off based on the GPIO input.
Connector Design:
The board features 2x signal inputs, using 3-pin 2.54mm headers for easy connection to a microcontroller.
The Vcc pin is left disconnected, as it is unnecessary for this application; only the GND and signal pins are connected.
Clear indicators for correct connector polarity are included to minimize the risk of incorrect connections.
The design includes 4-6 output connectors, each with 3-4 pins, suitable for handling up to 2A of current, ensuring robust performance under load.
Power Input: A 12V power input is provided using an XT60 connector. Verification is needed to confirm whether a female or male connector will be used for receiving power; however, a female connector is typically assumed for safety and compatibility.
Use Case Specifications: The design is specifically tailored to illuminate only the R and G channels of the LED strips, streamlining the system to meet specific operational requirements."

/>

<ProjectCard
src="/stm32 pic1.png"
src2="/stm32 pic3.png"
github="https://github.com/ahmed27037/stm32-bootcamp"
title="Embedded: Potentiometer to Servo Motor"
description="a project utilizing the STM32 microcontroller to control a motor based on input from a potentiometer. The primary objective was to read a potentiometer value ranging from 0 to 3.3V, convert it into a PWM (Pulse Width Modulation) signal, and use that signal to control the motor's speed and direction.

Key Tasks Completed:
Hardware Setup:

Integrated a potentiometer with an external ADC (Analog-to-Digital Converter) chip to convert the analog voltage from the potentiometer into a digital signal.
Established a connection between the ADC and the STM32 microcontroller using the Serial Peripheral Interface (SPI) protocol. This allowed for efficient data communication and ensured accurate readings of the potentiometer value.
Software Development:

Developed low-level software routines to configure the SPI settings, including clock polarity, phase, and data format, enabling reliable communication between the ADC and the STM32.
Implemented a timer (TIM) to generate a PWM signal based on the ADC readings. The PWM signal's duty cycle was dynamically adjusted according to the potentiometer value, allowing precise control over the motor's operation.
Testing and Validation:

Conducted extensive testing of the system to verify its functionality. This included checking the response of the motor to various potentiometer settings, ensuring smooth operation and accurate motor control.
The entire project was thoroughly reviewed by a lead engineer. Their feedback provided valuable insights and affirmed that the implementation met the project's requirements and expectations.
"
/>
      </div>

    </div>
  );
};

export default HardwareProjects;