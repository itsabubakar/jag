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

                <div className=" ">
                    <div className="flex min-h-screen items-center justify-start ">
                        <div className="mx-auto w-full max-w-lg">
                            <h1 className="text-4xl font-medium">Contact us</h1>
                            <p className="mt-3">Email me</p>

                            <form className="mt-10">

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="relative z-0">
                                        <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                                    </div>
                                    <div className="relative z-0">
                                        <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                                    </div>
                                    <div className="relative z-0 col-span-2">
                                        <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                                    </div>
                                </div>
                                <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Contact