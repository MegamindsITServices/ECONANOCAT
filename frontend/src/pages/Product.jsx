import React from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Product = () => {
 const products = [
    {
      image: "/images/product1.png",
      title: "Products are high surface area silica materials such as",
      points: ["KITS", "MCM41", "SBA-15"],
    },
    {
      image: "/images/metal-organic.jpg", 
      title: "Metal Organic Frameworks",
      points: [
        "ZIF",
        "MIL",
        "MOF",
        "BTC",
        "UiO etc.",
      ],
    },
    {
      image: "/images/mesoporous-silica.png", // Ensure this image exists
      title: "Mesoporous Silicas",
      points: [
        "MCMs (MCM-41, MCM-50 etc.)",
        "SBAs (SBA-15, SBA-16 etc.)",
        "KITs (KIT-6, KIT-5, KIT-4 etc.)",
      ],
    },
    {
      image: "/images/product2.png",
      title: "Nano-sized Metal oxides and metals",
      points: [
        "Nano TiO2",
        "Nano alumina",
        "Nano Feoxides and cerium oxides",
        "Nano copper",
        "Nano nickel",
        "Nano gold",
      ],
    },
    {
      image: "/images/product3.png",
      title: "Mono & poly dispersed supported nanometals and its oxides and single atom metal catalysts",
      points: [
        "Pt",
        "Cu",
        "Mn",
        "Mo",
        "Ni",
        "Au",
        "Ag",
        "On supports like silica, alumina, Titania and Zirconia, Carbon and ceramic mateirals etc .",
      ],
    },
    {
    image: "/images/clays.avif",
    title: "Clays",
    points: [
      "Synthetic Laponite",
      "Montmorillonite",
      "Kaolin",
      "Kaolinite",
      "Zeolite",
      "Bentonite",
      "Saponite",
      "Mordenite and it's Organoclays etc."
    ],
  },
  {
      image: "/images/carbon.webp", // Ensure this image exists
      title: "Carbons",
      points: [
        "Activated Carbon",
        "Carbon black",
        "Carbon nanotubes",
        "Graphene oxide",
        "Graphite",
        "Mesoporous Carbon",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#f4f0e8] py-14 px-6">
      <Helmet>
        <title>
          Nanocatalyst & Nanomaterial Products | Econanocat Pvt. Ltd.
        </title>
        <meta
          name="description"
          content="Explore Econanocat’s advanced nanomaterials including mesoporous silicas, metal organic frameworks, nano metal oxides, supported nanometals, clays, zeolites, and carbon materials."
        />
        <meta
          name="keywords"
          content="nanocatalyst products, mesoporous silica, MOF, nano metal oxides, zeolites, activated carbon, Econanocat products"
        />
      </Helmet>

      {/* ================== TITLE ================== */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-4xl font-serif font-bold"
      >
        PRODUCTS
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "160px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-[1px] bg-gray-400 mx-auto my-4"
      ></motion.div>

      {/* ================== PRODUCT GRID ================== */}
      <div
        className="
          grid gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          place-items-stretch
          max-w-7xl mx-auto
          mt-10
        "
      >
        {products.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.05)",
            }}
            className="bg-white border rounded-xl p-6 w-full max-w-sm shadow-sm 
                      transition-all duration-300 h-full flex flex-col"
          >
            {/* Floating image animation */}
            <motion.img
              src={p.image}
              alt={p.title}
              className="h-40 object-contain mx-auto mb-4"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <h3 className="font-serif text-lg font-semibold mb-3 text-center">
              {p.title}
            </h3>

            <ul className="text-gray-700 text-sm space-y-1 leading-relaxed flex-1">
              {p.points.map((pt, i) => (
                <li key={i} className="list-disc list-inside font-semibold">
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ================== BOTTOM SECTION (IMAGE + TEXT) ================== */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/atom.png"
            className="w-[90%] rounded-lg shadow-md object-cover"
            alt="Atom illustration"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* RIGHT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold mb-4 "
          >
            We take care of our clients <br /> and our people.
          </motion.h3>

          <div className=" w-90 h-[2px] bg-black mb-4 "></div>

          {/* Image */}
          <motion.img
            src="/images/rightImg.png"
            className="w-[100%] rounded-lg shadow-md object-cover mb-2 relative"
            alt="Image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed font-semibold"
          >
            At Econanocat, we believe that sustainable innovation is the key to
            a cleaner and greener future. Through our continuous efforts in
            material science and catalytic technology, we aim to support the
            global transition toward low-emission and carbon-neutral
            transportation.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
  
}

export default Product