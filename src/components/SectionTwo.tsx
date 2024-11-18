
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";



import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.webp'

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const SectionTwo = ()=>{
    const [swiper, setSwiper] = useState()
    const [active, setActive] = useState(1)

    const imgs = [
        { id:2,img:img2 },
        { id:3,img:img3 },
        { id:4,img:img4 },
        { id:5,img:img5 },
    ]

    const handlePrev = () => {
        swiper?.slidePrev()
    }

    const handleNext = () => {
        swiper?.slideNext()
    }
    const CustomNextArrow = ()=>(
        <button className='swiper-button-next'>
            <FaLongArrowAltRight />
        </button>
    )

    const CustomPrevArrow = ()=>(
        <button className='swiper-button-next'>
        <FaLongArrowAltLeft />
        </button>
    )
    return(

        <div className='p-20 ml-40'>
            <div>
                <div onClick={handlePrev} className="prev">
                <CustomPrevArrow/>
                </div>

                <span>
                    {active} / {imgs.length}
                </span>
                
                <div onClick={handleNext} className="next">
                    <CustomNextArrow></CustomNextArrow>
                </div>
            </div>
        <Swiper className="h-[500px] px-20 ml-40"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation = {{
            prevEl:".swiper-button-prev",
            nextEl:".swiper-button-next"
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={setSwiper}
        onSlideChange={(swipe) => {setActive(swipe.activeIndex+1)}}
      >
        {
            imgs.map((item)=>{
                return <div key = {item.id}>
                    <SwiperSlide><img className='h-full object-cover' src={item.img} alt="" /></SwiperSlide>
                </div>
            })
        }
      </Swiper>
        </div>
    )
}

export default SectionTwo;