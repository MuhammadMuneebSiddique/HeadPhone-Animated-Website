import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useEffect, useRef } from 'react'
import { Features, ProductDetails } from '../../constants'

export const HeroSection = ({corde,setCorde}) => {
    const headRef = useRef(null)

    useGSAP(()=>{
        // Main Heading 
        if (headRef.current){
            const headText = new SplitText(headRef.current,{type:"chars"})
            headText.chars.map((elem,index)=>{
                if (index%2 == 0){
                    gsap.from(elem,{
                    left:`-10rem`,
                    top:`-10rem`,
                    duration:2,
                    opacity:0,
                    rotate:`-90deg`,
                    ease:"elastic.out(1,0.4)"
                })
                }else{
                    gsap.from(elem,{
                        left:`10rem`,
                        top:`10rem`,
                        duration:2,
                        opacity:0,
                        rotate:`90deg`,
                        ease:"elastic.out(1,0.4)"
                    })
                }
            })
        }
    },[])
    

    const divRef = useRef(null)
    useEffect(()=>{
        const rect = divRef.current.getBoundingClientRect()
        const container_height = rect.height
        setCorde(prev => {
            if(prev.first_height != container_height){
                return {...prev, first_height:container_height}
            }
            return prev
        })
    },[corde])


  return (
    <section ref={divRef} className='w-full h-screen relative'>
        <div className='h-full overflow-hidden flex-center'>
            <h1 ref={headRef} className='text-[13rem]/50 md:text-[18rem]/65 h-[35rem] wrap-break-word uppercase font-Outfit text-center font-bold text-primary'>Modern <br /> Harmony</h1>
        </div>
        <img id='headphone' className='w-[70%]  s2:w-[36%] abs-center z-30' src="/images/brown.png" alt="image" />
    </section>
  )
} 

export const FeaturesSection1 = ({corde,setCorde}) => {

    const divRef = useRef()
    const containerRef = useRef()
    useEffect(()=>{
        const rect1 = divRef.current.getBoundingClientRect()
        const container_height = containerRef.current.getBoundingClientRect().height
        const y = divRef.current.offsetTop + (rect1.height / 2)
        const x = divRef.current.offsetLeft + (rect1.width / 2)
        setCorde((prev)=>{
            if(prev.location_Y_1 != prev.first_height+y){
                return {...prev , location_Y_1:prev.first_height+y}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.location_X_1 != x){
                return {...prev , location_X_1:x}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.second_height != prev.first_height+container_height){
                return {...prev , second_height:prev.first_height+container_height}
            }
            return prev
        })
    },[corde])


  return (
    <>
    <section ref={containerRef} className='features-1 w-full bg-bg py-24 flexcol-center items-start gap-40 px-19 md:px-32 relative'>
        <div className='features-container flex flex-col s2:flex-row  w-full h-full'>
            <div className='w-full s2:w-[50%] flexcol-center gap-14 items-start'>
                <h2 className='text-[10rem]/40 font-extrabold uppercase text-primary '>true <br /> carity</h2>
                <p className='text-4xl font-medium text-[#373636]'>Engineered for clarity, comfort, and immersive sound — Audira redefines your listening experience with style and performance in perfect harmony.</p>
                <button className='capitalize text-4xl px-10 py-5 bg-black text-white font-medium rounded-2xl'>Buy Now</button>
            </div>
            <div ref={divRef} className='h-[50vh] s2:w-[50%]'>
                <h2></h2>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6'>
            {Features.map((elem)=>{
                return(
                    <div key={elem.key} className='w-full h-50 p-8 flexcol-center items-start gap-4 rounded-2xl border-2 border-black'>
                        <h2 className='uppercase text-[2.5rem] lg:text-4xl text-black font-bold'>{elem.title}</h2>
                        <p className='text-[1.8rem] lg:text-3xl font-medium text-[#373636]'>{elem.description}</p>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export const FeaturesSection2 = ({corde,setCorde}) => {
    useGSAP(()=>{
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:".features-2",
                scroller:"body",
                start:"0% 90%",
                end:"20% 70%",
                // markers:true,
                scrub:2,
            }
        })
        tl.from("#masterbeat",{
            y:200,
            opacity:0
        })
    },[])


    const divRef1 = useRef()
    const divRef2 = useRef()
    const containerRef = useRef()
    useEffect(()=>{
        const rect1 = divRef1.current.getBoundingClientRect()
        const container_height = containerRef.current.getBoundingClientRect().height
        const y1 = divRef1.current.offsetTop + (rect1.height / 2)
        const x1 = divRef1.current.offsetLeft + (rect1.width / 2)
        // console.log(divRef1.current.offsetTop)
        // console.log(rect1.height)
        // console.log(y1)
        console.log(x1)
        setCorde((prev)=>{
            if(prev.location_Y_2 != prev.second_height+y1){
                return {...prev , location_Y_2:prev.second_height+y1}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.location_X_2 != x1){
                return {...prev , location_X_2:x1}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.third_height != prev.second_height+container_height){
                return {...prev , third_height:prev.second_height+container_height}
            }
            return prev
        })

        const rect2 = divRef2.current.getBoundingClientRect()
        const y2 = divRef2.current.offsetTop + (rect2.height /2)
        const x2 = divRef2.current.offsetLeft + (rect2.width / 2)
        setCorde((prev)=>{
            if(prev.location_Y_3 != prev.second_height+y2){
                return {...prev , location_Y_3:prev.second_height+y2}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.location_X_3 != x2){
                return {...prev , location_X_3:x2}
            }
            return prev
        })
    },[corde])

    return(
        <section ref={containerRef} className='features-2 w-full flex flex-col  gap-28 py-24 bg-bg px-19 md:px-32 relative'>
        <div className='w-full h-fit'>
            <h2 id='masterbeat' className='text-[10rem]/40 s1:text-[12rem]/40 s2:text-[14rem]/40 md:text-[17rem]/40 lg:text-[19rem]/70 text-center text-primary font-extrabold uppercase w-full'>masterbeat</h2>
        </div>
        <div className='flex flex-col gap-4 s2:flex-row'> 
            <div className='rounded-3xl w-full h-[50vh] s2:w-[50%] overflow-hidden'>
                <video className='w-full h-full s2:h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[45rem]' autoPlay loop muted playsInline src="/images/video.mp4"/>
            </div>
            <div ref={divRef1} className='w-full h-[50vh] s2:h-[50vh] s2:w-[50%] text-bg'>hhdfd</div>
        </div>
        <div className='features-item flex flex-col-reverse w-full h-fit s2:flex-row'>
            <div ref={divRef2} className='w-full h-[30vh] s2:h-[25vh] s2:w-[50%] text-bg'><h2>bhhfhfhd</h2></div>
            <div className='w-full s2:w-[50%] h-fit text-[#373636]'>
                <p className='text-3xl  md:text-4xl py-2'>Crafted for the modern audiophile, Audira headphones deliver sound so rich, it pulses through your senses. From crisp highs to deep, rolling bass—you don’t just hear it, you feel it.</p>
                <p className='text-3xl  md:text-4xl py-2'>Whether you're in focus mode or free flow, the precision-tuned audio adapts to your pace. With Masterbeat, music becomes your personal soundtrack—bold, immersive, unforgettable.</p>
            </div>
        </div>
        </section>
    )

}

export const ImageSection = ({corde,setCorde}) => {

    const divRef = useRef()
    const containerRef = useRef()
    useEffect(()=>{
        const rect = divRef.current.getBoundingClientRect()
        const container_height = containerRef.current.getBoundingClientRect().height
        const y = divRef.current.offsetTop + (rect.height / 2)
        const x = divRef.current.offsetLeft + (rect.width / 2)
        setCorde((prev)=>{
            if(prev.location_Y_4 != prev.third_height+y){
                return {...prev , location_Y_4:prev.third_height+y}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.location_X_4 != x){
                return {...prev , location_X_4:x}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.four_height != prev.third_height+container_height){
                return {...prev , four_height:prev.third_height+container_height}
            }
            return prev
        })
    },[corde])

    useGSAP(()=>{
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:".image-section",
                scroller:"body",
                start:"10% 90%",
                end:"50% 50%",
                // markers:true,
                scrub:2,
            }
        })
        tl.from(".img",{
            scale:0,
            opacity:0
        })
    },[])

    return(
        <section ref={containerRef} className='image-section w-full px-19 py-20 bg-bg md:px-32 relative'>
            <div className='flex justify-start'>
                <div className='img flex justify-start rounded-3xl p-6 bg-white overflow-hidden rotate-12'>
                    <img className='w-[25rem]' src="/images/img1.jpeg" alt="image-1" />
                </div>
            </div>
            <div ref={divRef} className='flex justify-end'>
                <div className='img flex justify-end rounded-3xl p-6 bg-white overflow-hidden rotate-[-20deg]'>
                    <img className='w-[45rem]' src="/images/img3.jpeg" alt="image-2" />
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='img p-6 bg-white rounded-3xl rotate-[-10deg] overflow-hidden'>
                    <img className='w-[35rem]' src="/images/img2.jpeg" alt="image-3" />
                </div>
            </div>
        </section>
    )
}

export const Product = ({corde,setCorde}) => {

    const divRef = useRef()
    useEffect(()=>{
        const rect = divRef.current.getBoundingClientRect()
        const y = divRef.current.offsetTop + (rect.height / 1.5)
        const x = divRef.current.offsetLeft + (rect.width / 2)
        setCorde((prev)=>{
            if(prev.location_Y_5 != prev.four_height+y){
                return {...prev , location_Y_5:prev.four_height+y}
            }
            return prev
        })
        setCorde((prev)=>{
            if(prev.location_X_5 != x){
                return {...prev , location_X_5:x}
            }
            return prev
        })
    },[corde])

    return(
        <section className='product flex flex-col justify-center gap-40 md:py-28 w-full px-19  bg-bg md:px-32 relative'>
            <div>
                <h2 className='text-center text-[10rem] font-extrabold text-primary uppercase'>top picks</h2>
            </div>
            <div className='product-container flex flex-col gap-[15rem] s2:gap-32 md:flex-between md:flex-row'>
                {ProductDetails.map((elem,index)=>{
                    if (index == 1){
                        return(
                            <div ref={divRef} key={elem.key} className='flexcol-center w-full md:w-[30rem] h-[50em] md:h-80 gap-5 relative'>
                                <h3 className='text-7xl md:text-4xl text-[#373636] font-medium capitalize'>{elem.title}</h3>
                                <h3 className='text-7xl md:text-4xl text-[#000] font-bold capitalize'>{elem.price}</h3>
                            </div>
                        )
                    }else{
                        return(
                            <div key={elem.key} className='flexcol-center w-full md:w-[30rem] h-[50em] md:h-80 gap-5 relative'>
                                {elem.image 
                                ? <img className='w-[50rem] z-10 md:w-[27rem] object-cover absolute top-14 md:top-0.5' src={elem.image} alt="product-1" />
                                : <></> }
                                <h3 className='text-7xl md:text-4xl text-[#373636] font-medium capitalize'>{elem.title}</h3>
                                <h3 className='text-7xl md:text-4xl text-[#000] font-bold capitalize'>{elem.price}</h3>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export const AboutSection = () => {

    useGSAP(()=>{
        gsap.from("#about-head",{
            y:"150",
            duration:0.3,
            scrollTrigger:{
                trigger:".about-section",
                scroller:"body",
                start:"10% 90%",
                end:"50% 50%",
                // markers:true,
                scrub:2
            }
        })


    },[])

    return(
        <section  className='about-section w-full p-19 pt-[20rem]  flex-center bg-bg md:px-32 h-fit lg:h-screen relative'>
            <div className='flex justify-center w-full gap-24'>
                <div className='w-[50%] hidden md:block object-cover rounded-2xl overflow-hidden'>
                    <img src="/images/img4.jpg" alt="image-4" />
                </div>
                <div className='w-full md:w-[50%] flex flex-col gap-24'>
                    <h2 id='about-head' className='text-[12rem]/40 lg:text-[15rem]/50 font-black text-primary uppercase '>Pure <br /> Escape</h2>
                    <div className='flex flex-col gap-10'>
                        <p className='text-4xl md:text-3xl font-medium text-[#373636]'>
                            Step into a world where every note feels alive. Audira headphones are engineered to create a sound experience that surrounds you—deep, rich, and breathtaking.
                        </p>
                        <p className='text-4xl md:text-3xl font-medium text-[#373636]'>
                            Whether you're working, relaxing, or moving, our design blends comfort and clarity for every lifestyle. You don’t just listen — you feel the moment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}