const fetchDelete = (id) => {
    (`http://localhost:5001/deleteBook/${id}`, {
    method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

export default fetchDelete;