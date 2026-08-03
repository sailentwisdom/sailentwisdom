const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function(){

let value = searchBox.value.toLowerCase();

let quotes = document.querySelectorAll(".quote");

quotes.forEach(function(quote){

let text = quote.innerText.toLowerCase();

if(text.includes(value)){
    quote.style.display = "block";
}
else{
    quote.style.display = "none";
}

});

});
