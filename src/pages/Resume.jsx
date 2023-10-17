import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

// images
import imageOne from '../assets/images/image22.png'
import SocialLinks from "../components/SocialLinks"
const Resume = () => {
    return (
        <div className="bg-[#F1F1F2]">
            <div className="max-w-6xl mx-auto px-5 xl:px-0">
                <Navbar />
            </div>

            <div className=' max-w-6xl mx-auto py-14 '>
                <div className="md:flex-row flex flex-col justify-center items-center">
                    <div className="max-w-[338px]">
                        <img src={imageOne} alt="" className="w-full h-full" />
                    </div>
                    <div className="max-w-[401px] md:ml-28 pt-5 md:pt-0 px-5 md:px-0">
                        <h2 className="font-open-sans font-bold text-[32px] pb-6">JOSHUA AKUBO GABRIEL</h2>
                        <p className="font-light font-open-sans text-xl pb-6">DANCER | CHOREOGRAPHER
                            EDUCATOR | COMMUNITY ORGANIZER</p>
                        <p className="text-xs font-poppins font-light pb-1">Phone:
                            +2348169812858
                        </p>
                        <p className="text-xs font-poppins font-light pb-1">Email: joshuaakubogabriel@gmail.com

                        </p>
                        <p className="text-xs font-poppins font-light pb-1">Website:
                            www.dunIate.org

                        </p>
                        <div className="pt-4">
                            <SocialLinks type={'gray'} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between py-20 px-5">
                    {/* Left */}
                    <div className="flex flex-col gap-y-16 max-w-[482px]">
                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">PHILOSOPHY</h3>
                            <p className="font-poppins pb-2">I am inspired by the simplicity of
                                life–the capacity of all human
                                beings to care for one another and
                                our planet with generosity,
                                compassion, and justice.</p>
                            <p className="font-poppins pb-2">As a
                                dancer and choreographer, these
                                ideas manifest in my movement
                                technique, notion obedience.</p>
                            <p className="font-poppins pb-2">An
                                intersection between capoeira,
                                floor work, and body memory,
                                notion obedience is a technique
                                that explores how our truths direct
                                us toward safety and belonging to
                                ourselves and our community as a
                                way of coexisting. I consider
                                myself a conduit for learning and
                                knowledge, and seek to create
                                spaces where artists can
                                experiment with old and new body
                                memories and technologies.</p>
                        </div>
                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">CURATORIAL PROJECTS</h3>
                            <p className="font-poppins pb-2">2023 | light, Golem and Shadows | art installation and performance with Alon Razgour.</p>
                            <p className="font-poppins pb-2">(Germany/Israel) and Brianna Alexis heath (USA)
                            </p>
                            <p className="font-poppins pb-2">2021 | Co-organizer | Kaduna Performance Festival, Kaduna, Nigeria
                            </p>
                            <p className="font-poppins pb-2">Co-organizer | Dance Education and Entrepreneurial Practices Convention, Kaduna, Nigeria
                            </p>
                            <p className="font-poppins pb-2">2021 | Creator | Human Lies | Afropolis, Grec Festival | Barcelona, Spain
                            </p>
                            <p className="font-poppins pb-2">2019 | Co-organizer | Artist Convening, Kaduna and Abuja, Nigeria
                            </p>
                            <p className="font-poppins pb-2">2020 | Creator/Performer | Dream Space Freedom | danceGATHERING, Virtual
                            </p>
                            <p className="font-poppins pb-2">2017 | Dancer/Choreographer | Tragedy of Time (TEDex), Kaduna, Nigeria
                            </p>
                            <p className="font-poppins pb-2">Collaborator | Unity Dance (State Government), Kaduna, Nigeria
                            </p>
                            <p className="font-poppins pb-2">Co-organizer/Performer | Fellowship, Alliance Francaise, Kaduna, Nigeria
                            </p>
                            <p className="font-poppins pb-2">Co-organizer | Educulture Festival, Kaduna Nigeria
                            </p>

                        </div>
                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">SPECIAL SKILL</h3>
                            <p className="font-poppins pb-2">VI. SPECIAL SKILLS</p>
                            <p className="font-poppins pb-2">Gymnastics/Acrobatics
                            </p>
                            <p className="font-poppins pb-2">Poet</p>

                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-y-16 max-w-[471px]">
                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">EDUCATION</h3>
                            <p className="font-poppins pb-2">I2013 | Software Engineering Diploma, Innovation
                                Institute of Technology, Kaduna, Nigeria
                            </p>
                            <p className="font-poppins pb-2">2018 | Computer Science Higher National Diploma,
                                Kaduna Federal Polytechnic, Kaduna, Nigeria
                            </p>

                        </div>
                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">EXPERIENCE</h3>
                            <p className="font-poppins pb-2">2019 - present | Co-founder/director | D’atè Culture
                                Foundation, Kaduna, Nigeria

                            </p>
                            <p className="font-poppins pb-2">2019 - 2021 | Graphic Designer and UI/UX Developer |
                                University of Florida, Center for Arts, Migration and
                                Entrepreneurship, Gainesville, Florida

                            </p>
                            <p className="font-poppins pb-2">2022 – present | Dancer | Space Carcases | Ozuzu
                                Dances, Florida, USA

                            </p>
                            <p className="font-poppins pb-2">2021 – present | Dancer, Choreographer | No Man’s
                                Land

                            </p>
                            <p className="font-poppins pb-2">2019 – present | Dancer | Re:incarnation World Tour |
                                QDance Center, Lagos, Nigeria


                            </p>


                        </div>

                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">GRANTS/FELLOWSHIPS</h3>
                            <p className="font-poppins pb-2">2023 | Pop up residency Artist at the Mousonturm Frankfurt, Germany
                            </p>
                            <p className="font-poppins pb-2">2021 | IF Artist Residency, Institut Français, Kaduna, Nigeria
                            </p>

                        </div>
                        <div className="">
                            <h3 className="font-open-sans pb-6 text-xl font-semibold">DANCE TRAINING</h3>
                            <p className="font-poppins pb-2">2019 | Contact Improvisation Festival, Freiburg, Germany
                                Body Mind Centering (BMC) with Olive Bieringa &amp; Otto Ramstad (USA)
                            </p>
                            <p className="font-poppins pb-2">Intermediate Capoeira with Maria angelo (Brazil)
                            </p>
                            <p className="font-poppins pb-2">Floorwork into CI with Teti Nikolopoulou (Czech)
                            </p>
                            <p className="font-poppins pb-2">2018 | Centre National de la Danse (CND), Paris, France
                            </p>
                            <p className="font-poppins pb-2">Nora Chimpaumire (Animist Technology)
                            </p>
                            <p className="font-poppins pb-2">Francoise Verret (Art and Education)
                            </p>
                            <p className="font-poppins pb-2">danceGATHERING, Lagos, Nigeria
                            </p>
                            <p className="font-poppins pb-2">Masterclass Contemporary Dance (Technology of the Circle) Training with Onye
                            </p>
                            <p className="font-poppins pb-2">Ozuzu (University of Florida, USA) and Qudus Onikeku </p>
                            <p className="font-poppins pb-2">(QDance Center, Lagos,Nigeria)
                            </p>
                            <p className="font-poppins pb-2">2017 | danceGATHERING, Lagos, Nigeria
                                Masterclass Contemporary Dance with Horacio Macaucau (Mozambique)
                            </p>
                            <p className="font-poppins pb-2">Onye Ozuzu (University of Florida, USA)
                            </p>
                            <p className="font-poppins pb-2">Seifedinne Manai (Tunisha/France)
                            </p>
                            <p className="font-poppins pb-2">Qudus Onikeku (QDance Center, Lagos, Nigeria)
                            </p>
                            <p className="font-poppins pb-2">2016 | Dancing Cities with Qudus Onikeku, Abuja, Nigeria
                                German Embassy and Institut Français, Masterclass and Showcase

                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Resume