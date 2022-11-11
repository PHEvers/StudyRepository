$(document).ready((e) => {
    getJsonItem(LISTA_USUARIOS).usuarios.forEach(autor => {
        autor.listaFilmes.filmes.forEach(filme => {
            console.log(filme)
            let card = document.createElement("div");
            $(card).addClass("row g-4");
            $(card).html(`
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p>Autor: ${autor.nome}</p>
                    </div>
                </div>
            </div>
            `);

            $("#index-main").append(card);
        });
    });
});