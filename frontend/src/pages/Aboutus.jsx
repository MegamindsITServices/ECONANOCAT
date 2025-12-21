import React from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Aboutus = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>
          About Econanocat Pvt. Ltd. | Nanotechnology & Emission Control Experts
        </title>
        <meta
          name="description"
          content="Learn about Econanocat Pvt. Ltd., a nanotechnology-driven company developing advanced nanocatalysts and functional nanoparticles to reduce NOx and harmful emissions."
        />
        <meta
          name="keywords"
          content="About Econanocat, nanomaterial engineering, NOx reduction, catalytic technology, sustainable innovation"
        />
      </Helmet>

      {/* The background color from your snippet */}
      <div className="bg-[#c3bdab] p-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pr-0 md:pr-8"
        >
          {/* Header using the new specific font */}
          <h2 className="text-4xl md:text-5xl font-bodoni font tracking-tight mb-4 text-[#2c2c2c]">
            ABOUT US
          </h2>

          {/* Line */}
          <div className="w-full h-[1px] bg-black mb-8 opacity-80"></div>

          {/* Main Description - Using serif to match the screenshot's body text */}
          <p className="text-[#1a1a1a] leading-relaxed mb-8 font-serif text-lg opacity-90 text-justify">
            Econanocat Pvt. Ltd. is a technology-driven company specializing in
            the development and manufacturing of advanced nanocatalysts,
            additives, and functional nanoparticles for emission control and
            performance enhancement. Founded with a vision to bridge
            nanotechnology and clean mobility, Econanocat focuses on innovative
            catalyst materials designed to reduce Nitrogen Oxides (NOx) and
            other harmful emissions from automotive and industrial sources.
            <br />
            <br />
            With deep expertise in nanomaterial engineering, surface
            modification, and catalytic reaction optimization, Econanocat
            delivers next-generation solutions that meet stringent environmental
            regulations while improving fuel efficiency and system durability.
            Our R&D and production facilities are equipped with state-of-the-art
            instruments for nano-synthesis, characterization, and performance
            validation — ensuring consistent quality and reliability.
            <br />
            <br />
            At Econanocat, we believe that sustainable innovation is the key to
            a cleaner and greener future. Through our continuous efforts in
            material science and catalytic technology, we aim to support the
            global transition toward low-emission and carbon-neutral
            transportation.
          </p>

          {/* Mission */}
          <h3 className="font-bodoni font-bold text-2xl mb-2 text-[#1a1a1a]">
            Mission
          </h3>
          <p className="text-[#1a1a1a] leading-relaxed mb-6 font-serif text-lg opacity-90 text-justify">
            To develop and deliver high-performance nanocatalysts and functional
            additives that enable cleaner combustion, reduced emissions, and
            improved efficiency across automotive and industrial applications —
            driving sustainability through nanotechnology innovation.
          </p>

          {/* Vision */}
          <h3 className="font-bodoni font-bold text-2xl mb-2 text-[#1a1a1a]">
            Vision
          </h3>
          <p className="text-[#1a1a1a] leading-relaxed font-serif text-lg opacity-90 text-justify">
            To be a global leader in nanocatalytic and nanomaterial solutions
            that empower industries to achieve zero-emission goals, foster
            sustainable development, and create a healthier environment for
            future generations.
          </p>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Note: Make sure these images exist in your public/images folder */}
          <img
            src="/images/aboutimg1.png"
            alt="About Econanocat"
            className="rounded-sm w-full object-cover shadow-xl border border-gray-400/20"
          />

          <img
            src="/images/aboutimg2.png"
            alt="Catalyst Development"
            className="rounded-sm w-full object-cover shadow-xl border border-gray-400/20"
          />
        </motion.div>
      </div>

      {/* TEAM SECTION */}
      <section className="bg-[#212121] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bodoni tracking-wide">Our Team</h2>
            <div className="mx-auto mt-4 h-px w-full max-w-xs bg-white opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-1">
            {/* Team Member */}
            <div className="flex flex-col items-center group">
              <div className="mb-4 h-[400px] w-[300px] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop"
                  alt="Dr. P. Santhana Krishnan"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-bodoni">Dr. P. Santhana Krishnan</h3>

              <p className="font-sans text-xs font-bold tracking-[0.2em] mt-2 text-gray-400">
                FOUNDER & FORMER RESEARCH PROFESSOR @ PUKYONG NATIONAL
                UNIVERSITY, SOUTH KOREA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus