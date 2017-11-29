let pokelist: any = {
    next: "https://pokeapi.co/api/v2/pokemon/"
}

turnPage(true).then(()=>{
    insertContent();
});

async function turnPage(direction: boolean){
    let link = direction ? pokelist.next : pokelist.previous;
    //direction is true -> next; direction is false -> previous;
    if(link === null){
        alert("Try the other direction? ;)");
        return;
    }
    pokelist = await $.get(link);
    insertContent();
}

function insertContent() {
    $('#poketable').contents().remove();
    $('#poketable').append('<tr><th>name<th>details');
    
    for (let i = 0; i < pokelist.results.length; i++) {
        $('#poketable').append(`<tr><td>${pokelist.results[i].name}<td><a href="details.html?pokemon=${pokelist.results[i].name}">🔎</a>`);
    }
}



