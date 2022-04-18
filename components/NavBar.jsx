import Link from "next/link";

const NavBar = () => {
    return ( 
        <div id="navBarContainer">
            <div>
                <img src="/logo.svg" id="headerLogo" alt="" />
            </div>
            <div>
                <Link href="/about"><a className="headerLink">About</a></Link>
                <Link href="/pricing"><a className="headerLink">Pricing</a></Link>
                <Link href="/contact"><a id="navContactLink" className="borderSorround">Contact Me</a></Link>
            </div>
            <div id="stickyMedia">
                <p><a href="#">Facebook</a></p>
                <p><a href="#">Instagram</a></p>
                <p><a href="#">Twitter</a></p>
            </div>
        </div>
     );
}
 
export default NavBar;