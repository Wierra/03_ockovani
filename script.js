const jmeno = prompt("Vyplň své celé jméno:")
const vek = Number(prompt("Vyplň svůj věk:"))

const person = {
    name: jmeno,
    age: vek,
}

document.body.innerHTML += "<p>" + person.name + ", věk: " + person.age + "</p>"

//řešení Michal
//const celeJmeno = prompt("Jake je vase jmeno a primeni?");
//const vek = Number(prompt("Jaky je vas vek?"));
//document.body.innerHTML += "<p>" + celeJmeno + ", vek: " + vek + "</p>";

//const person = {
//    name: prompt("Jaké je vaše jméno a příjmení?"),
//    age: Number(prompt("Jaký je váš věk?")),
//    language: window.navigator.language,
//  };
  
//  document.body.innerHTML += "<p>Zadané jméno: " + person.name + ", váš věk: " + person.age + "</p>";
//  document.body.innerHTML += "<p>Váš jazyk: " + person.language + "</p>";
//  document.body.innerHTML += "<p>Byli jste zaregistrováni na očkování.</p>";