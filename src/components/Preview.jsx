import CardPreview from "./CardPreview";
import defaultAvatar from '../images/mockup-placeholder.png';

const Preview = (props) => {
  const avatar = props.userData.image === '' ? defaultAvatar : props.userData.image;
  return (
    <section className="preview">
      <div className="mockup"></div>
      <div className="projectImage"
      style={{ backgroundImage: `url(${avatar})` }} ></div>
      <div className="projectImagePlaceholder"></div>
      <CardPreview userData= {props.userData} />
      
    </section>
  )
}

export default Preview;