"use client";

import AnimatedCarousel from "@/components/AnimatedCarousel.jsx";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import GlowBorderButton from "@/components/MovingBorder";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  
const sliderImages = [
  {
    id: 1,
    src: '/images/antonino-visalli-RNiBLy7aHck-unsplash.jpg',
    caption: 'Epic Fantasy World'
  },
  {
    id: 2,
    src: '/images/bruce-mars-8YG31Xn4dSw-unsplash.jpg',
    caption: 'Cyberpunk Metropolis'
  },
  {
    id: 3,
    src: '/images/dimitar-krastev-19lY7FMfWlo-unsplash.jpg',
    caption: 'Hyperrealistic Portrait'
  },
  {
    id: 4,
    src: '/images/helena-lopes-PGnqT0rXWLs-unsplash.jpg',
    caption: 'Abstract Dreams'
  },
  {
    id: 5,
    src: '/images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg',
    caption: 'Abstract Dreams'
  },
  {
    id: 6,
    src: '/images/simi-iluyomade-tvbxqXI5mmo-unsplash.jpg',
    caption: 'Abstract Dreams'
  }
];
  return (
    <div className="bg-black text-white flex items-center justify-center flex-col text-center py-20">
      <div className="p-10 py-16 gap-12 flex flex-col justify-center items-center">
        <div>
          <AnimatedWrapper animation="scale" delay={0.2}>
          <h1 className=" text-6xl pb-5">Create Stunning Images <br /> with Just a Prompt</h1>
          </AnimatedWrapper>
          <h4 className="text-md text-gray-400">Turn your ideas into high-quality visuals in seconds, <br /> no design skills needed.</h4>
        </div>
        <div>
          <AnimatedWrapper animation="slide-up" delay={0.8}>
          <GlowBorderButton>
            <p>Generate Image</p>
            <FaArrowRight size={12}/>
          </GlowBorderButton>
      </AnimatedWrapper>

            
        </div>
      </div>
      <div className="py-5 w-[1200px]">
        <AnimatedCarousel 
          images={sliderImages}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          showArrows={true}
          slideDuration={0.3}
        />
      </div>
      <div className="flex justify-between items-center gap-28 py-5 mt-10">
        <div>
          <AnimatedWrapper  animation="fade" delay={0.4}>
          <h3 className="text-xl pb-3">Lightining Fast <br /> Image Generation</h3>
          <p className="text-xs text-gray-400">Type what you imagine, hit enter, and watch AI bring it <br /> to life in moments.</p>
        </AnimatedWrapper>
        </div>
        <div>
          <AnimatedWrapper  animation="fade" delay={0.4}>
          <h3 className="text-xl pb-3">Multiple Styles <br />& Customization</h3>
          <p className="text-xs text-gray-400">Pick a style and fine-tune details like color, lighting, and <br /> mood.</p>
        </AnimatedWrapper></div>
        <div>
          <AnimatedWrapper  animation="fade" delay={0.4}>
          <h3 className="text-xl pb-3">High-Resolution <br /> Downloads</h3>
          <p className="text-xs text-gray-400">Export your creations in high-quality resolution for print, <br /> web, or social media.</p>
        </AnimatedWrapper></div>
      </div>
    </div>
  );
}
