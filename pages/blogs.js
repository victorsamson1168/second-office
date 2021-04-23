import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SectionB from "../components/BlogSectionB";
import BlogSectionA from "../components/BlogSectionA"
import BlogSectionC from "../components/BlogSectionC"


const blog=()=> {
  return (
    <div>
      <Nav></Nav>
      <BlogSectionA></BlogSectionA>
      <SectionB/>
      <BlogSectionC/>
      

      <Footer/>

    </div>
  )
}
 export default blog;
