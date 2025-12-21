import React, { useEffect,useState} from 'react'
import Carousel from '../components/ui/carousel';
import ContactUs from './ContactUs';
import { Helmet } from 'react-helmet-async';



const PLACEHOLDER_IMAGES = [
  {
    id: 1,
    image:
      '/images/Screenshot 2025-11-14 215835.png',
    alt: 'Banner',
  },
  {
    id: 2,
    image:
      '/images/Banner-aim.png',
    alt: 'Banner',
  },
  {
    id: 3,
    image:
      '/images/Banner3.png',
    alt: 'Banner',
  },
  {
    id: 4,
    image:
      '/images/Web Banner - Research and Development - Nano material.png',
    alt: 'Banner',
  },
  {
    id: 5,
    image:
      '/images/Web Banner - Services - 3D printing.png',
    alt: 'Banner',
  },
  {
    id: 6,
    image:
      '/images/Web Banner - Services - Catalyst.png',
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
      <Helmet>
        <title>
          Econanocat Pvt. Ltd. | Nanocatalysts & Clean Mobility Solutions
        </title>
        <meta
          name="description"
          content="Econanocat Pvt. Ltd. is a technology-driven company specializing in advanced nanocatalysts, functional nanoparticles, and emission control solutions for clean and sustainable mobility."
        />
        <meta
          name="keywords"
          content="Econanocat, nanocatalysts, emission control, clean mobility, nanotechnology company India"
        />
      </Helmet>

      <section className="relative w-full">
        <Carousel
          images={carouselImages}
          interval={5000}
          className="w-full"
          aspectRatio="22 / 9"
          priority
          scrollControlled
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
                src="/images/AboutUs.png"
                alt="Team collaboration at ECONANOCAT"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 text-lg leading-[1.7] text-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">
                ECONANOCAT Pvt. Ltd.
              </h2>
              <p>
                Econanocat Pvt. Ltd. is a technology-driven company specializing
                in the development and manufacturing of advanced nanocatalysts,
                additives, and functional nanoparticles for emission control and
                performance enhancement
              </p>
              <h3 className="text-2xl font-bold text-gray-900 md:text-2xl">
                Mission
              </h3>
              <p>
                To develop and deliver high-performance nanocatalysts and
                functional additives that enable cleaner combustion, reduced
                emissions, and improved efficiency across automotive and
                industrial applications — driving sustainability through
                nanotechnology innovation.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 md:text-2xl">
                Vision
              </h3>
              <p>
                To be a global leader in nanocatalytic and nanomaterial
                solutions that empower industries to achieve zero-emission
                goals, foster sustainable development, and create a healthier
                environment for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Contact Us*/}
      <ContactUs />
    </div>
  );
};

export default Home;