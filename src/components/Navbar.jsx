// Logos
import LogoWhite from '../assets/logos/Jag-white.png'
import LogoDark from '../assets/logos/Jag-dark.png'
// Socials light
import Facebook from '../assets/logos/facebook.png'
import Instagram from '../assets/logos/instagram.png'
import Linkedin from '../assets/logos/linkedin.png'
import Youtube from '../assets/logos/youtube.png'

// Socials dark
import FacebookDark from '../assets/logos/facebook-dark.png'
import InstagramDark from '../assets/logos/instagram-dark.png'
import LinkedinDark from '../assets/logos/linkedin-dark.png'
import YoutubeDark from '../assets/logos/youtube-dark.png'

import { CgMenuRight, CgClose } from 'react-icons/cg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import SocialLinks from './SocialLinks'

const Navbar = ({ type }) => {
    const [open, setOpen] = useState(false)

    return (
        <nav className={`px-3 lg:px-0`}>
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className='z-50 flex justify-between items-center w-full lg:w-fit'>
                    <NavLink to={'/'} className='flex items-center'>
                        <div className='h-[88px] w-[54px]'>
                            {
                                type === 'dark' ? <img src={`${open ? LogoDark : LogoWhite}`} className='h-full w-full' /> : <img src={LogoDark} className='h-full w-full' />
                            }
                        </div>
                        <p className={`font-open-sans font-semibold text-xl pl-2 md:pl-4 ${type === 'dark' && !open ? 'text-white' : 'text-black'} ${open || type !== 'dark' ? 'text-black' : 'text-white'}`}>Joshua Akubo Gabriel</p>
                    </NavLink>
                    <div className='text-3xl lg:hidden' onClick={() => setOpen(!open)}>
                        {open ? <CgClose color={'#000'} /> : <CgMenuRight color={type === 'dark' ? '#fff' : '#000'} />}
                    </div>
                </div>

                <ul className={`${type === 'dark' && 'text-white'} lg:flex hidden items-center  gap-8 font-poppins text-sm`}>
                    <li><NavLink onClick={() => console.log('foo')} to={"/about"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>About</NavLink></li>
                    <li><NavLink onClick={() => console.log('foo')} to={"/portfolio"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Portfolio</NavLink></li>
                    <li><NavLink onClick={() => console.log('foo')} to={"/resume"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Résumé</NavLink></li>
                    <li><NavLink onClick={() => console.log('foo')} to={"/calendar"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Calendar</NavLink></li>
                    <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/contact"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#fff]' : 'pb-1')}>Contact</NavLink></li>

                </ul>
                <SocialLinks nav={true} type={type} />

                {/* Mobile links */}
                <div className={`lg:hidden text-black font-poppins bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    <ul className=''>
                        <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Home</NavLink></li>
                        <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/about"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>About</NavLink></li>
                        <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/portfolio"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Portfolio</NavLink></li>
                        <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/resume"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Résumé</NavLink></li>
                        <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/calendar"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Calendar</NavLink></li>
                        <li className='py-2 px-3'><NavLink onClick={() => console.log('foo')} to={"/contact"} className={({ isActive }) => (isActive ? 'border-b pb-1 border-b-[#040708]' : 'pb-1')}>Contact</NavLink></li>
                    </ul>
                    <ul className=' gap-4 flex px-3 pt-5'>
                        <li><img className='h-4 w-4' src={InstagramDark} /></li>
                        <li><img className='h-4 w-4' src={FacebookDark} /></li>
                        <li><img className='h-4 w-4' src={LinkedinDark} /></li>
                        <li><img className='h-4 w-4' src={YoutubeDark} /></li>

                    </ul>

                </div>




            </div>
        </nav>
    )
}
export default Navbar

