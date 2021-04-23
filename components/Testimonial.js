import TestimonialStyle from "../styles/Testimonial.module.scss";
import Avatar from "@material-ui/core/Avatar";

function Testimonial() {
  return (
    <div className={TestimonialStyle.testimonialContainer}>
      <div className={TestimonialStyle.userDetails}>
        <Avatar className={TestimonialStyle.avatar}>Av</Avatar>
        <div className={TestimonialStyle.userData}>
          <p className={TestimonialStyle.name}>Jesse Goodall</p>
          <p className={TestimonialStyle.designation}>
            Product Manager at CouldBeUs
          </p>
        </div>
        
      </div>
      <h2 className={TestimonialStyle.review}>
          “We need top-notch talent to overtake our larger competitors, who
          often have much deeper pockets. That’s where our satellite office
          comes in.”
        </h2>
    </div>
  );
}

export default Testimonial;
