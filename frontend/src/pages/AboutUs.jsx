import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#c3bdab] font-serif">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-8 text-[#3A3A3A]">
            <h1 className="font-serif text-5xl font-normal tracking-[0.2em] text-gray-800">
              ABOUT US
            </h1>
            <div className="w-100 border-b-2 border-black-400"></div>
            <p className="font-serif text-lg leading-relaxed">
                Econanocat Pvt. Ltd. is a technology-driven company specializing in the development and manufacturing of advanced nanocatalysts, additives, and functional nanoparticles for emission control and performance enhancement. Founded with a vision to bridge nanotechnology and clean mobility, Econanocat focuses on innovative catalyst materials designed to reduce Nitrogen Oxides (NOx) and other harmful emissions from automotive and industrial sources.
            </p>
            <p className="font-serif text-lg leading-relaxed">
                With deep expertise in nanomaterial engineering, surface modification, and catalytic reaction optimization, Econanocat delivers next-generation solutions that meet stringent environmental regulations while improving fuel efficiency and system durability. Our R&D and production facilities are equipped with state-of-the-art instruments for nano-synthesis, characterization, and performance validation — ensuring consistent quality and reliability.
            </p>
            <p className="font-serif text-lg leading-relaxed">
                At Econanocat, we believe that sustainable innovation is the key to a cleaner and greener future. Through our continuous efforts in material science and catalytic technology, we aim to support the global transition toward low-emission and carbon-neutral transportation.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="text-lg leading-relaxed">
                To develop and deliver high-performance nanocatalysts and functional additives that enable cleaner combustion, reduced emissions, and improved efficiency across automotive and industrial applications — driving sustainability through nanotechnology innovation.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Vision</h2>
              <p className="text-lg leading-relaxed">
                To be a global leader in nanocatalytic and nanomaterial solutions that empower industries to achieve zero-emission goals, foster sustainable development, and create a healthier environment for future generations.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex h-full flex-col items-center justify-center gap-4">
            
              <img
                src="../public/Screenshot 2025-11-14 221038.png"
                alt="3D printer with catalyst development services logo"
                className="h-auto w-full rounded-lg"
              />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;