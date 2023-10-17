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

// social grey
import YoutubeGray from '../assets/logos/youtube-gray.png'
import InstagramGray from '../assets/logos/instagram-gray.png'
import LinkedInGray from '../assets/logos/linkedin-gray.png'
import FaceBookGray from '../assets/logos/facebook-gray.png'
import { Link } from 'react-router-dom'

const SocialLinks = ({ type, nav }) => {
    return (
        <div className=''>
            {
                type === 'dark' ? <ul className={nav ? '  gap-4 lg:flex hidden' : 'flex  gap-4'}>
                    <li><Link to={'/'}><img className='h-4 w-4' src={Instagram} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={Facebook} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={Linkedin} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={Youtube} /></Link></li>
                </ul> : type === 'gray' ? <ul className={nav ? '  gap-4 lg:flex hidden' : 'flex  gap-4'}>
                    <li><Link to={'/'}><img className='h-4 w-4' src={InstagramGray} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={FaceBookGray} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={LinkedInGray} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={YoutubeGray} /></Link></li>

                </ul> : <ul className={nav ? '  gap-4 lg:flex hidden' : 'flex  gap-4'}>
                    <li><Link to={'/'}><img className='h-4 w-4' src={InstagramDark} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={FacebookDark} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={LinkedinDark} /></Link></li>
                    <li><Link to={'/'}><img className='h-4 w-4' src={YoutubeDark} /></Link></li>

                </ul>
            }
        </div>
    )
}
export default SocialLinks