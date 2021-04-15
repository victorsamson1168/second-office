 
 import Sec from "../styles/BlogSectionB.module.scss"
 import { Button } from "@material-ui/core";

 const SectionB=()=>
 {
     return(
        <div className={Sec.bgColor}>
        <div className="containerside">
        <div className={Sec.heightContainer}>
          <div className={Sec.subContainer}>
            <div className={Sec.left}>
              <h1 className={"title " + Sec.titleLocal}>
                Microsoft, Amazon & Citibank speedrun software development from
                their satellite offices in India. Follow suit.
              </h1>
              <p className={Sec.sub}>
                20,000+ overseas software engineers, ready to be seated in
                <br /> an
                office.
                 Accountability meets remote teams. 20,000+ <br />overseas
                software engineers.
              </p>
              <Button variant="contained" size="large" className={Sec.clrBtn}>
                Book a call
              </Button>
            </div>
            <div className={Sec.right}>
              <div className={Sec.image}></div>
            </div>
          </div>
        </div>
</div>
      </div>

     )

 }
 export default SectionB;