import { db, collection, getDocs } from "./firebase.js";
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
function likeQuote(btn){

btn.innerHTML="❤️ Liked";

}


function shareQuote(btn){

let text = btn.parentElement.innerText;

navigator.share({

title:"SilentWisdom",

text:text

});

}
async function loadQuotes(){

const querySnapshot = await getDocs(collection(db, "quotes"));

const quotesSection = document.querySelector(".quotes");

querySnapshot.forEach((doc)=>{

let data = doc.data();

let div = document.createElement("div");

div.className = "quote";

div.innerHTML = `
<p>${data.quote}</p>
<span>— SilentWisdom</span>
`;

quotesSection.appendChild(div);

});

}

loadQuotes();
