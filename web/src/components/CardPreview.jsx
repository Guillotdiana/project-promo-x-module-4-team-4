import Profile from "./Profile";
import Like from "./Like";

const CardPreview = ({ userData, onLike, favBooks }) => {

  if (!userData) {
    return null;
  }
  const { title, published, shop, reviews, genre, descr, name, country, image, photo } = userData;

  const handleLike = () => {
    if (typeof onLike === 'function') {
      onLike(userData);
    }
  };

  return (
    <div className="card-preview-container">
      <a className="card-link" href={`https://project-promo-x-module-4-team-4.onrender.com/detailBook/${userData.idBook}`} target="_blank">
      <article className="card">
        <h2 className="card__projectTitle"><span className="card__projectTitle--text">Tarjeta del libro</span></h2>
        <div className="card__author">
          <Profile photo={photo} />
          <h3 className="card__name">{name || "Almudena Grandes"}</h3>
          <p className="card__job">{country || "España"}</p>
        </div>
        <div className="card__project">
          <h3 className="book__title">{title || "Inés y la alegría"}</h3>
          <p className="card__slogan">{published || "2010"}</p>
          <h3 className="card__descriptionTitle">Descripción del libro</h3>
          <p className="card__description">{descr || "Una historia de amor, y la historia de unos días que pudieron cambiar para siempre el destino de España"}</p>
          <div className="card__technicalInfo">
            <p className="card__technologies">{genre || "Novela histórica"}</p>
            <a className="icon icon__www" href={reviews || "#"} title="Haz click para ver reseñas el libro" target="_blank">
              Enlace a las reseñas
            </a>
            <a className="icon icon__github" href={shop || "#"} title="Haz click para obtener el libro" target="_blank">
              Enlace al libro
            </a>

          </div>
        </div>
      </article>
      </a>
      <Like favBooks={favBooks} id={userData.idBook} onLike={handleLike} />
    </div>
  );
};

export default CardPreview;

