
import React, { useEffect,useState} from 'react'
import axiosInstance from '../services/axiosInstance';
import Carousel from '../components/ui/carousel';



const PLACEHOLDER_IMAGES = [
  {
    id: 1,
    image:
      '/images/Screenshot 2025-11-14 215835.png',
    alt: 'Banner',
  }
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
          className="w-full aspect-[16/11] sm:aspect-[21/8]"
          priority
        />
      </section>

      <section className="relative w-full">
        <img
          src="/images/image.png"
          className="h-full w-full object-cover"
        />
      </section>

      {/*About Us*/}
      <section className="max-w-8xl bg-[#E6F6F3] py-20">
        <div className="flex w-full flex-col gap-12 px-2 md:px-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              About Us
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/aboutimg2.png"
                alt="Team collaboration at ECNANOCAT"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 text-lg leading-[1.7] text-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">
                ECNANOCAT Pvt. Ltd.
              </h2>
              <p>
                Econanocat Pvt. Ltd. is a technology-driven
                company specializing in the development and
                manufacturing of advanced nanocatalysts, additives,
                and functional nanoparticles for emission control
                and performance enhancement
              </p>
              <h3 className='text-2xl font-bold text-gray-900 md:text-2xl'>Mission</h3>
              <p>
                 To develop and deliver high-performance
                  nanocatalysts and functional additives that enable
                  cleaner combustion, reduced emissions, and
                  improved efficiency across automotive and
                  industrial applications — driving sustainability
                  through nanotechnology innovation.
              </p>
              <h3 className='text-2xl font-bold text-gray-900 md:text-2xl'>Vision</h3>
              <p>
                To be a global leader in nanocatalytic and
                nanomaterial solutions that empower industries to
                achieve zero-emission goals, foster sustainable
                development, and create a healthier environment for
                future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Our Team*/}
      <section className="bg-[#212121] py-20 font-serif text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-5xl">Our Team</h2>
            <div className="mx-auto mt-4 h-px w-full max-w-md bg-white"></div>
          </div>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-[400px] w-[300px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Santhana Krishnan"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl">Dr. Santhana Krishnan</h3>
              <p className="font-sans text-sm font-bold tracking-widest">FOUNDER</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-[400px] w-[300px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Santhana Krishnan"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl">Dr. Preethi</h3>
              <p className="font-sans text-sm font-bold tracking-widest">TECHNICAL ADVISER</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-[400px] w-[300px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Santhana Krishnan"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl">Yves Dunne</h3>
              <p className="font-sans text-sm font-bold tracking-widest">SENIOR HAIR STYLIST</p>
            </div>
          </div>
        </div>
      </section>

      {/*Our Services*/}

      {/*Our Products*/}

      {/*Take care*/}

      {/*Contact Us*/}
      <section className="max-w-8xl bg-[#F6F6F6] py-16 md:py-20">
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

    
   

    </div>
  );
};

export default Home;