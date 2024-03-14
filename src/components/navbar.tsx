import Link from "next/link";
import { RiTwitterXLine, RiGithubFill  } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-2 px-12 h-[60px] border'>
        <div className="text-2xl font-bold gradient-text">Sajal</div>
        <div className='flex items-center justify-between gap-2'>
            <Link target="_blink" href='https://x.com/ashsajal1'><RiTwitterXLine /></Link>
            <Link target="_blink" href='https://github.com/ashsajal1'><RiGithubFill /></Link>
        </div>
    </nav>
  )
}
