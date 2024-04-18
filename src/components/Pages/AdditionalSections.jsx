// AdditionalSections.js
import React from 'react';

import { UtilityPole } from 'lucide-react';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8); /* Adjust transparency as needed */
  backdrop-filter: blur(10px); /* Adjust blur intensity as needed */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const testimonials = [
  { id: 1, quote: "iGraphixs exceeded our expectations! Their logo perfectly captures the essence of our brand.", author: "John Doe", position: "CEO of ABC Company" },
  { id: 2, quote: "Working with iGraphixs was a breeze. They understood our vision and delivered exceptional results.", author: "Jane Smith", position: "Marketing Director of XYZ Inc." },
  { id: 3, quote: "iGraphixs truly impressed us with their creativity and professionalism. Their designs are spot-on and reflect our brand identity flawlessly.", author: "David Johnson", position: "Founder & CEO of DEF Corporation" },
  { id: 4, quote: "Choosing iGraphixs was one of the best decisions we made for our branding. Their team is highly skilled, responsive, and a pleasure to work with.", author: "Emily Brown", position: "Chief Operating Officer at LMN Enterprises" },
  { id: 5, quote: "We were amazed by iGraphixs' ability to translate our ideas into visually stunning designs. They are dedicated professionals who go above and beyond to deliver excellence.", author: "Michael Wilson", position: "Creative Director of PQR Innovations" },
  { id: 6, quote: "iGraphixs exceeded our expectations in every way. Their attention to detail and commitment to quality set them apart. We're thrilled with the results.", author: "Sarah Johnson", position: "Founder of RST Solutions" },
  { id: 7, quote: "Working with iGraphixs was a seamless experience from start to finish. Their team is incredibly talented and their designs have made a significant impact on our brand's image.", author: "Alex Martinez", position: "Head of Marketing at UVW Corporation" },
  { id: 8, quote: "iGraphixs has a remarkable ability to capture the essence of a brand and translate it into captivating visuals. We couldn't be happier with the outcome of our collaboration.", author: "Daniel Lee", position: "CEO of GHI Group" }
  
];
export function Testimonials() {
  const settings = {
    // Slider settings
  };

  return (
    <>
      <style>
        {`
          .testimonial-card {
            background: rgba(255, 255, 255, 0.8); /* Adjust transparency as needed */
            backdrop-filter: blur(10px); /* Adjust blur intensity as needed */
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">What Our Clients Say</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} className="testimonial-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
                <cite className="block font-semibold not-italic">{testimonial.author}, {testimonial.position}</cite>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
export function CustomizationOptions() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Customization Options</h2>
    </section>
  );
}

export function FAQs({ faqItems }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">FAQs</h2>
      {faqItems.map(faq => (
        <div key={faq.id} className="mb-4">
          <h3 className="text-xl font-semibold">{faq.question}</h3>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}



export function ImageGallery() {
  const images = [
    { src: "/mountains-1.jpg", transform: "scale-110 -rotate-6" },
    { src: "/mountains-2.jpg", transform: "scale-75 rotate-6 translate-x-2 translate-y-15" },
    { src: "/mountains-3.jpg", transform: "scale-150 translate-y-11" },
    { src: "/mountains-4.jpg", transform: "translate-y-24" },
    { src: "/mountains-5.jpg", transform: "translate-x-20 translate-y-4" }
  ];

  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div key={index} className={`transform ${image.transform}`}>
          <img src={image.src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
export function Title(){
  return (
    <>
    <div>
    <h1 className="text-4xl font-bold mb-8 text-center "> Logo Creation </h1>
    </div>
    </>
  )
}
export function GetStarted() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
    </section>
  );
}

export function OurTeam() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
    </section>
  );
}



export function WhyChoose() {
  // Animation settings for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1, // Restored larger scale effect for larger screens
      rotateY: 10, // Restored rotation for larger screens
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-purple-500 to-blue-500 py-8 text-white"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-6">Why Choose Us?</h2> {/* Responsive font size */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
          {['Innovation', 'Reliability', 'Support', 'Expertise', 'Quality', 'Efficiency', 'Value', 'Commitment', 'Innovation'].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-3 shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-blur-sm cursor-pointer" // Responsive padding
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <h3 className="text-xl md:text-lg font-semibold mb-2">{item}</h3> {/* Responsive heading size */}
              <p className="text-base md:text-sm">{`We lead in ${item.toLowerCase()}, pushing the boundaries of what's possible.`}</p> {/* Responsive paragraph text */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}