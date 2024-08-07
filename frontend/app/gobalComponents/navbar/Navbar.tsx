import NavElements from './NavElements';

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-8 px-6 2xl:px-0">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OnBoardingAI</span>
        </a>
       
            <div className="flex-grow flex justify-center items-center space-x-20 rtl:space-x-reverse md:flex">
                <NavElements icon="https://img.icons8.com/?size=100&id=83986&format=png&color=FFFFFF"/>
                <NavElements icon="https://img.icons8.com/?size=100&id=JnHXhz9KQ8RC&format=png&color=FFFFFF"/>
                <NavElements icon="https://flowbite.com/docs/images/logo.svg"/>
                
            </div>
            {/* needs to make dynamic to small screens */}
        </div>
        </nav>

    )
}

export default Navbar;