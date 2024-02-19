let color = "blanc";
let cases = "";

document.addEventListener('click', (event) => {
    let items = event.target;
    let item = items.getAttribute("id");
    if (item === "blue" || item === "red" || item === "yellow" || item === "green" || item === "white") {
        color = item;
        console.log(color);
    } else if (item === "un" || item === "deux" || item === "trois" || item === "quatre" || item === "cinq" || item === "six" || item === "sept" || item === "huit" || item === "neuf" || item === "dix" || item === "onze" || item === "douze" || item === "treize" || item === "quatorze" || item === "quinze" || item === "seize" || item === "dixsept" || item === "dixhuit" || item === "dixneuf" || item === "vingt" || item === "vingtetun" || item === "vingtdeux") {
        document.getElementById(item).style.backgroundColor = color;
    };
});