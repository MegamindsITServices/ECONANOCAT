import React from 'react'

import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

const services = [
  {
    title: "Catalyst Development Services",
    subtitle: "NANO",
    image: "/images/catalyst.png",
   points: [
  "We specialize in the design, development, and optimization of advanced catalysts for a wide range of industrial applications.",
  "Hydroforming Catalysts – engineered for high selectivity and conversion efficiency in hydrogenation and reforming processes.",
  "Desulfurization Catalysts – developed to effectively remove sulfur compounds from fuels and feedstocks, ensuring cleaner emissions and environmental compliance.",
  "Oxidation Catalysts – tailored for efficient oxidation of hydrocarbons, VOCs, and other organic compounds to improve process efficiency and emission control.",
  "Reduction Catalysts – designed to enhance reduction reactions in chemical and environmental applications, including NOx abatement and metal recovery."
]

  },
  {
    title: "Catalytic Converter Restoration",
    subtitle: "Nox, Sox and Cox monitoring Services",
    image: "/images/converter.png",
   points: [
  "We offer state-of-the-art catalytic converter restoration services designed to recover and enhance catalyst performance, extend service life, and reduce replacement costs.",
  "Catalyst cleaning and regeneration to remove carbon, sulfur, and other contaminants.",
  "Reactivation of catalytic materials to restore optimal conversion efficiency.",
  "Characterization and performance testing using advanced instrumentation such as BET, XRD, SEM, TPR/TPO, and FTIR.",
  "Customized solutions for automotive and industrial catalytic converters to meet emission standards and improve process efficiency."
]

  },
  {
    title: "3D Printing Services",
    subtitle: "NANO",
    image: "/images/3dprinter.png",
  points: [
  "Accelerating catalyst design, prototyping, and performance optimization with advanced 3D printing technology.",
  "Customized catalyst structures including complex geometries, honeycomb monoliths, and porous supports for improved surface area and flow dynamics.",
  "Rapid prototyping and iterative testing to evaluate catalytic performance under real operating conditions.",
  "Material innovation with metallic, ceramic, and composite materials engineered for high-temperature catalytic reactions.",
  "Full scale-up support, enabling smooth transition from laboratory prototypes to industrial-scale catalyst modules."
]

  },
];

const Services = () => {
  return (
    <div className=" w-full bg-[#f5e6cf] py-20 px-6">
      <Helmet>
        <title>
          Econanocat Pvt. Ltd. | Nanocatalyst Development & Restoration Services
        </title>
        <meta
          name="description"
          content="Econanocat offers nanocatalyst development, NOx-SOx-COx monitoring, catalytic converter restoration, and advanced 3D printing services for industrial and automotive applications."
        />
        <meta
          name="keywords"
          content="nanocatalyst services, catalyst development, NOx monitoring, catalytic converter restoration, 3D printing catalysts"
        />
      </Helmet>

      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-serif font-bold mb-16"
      >
        Our Services
      </motion.h2>

      {/* Grid Container */}
      <div
        className="
          grid gap-12 
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          place-items-stretch
          mx-auto
        "
      >
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: idx * 0.18, ease: "easeOut" }}
            viewport={{ once: true }}
            // PREMIUM hover animations
            whileHover={{
              scale: 1.05,
              rotateX: 4,
              rotateY: -4,
              boxShadow:
                "0 25px 40px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.05)",
            }}
            className="relative p-[1px] rounded-2xl 
             bg-gradient-to-br from-[#d3c5b4] to-[#ffffff]
             hover:shadow-2xl transition duration-100
             h-full flex flex-col"
          >
            {/* Inner card */}
            <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
              {/* Floating Image Animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex justify-center mb-4"
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="h-40  transition-all duration-300 w-3/4"
                />
              </motion.div>

              {/* Subtitle */}
              <p className="text-center text-xs tracking-[0.3em] font-semibold text-gray-500">
                {svc.subtitle}
              </p>

              {/* Title */}
              <h3 className="text-center font-serif text-lg font-semibold my-3">
                {svc.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-4"></div>

              {/* Bullets */}
              <ul className="text-gray-700 text-sm space-y-2 leading-relaxed font-semibold flex-1">
                {svc.points.map((p, i) => (
                  <li key={i} className="list-disc list-inside">
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Glow Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4), transparent 70%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
  
}

export default Services