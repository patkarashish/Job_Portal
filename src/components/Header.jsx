import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className="py-4 flex justify-between items-center  ">
                <Link>
                    <img src="/logo.png" className="h-20" />
                </Link>
            </nav>
        </>
    )
}

export default Header