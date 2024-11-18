
import { useLayoutEffect, useRef } from 'react'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.webp'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const Image = ()=>{

    const container = useRef()
    const panel = useRef([])
    panel.current = []
    
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
           
            ScrollTrigger.defaults({
                toggleActions:"restart pause resume pause",
                scroller: container.current
            })

            console.log(panel.current)

            gsap.utils.toArray(panel.current).forEach((item)=>{
                gsap.from(item,{
                    x:400,
                    duration:3,
                    scrollTrigger:{
                        trigger:item,
                        toggleActions:"play reverse play reverse",

                    }
                })
            })

        })
       
        return ()=>ctx.revert();
       
    })
    const imgs = [
        { id:2,img:img2 },
        { id:3,img:img3 },
        { id:4,img:img4 },
        { id:5,img:img5 },
        { id:6,img:img2 },
        { id:7,img:img3 },
        { id:8,img:img4 },
        { id:9,img:img5 },
    ]

    const adding = (el)=>{
        if(el && !panel.current.includes(el)){
            panel.current.push(el)
        }
    }


    return (
    
        <div ref={container}>
            {
                 imgs.map((item)=>{
                    return <div ref={adding(this)} key = {item.id} className='h-screen'>
                        <img  className='h-[300px] object-cover w-[300px] image' src={item.img} alt="" />
                    </div>
                })
            }
        </div>
    )
}

export default Image;