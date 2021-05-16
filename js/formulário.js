// const init = () => {
//     const inputEmail = document.querySelector('input[type="email"]');

//     const textarea = document.querySelector('textarea[id="mensagem"]')
    
//     const submitButton = document.querySelector('.botao');

//     if(submitButton) {
//         submitButton.addEventListener('click', (event) => {
//             event.preventDefault();

//             fetch('https://regres.in/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     login: inputEmail.value,
//                     password: textarea.value,
//                 })
//             }).then((response) => {
//                 return response.json();
//             }).then((data) => {
//                 console.log(data)
//             })
//         })
//     }

// }
// window.onload = init;
var capturandoEmail = "";
var capturandotext = "";
// s
// value = window.history.go(-1);

// if(submitButton) {
//     submitButton.addEventListener('click', (event) => {
//         window.history.go(-1);
//     }, true);
// }
// if (element.addEventListener) {
//     element.addEventListener("submit", function(evt) {
//         evt.preventDefault();
//         window.history.back();
//     }, true);
// }
// else {
//     element.attachEvent('onsubmit', function(evt){
//         evt.preventDefault();
//         window.history.back();
//     });
// }
var value = ""
document.getElementById("noned").style.display = "none";
// function capturar() {
//     capturandoEmail = document.getElementById('email').value;
//     capturandotext = document.getElementById('mensagem').value;
// }

function capturar() {
    // document.getElementById('fecha').value = window.history.back;
    document.getElementById("noned").style.display = "flex";
    document.getElementById('teste').innerHTML = 'Agradecemos pelo seu feedback! Obrigado!🥰❤️';
    setTimeout(function(){
        document.getElementById("jaja").reset();
    }, 850);
    // document.getElementById("jaja").window.close()
    // document.F1.action='jaja'; document.F1.submit(); return false;
}
document.getElementById("noned").style.display = "none";
function dhas() {
    setTimeout(function(){
        document.getElementById("teste").innerHTML = '';
    }, 150);
    document.getElementById("noned").style.display = "none";
}
// var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar
 
// function exibir() {
//     document.getElementById("dvConteudo").style.display = "block";
// }

// function ocultar() {
//     document.getElementById("dvConteudo").style.display = "none";
// }

// function ocultarExibir() {
// function resetar() {
//     reset()
//     setTimeout(function(){
//         document.getElementById("teste").innerHTML = '';
//     }, 1000);
// }

