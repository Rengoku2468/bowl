let theme = document.getElementById("theme");
let body = document.body();
function theme_changer() {
    body.style.backgroundcolor = " rgb(11, 7, 14)";
    theme.style.visibility = "none"
}
theme.addEventListener(onclick, theme_changer);