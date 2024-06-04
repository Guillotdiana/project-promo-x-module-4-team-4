import companyLogo from "../images/logo.png";
import logoSponsor from "../images/adalab.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <Link className="header__brand" to="/" title="Haz click para volver a la página inicial">
      <img className="header__companyLogo" src={companyLogo} alt="Logo books4you"/>
      {/* <h1 className="header__title">Books4You</h1> */}
         </Link>
         <section className="hero">
      <h2 className="title">Books4You</h2>
      <p className="hero__text">Crea tarjetas para mostrar tus libros favoritos</p>
    </section>
     <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
   </header>
  );
};

export default Header;