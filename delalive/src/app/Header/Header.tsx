import Link from "next/link";
import "./Header.css"

export default function Header(){

    return(
        <header>
            <h1 className="header-h1">
                <p className="header-title">
                    Dela Live
                </p>
            </h1> 
            <nav> 
            <ul className="header-ul">
                    <li className="header-li">
                        <Link href="/" className="header-a">Home</Link>
                    </li>
                    <li className="header-li">
                        <Link href="/About" className="header-a">Skapa</Link>
                    </li>
                    <li className="header-li">
                        <Link href="Component/About" className="header-a">About</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}