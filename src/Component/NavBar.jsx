export default function NavBar() {
    return (
        <nav className="relative p-4 z-10">
            <div className="container mx-auto flex justify-between">
                <div className="pl-2 pb-2 text-white text-4xl Barlow font-extrabold">sunnyside</div>
                <div className="hidden md:flex items-center space-x-12">
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Projects</a>
                    <button href="#" className="text-xs Fraunces w-28 h-10 text-black rounded-3xl bg-white">CONTACT</button>
                </div>
                <div className="md:hidden flex items-center">
                    <button id="menu-toggle" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
