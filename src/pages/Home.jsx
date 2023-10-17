import Navbar from "../components/Navbar"

// images
import HeroImg from '../assets/images/hero-img.png'
import imgOne from '../assets/images/imageOne.png'
import imgTwo from '../assets/images/imageTwo.png'
import imgThree from '../assets/images/imageThree.png'
import imgFour from '../assets/images/imageFour.png'
import imgFive from '../assets/images/imageFive.png'
import imgSix from '../assets/images/image17.png'

// icons
import Youtube from '../assets/logos/youtube-gray.png'
import Instagram from '../assets/logos/instagram-gray.png'
import LinkedIn from '../assets/logos/linkedin-gray.png'
import FaceBook from '../assets/logos/facebook-gray.png'

// logos
import LogoDark from '../assets/logos/Jag-dark.png'
import SocialLinks from "../components/SocialLinks"



const Home = () => {
    return (
        <div className="">
            <div className="bg-[#040708]">
                <div className="max-w-6xl mx-auto">

                    {/* Hero */}
                    <div className="">
                        <Navbar type={'dark'} />

                        <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full">
                            <div className="py-8 px-5 lg:py-0">
                                <h1 className="text-2xl lg:text-5xl font-open-sans text-white font-bold text-center">Joshua Akubo Gabriel</h1>
                                <p className="text-center text-xl text-white font-light pt-1">Artist . Community Organizer . Graphic Designer</p>
                            </div>

                            <div className="h-[625px] max-w-[500px] w-fit">
                                <img className="h-full w-full" src={HeroImg} alt="" srcset="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className="pt-8 flex justify-center">
                <a href="" className="text-center">See more</a>
            </div>

            {/* Grid images */}

            <div className="grid-container px-5 lg:px-0 max-w-6xl mx-auto pt-20 pb-40 md:gap-6 gap-1" >
                <img className="item1" src={imgTwo} alt="Jag Image" srcset="" />
                <img className="item2" src={imgOne} alt="Jag Image" srcset="" />
                <img className="item3" src={imgThree} alt="Jag Image" srcset="" />
                <img className="item4" src={imgFour} alt="Jag Image" srcset="" />
                <img className="item5" src={imgFive} alt="Jag Image" srcset="" />
            </div>

            {/* Homepage footer */}

            <div className=" lg:flex justify-between lg:border-t border-[#040708]">
                <div className="lg:max-h-[440px] lg:max-w-[580px]">
                    <div className="bg-[#F1F1F2]">
                        <img className="h-full w-full opacity-50" src={imgSix} alt="footer image" srcset="" />
                    </div>

                </div>

                <div className="self-center px-5 lg:px-0 py-10 lg:py-0">
                    <h2 className="font-open-sans font-bold text-[32px] pb-4">Contact me</h2>
                    <p className="text-[#79797A] font-poppins  text-xl">Phone</p>
                    <p className="text-[#79797A] font-poppins pb-6">+234 816 981 2858</p>
                    <p className="text-[#79797A] font-poppins text-xl">Email</p>
                    <p className="text-[#79797A] font-poppins">Joshuaakubogabriel@gmail.com</p>

                    {/* Icons */}
                    <div className="pt-5">

                        <SocialLinks type={'gray'} />
                    </div>

                </div>

                <div className='h-[88px] w-[54px] mx-auto lg:mx-0 lg:self-end lg:mr-16 mb-24'>
                    <img src={LogoDark} className='h-full w-full' />
                </div>

            </div>

        </div>
    )
}
export default Home