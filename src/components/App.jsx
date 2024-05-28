import "../styles/App.scss";


import { useState } from "react";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

function App() {

  const [userData, setUserData] = useState({name: "", slogan: "", technologies: "", repo: "", demo: "", desc: "", autor: "", job: "", image: "", photo: ""});

  const [url, setUrl] = useState("");

  
  const changeData = (fieldName,inputValue) => {

 
    setUserData ({...userData, [fieldName]: inputValue})

  }

  const updateAvatar = (avatar, image) => {
    setUserData({...userData, [image]: avatar});
  };


  return (
  <>
   <div className="container">

    <Header/>

    <Page function= {changeData}  userData= {userData} updateAvatar={updateAvatar} url={url} setUrl={setUrl} />

    <Footer/>
   </div>
  </>
)
}
export default App

