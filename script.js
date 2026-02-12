function checkPassword(){
    var p=document.getElementById("password").value;
    if(p==="ilovesonu"){
        document.getElementById("lockScreen").style.display="none";
        document.getElementById("mainContent").style.display="block";
    } else {
        alert("Wrong password baby 😭");
    }
}

function flipCard(card){
    card.classList.toggle("flip");
}

function showMessage(type){
    if(type==="happy") alert("App khush ho to meri duniya aur bright ho jaati hai 💖");
    if(type==="sad") alert("App sad ho to main hamesha app ke saath ho baby jann 💕");
    if(type==="miss") alert("Miss karte ho to tight hug samajh lo 🤗💘");
}

function sayYes(){
    document.getElementById("result").innerHTML =
    "<h1>Yayyyy 💖</h1><img src='images/kiss-panda.jpg' width='300'><h2>Panda Kisses 😘🌸🌸🌸</h2>";
}

function sayNo(){
    document.getElementById("result").innerHTML =
    "<h1>Angry Panda 😡</h1><img src='images/angry-panda.jpg' width='300'>";
}
