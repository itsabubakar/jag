import LogoDark from '../assets/logos/Jag-dark.png'

// icons
import Youtube from '../assets/logos/youtube-gray.png'
import Instagram from '../assets/logos/instagram-gray.png'
import LinkedIn from '../assets/logos/linkedin-gray.png'
import FaceBook from '../assets/logos/facebook-gray.png'

import arrow from '../assets/logos/arrow.png'
import SocialLinks from './SocialLinks'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='px-5 xl:px-0 border-t border-[#040708]'>
            <div className='max-w-6xl mx-auto flex justify-between items-center py-4 '>
                <div>
                    <button onClick={scrollToTop} className='flex   gap-3'>Back to top<img src={arrow} alt="" className="w-[11px] self-center" /></button>

                </div>
                <div className='h-[88px] w-[54px]'>
                    <img src={LogoDark} className='h-full w-full' />
                </div>

                <SocialLinks type={'gray'} />
            </div>

        </div>
    )
}
export default Footer