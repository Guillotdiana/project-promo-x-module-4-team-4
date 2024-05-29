import companyLogo from "../images/laptop-code-solid.svg";
import logoSponsor from "../images/adalab.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <Link className="header__brand" to="/" title="Haz click para volver a la página inicial">
      <img className="header__companyLogo" src={companyLogo} alt="Logo books4you"/>
      <h1 className="header__title">Books4You</h1>
         </Link>
     <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
   </header>
  );
};

export default Header;