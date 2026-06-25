import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/Images/hero1.png",
  "/Images/hero2.png",
  "/Images/hero3.png",
  "/Images/hero4.png",
];

export default function Hero() {
  return (
    <section className="hero">

      {/* Decorative Blobs */}

      <div className="floating-shape one"></div>
      <div className="floating-shape two"></div>
      <div className="floating-shape three"></div>
      <div className="floating-shape four"></div>
      {/* Hero Content */}

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Up Your Skills
          <br />
          To Advance Your
          <br />
          Career Path
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Search your preferred course and start learning with Xebia LMS.
        </motion.p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search courses..."
          />
          <button>Search</button>
        </div>

      </div>

      {/* Image Slider */}

      <div className="slider-container">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="hero-slider"
        >
          {slides.map((image, index) => (

            <SwiperSlide key={index}>

              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />

            </SwiperSlide>

          ))}
        </Swiper>

      </div>

    </section>
  );
}