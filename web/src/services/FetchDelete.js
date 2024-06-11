const fetchDelete = (id) => {
    (`https://project-promo-x-module-4-team-4.onrender.com/deleteBook/${id}`, {
    method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

export default fetchDelete;