import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import imgOne from '../assets/images/image12.png'
import { Link } from "react-router-dom"


const About = () => {
    return (
        <div className="bg-[#F1F1F2]">
            <div className="max-w-6xl mx-auto">

                <Navbar />
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="lg:flex justify-between pb-16 lg:py-16 gap-4">

                    <div className="lg:max-h-[720px] lg:max-w-[462px]">
                        <img src={imgOne} className="h-full w-full" alt="" />
                    </div>

                    <div className="max-w-[611px]  leading-loose font-poppins px-5 lg:px-0 pt-10 lg:pt-0">
                        <p className="pb-7">Joshua Akubo Gabriel is a dancer, teacher, choreographer, and
                            community strategist born and raised in Kaduna, Nigeria. He is
                            co-founder of Duniatè Culture LTD/Festival and Art Resource
                            Center Kaduna - an arts and culture organization that supports
                            and highlights the creative ingenuity of young, emerging artists,
                            with a passion for uplifting cultural diversity through exchange
                            programs and art project developments. He just completed his
                            first work No Man’s Land and is set to premiere at Biennial de la
                            danse Lyon in September, the African biennial in Maputo,
                            Mozambique in November. He enjoys teaching dance around the
                            world on movement explorations in the African aesthetics of
                            movement and touring internationally performing in theaters and
                            festivals. He is motivated by the need for cross-cultural literacy
                            in human rights and diversities with a strong interests in decolonisation
                            of the black body.
                        </p>
                        <p className="pb-7">He has undergone professional training and workshops in and
                            out of Nigeria under different teachers and masters from 2013.</p>

                        <p className="pb-2">Agocha Davies (Nigeria) 2013 - ballet (introduction), jazz and modern dance, contemporary.</p>
                        <p className="pb-2">Qudus Onikeku (Nigeria) 2016- master class in contemporary with the Germany and French
                            Embassy.</p>
                        <p className="pb-2">Onyekwere Ozuzu (Dean University of Florida) 2017 - master class in contemporary
                            (Technic- technology of the circle)</p>
                        <p className="pb-2">Seifeddine Manai (France) 2017- master class in contemporary (technic - Deep Flava)</p>
                        <p className="pb-2">Horacio Macaucau (Mozambique) 2017- master class in contemporary ( technic - gathering energy and sending energy)</p>
                        <p className="pb-2">Isaak Lartey (France) 2018 - Capoeira</p>
                        <p className="pb-2">Maria Angelo (Brasil) 2019 - Capoeira</p>
                        <p className="pb-2">Nora Chipaumire (zimbabwe/US) 2018 - Animist Technology</p>
                        <p className="pb-2">Francis Verret (France) 2018 - Art And Education</p>
                        <p className="pb-2">Lena Peled (Israel) 2019 - C.I into Floor Wook</p>
                        <p>Teti Niko (Portugal) 2019 - C.I into Floor Wook</p>

                    </div>

                </div>

                <div className="flex justify-center pb-16">
                    <Link className="font-open-sans font-medium text-xl" to={'/portfolio'}>See Portfolio</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About