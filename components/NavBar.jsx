import Link from "next/link";

const NavBar = () => {


    // const [logoWidth, setLogoWidth] = useState("30px")
    
    
    return ( 
        <header>
            <div id="container-fluid">
                <div className="row justify-content-around p-0 mb-5">
                    <div className="col-1">
                        <img src="/logo.svg" id="headerLogo" alt="My logo" />
                    </div>
                    <div className="col-5">
                        {/* <Link href="/about"><a>About</a></Link>
                        <Link href="/pricing"><a>Pricing</a></Link>
                        <Link href="/contact"><a id="navContactLink" className="borderSorround">Contact Me</a></Link> */}
                    </div>
                    <div id="stickyMedia">
                        <p><a href="https://web.facebook.com/cyuzuzo.aime.18" target="_blank" rel="noreferrer">Facebook</a></p>
                        <p><a href="https://www.instagram.com/aimecyuzuzo5/" target="_blank" rel="noreferrer">Instagram</a></p>
                        <p><a href="https://twitter.com/AimeCyuzuzo1" target="_blank" rel="noreferrer">Twitter</a></p>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default NavBar;