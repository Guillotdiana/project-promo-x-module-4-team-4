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
    name: "Nombre del autor",
    country: "Pais del autor",
    photo: "Foto del autor",
    image: "Portada del libro"
  };

  const validateFields = (userData) => {
    const requiredFields = ["title", "published", "shop", "reviews", "genre", "descr", "name", "country", "photo", "image"];
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
          props.setUrl(<a className="card-url" href={response.cardURL} target="_blank">◇ Click aquí para ver tu tarjeta ◇</a>);
        } else if (!response.success) {
          props.setUrl(<p>Hubo un error al generar la URL.</p>);
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
        <input className="addForm__input" type="text" name="published" id="published" placeholder="Año de publicación" maxLength="4" onChange={handleForm} value={props.userData.published}/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="shop" id="shop" placeholder="Obtener" maxLength="40" onChange={handleForm} value={props.userData.shop} />
          <input className="addForm__input" type="url" name="reviews" id="reviews" placeholder="Reseñas" maxLength="70" onChange={handleForm} value={props.userData.reviews} />
        </div>      
        <select className="addForm__input " name="genre" id="genre" onChange={handleForm} value={props.userData.genre} required>
          <option value="">Selecciona el género literario</option >
          <option value="Aventura">Aventura</option>
          <option value="Autobiografía">Autobiografía</option>
          <option value="Biografia">Biografía</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Comedia">Comedia</option>
          <option value="Cuento">Cuento</option>
          <option value="Distopia">Distopía</option>
          <option value="Divulgación">Divulgación</option>
          <option value="Drama">Drama</option>
          <option value="Ensayo">Ensayo</option>
          <option value="Erótica">Erótica</option>
          <option value="Épica">Épica</option>
          <option value="Epistolar">Epistolar</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Gastronómico">Gastronómico</option>
          <option value="Histórico">Histórico</option>
          <option value="Infantil">Infantil</option>
          <option value="Misterio">Misterio</option>
          <option value="Novela">Novela</option>
          <option value="Novela Gráfica">Novela Gráfica</option>
          <option value="Onírico">Onírico</option>
          <option value="Parodia">Parodia</option>
          <option value="Poesía">Poesía</option>
          <option value="Policíaco">Policíaco</option>
          <option value="Realismo Mágico">Realismo Mágico</option>
          <option value="Romántico">Romántico</option>
          <option value="Satírico">Satírico</option>
          <option value="Teatro">Teatro</option>
          <option value="Terror">Terror</option>
          <option value="Tragedia">Tragedia</option>
          <option value="Utopía">Utopía</option>
          <option value="Viajes">Viajes</option>
          <option value="Western">Western</option>
          <option value="Xenoficción">Xenoficción</option>
          <option value="Zombie">Zombie</option>
          </select>  
        {/* <input className="addForm__input" type="text" name="genre" id="genre" placeholder="Género del libro" maxLength="20" onChange={handleForm} value={props.userData.genre}/> */}
        <textarea className="addForm__input" type="text" name="descr" id="descr" placeholder="Cuéntanos qué te ha parecido" maxLength="40" rows="5" onChange={handleForm} value={props.userData.descr}></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del autor" maxLength="16" onChange={handleForm} value={props.userData.name}/>
        <input className="addForm__input" type="text" name="country" id="country" placeholder="Pais del autor" maxLength="15" onChange={handleForm}  value={props.userData.country}/>
      </fieldset>
      <div className="card-url-box">{props.url}</div>
      <fieldset className="addForm__group--upload">
             
        <GetAvatar  updateAvatar={props.updateAvatar} id="image" text="Subir foto del libro"/>

        <GetAvatar  updateAvatar={props.updateAvatar} id="photo" text="Subir foto del autor"/>

        <button className="button--large" onClick={handleClick}>Guardar libro</button>

        
      </fieldset>
      
    </form>
    
  );
};


export default Form;
