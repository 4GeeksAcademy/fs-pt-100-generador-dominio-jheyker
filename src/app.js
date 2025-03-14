import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");


  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon', 'paredes', 'partio'];
  const dominio = ['com', 'es', 'io', 'net']

  const nombreDominio = () =>{
    const resultadosDiv = document.getElementById('resultados');
    pronoun.forEach(pronombre => adj.forEach(adjetivo => noun.forEach(sustantivo => dominio.forEach(final => {
      const dominioGenerado = (`${pronombre}${adjetivo}${sustantivo}.${final}`)
     resultadosDiv.innerHTML += `<p>${dominioGenerado}</p>`
    }
    ))))};

  nombreDominio()


};
