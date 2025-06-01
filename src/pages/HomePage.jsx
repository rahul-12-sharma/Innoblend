import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HumanAI from '../components/HumanAI'
import Services from '../components/Services'
import { HiOutlineMail } from 'react-icons/hi';



function HomePage() {
    return (
        <div>
            <Banner />
            <Services />
            <HumanAI />
            <Footer />

            <a
                href="/contact"
                className="fixed bottom-25 right-6 flex items-center gap-2 bg-gradient-to-r from-red-500 to-cyan-500 hover:from-red-600 hover:to-cyan-600 text-white px-4 py-2 pr-5 rounded-full shadow-lg hover:scale-105 transition-transform z-50 group"
                title="Contact Us"
            >
                <div className="p-2 bg-white/20 rounded-full">
                    <HiOutlineMail size={24} className="text-white" />
                </div>
                <span className="font-semibold hidden md:inline text-white tracking-wide group-hover:underline">
                    Contact Us
                </span>
            </a>


        </div>
    )
}

export default HomePage