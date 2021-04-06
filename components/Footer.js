import Footer from "../styles/Footer.module.scss";
import Social from "../assests/social/social.svg";
import SocialA from "../assests/social/socialA.svg";
import SocialB from "../assests/social/socialB.svg";
import SocialC from "../assests/social/socialC.svg";
import Logo from "../assests/logo.svg";
import Arrow from "../assests/arrowDown.svg";
import Geo from "../assests/geography.svg";

const Nav = () => {
  return (
      <div className={'containerside '+Footer.main}>
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
        <div className={Footer.social}>
          <Geo className={Footer.dropdown} />
          <p className={Footer.dropdown}>English</p>
          <Arrow className={Footer.dropdown} />
        </div>
      </div>

      <div className={Footer.right}>
        <div className={Footer.product}>
          <h5>Product</h5>
          <p>How it works</p>

          <p>Pricing</p>
          <p>Blog</p>

          <p>CareerChat</p>
        </div>
        <div className={Footer.product}>
          <h5>Company</h5>
          <p>About</p>

          <p>News</p>
          <p>Careers</p>

          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
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
    <p className={Footer.small}>© Copyright 2021 McKinley & Rice, Inc. All rights reserved. Various trademarks held by their respective owners.</p>
    </div>
  );
};
export default Nav;
