import CardPreview from "./CardPreview";
import defaultAvatar from '../images/ebook-example.jpg';

const Preview = (props) => {
  const avatar = props.userData.image === '' ? defaultAvatar : props.userData.image;
  return (
    <section className="preview">
      <div className="projectImage"
      style={{ backgroundImage: `url(${avatar})` }} ></div>
      <CardPreview userData= {props.userData} />
    </section>
  )
}

export default Preview;