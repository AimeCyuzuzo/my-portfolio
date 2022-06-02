import Link from "next/link";

const NavBar = () => {


    // const [logoWidth, setLogoWidth] = useState("30px")
    
    
    return ( 
        <header>
            <div id="container-fluid">
                <div className="row justify-content-around p-0">
                    <div className="col-1">
                        <img src="/logo.svg" id="headerLogo" width="70px" height="50px" alt="" />
                    </div>
                    <div className="col-5">
                        {/* <Link href="/about"><a>About</a></Link>
                        <Link href="/pricing"><a>Pricing</a></Link>
                        <Link href="/contact"><a id="navContactLink" className="borderSorround">Contact Me</a></Link> */}
                    </div>
                    <div id="stickyMedia">
                        <p><a href="#">Facebook</a></p>
                        <p><a href="#">Instagram</a></p>
                        <p><a href="#">Twitter</a></p>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default NavBar;