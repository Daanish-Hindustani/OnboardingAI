interface NavElementsProps {
    icon: string;
}

const NavElements = ({ icon }: NavElementsProps) => {
    return (
        <div>
            <div className="nav-element-box hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
                <img src={icon} alt="Nav Icon" className="h-6 w-6" />
            </div>
        </div>
    )
}

export default NavElements;