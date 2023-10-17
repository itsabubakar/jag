import imageOne from '../assets/images/image16.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Calendar = () => {
    return (
        <div className="bg-[#F1F1F2]">
            <div className="max-w-6xl mx-auto px-5 xl:px-0">
                <Navbar />
            </div>

            <div className='md:flex justify-between max-w-6xl mx-auto px-5 xl:px-0 pt-16 gap-4 pb-28'>
                <div className='max-w-[377px]'>

                    <div className='pb-16'>
                        <h2 className='text-xl font-open-sans font-semibold'>REINCARNATION Tour 2023</h2>
                        <p className='font-poppins pt-2' >20th October, France,</p>
                        <p className='font-poppins pt-2'>23rd October,Slovenia.</p>
                        <p className='font-poppins pt-2'>18th November , Italy.</p>
                        <p className='font-poppins pt-2'>21st-23rd November, Switzerland.</p>
                        <p className='font-poppins pt-2'>26th Novemeber, Switzerland.</p>
                    </div>

                    <div className='pb-16'>
                        <h2 className='text-xl font-open-sans font-semibold'>No Man’s Land Residency and showing at the Biennale de la danse Lyon</h2>
                        <p className='font-poppins pt-2' >10th - 24th September</p>
                    </div>

                    <div>
                        <h2 className='text-xl font-open-sans font-semibold'>Panelist at the DSA</h2>
                        <p className='font-poppins pt-2' >October 28th</p>
                    </div>



                </div>

                <div>
                    <div className='max-w-[417px] pt-10 md:pt-0'>
                        <img src={imageOne} alt="Calender image" />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
export default Calendar