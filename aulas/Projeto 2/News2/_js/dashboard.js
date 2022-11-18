const LISTA_NOTICIA_SALVAS = "lista_Salvos";
var listaNoticiasSalvas = new Array();

$(document).ready(() => {
    console.log("Dashboard");
    limpaCampos();
    $("#msg .alert").hide();
   
    $("#btn-salvar").click((e) => salvarNoticia());
  
    listarNoticia();
  });

  const salvaNoticia = () => {
    
  }

// const realizaLogin = (user) => {
//     localStorage.setItem(LOGADO, 'true');
//     localStorage.setItem(USER, JSON.stringify(user));
//     window.location.href = 'dashboard.html';
// }

// const realizaLogoff = () => {
//     localStorage.removeItem(LOGADO);
//     localStorage.removeItem(USER);
// }

// const verificaLogin = () => {
//     if(localStorage.getItem(LOGADO) == 'true'){
//         console.log('Logado');
//         return true;
//     } else {
//         console.log('Deslogado');
//         return false;
//     }
// }

// const getRegistroStorage = (key) =>{
//     return localStorage.getItem(key);
// }

// const insertRegistroStorage = (key, value) => {
//     if(typeof value == usuario){
//         localStorage.setItem(key, JSON.stringify(value));
//     }
// }