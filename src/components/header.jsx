import { useState } from 'react'
import { NavItems } from '../../constants'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


const Header = () => {

    const [menu, setMenu] = useState(false)
    const tlRef = useRef()

    useGSAP(()=>{
        let tl = gsap.timeline(
            {paused:true}
        )
        
        tl.from("#nav-container",{
            x:300,
            duration:1,
        })
        
        tl.from("#nav-items",{
            x:300,
            duration:1,
            stagger:0.3,
            opacity:0
        })
        
        tl.from(".close",{
            opacity:0
        })

        tlRef.current = tl
    },[])

    const handleMenuOpen = () => {
        setMenu(!menu)
        tlRef.current.play()
    }
    const handleMenuClose = () => {
        tlRef.current.reverse()
        setTimeout(()=>{
            setMenu(!menu)
        },3500)
    }

  return (
    <section className='w-full flex-between px-19 md:px-32 py-6 fixed z-20 top-0 left-0'>
        <div className='logo-left-side'>
            <img className='w-48 object-cover' src="./src/assets/images/logo.png" alt="logo" />
        </div>
        <div className="hidden md:block opacity-100">
            <ul className="flex-center gap-16">
                {NavItems.map((elem)=>(
                    <li key={elem.id} className='text-black text-6xl md:text-4xl capitalize'>{elem.title}</li>
                ))}
            </ul>
        </div>
        <div id='nav-container' className="block md:hidden absolute min-h-screen top-0 right-0 w-2xl p-10 pl-20 pt-40 bg-white">
            <ul className="flexcol-center items-start gap-24">
                {NavItems.map((elem)=>(
                    <li key={elem.id} id='nav-items' className='text-black text-6xl md:text-4xl capitalize'>{elem.title}</li>
                ))}
            </ul>
        </div>
        <div>
            <button className='hidden md:block capitalize px-8 py-4 text-white bg-secondary text-4xl rounded-2xl'>buy now</button>
        </div>
        <div className='block md:hidden relative z-10'>
            <CiMenuFries onClick={handleMenuOpen} className={`open text-5xl ${menu ? "hidden" : "block"}`} />
            <IoCloseOutline onClick={handleMenuClose} className={`close text-6xl ${menu ? "block" : "hidden"}`} />
        </div>
    </section>
  )
}

export default Header