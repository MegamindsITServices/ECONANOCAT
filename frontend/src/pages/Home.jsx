import React, { useEffect, useState } from 'react';
import Carousel from '../components/ui/carousel';

const PLACEHOLDER_IMAGES = [
  {
    id: 1,
    image:
      'https://eatanytime.in/cdn/shop/files/Desktop_View_28b67e87-641c-43ca-816b-5657b0b3eeba.png?v=1741242822&width=2000',
    alt: 'Premium organic snacks',
  },
  {
    id: 2,
    image:
      'https://eatanytime.in/cdn/shop/files/Desktop_View_6.png?v=1744192109&width=2000',
    alt: 'Healthy snack options',
  },
];

const FOLLOW_LINKS = [
  { label: "WhatsApp", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Products/Services", href: "#" },
  { label: "Contact Us", href: "#" },
];

const PRODUCT_LINKS = [
  { label: "Featured Products", href: "#" },
  { label: "Top Rated Products", href: "#" },
  { label: "Latest Products", href: "#" },
];

const Home = () => {
      const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    setCarouselImages(PLACEHOLDER_IMAGES);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <section className="relative w-full">
        <Carousel
          images={carouselImages}
          interval={5000}
          className="h-[50vh] w-full object-cover sm:h-[70vh] md:h-[80vh]"
          priority
        />
      </section>

      <section className="w-full bg-[#E6F6F3] py-20">
        <div className="flex w-full flex-col gap-12 px-2 md:px-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              About Us
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1280&q=80"
                alt="Team collaboration at ECNANOCAT"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 text-lg leading-[1.7] text-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">
              ECNANOCAT Pvt. Ltd.
            </h2>
              <p>
                Welcome to ECNANOCAT Pvt. Ltd., a trusted name in delivering
                innovative solutions and exceptional services. Established with
                a vision to create lasting value, we specialize in technology
                enabled growth and are committed to pushing the benchmarks of
                excellence.
              </p>
              <p>
                With a focus on quality, innovation, and customer satisfaction,
                we continuously strive to set new standards in our field. Our
                mission is simple: to empower organizations, enable progress,
                and make a meaningful difference in the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F6F6F6] py-16 md:py-20">
        <div className="px-2 md:px-10 space-y-12 ">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Contact Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-[0.6fr_1.1fr] gap-8">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex flex-col gap-6 rounded-3xl bg-[#D3EDE8] p-8 shadow-sm max-w-[480px] w-full"
            >
              <div className="flex flex-col gap-6">
                {[
                  { label: "Name", type: "text", placeholder: "Enter your name" },
                  { label: "Email", type: "email", placeholder: "Enter your work email" },
                  { label: "Company Name", type: "text", placeholder: "Enter your company name" },
                  { label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
                ].map(({ label, type, placeholder }) => (
                  <label key={label} className="flex flex-col gap-2 text-lg text-black">
                    <span className="font-medium">{label}</span>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="h-14 w-px-12  rounded-xl border border-[#D5D5D5] bg-[#F3F4F8] px-4 text-base text-gray-800 placeholder:text-gray-400 focus:border-[#14C77C] focus:outline-none focus:ring-2 focus:ring-[#A3EFD0]"
                    />
                  </label>
                ))}

                <label className="flex flex-col gap-2 text-lg text-black">
                  <span className="font-medium">Message / Info / Request</span>
                  <textarea
                    placeholder="Enter your message, information, or request here"
                    rows={4}
                    className="w-full rounded-xl border border-[#D5D5D5] bg-[#F3F4F8] px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-[#14C77C] focus:outline-none focus:ring-2 focus:ring-[#A3EFD0]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="h-[60px] w-full rounded-xl bg-gradient-to-r from-[#14C77C] to-[#A3EFD0] text-lg font-semibold text-white transition-transform hover:scale-[1.01]"
              >
                Submit
              </button>
            </form>

            <div className="flex flex-col gap-6">
              <div className="rounded-[24px] border border-black/10 bg-[#F3F4F8] p-6 shadow-sm md:p-8">
                <p className="text-lg leading-7 text-[#173126]">
                  We’d love to hear from you! Whether you have questions,
                  feedback, or business inquiries, our team is here to help.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#173126]">Get in touch</h3>
                    <div className="space-y-1 text-lg text-[#737373]">
                      <p>📞 +91-XXXXXXXXXX</p>
                      <p className="underline">
                        📧 info@ecnanocat.com / sales@ecnanocat.com
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#173126]">Business Hours</h3>
                    <p className="text-lg leading-7 text-[#737373]">
                      Monday – Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday: 10:00 AM – 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#173126]">Office Address</h3>
                    <p className="text-lg leading-7 text-[#737373]">
                      ECNANOCAT Pvt. Ltd.
                      <br />
                      123, Business Avenue,
                      <br />
                      City – State, ZIP Code, Country
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  title="ECNANOCAT office map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.567646921666!2d78.37326397512119!3d17.43068128344152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91168c9b6c27%3A0xcedcbe5d3794026d!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[234px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#D3EDE8] py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-12 lg:flex-row lg:gap-20">
          <div className="flex max-w-sm flex-col gap-6">
            <div className="h-[54px] w-[195px] rounded-lg bg-red-200 mix-blend-multiply" />
            <div>
              <h4 className="text-xl font-semibold text-gray-900">ECNANOCAT Pvt. Ltd.</h4>
              <p className="text-base text-gray-900">All Rights Reserved</p>
            </div>
            <div className="space-y-2 text-base leading-6 text-gray-900">
              <p>Address: 123 Business Avenue, City, State</p>
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Email: info@[company].com</p>
            </div>
          </div>

          <div className="grid flex-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-5">
              <h5 className="text-2xl font-semibold text-[#1B1C1E]">Follow Us On</h5>
              <ul className="space-y-4 text-lg text-[#1B1C1E]">
                {FOLLOW_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="flex items-center gap-2 hover:underline">
                      <span>➜</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h5 className="text-2xl font-semibold text-[#1B1C1E]">Quick Links</h5>
              <ul className="space-y-4 text-lg text-[#1B1C1E]">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h5 className="text-2xl font-semibold text-[#1B1C1E]">Products / Services</h5>
              <ul className="space-y-4 text-lg text-[#1B1C1E]">
                {PRODUCT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full bg-[#173126] py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-[#F3F4F8] md:flex-row md:px-12">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>©</span>
            <span>2025 Copyright</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;