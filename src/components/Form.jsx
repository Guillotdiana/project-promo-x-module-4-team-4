import GetAvatar from "./GetAvatar";
import fetchData from "../services/Fetch";

const Form = (props ) => {

  const handleForm = (ev) =>{
    const fieldName = ev.target.id;
    const inputValue = ev.target.value;
    props.function(fieldName, inputValue);
  }

    const fieldNames = {
    name: "Nombre del proyecto",
    slogan: "Slogan",
    repo: "Repositorio",
    demo: "Demo",
    technologies: "Tecnologías",
    desc: "Descripción",
    autor: "Nombre del autor",
    job: "Trabajo del autor"
  };

  const validateFields = (userData) => {
    const requiredFields = ["name", "slogan", "repo", "demo", "technologies", "desc", "autor", "job"];
    const missingFields = requiredFields.filter(field => !userData[field] || userData[field].trim() === "");
    return missingFields;
  };

  const handleClick = (ev) => {
    ev.preventDefault()
    
    const missingFields = validateFields(props.userData);
    if (missingFields.length > 0) {
      const missingFieldNames = missingFields.map(field => fieldNames[field]);
      props.setUrl("Faltan los siguientes campos: " + missingFieldNames.join(", "));
    } else {
      fetchData(props.userData).then((response) => {
        if (response.success) {
          props.setUrl(<a className="card-url" href={response.cardURL} target="_blank">Click aquí para ver tu tarjeta</a>);
        } else {
          props.setUrl("Hubo un error al generar la URL.");
        }
    })
  }
}


  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleForm} value={props.userData.name} />
        <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleForm} value={props.userData.slogan}/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleForm} value={props.userData.repo} />
          <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleForm} value={props.userData.demo} />
        </div>         
        <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleForm} value={props.userData.technologies}/>
        <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleForm} value={props.userData.desc}></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleForm} value={props.userData.autor}/>
        <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"onChange={handleForm}  value={props.userData.job}/>
      </fieldset>
      <div className="card-url-box"><p>{props.url}</p></div>
      <fieldset className="addForm__group--upload">
             
        <GetAvatar  updateAvatar={props.updateAvatar} id="image" text="Subir foto de proyecto"/>

        <GetAvatar  updateAvatar={props.updateAvatar} id="photo" text="Subir foto de la autora"/>

        <button className="button--large" onClick={handleClick}>Guardar proyecto</button>

        
      </fieldset>
      
    </form>
    
  );
};


export default Form;
