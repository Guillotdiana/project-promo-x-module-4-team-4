import Profile from "./Profile";


const CardPreview = ({userData}) => {
  const {name, slogan, technologies, repo, demo, desc, autor, job, image, photo} = userData;

  return (
    <article className="card">
        <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

        <div className="card__author">
          <Profile photo={photo}/>
          <p className="card__job">
          {job || "Full stack Developer"}
          </p>
          <h3 className="card__name">{autor || "Emmelie Bjôrklund"}</h3>
        </div>
    
        <div className="card__project">            
          <h3 className="card__name">{name || "Elegant Workspace"}</h3>
          <p className="card__slogan">{slogan || "Diseños Exclusivos"}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{technologies || "React JS - HTML - CSS"}</p>
        
            <a className="icon icon__www" href={demo || "#"} title="Haz click para ver el proyecto online" target="_blank">
              Web link
            </a>
            <a className="icon icon__github" href={repo || "#"} title="Haz click para ver el código del proyecto">
              GitHub link
            </a>
          </div>
        </div>
      </article>
  )
}

export default CardPreview