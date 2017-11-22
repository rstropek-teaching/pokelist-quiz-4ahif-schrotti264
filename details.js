"use strict";
function getParameter(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
$('#name').append(getParameter('pokemon'));
$.get("https://pokeapi.co/api/v2/pokemon/" + getParameter('pokemon')).then(function (response) {
    console.log(response);
    $('#image').attr('src', response.sprites.front_default);
    $('#weight').append(response.weight);
    for (var i = 0; i < response.abilities.length; i++) {
        $('#abilities').append("<li>" + response.abilities[i].ability.name + "</li>");
    }
});
