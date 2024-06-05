import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
import { Routes,Route,Link } from "react-router-dom";
import Landing from "./Landing";
import List from "./List";

function App() {

  const [userData, setUserData] = useState({title: "", published: "", shop: "", reviews: "", genre: "", descr: "", author: "", country: "", image: "", photo: ""});

  const [url, setUrl] = useState("");

  const [filterList, setFilterList] = useState("all")

  
  const changeData = (fieldName,inputValue) => {

 
    setUserData ({...userData, [fieldName]: inputValue})

  }

  const updateAvatar = (avatar, image) => {
    setUserData({...userData, [image]: avatar});
  };

  const filterBook = userData.filter((book)=>{
    if(genre === "aventura"){
      return book.genre === "aventura"
    }else if (genre === "autob"){
      return book.genre === "autob"
    }
  })


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
    <Route path="/proyectos" element={<List userData={userData} setFilterList={setFilterList}/>}/>
    </Routes>

   

    

   
   </div>
  </>
)
}
export default App

