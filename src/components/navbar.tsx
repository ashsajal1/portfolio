import Link from "next/link";
import { RiTwitterXLine, RiGithubFill  } from "react-icons/ri";
import SwitchButton from "./switch-button";

export default function Navbar() {
  return (
    <nav className='flex bg-gradient-to-br from-primaryLow to-secondaryLow items-center justify-between py-2 px-12 h-[60px] border'>
        <div className="text-2xl font-bold gradient-text">Sajal</div>
        <div className='flex items-center justify-between gap-2'>
            <Link target="_blink" href='https://x.com/ashsajal1'><RiTwitterXLine className="text-primary" /></Link>
            <Link target="_blink" href='https://github.com/ashsajal1'><RiGithubFill className="text-primary h-5 w-5" /></Link>

            <SwitchButton />
        </div>
    </nav>
  )
}
