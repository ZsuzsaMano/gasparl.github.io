if (Math.random() < 0.5) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="icon" type="image/png" href="lgo.png">';
} else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="icon" type="image/png" href="lgom.png">';
}

function toggle(el_id, thisel) {
    ['o_py', 'o_stud'].forEach(function(item) {
        if (el_id !== item) {
            document.getElementById('t' + item).style.fontWeight = 'normal';
            document.getElementById(item).style.display = 'none';
        } else {
            var elem = document.getElementById(el_id);
            if (elem.style.display === 'none') {
                elem.style.display = '';
                thisel.style.fontWeight = 'bold';
            } else {
                elem.style.display = 'none';
                thisel.style.fontWeight = 'normal';
            }
        }
    });
}
