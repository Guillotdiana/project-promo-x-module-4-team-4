import GetAvatar from "./GetAvatar";
import fetchData from "../services/Fetch";

const Form = (props ) => {

  const handleForm = (ev) =>{
    const fieldName = ev.target.id;
    const inputValue = ev.target.value;
    props.function(fieldName, inputValue);
  }

    const fieldNames = {
    title: "Título del libro",
    published: "Año de publicación" ,
    shop: "Obtener",
    reviews: "Reseñas",
    genre: "Género del libro",
    descr: "Cuéntanos que te ha parecido",
    author: "Nombre del autor",
    country: "Pais del autor",
  };

  const validateFields = (userData) => {
    const requiredFields = ["title", "published", "shop", "reviews", "genre", "descr", "author", "country"];
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
        <legend className="addForm__title">Cuéntanos sobre el libro</legend>
        <input className="addForm__input" type="text" name="title" id="title" placeholder="Título del libro" maxLength="24" onChange={handleForm} value={props.userData.title} />
        <input className="addForm__input" type="text" name="published" id="pusblished" placeholder="Año de publicación" maxLength="4" onChange={handleForm} value={props.userData.published}/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="shop" id="shop" placeholder="Obtener" maxLength="40" onChange={handleForm} value={props.userData.shop} />
          <input className="addForm__input" type="url" name="reviews" id="reviews" placeholder="Reseñas" maxLength="70" onChange={handleForm} value={props.userData.reviews} />
        </div>         
        <input className="addForm__input" type="text" name="genre" id="genre" placeholder="Género del libro" maxLength="20" onChange={handleForm} value={props.userData.genre}/>
        <textarea className="addForm__input" type="text" name="descr" id="descr" placeholder="Cuéntanos que te ha parecido" maxLength="40" rows="5" onChange={handleForm} value={props.userData.descr}></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input className="addForm__input" type="text" name="author" id="author" placeholder="Nombre del autor" maxLength="16" onChange={handleForm} value={props.userData.author}/>
        <input className="addForm__input" type="text" name="country" id="country" placeholder="Pais del autor" maxLength="15" onChange={handleForm}  value={props.userData.country}/>
      </fieldset>
      <div className="card-url-box"><p>{props.url}</p></div>
      <fieldset className="addForm__group--upload">
             
        <GetAvatar  updateAvatar={props.updateAvatar} id="image" text="Subir foto del libro"/>

        <GetAvatar  updateAvatar={props.updateAvatar} id="photo" text="Subir foto del autor"/>

        <button className="button--large" onClick={handleClick}>Guardar libro</button>

        
      </fieldset>
      
    </form>
    
  );
};


export default Form;
