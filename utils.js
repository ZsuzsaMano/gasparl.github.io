document.addEventListener("DOMContentLoaded", function() {
    change_menu("home");
});

function change_menu(
    menu_to_show
) {
    ['home', 'cv', 'pubs', 'contact'].forEach(function(memuee) {
        document.getElementById("nav_" + memuee).classList.remove("selected");
        document.getElementById("page_" + memuee).style.display = 'none';
    });
    document.getElementById("nav_" + menu_to_show).classList.add("selected");
    document.getElementById("page_" + menu_to_show).style.display = 'block';
}

if (Math.random() < 0.5) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="icon" type="image/png" href="lgo.png">';
} else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="icon" type="image/png" href="lgom.png">';
}