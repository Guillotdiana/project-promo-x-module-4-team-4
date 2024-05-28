import Form from "./Form";
import Preview from "./Preview";

const Page = (props) => {


    
  return (
    <main className="main">
    <section className="hero">
      <h2 className="title">Proyectos molones</h2>
      <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
      <a className="button--link" href="./">Ver proyectos</a>
    </section>

    <Preview userData= {props.userData} updateAvatar={props.updateAvatar}/>
    <Form function={props.function} updateAvatar={props.updateAvatar} userData= {props.userData} url={props.url} setUrl={props.setUrl}/>
  </main>
  )
}

export default Page