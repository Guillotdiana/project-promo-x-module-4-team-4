const fetchData = (userData) => {
   return fetch(`https://project-promo-x-module-4-team-4.onrender.com/addBook/`, {
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
 









