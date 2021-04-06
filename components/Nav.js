import Navbar from '../styles/Nav.module.scss'
import Logo from '../assests/logo.svg'
import Button from '@material-ui/core/Button';


const Nav=()=>
{
    const company=['about','news','careers'];
    return(
        <div className ={'containerside '+Navbar.nav}>
            
            <div className={Navbar.logo}>
                <Logo/>
            </div>

            <div className={Navbar.links}>
                <p>How it works</p>
                <p>Pricing</p>
                <p>Resources</p>          

                <p>Company</p>
                <Button variant="contained" size="large" className ={Navbar.btn}>Book a call</Button>


            </div>
        </div>
    );
}
 export default Nav;