import Blog from "../styles/BlogSectionA.module.scss"

const SectionA=()=>{

  return (
    <>
      <div className="containerside">
        <div className={Blog.heightContainer}>
          <div className={Blog.subContainer}>
            <div className={Blog.left}>
              
              <div className={Blog.image}></div>
            </div>
            <div className={Blog.right}>
              <h1 className={"title " + Blog.titleLocal}>
                Microsoft, Amazon & Citibank speedrun software development from
                their satellite offices in India. Follow suit.
              </h1>
              <p className={Blog.sub}>
                20,000+ overseas software engineers, ready to be seated in an
                office.
                <br /> Accountability meets remote teams. 20,000+ overseas
                software engineers.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default SectionA;
