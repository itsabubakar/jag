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

// LinkedIn: https://www.linkedin.com/in/joshua-gabriel-4699a2100-4699a2100

// Facebook: https://www.facebook.com/profile.php?id=100000064922270&mibextid=9R9pXO
// IG: https://instagram.com/akubo._._?igshid=OGQ5ZDc2ODk2ZA==

// YouTube: https://m.youtube.com/@joshuaakubogabriel6028/about#bottom-sheet

const SocialLinks = ({ type, nav }) => {
    return (
        <div className=''>
            {
                type === 'dark' ? <ul className={nav ? '  gap-4 lg:flex hidden' : 'flex  gap-4'}>
                    <li><a target='_blank' href={'https://instagram.com/akubo._'}><img className='h-4 w-4' src={Instagram} /></a></li>
                    <li><a target='_blank' href={'https://www.facebook.com/profile.php?id=100000064922270&mibextid=9R9pXO'}><img className='h-4 w-4' src={Facebook} /></a></li>
                    <li><a target='_blank' href={'https://www.linkedin.com/in/joshua-gabriel-4699a2100'}><img className='h-4 w-4' src={Linkedin} /></a></li>
                    <li><a target='_blank' href={'https://m.youtube.com/@joshuaakubogabriel6028'}><img className='h-4 w-4' src={Youtube} /></a></li>
                </ul> : type === 'gray' ? <ul className={nav ? '  gap-4 lg:flex hidden' : 'flex  gap-4'}>
                    <li><a target='_blank' href={'https://instagram.com/akubo._'}><img className='h-4 w-4' src={InstagramGray} /></a></li>
                    <li><a target='_blank' href={'https://www.facebook.com/profile.php?id=100000064922270&mibextid=9R9pXO'}><img className='h-4 w-4' src={FaceBookGray} /></a></li>
                    <li><a target='_blank' href={'https://www.linkedin.com/in/joshua-gabriel-4699a2100'}><img className='h-4 w-4' src={LinkedInGray} /></a></li>
                    <li><a target='_blank' href={'https://m.youtube.com/@joshuaakubogabriel6028'}><img className='h-4 w-4' src={YoutubeGray} /></a></li>

                </ul> : <ul className={nav ? '  gap-4 lg:flex hidden' : 'flex  gap-4'}>
                    <li><a target='_blank' href={'https://instagram.com/akubo._'}><img className='h-4 w-4' src={InstagramDark} /></a></li>
                    <li><a target='_blank' href={'https://www.facebook.com/profile.php?id=100000064922270&mibextid=9R9pXO'}><img className='h-4 w-4' src={FacebookDark} /></a></li>
                    <li><a target='_blank' href={'https://www.linkedin.com/in/joshua-gabriel-4699a2100'}><img className='h-4 w-4' src={LinkedinDark} /></a></li>
                    <li><a target='_blank' href={'https://m.youtube.com/@joshuaakubogabriel6028'}><img className='h-4 w-4' src={YoutubeDark} /></a></li>

                </ul>
            }
        </div>
    )
}
export default SocialLinks