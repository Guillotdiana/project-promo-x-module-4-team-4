const fetchData = (userData) => {
   return fetch("https://dev.adalab.es/api/projectCard", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'content-type': 'application/json'
        }})
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          return responseData
            //La url la debemos guardar en la variable de estado 
      });
  };

  export default fetchData
 









