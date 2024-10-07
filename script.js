const jmeno = prompt("Vyplň své celé jméno:")
const vek = Number(prompt("Vyplň svůj věk:"))

const person = {
    name: jmeno,
    age: vek,
}

document.body.innerHTML += "<p>" + person.name + ", věk: " + person.age + "</p>"