let prev = ()=>{
    alert("Pokemon didn't load yet");
}
let next = ()=>{
    alert("Pokemon didn't load yet");
}
let pokelist: any;

$.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
    console.log(response);
    pokelist = response;
    insertContent();

    //override next()
    next = ()=>{
        if(pokelist.next === null){
            alert("Try the other direction? ;)");
            return;
        }
        $.get(pokelist.next).then((response) => {
            pokelist = response;
            insertContent();
        });
    };
    //override prev()
    prev = ()=>{
        if(pokelist.previous === null){
            alert("Try the other direction? ;)");
            return;
        }
        $.get(pokelist.previous).then((response) => {
            pokelist = response;
            insertContent();
        });
    }
});

function insertContent(){
    $('#poketable').contents().remove();
    $('#poketable').append('<tr><th>name<th>details');

    for(let i = 0;i < pokelist.results.length;i++){
        $('#poketable').append(`<tr><td>${pokelist.results[i].name}<td><a href="details.html?pokemon=${pokelist.results[i].name}">🔎</a>`);
    }
}



