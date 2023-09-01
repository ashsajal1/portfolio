import { useState } from "react"
import MobileMenu from "./MobileMenu"
import { useTheme } from "../context/ThemeContext"
import { CiDark, CiLight } from "react-icons/ci"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const { toggleTheme, theme } = useTheme()

    return (
        <>
            <div className="navbar bg-gradient-to-r from-green-500 to-blue-500 dark:text-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>

                <div className="navbar-end">
                    <label onClick={() => setOpenMenu(!openMenu)} className="btn btn-ghost btn-circle  md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>

                    <div className="hidden md:flex md:justify-center md:items-center">
                        <button className="btn btn-ghost">
                            Services
                        </button>
                        <button className="btn btn-ghost">
                            Contact
                        </button>
                        {theme === 'light' ? <CiDark size={30} onClick={toggleTheme} /> : <CiLight size={30} onClick={toggleTheme} />}
                    </div>
                </div>

            </div>

            <MobileMenu isOpen={openMenu} onClose={() => setOpenMenu(!openMenu)} />
        </>
    )
}
