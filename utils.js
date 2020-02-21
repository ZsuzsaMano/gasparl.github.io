document.addEventListener("DOMContentLoaded", function() {
    change_menu("home");
});

function change_menu(
    menu_to_show
) {
    ['home', 'cv', 'contact'].forEach(function(memuee) {
        document.getElementById("nav_" + memuee).classList.remove("selected");
        document.getElementById("page_" + memuee).style.display = 'none';
    });
    document.getElementById("nav_" + menu_to_show).classList.add("selected");
    document.getElementById("page_" + menu_to_show).style.display = 'block';
}
