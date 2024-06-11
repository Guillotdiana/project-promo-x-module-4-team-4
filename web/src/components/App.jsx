import "../styles/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import List from "./List";
import FavList from "./FavList";

function App() {
  const [userData, setUserData] = useState({
    title: "",
    published: "",
    shop: "",
    reviews: "",
    genre: "",
    descr: "",
    name: "",
    country: "",
    image: "",
    photo: ""
  });

  const [url, setUrl] = useState("");
  
  const [favBooks, setFavBooks] = useState(() => {
    const savedFavBooks = localStorage.getItem("favBooks");
    return savedFavBooks ? JSON.parse(savedFavBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("favBooks", JSON.stringify(favBooks));
  }, [favBooks]);

  const changeData = (fieldName, inputValue) => {
    setUserData({ ...userData, [fieldName]: inputValue });
  };

  const updateAvatar = (avatar, image) => {
    setUserData({ ...userData, [image]: avatar });
  };

  // const addFavBook = (book) => {
  //   const updatedFavBooks = [...favBooks, book];
  //   setFavBooks(updatedFavBooks);
  //   localStorage.setItem("favBooks", JSON.stringify(updatedFavBooks));
  // };

  const addFavBook = (book) => {
    const index = favBooks.findIndex((item) => item.idBook === book.idBook);

    if (index === -1) {
      const updatedFavBooks = [...favBooks, book];
      setFavBooks(updatedFavBooks);
      localStorage.setItem("favBooks", JSON.stringify(updatedFavBooks));
    } else {
      const booksCopy = [...favBooks];
      booksCopy.splice(index, 1)
      setFavBooks(booksCopy);
    }

  };

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/crear"
            element={
              <>
                <Header />
                <Page
                  addFavBook={addFavBook} 
                  favBooks={favBooks}
                  function={changeData}
                  userData={userData}
                  updateAvatar={updateAvatar}
                  url={url}
                  setUrl={setUrl}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/proyectos"
            element={<List userData={userData} addFavBook={addFavBook} favBooks={favBooks} />}
          />
          <Route
            path="/listafavoritos"
            element={<FavList userData={userData} addFavBook={addFavBook} favBooks={favBooks} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
