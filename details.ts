function getParameter (key: string) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
    //copied from https://stackoverflow.com/questions/9870512/how-to-obtaining-the-querystring-from-the-current-url-with-javascript
}

$('#name').append(getParameter('pokemon'));
getDetails();

async function getDetails(){
    let response = await $.get(`https://pokeapi.co/api/v2/pokemon/${getParameter('pokemon')}`);
    
    $('#image').attr('src',response.sprites.front_default);
    $('#weight').append(response.weight);
        
    for(let i = 0;i < response.abilities.length;i++){
        $('#abilities').append(`<li>${response.abilities[i].ability.name}</li>`);
    }
}