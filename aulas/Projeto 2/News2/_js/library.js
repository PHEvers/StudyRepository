/* # Confs */
//https://newsapi.org/
const URL_API_NEWS = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=5671cf9eddef45a99be992f90c930232'

/* # Functions */
function getElement(q) {
    return document.querySelector(q);
}

const getAPI = (url, functionCallback) => {
    fetch(url).then(
        (response) => response.json(), // resolve (retorno OK)
        (error) => console.error(error) // reject (erro no retorno)
        ).then(
            dataJson => functionCallback(dataJson), // resolve (retorno OK)
            erro => console.error(erro) // reject (erro no retorno)
            ); 
}
