"use strict";
var prev = function () {
    alert("Pokemon didn't load yet");
};
var next = function () {
    alert("Pokemon didn't load yet");
};
var pokelist;
$.get('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
    console.log(response);
    pokelist = response;
    insertContent();
    //override next()
    next = function () {
        if (pokelist.next === null) {
            alert("Try the other direction? ;)");
            return;
        }
        $.get(pokelist.next).then(function (response) {
            pokelist = response;
            insertContent();
        });
    };
    //override prev()
    prev = function () {
        if (pokelist.previous === null) {
            alert("Try the other direction? ;)");
            return;
        }
        $.get(pokelist.previous).then(function (response) {
            pokelist = response;
            insertContent();
        });
    };
});
function insertContent() {
    $('#poketable').contents().remove();
    $('#poketable').append('<tr><th>name<th>details');
    for (var i = 0; i < pokelist.results.length; i++) {
        $('#poketable').append("<tr><td>" + pokelist.results[i].name + "<td><a href=\"details.html?pokemon=" + pokelist.results[i].name + "\">\uD83D\uDD0E</a>");
    }
}
