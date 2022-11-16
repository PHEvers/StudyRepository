const URL_API =
 'https://gnews.io/api/v4/search?q=example&token=4e7f36e0d5f465450b669979a3c0db75&lang=en';

$(document).ready(() => {
  getNews();
});

var listNews = new Array();

const getNews = () => {
  $.ajax({
    url: URL_API,
    dataType:'json',
    success: (data) => {
      let listNews = document.createElement('div');
      $(listNews).addClass('News');
      $('#News').html(listNews);
      data.forEach((p) => {
        let li = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');

        $(li).addClass('container-list');
        $(card).addClass('container');
        $(cardHeader).addClass('container-head');
        $(cardBody).addClass('container-body');
        // $(cardBody).attr('style', `background-image: url('${p.image.url}')`);

        $(cardHeader).html(`<h2>${p.title}</h2>`);

        $(cardBody).append(a);
        $(card).append(cardHeader).append(cardBody);
        $(li).append(card);
        $(listCat).append(li);

        listNews.push(p);
      });
    },
  });
};
