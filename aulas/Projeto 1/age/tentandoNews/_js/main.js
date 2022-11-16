const URL_API = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
// API cards.html 

$(document).ready(() => {
  getCivs();
});

var listGatos = new Array();
const getCivs = () => {
  $.ajax({
    url: URL_API,
    dataType: 'json',
    success: (data) => {
      let listCat = document.createElement('div');
      $(listCat).addClass('civs');
      $('#civs').html(listCat);
      data.forEach((p) => {
        let li = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');
        let a = document.createElement('a');

        $(li).addClass('container-list');
        $(card).addClass('container');
        $(cardHeader).addClass('container-head');
        $(cardBody).addClass('container-body');

        $(cardHeader).html(`<h2>${p.name}</h2>`);
        $(cardBody).html(`<h2>${p.army_type}</h2>`);


        $(cardBody).append(a);
        $(card).append(cardHeader).append(cardBody);
        $(li).append(card);
        $(listCat).append(li);

        listGatos.push(p);
      });
    },
  });
};
