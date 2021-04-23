import Navbar from "../styles/Nav.module.scss";
import Logo from "../assests/logo.svg";
import LogoWhite from "../assests/logowhite.svg";
import Button from "@material-ui/core/Button";
import Drop from "../components/DropDown";
import Chip from "@material-ui/core/Chip";
import DropDownStyle from "../styles/DropDownNavElement.module.scss";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import Grow from "@material-ui/core/Grow";

const Nav = (props) => {
  let company = [<p>about</p>, <p>news</p>, <p>careers</p>];
  let resources = [
    <p>Blogs</p>,
    <p>
      Software Engineering Team Structure Analyzer™{" "}
      <span>
        <Chip className={DropDownStyle.chip} size="small" label="New" />
      </span>
    </p>,
  ];
  // normal state of elements without color prop
  let logoColor = <Logo />;
  let hamburger;
  let parentContainer = Navbar.none;
  let navBarlinks = Navbar.links;
  let drops = [
    <Drop listItems={resources} className={Navbar.drop}>
      Resources
    </Drop>,
    <Drop listItems={company} className={Navbar.drop}>
      Company
    </Drop>,
  ];
  // end

  /**logic for black theme navbar */
  if (props.color === "black") {
    logoColor = <LogoWhite />;
    parentContainer = Navbar.parentContainer;
    navBarlinks += " " + Navbar.whiteLink;
    hamburger += " " + Navbar.hamburgerWhite;
    drops = [
      <Drop listItems={resources} className={Navbar.drop} color="black">
        Resources
      </Drop>,
      <Drop listItems={company} className={Navbar.drop} color="black">
        Company
      </Drop>,
    ];
  }

  /**
   *
   * re
   * @returns
   */
  const NavMenu = () => {
    // threshhold value for the layout change
    const THRESHOLD = 1180;

    const [isMobile, setIsMobile] = useState(false);
    
    const checkThreshhold=()=>{
      if (window.innerWidth <= THRESHOLD) {
        setIsMobile(true);
      } else if (!isMobile) {
        setIsMobile(false);
      }

    }

    useEffect(() => {
      
      
      
      checkThreshhold();

      /**event listener */
      window.addEventListener("resize",checkThreshhold);
      return () => window.removeEventListener("resize", checkThreshhold);
    }, []);

    const toggleFunction = () => {
      setOpenMenu(!openMenu);
    };

    const [openMenu, setOpenMenu] = useState(false);

    if (isMobile) {
      return (
        <>
          <Collapse in={openMenu} timeout={1000}>
            <div className={navBarlinks}>
              <div
                className={`${Navbar.openDropDown} ${
                  openMenu ? Navbar.active : " "
                }`}
              >
                <Button className={Navbar.normalBtn}>How it works</Button>
                <Button className={Navbar.normalBtn}>Pricing</Button>
                {loadDrop()}

                <Button variant="contained" size="large" className={Navbar.btn}>
                  Book a call
                </Button>
              </div>
            </div>
          </Collapse>
          <Button className={Navbar.hamburger} onClick={toggleFunction}>
            <MenuRoundedIcon
              fontSize="large"
              className={hamburger}
            ></MenuRoundedIcon>
          </Button>
        </>
      );
    } else {
      return (
        <div className={navBarlinks}>
          <div
            className={`${Navbar.openDropDown} ${
              openMenu ? Navbar.active : " "
            }`}
          >
            <Button className={Navbar.normalBtn}>How it works</Button>
            <Button className={Navbar.normalBtn}>Pricing</Button>
            {loadDrop()}

            <Button variant="contained" size="large" className={Navbar.btn}>
              Book a call
            </Button>
          </div>
        </div>
      );
    }
  };

  const loadDrop = () => {
    return drops.map((item) => item);
  };

  return (
    <div className={parentContainer}>
      <div className={"containerside " + Navbar.nav}>
        <div className={Navbar.logo}>{logoColor}</div>
        <NavMenu />
      </div>
    </div>
  );
};
export default Nav;
