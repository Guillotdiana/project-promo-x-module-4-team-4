const fetchData = (userData) => {
   return fetch("http://localhost:5001/addBook/", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'content-type': 'application/json'
        }})
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          return responseData
      });
  };

  export default fetchData
 









