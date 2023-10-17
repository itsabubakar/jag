import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import bg from '../assets/images/image21.png'

// Socials light
import Facebook from '../assets/logos/facebook.png'
import Instagram from '../assets/logos/instagram.png'
import Linkedin from '../assets/logos/linkedin.png'
import Youtube from '../assets/logos/youtube.png'

const Contact = () => {
    return (
        <div className="bg-[#040708] min-h-screen">
            <div className="bg-[#040708] text-white ">
                <div className="max-w-6xl mx-auto px-5 xl:px-0">
                    <Navbar type={'dark'} />
                </div>

                <div className=" max-h-[400pxs]">
                    <div className="lg:absolute top-[150px] left-[140px] grid justify-center pt-0 lg:pt-0">
                        <h2 className="font-open-sans font-bold text-[32px] pb-4">Contact me</h2>
                        <p className="font-bold font-poppins text-[#A7A7A7]">Phone</p>
                        <p className="text-[#a7a7a7] font-medium">+234 816 981 2858</p>
                        <p className="font-bold font-poppins text-[#A7A7A7]">Email</p>
                        <p className="text-[#a7a7a7] font-medium">Joshuaakubogabriel@gmail.com</p>
                        <ul className='  gap-4 flex pt-5 lg:pt-10'>
                            <li><img className='h-4 w-4' src={Instagram} /></li>
                            <li><img className='h-4 w-4' src={Facebook} /></li>
                            <li><img className='h-4 w-4' src={Linkedin} /></li>
                            <li><img className='h-4 w-4' src={Youtube} /></li>
                        </ul>
                    </div>
                    <img className="w-full h-[550px]" src={bg} alt="" srcset="" />
                </div>

            </div>
        </div>
    )
}
export default Contact