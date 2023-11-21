import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
    return ( 
    <nav>

        <div className = "logo">
        <a href="/">
           <Image src='/hku-logo.svg' width={350} height={100}/>
           </a>
        </div>

        <div className='NavBarElements'>
        <Link href="/">Data</Link>
        <Link  href="/about">About</Link>
        </div>

    </nav> 
    );
}
 
export default Navbar;