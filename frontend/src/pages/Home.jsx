import React, { useEffect,useState} from 'react'
import { Link } from "react-router-dom";

import axiosInstance from '../services/axiosInstance';
import Carousel from '../components/ui/carousel';
import { motion } from 'framer-motion';
const Home = () => {
      const [carouselImages, setCarouselImages] = useState([]);

    const fetchBanners = async () => {
        // try {
        //      const response = await axiosInstance.get('/api/banner/get-banner');
        //     if (response.data.success && response.data.banners?.length > 0) {
        //         const bannerImages = response.data.banners.map((banner, index) => ({
        //             id: banner._id,
        //             image: getBannerImageUrl(banner.bannerImage),
        //             link: banner.linkUrl,
        //             alt: banner.altText || `Banner slide ${index + 1}`
        //         }));
        //         setCarouselImages(bannerImages);
        //     } else {
        //         // Fallback images
        //         setCarouselImages([
        //             { id: 1, image: "https://eatanytime.in/cdn/shop/files/Desktop_View_28b67e87-641c-43ca-816b-5657b0b3eeba.png?v=1741242822&width=2000", alt: "Premium organic snacks" },
        //             { id: 2, image: "https://eatanytime.in/cdn/shop/files/Desktop_View_6.png?v=1744192109&width=2000", alt: "Healthy snack options" },
        //         ]);
        //     }
        // } catch (error) {
        //     console.error("Error fetching banner images:", error);
        // }

          setCarouselImages([
                    { id: 1, image: "https://eatanytime.in/cdn/shop/files/Desktop_View_28b67e87-641c-43ca-816b-5657b0b3eeba.png?v=1741242822&width=2000", alt: "Premium organic snacks" },
                    { id: 2, image: "https://eatanytime.in/cdn/shop/files/Desktop_View_6.png?v=1744192109&width=2000", alt: "Healthy snack options" },
                ]);
    };
    useEffect(() => {
        fetchBanners();
    },[]);

    console.log("Images ",carouselImages);
  return (
    <div className='flex flex-col min-h-screen'>
     <section className="relative w-full">
                <Carousel images={carouselImages} interval={5000} className="h-[50vh] sm:h-[70vh] md:h-[80vh] w-full object-cover" priority={true} />
     </section>

    
   

    </div>
  )
}

export default Home