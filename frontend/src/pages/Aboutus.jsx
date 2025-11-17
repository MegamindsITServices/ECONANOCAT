import React from 'react'
import { motion } from 'framer-motion';

const Aboutus = () => {
 return (
    <div className="w-full bg-[#d3cbbf] py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif font-bold tracking-wide mb-2">
            ABOUT US
          </h2>

          {/* Line */}
          <div className="w-full h-[2px] bg-black mb-6"></div>

          <p className="text-gray-800 leading-relaxed mb-6 font-semibold">
           Econanocat Pvt. Ltd. is a technology-driven company specializing in the development and manufacturing of advanced nanocatalysts, additives, and functional nanoparticles for emission control and performance enhancement. Founded with a vision to bridge nanotechnology and clean mobility, Econanocat focuses on innovative catalyst materials designed to reduce Nitrogen Oxides (NOx) and other harmful emissions from automotive and industrial sources.
  With deep expertise in nanomaterial engineering, surface modification, and catalytic reaction optimization, Econanocat delivers next-generation solutions that meet stringent environmental regulations while improving fuel efficiency and system durability. Our R&D and production facilities are equipped with state-of-the-art instruments for nano-synthesis, characterization, and performance validation — ensuring consistent quality and reliability.
   At Econanocat, we believe that sustainable innovation is the key to a cleaner and greener future. Through our continuous efforts in material science and catalytic technology, we aim to support the global transition toward low-emission and carbon-neutral transportation.
          </p>

          {/* Mission */}
          <h3 className="font-serif font-semibold text-xl mb-2">Mission</h3>
          <p className="text-gray-800 leading-relaxed mb-6 font-semibold">
            To develop and deliver high-performance nanocatalysts and functional 
            additives that enable cleaner combustion, reduced emissions, and 
            improved efficiency across automotive and industrial applications — 
            driving sustainability through nanotechnology innovation.
          </p>

          {/* Vision */}
          <h3 className="font-serif font-semibold text-xl mb-2">Vision</h3>
          <p className="text-gray-800 leading-relaxed font-semibold">
            To be a global leader in nanocatalytic and nanomaterial solutions that 
            empower industries to achieve zero-emission goals, foster sustainable 
            development, and create a healthier environment for future generations.
          </p>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col pt-7 "
        >
          <img
            src="/images/aboutimg1.png"
            alt="About"
            className="rounded-lg w-full object-cover shadow-lg"
          />

          <img
            src="/images/aboutimg2.png"
            alt="Catalyst Development"
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutus