import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PinScrubAnimation = () => {
  useEffect(() => {
    // ScrollTrigger kullanarak animasyonu başlat
    gsap.to(".animated-element", {
      scrollTrigger: {
        trigger: ".scroll-container",    // Animasyonun tetikleneceği konteyner
        start: "top top",                // Başlangıç noktasını belirler
        end: "bottom top",               // Bitiş noktasını belirler
        scrub: true,                     // Scrub animasyonu aktif et
        pin: true,                       // Elemanı sabitle
        markers: true,                   // Animasyon başlangıcı ve bitişini görmek için işaretler
      },
      opacity: 1,                         // Opaklık animasyonu
      y: 100,                             // Y ekseninde hareket
      duration: 1,                        // Animasyon süresi
    });
  }, []);

  return (
    <div className="scroll-container" style={{ height: "200vh", backgroundColor: "#f4f4f4" }}>
      <div className="animated-element" style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#ff6347",
        opacity: 0, 
        margin: "50px auto"
      }}>
        Animasyon Başladı
      </div>
    </div>
  );
};

export default PinScrubAnimation;
