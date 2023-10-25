import '../assets/Styles/grid-Container.css'
import '../assets/Styles/font.css'
export default function Header() {
    return (
        <div className="header">
            <nav className="p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-4xl Barlow font-extrabold">sunnyside</div>
                    <div className="hidden md:flex space-x-12">
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Services</a>
                        <a href="#" className="text-white">Projects</a>
                        <button href="#" className="text-black rounded-2xl bg-white">CONTACT</button>
                    </div>
                    <div className="md:hidden">
                        <button id="menu-toggle" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div id="mobile-menu" className="hidden md:hidden bg-blue-500">
                <a href="#" className="block text-white p-3">首页</a>
                <a href="#" className="block text-white p-3">关于我们</a>
                <a href="#" className="block text-white p-3">服务</a>
                <a href="#" className="block text-white p-3">联系我们</a>
            </div>
        </div>
    )
}