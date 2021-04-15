import Navbar from "../styles/Nav.module.scss";
import Logo from "../assests/logo.svg";
import LogoWhite from "../assests/logowhite.svg";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Arrow from "../assests/arrowDown.svg"
import Drop from "../components/DropDown"
import Chip from '@material-ui/core/Chip';
import DropDownStyle from "../styles/DropDownNavElement.module.scss"




const Nav = (props) => {
  let company = [<p>about</p>,<p>news</p>,<p>careers</p>];
  let resources=[<p>Blogs</p>,<p>Software Engineering Team Structure Analyzer™ <span><Chip className={DropDownStyle.chip} size="small" label="New" /></span></p>];


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
        <Drop listItems={resources} className={Navbar.drop}>Resources</Drop>
        <Drop  listItems={company} className={Navbar.drop}>Company</Drop>        

        <Button variant="contained" size="large" className={Navbar.btn}>
          Book a call
        </Button>
      </div>
    </div>
    </div>
  );
};
export default Nav;
