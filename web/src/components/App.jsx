import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
import { Routes,Route,Link } from "react-router-dom";
import Landing from "./Landing";
import List from "./List";
import FavList from "./FavlList";

function App() {

  const [userData, setUserData] = useState({title: "", published: "", shop: "", reviews: "", genre: "", descr: "", name: "", country: "", image: "", photo: ""});

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
    <Routes>
    <Route path="/" element={
      <Landing/>
    }/>
    <Route path="/crear" element={<>
       <Header/>
       <Page function= {changeData}  userData= {userData} updateAvatar={updateAvatar} url={url} setUrl={setUrl} />
       <Footer/>
      </>
    }/>
    <Route path="/proyectos" element={<List />}/>
    <Route path="/listafavoritos" element={<FavList userData={userData}/>}/>
    </Routes>
   </div>
  </>
)
}
export default App

