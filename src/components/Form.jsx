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
        <select className="addForm__input" name="genre" id="genre" onChange={handleForm} value={props.userData.genre}>
          <option value="">Selecciona el género literario</option>
          <option value="aventura">Aventura</option>
          <option value="autob">Autobiografía</option>
          <option value="biografia">Biografía</option>
          <option value="cienciaFiccion">Ciencia Ficción</option>
          <option value="comedia">Comedia</option>
          <option value="cuento">Cuento</option>
          <option value="distopia">Distopía</option>
          <option value="drama">Drama</option>
          <option value="ensayo">Ensayo</option>
          <option value="erotica">Erótica</option>
          <option value="epica">Épica</option>
          <option value="epistolar">Epistolar</option>
          <option value="fantasia">Fantasía</option>
          <option value="gastronomico">Gastronómico</option>
          <option value="historico">Histórico</option>
          <option value="infantil">Infantil</option>
          <option value="misterio">Misterio</option>
          <option value="novela">Novela</option>
          <option value="novelaGra">Novela Gráfica</option>
          <option value="onirico">Onírico</option>
          <option value="parodia">Parodia</option>
          <option value="poesia">Poesía</option>
          <option value="policiaco">Policíaco</option>
          <option value="realismoMagico">Realismo Mágico</option>
          <option value="romantico">Romántico</option>
          <option value="satirico">Satírico</option>
          <option value="teatro">Teatro</option>
          <option value="terror">Terror</option>
          <option value="tragedia">Tragedia</option>
          <option value="utopia">Utopía</option>
          <option value="viajes">Viajes</option>
          <option value="western">Western</option>
          <option value="xenoficcion">Xenoficción</option>
          <option value="zombie">Zombie</option>
          </select>  
        {/* <input className="addForm__input" type="text" name="genre" id="genre" placeholder="Género del libro" maxLength="20" onChange={handleForm} value={props.userData.genre}/> */}
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
