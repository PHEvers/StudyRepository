var listNews = new Array();

addEventListener('load', function(){
    getAPI(URL_API_NEWS, criaListaNews);
});


const criaListaNews = (data) => {
    let main = getElement('main');
    console.log(data);
    listNews = new Array();
    console.log(data.articles);
    data.articles.forEach((news, i) => {
        if (i>5)  return;
        let html = document.createElement('div');
        html.classList.add('card', 'my-4', 'bg-dark', 'ms-1');
        html.addEventListener('click', ()=> mostraDetalhesNews(news));

        let htmlBody = `
        <div class="card-header">
            <img class="card-img-top" src="${news.urlToImage}" alt="${news.name}">
        </div>
        <div class="card-body bg-white">
            <h2 class="text-primary text-center">${news.title}</h2>
        </div>
        <div class="card-body bg-white ">
        <h3 class="text-primary text-center">${news.description}</h3>
        </div>`;
        

        html.innerHTML = htmlBody;
        main.appendChild(html);
        listNews.push(news);
    });

   
}

const mostraDetalhesNews = (news) => {
    console.log(news);
    let div = document.createElement('div');
    getElement('#modal-body').innerHTML = "";
    div.classList.add('card', 'bg-dark');

    let html = document.createElementNS('detalhado.html','div');
    html.addEventListener('btn-info', ()=> MaisDetalhes(news));

    let cardBody = 
    
            `
            <div class="card-header">
                <img class="card-img-top" src="${news.urlToImage}" alt="Rick">
            </div>
            <div class="card-body bg-white">
                <h1 class="text-primary text-center">${news.title}</h1>
                <article>
                    <ul class="list-group">
                        <li class="list-group-item">${news.author}</li>
                        <li class="list-group-item">${news.source.name}</li>
                        <li class="list-group-item">${news.publishedAt}</li>
                        <li class="list-group-item">${news.url}</li>
                        <li class="list-group-item">${news.content}</li>
                    </ul>
                </article>
            </div>
        `;
        div.innerHTML = cardBody;
        getElement('#modal-body').appendChild(div);

        $('#charModal').modal('show');
}



//document.saveNewsById("btn-save").addEventListener("click", MaisDetalhes);

const MaisDetalhes = (news) => {
    
}