import Navbar from "../styles/Nav.module.scss";
import Logo from "../assests/logo.svg";
import LogoWhite from "../assests/logowhite.svg";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Arrow from "../assests/arrowDown.svg"
import Drop from "../components/DropDown"


const Nav = (props) => {
  const company = ["about", "news", "careers"];
  let logoColor=<Logo />;
  let parentContainer=Navbar.none;
  let navBarlinks=Navbar.links;

  /**logic for black theme navbar */
  if(props.color==='black')
  {
    logoColor=<LogoWhite/>;
    parentContainer=Navbar.parentContainer;
    navBarlinks+=" "+Navbar.whiteLink;
  }

  return (
    <div className={parentContainer}>
    <div className={"containerside " + Navbar.nav}>
      <div className={Navbar.logo}>
       { logoColor }
      </div>

      <div className={navBarlinks}>
        <p>How it works</p>
        <p>Pricing</p>
        <p>Resources</p>
        <p>Company</p>
        <Drop/>
        
        <Button variant="contained" size="large" className={Navbar.btn}>
          Book a call
        </Button>
      </div>
    </div>
    </div>
  );
};
export default Nav;
