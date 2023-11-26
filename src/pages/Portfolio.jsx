import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

// logo
import LogoOne from '../assets/logos/logo1.png'
import LogoTwo from '../assets/logos/logo2.png'
import LogoThree from '../assets/logos/logo3.png'
import LogoFour from '../assets/logos/logo4.png'
import LogoFive from '../assets/logos/logo5.png'
import LogoSix from '../assets/logos/logo6.png'
import LogoSeven from '../assets/logos/logo7.png'
import LogoEight from '../assets/logos/logo8.png'
import LogoNine from '../assets/logos/logo9.png'
import LogoTen from '../assets/logos/logo10.png'
import LogoEleven from '../assets/logos/logo11.png'
import LogoTwelve from '../assets/logos/logo12.png'
import LogoThirteen from '../assets/logos/logo13.png'
import LogoFourteen from '../assets/logos/logo14.png'
import LogoFifteen from '../assets/logos/logo15.png'

// images
import imgOne from '../assets/images/image19.png'
import imgTwo from '../assets/images/image18.png'
import imgThree from '../assets/images/image6.png'
import imgFour from '../assets/images/image30.png'
import imgFive from '../assets/images/image31.png'
import imgSix from '../assets/images/image32.png'
import imgSeven from '../assets/images/image0.png'
import imgEight from '../assets/images/image1.png'
import imgNine from '../assets/images/image2.png'

import imgTen from '../assets/images/image11.png'
import imgEleven from '../assets/images/image13.png'
import imgTwelve from '../assets/images/image14.png'
import imgThirteen from '../assets/images/image15.png'

import imgFourteen from '../assets/images/image17.png'
import imgFifteen from '../assets/images/image20.png'

import imgSixteen from '../assets/images/image25.png'
import imgSeventeen from '../assets/images/image26.png'

import imgEighteen from '../assets/images/image29.png'



// grid images
import a4 from '../assets/images/image6.png'
import a3 from '../assets/images/image7.png'
import a2 from '../assets/images/image8.png'
import a5 from '../assets/images/image9.png'
import a1 from '../assets/images/image10.png'
import SectionText from "../components/SectionText"
import { Link } from "react-router-dom"





const Portfolio = () => {
    return (
        <div className="text-[#040708] bg-[#F1F1F2]">
            <div className="max-w-6xl mx-auto">

                <Navbar />
            </div>
            <div className="max-w-6xl mx-auto">

                {/* header */}
                <div className="flex justify-center py-16">
                    <h2 className="text-2xl font-open-sans font-semibold px-5 lg:px-0 text-center lg:text-left">Artist . Community Organizer . Graphic Designer</h2>
                </div>

                {/* header Image divs */}
                <div>

                    <div className="max-w-[814px]">
                        <img className="h-full  w-full" src={imgOne} alt="Portfolio Image" srcset="" />
                    </div>

                    <div className="pt-20 px-5 lg:px-0">
                        <h3 className="font-open-sans font-semibold text-2xl">Artist</h3>
                        <p className="pt-5 max-w-[598px] font-poppins font-normal">I am inspired by the simplicity of life–the capacity of all human beings
                            to care for one another and our planet with generosity, compassion,
                            and justice. As a dancer and choreographer, these ideas manifest in
                            my movement technique, notion obedience. An intersection between
                            capoeira, floor work, and body memory, notion obedience is a technique
                            that explores how our truths direct us toward safety and belonging to
                            ourselves and our community as a way of coexisting. I consider myself
                            a conduit for learning and knowledge, and seek to create spaces where
                            artists can experiment with old and new body memories and technologies.</p>
                    </div>

                    <div className="flex justify-end pt-[60px]">
                        <div className="max-w-[748px]">
                            <img className="h-full w-full" src={imgTwo} alt="Portfolio Image" srcset="" />
                        </div>
                    </div>

                </div>

                <section className="pt-28">
                    <iframe
                        width="100%"
                        height="400px"
                        src="https://www.youtube.com/embed/JN-zfUeYNmA"
                        title="No man's land"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </section>

                {/* grid */}
                <div className="pt-28">
                    <div className="px-5 lg:px-0">
                        <h2 className="font-open-sans font-semibold text-2xl md:text-[32px] pb-2">Projects/Collaborations</h2>
                        <p className="font-open-sans text-xl max-w-[524px] pt-1">REINCARNATION BY Qudus Onikeku (Qdance Company)
                            as Dancer And Collaborator.</p>
                    </div>

                    {/* grid */}

                    <div className="portfolio-grid px-5 lg:px-0 py-16">
                        <img src={a1} className="img-one" alt="" />
                        <img src={a2} className="img-two" alt="" />
                        <img src={a3} className="img-three" alt="" />
                        <img src={a4} className="img-four" alt="" />
                        <img src={a5} className="img-five" alt="" />
                    </div>

                </div>


                {/* tour dates */}

                <div className="tour-grid justify-between pt-16 pb-32 ">
                    <div className="tour-item1 px-5 lg:px-0">
                        <h2 className="text-2xl font-open-sans font-semibold pb-6">Tour Dates 2022</h2>
                        <p className="font-poppins"><span className="font-medium">2 May,</span> Glover Hall. Lagos. NG</p>
                        <p className="font-poppins"><span className="font-medium">
                            14-15 May, </span>Fabrik Potsdam. DE</p>
                        <p className="font-poppins"><span className="font-medium">25 - 28 May, </span>Festival TransAmerique. Montreal. CAN</p>
                        <p className="font-poppins"><span className="font-medium">3 - 4 June, </span>PS21. New York USA</p>
                        <p className="font-poppins"><span className="font-medium">
                            9 - 10 June, </span>Hippodrum de Douai. FR</p>
                        <p className="font-poppins"><span className="font-medium">25 June, </span>Afrolution. Berlin. DE</p>
                        <p className="font-poppins"><span className="font-medium">27 June - 3 July, </span>Afropolis. Festival de Marseille. FR</p>
                        <p className="font-poppins"><span className="font-medium">12 - 13 July, </span>Julidans Festival. Amsterdam. ND</p>
                        <p className="font-poppins"><span className="font-medium">7 October, </span>Le theatre, Auxerre. FR</p>
                        <p className="font-poppins"><span className="font-medium">14 October, </span>Philharmonie de Paris. FR</p>
                        <p className="font-poppins"><span className="font-medium">
                            19 - 20 October,</span> Theatre de Corniquille. Quimper, Bretagne. FR</p>
                        <p className="font-poppins"><span className="font-medium">10 November, </span>Chalons en champagne. FR</p>
                        <p className="font-poppins"><span className="font-medium">15 November,</span>Le Moulin du Roc, Niort. FR</p>
                        <p className="font-poppins"><span className="font-medium">17 - 19 November, </span>Theatre National de Bretagne. Rennes. FR</p>
                        <p className="font-poppins"><span className="font-medium">R
                            22 November,</span> L'Arsenal, Val de Reuil, Evreux. FR</p>
                        <p className="font-poppins"><span className="font-medium">24 November, </span>Scene Nationale 61 Alencon. FR</p>


                    </div>

                    {/* images */}
                    <div className="tour-item3 -mt-20 max-w-3xl">
                        <img className="w-full h-full" src={imgThree} alt="" />
                    </div>

                    {/* Tour dates */}
                    <div className="tour-item2 px-5 lg:px-0">
                        <h2 className="text-2xl font-open-sans font-semibold pb-6">Tour Dates 2022</h2>

                        <div className="font-poppins pb-5">
                            <h3 className="font-medium">Jan 2021</h3>
                            <p>World Premiere</p>
                            <p>15th, 16th Jan. Paris.</p>
                            <p>Digital Premier</p>
                            <p>27th Jan. Centre Pompidou. Paris. FR.</p>
                        </div>

                        <div className="font-poppins pb-5">
                            <h3 className="font-medium">May 2021</h3>
                            <p>15: Live Ideas - New York Live Arts. USA</p>
                            <p>27: La Rampe – Echirolles. FR</p>
                        </div>

                        <div className="font-poppins pb-5">
                            <h3 className="font-medium">June 2021 2021</h3>
                            <p>4: Les Halles de Schaerbeek - Bruxelles. BE</p>
                            <p>8 & 9: La Biennale de Lyon – Le Radiant – Lyon. FR</p>
                            <p>15: Espace Sarah Bernhardt – Goussainville. FR</p>
                            <p>7: L’imprévu – Saint-Ouen. FR</p>
                            <p>23: Regio Emilia.</p>
                            <p>30: Centre Pompidou - Paris. FR</p>
                        </div>

                        <div className="font-poppins pb-5">
                            <h3 className="font-medium">July 2021 2021</h3>
                            <p>12: Théâtre Rive Gauche – St-Etienne du Rouvray. FR</p>
                            <p>4: Théâtre Jean Vilar de Vitry. FR</p>
                            <p>6 & 7: Festival GREC. Barcelona. SP</p>
                            <p>25: Festival Kalamata. GR</p>
                        </div>

                        <div className="font-poppins ">
                            <h3 className="font-medium">October 2021 2021</h3>
                            <p>13: NUC Hall. Abuja. NG</p>
                            <p>16: Alliance Francais Accra. GH</p>
                            <p>20: Institut Francais de Lome. TG</p>
                        </div>

                    </div>
                </div>

                {/* centered texts */}
                <SectionText
                    title={'Space Carcasses by Onye Ozuzu (Ozuzu Dances)'}
                    subtitle={'as Dancer And Collaborator.'}
                    ch={true}
                    cp={true}
                    sm={true}
                >
                    Space Carcasses is an interdisciplinary performance that juxtaposes, superimposes,
                    and asserts the body’s relationship to its built environment, particularly spaces that
                    echo with Afro-diasporic forced migrations. A carcass leaves an imprint of a version
                    of us we are no longer, a “skin,” a container that we have left behind. Like the residue
                    of the body’s presence, the residue of architecture resonates with layered meanings
                    through time and space. Facilitated by emergent technologies, the dancing body will
                    become time traveler, truth teller, and historical record by extending into architecture
                    and embodying it as an exoskeleton to access the ancestor like a masked dancer
                    becomes EGUNGUN.
                </SectionText>



                {/* Three image grids */}

                <div className="grid grid-cols-7 pb-32">
                    <img src={imgFour} alt="performace images" className="col-span-3 w-full h-full" />
                    <img src={imgFive} alt="performace images" className=" w-full h-full" />
                    <img src={imgSix} alt="performace images" className="col-span-3 w-full h-full" />
                </div>


                <SectionText
                    title={'NO MAN’S LAND (2021/22)'}
                    ch={true}
                    cp={true}
                    parag={['NO MANS LAND is a reflection on the survival journey it takes from a gunshot to intervention.                    The dark screams of familiar voices reacting to the impact of machete, knifes, guns, rape and                    ravaging from invaders, a night that would seem never to end and a longing for daylight like it                    would bring some kind of security. The work is intended to draw attention to the terrors that                    plague rural villages in the Northern parts of Nigeria. the forceful eviction of indigenes from                    their ancestral land. The work shows episodes of chaos encountered by four residents seeing                    their village at the alert of bandits. it goes on to show their struggle to survive a dreadful journey                    of blood and bullets. The work will feature four dancers using modern and traditional ', 'contemporary', 'movement techniques in recreating these imagery as they embody these stories through                    dramaturgy to compose an atmosphere that suggests the question of our inhumanity.                    ', 'Premiere at the Bienaale de la dance Lyon in Afropolis                    and Africa Next Generation prize in African Biennale Maputo, Mozambique']}
                >

                </SectionText>

                <section className="pb-32">
                    <iframe
                        width="100%"
                        height="400px"
                        src="https://www.youtube.com/embed/o2QM7IrqTg0"
                        title="No man's land"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </section>



                <div className=" pb-32">
                    <div className="max-h-[284px]"><img src={imgSeven} alt="performace images" className=" w-full h-full" /></div>
                    <div className="max-h-[284px]"><img src={imgEight} alt="performace images" className=" w-full h-full" /></div>
                    <div className="max-h-[284px]"> <img src={imgNine} alt="performace images" className=" w-full h-full -mt-8" /></div>
                </div>

                <SectionText
                    title={`CITY OF GHOST (2021)`}
                    ch={true}
                >
                    City of Ghost is the journey of one life drifting
                    through post-lifetime as it journeys away from
                    the memories and connections of the physical
                    life. It struggles with the undesired circumstances
                    of its passing and tries to confront its disembodiment
                    with memories and dreams lost in human excesses
                    of wars influenced by politics, race, gender, religion
                    and the constant need to dominate another. City
                    of Ghost hopes to show the trauma of this one ghost
                    absorbed into a new reality with left behind an
                    unfinished dream of the dead into a dying reality.
                    The work is anchored on the voices of the so many
                    ones that have been absorbed into this statistical universe where numbers tell the story and the
                    experiences are never heard. It is a feeding to
                    the question of
                </SectionText>

                <div className="grid grid-cols-2 pb-32">
                    {/* Top images */}
                    <div className=" max-h-[334px]">
                        <img src={imgTen} alt="performace images" className=" w-full h-full" />

                    </div>
                    <div className=" max-h-[334px]">
                        <img src={imgEleven} alt="performace images" className=" w-full h-full" />
                    </div>
                    {/* Bottom images */}
                    <div className=" max-h-[334px]">
                        <img src={imgTwelve} alt="performace images" className=" w-full h-full" />
                    </div>

                    <div className=" max-h-[334px]">
                        <img src={imgThirteen} alt="performace images" className=" w-full h-full" />
                    </div>

                </div>

                <div className="flex items-center justify-center gap-16 flex-col lg:flex-row pb-32">
                    <div className=" max-w-[528px]">
                        <img src={imgFourteen} alt="" className="w-full h-full lg:w-[528px] lg:h-[277px]" />
                    </div>
                    <div className="max-w-[500px]">
                        <SectionText title={'THE FOOL’S SECRETS (2023)'} >
                            The Fool’s Secret is an experimental dance
                            project that takes a journey into the personalities
                            we have adapted as a dynamic interplay
                            of identities and ideologies like masquerades
                            to perform, gain access to spaces and perceive
                            as more or less than we appear in the world.
                            The emphasis is the personality behind the masquerade and the thought process necessary
                            for this adaptation. One that can be seen across
                            cultures. I am interested in the archetype of
                            the fool that hides behind the foolery to gain
                            access, stage performances for acceptance
                            until the needed objective is gotten.
                        </SectionText>
                    </div>

                </div>

                <div className="flex items-center justify-center gap-16 flex-col lg:flex-row pb-32">
                    <div className=" max-w-[528px]">
                        <img src={imgFifteen} alt="" className="w-full h-full lg:w-[394px] lg:h-[600px]" />
                    </div>

                    <div className="max-w-[500px]">
                        <SectionText title={'IF THE BANQUET IS FOR KINGS, LET THEM SERVE THEMSELVES'} >
                            The lower class and minority groups continue to be the puns in the
                            agenda of the political elite of our generation and generations before.
                            the project is focused on these injustices and imbalances in societal
                            power structures with emphasis to my country’s political scene where
                            the poor vote for the rich and yet are immediatle forgetten about. the
                            rising need to make public statements against systemic political and
                            economic oppression through performance and dialogue. it features
                            performance in spaces that have controlled access and designed to
                            exclude the so called lower class. also performances are held in rural
                            areas to bring the same art access to the people and awareness is created
                            for their right and the power of their numbers as a negotiation power
                            for resistance. most especially in Elections.
                        </SectionText>
                    </div>

                </div>

                <div>
                    <div className="max-h-[774px]">
                        <img className="w-full h-full" src={imgSeventeen} alt="Image" srcset="" />
                    </div>

                    <div className="py-28 px-5 lg:px-0">
                        <h2 className="text-2xl font-open-sans font-semibold px-5 lg:px-0 pb-5">Community Organizer</h2>
                        <p className="font-poppins">From starting my first organized body at the age 13, growing membership of over a 100
                            young people at the age of 15years to gather every weekend to dance, mentor and counsel
                            on issues going on in their lives. I find myself in a unique place of responsibility to the young
                            people of my community especially through the arts. In 2016 I start to experiment with creating
                            job opportunities by reaching out to schools to ask for establishment of Dance clubs as a way
                            of employing dancers in my team and designing artistic projects that allow for art advocacy in
                            schools and the community.as a meduim to create awareness religious and ethnical tolerance
                            as is the challenge in the region and country at large. the following years lead from organizing
                            state festivals and conferences to international gathering with professors and artists of multidisciplinary
                            practice in attendance every year. we organized Artist safe spaces for conversations
                            about growing the creative economy of the community and state why tackling the social and
                            political crisis of the state and communities.</p>

                        <div className="s">
                            <h3 className="font-semibold font-open-sans pt-5">LINK TO PROJECTS</h3>
                            <ul>
                                <li><a href="https://www.duniate.org" className="font-p-posts py-1">www.duniate.org</a></li>
                                <li><a href="https://drive.google.com/drive/folders/1W7IErm_6Sm8iOAInS0J7WnCMpH2Py" className="font-p-posts py-1">Google drive</a></li>
                            </ul>

                        </div>

                    </div>

                    <div className="max-h-[632px]">
                        <img src={imgSixteen} alt="Image" srcset="" />
                    </div>

                    <div className="py-28 px-5 lg:px-0">
                        <h2 className="text-2xl font-open-sans font-semibold px-5 lg:px-0 pb-5">DESIGNER (UI/UX, LOGOTYPE BRANDING, FLYERS/POSTERS)</h2>
                        <p className="font-poppins">As a graphic designer, I make the journey with the client and consider myself a medium
                            for their visual imagination while carefully contributing professional inputs to keep the vision
                            aligned with target audience. I enjoy the research process and the interaction with the clients
                            that most of the times transforms into a long term relationship. this is because design for me is
                            an opportunity to introduce myself to the world around me.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 pb-10">
                        <img className="w-36 h-28" src={LogoOne} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoTwo} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoThree} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoFour} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoFive} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoSix} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoSeven} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoEight} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoNine} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoTen} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoEleven} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoTwelve} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoThirteen} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoFourteen} alt="Logos" srcset="" />
                        <img className="w-36 h-28" src={LogoFifteen} alt="Logos" srcset="" />

                    </div>

                    <div className="text-center py-20">
                        <h3 className="font-semibold text-xl pb-5 font-open-sans">Clients (Past and Present)</h3>
                        <p className="pt-1 font-poppins
                        ">University of Florida</p>
                        <p className="pt-1 font-poppins
                        ">Kaduna State Power Supply Company</p>
                        <p className="pt-1 font-poppins
                        ">Qdance center</p>
                        <p className="pt-1 font-poppins
                        ">Tamerri Festival</p>
                        <p className="pt-1 font-poppins
                        ">African Biennale</p>
                        <p className="pt-1 font-poppins
                        ">Genti Music</p>
                        <p className="pt-1 font-poppins
                        ">Mambaah Café</p>
                        <p className="pt-1 font-poppins
                        ">Institut Francias Abuja</p>
                        <p className="pt-1 font-poppins
                        ">and many more</p>
                    </div>

                    <div className="flex justify-center pb-20">
                        <div className="w-[520px] h-[814px]">
                            <img className="w-full h-full" src={imgEighteen} alt="" srcset="" />
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Portfolio