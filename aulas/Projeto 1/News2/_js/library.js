/* # Confs */
const URL_API_NEWS = 'https://gnews.io/api/v4/search?q=example&token=4e7f36e0d5f465450b669979a3c0db75&lang=en'

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
