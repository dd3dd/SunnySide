import '../assets/Styles/grid-Container.css'
import '../assets/Styles/font.css'
import '../assets/Styles/headerContent.css'
import NavBar from './NavBar'
export default function Header() {
    return (
        <div className="header ">
            <NavBar />
            <p className='z-10 middleText relative text-center tracking-widest font-black text-5xl Fraunces text-white'>WE ARE CREATIVES</p>
        </div>
    )
}