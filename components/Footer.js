import Footer from "../styles/Footer.module.scss";
import Social from "../assests/social/social.svg";
import SocialA from "../assests/social/socialA.svg";
import SocialB from "../assests/social/socialB.svg";
import SocialC from "../assests/social/socialC.svg";
import Logo from "../assests/logo.svg";
import Arrow from "../assests/arrowDown.svg";
import Geo from "../assests/geography.svg";
import { Button } from "@material-ui/core";
import Drop from "../components/DropDown";


const Foot = (props) => {
  let colorCheck = "";
  if (props.color === "black") {
    colorCheck = { backgroundColor: "#000000" };
  }

  const language=["english","korean"];

  return (
    <>
      <div className={Footer.banner} style={{ ...colorCheck }}>
        <p className={Footer.title}>
          We operate 40,000 <br />
          We give them an office.
        </p>
        <Button variant="contained" size="large" className={Footer.clrBtn}>
          Schedule a free tour
        </Button>
      </div>
      <div className={"containerside " + Footer.main}>
        <div className={Footer.container}>
          <div className={Footer.left}>
            <Logo />
            <p>
              A satellite office, your team in <br />
              India that we manage.
            </p>
            <div className={Footer.social}>
              <Social className={Footer.element} />
              <SocialA className={Footer.element} />
              <SocialB className={Footer.element} />
              <SocialC className={Footer.element} />
            </div>
            <div className={Footer.langChange}>
            <Drop  listItems={language} className={Footer.lang}><Geo className={Footer.dropdown} />English</Drop> 
              
              
            </div>
          </div>

          <div className={Footer.right}>
            <div className={Footer.pro}>
              <div className={Footer.product}>
                <h5>Product</h5>
                <p>How it works</p>

                <p>Pricing</p>
                <p>Blog</p>

                <p>CareerChat</p>
              </div>
            </div>
            <div className={Footer.pro}>
              <div className={Footer.product}>
                <h5>Company</h5>
                <p>About</p>

                <p>News</p>
                <p>Careers</p>

                <p>Terms of Use</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className={Footer.con}>
            <div className={Footer.contact}>
              <h5>Contact</h5>
              <p className={Footer.heading}>Main Offices</p>
              <p>
                McKinley Rice Inc.,
                <br />
                Teheran-ro 216, 5F <br />
                Gangnam, Seoul, Korea 06221
              </p>
              <p className={Footer.heading}>Main Offices</p>
              <p>
                McKinley Rice Inc.,
                <br />
                Teheran-ro 216, 5F <br />
                Gangnam, Seoul, Korea 06221
              </p>
              <p className={Footer.heading}>Call</p>
              <p>
                U.S. +1 (302) 608-9040 <br />
                S. Korea +82 (070) 8095-4586 <br />
                India +91 (742) 805-2448 <br />
              </p>

              <p className={Footer.heading}>Write</p>
              <p>info@mckinleyrice.com</p>
            </div>
            </div>
          </div>
        </div>
        <p className={Footer.small}>
          © Copyright 2021 McKinley & Rice, Inc. All rights reserved. Various
          trademarks held by their respective owners.
        </p>
      </div>
    </>
  );
};
export default Foot;
