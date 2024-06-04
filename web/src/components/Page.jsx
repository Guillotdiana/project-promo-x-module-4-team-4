import Form from "./Form";
import Preview from "./Preview";
import { Link } from "react-router-dom";

const Page = (props) => {


    
  return (
    <main className="main">
    <section className="hero">
      <Link to="/proyectos" ><button className="button--link" >Ver otros libros</button></Link>
    </section>

    <Preview userData= {props.userData} updateAvatar={props.updateAvatar}/>
    <Form function={props.function} updateAvatar={props.updateAvatar} userData= {props.userData} url={props.url} setUrl={props.setUrl}/>
  </main>
  )
}

export default Page