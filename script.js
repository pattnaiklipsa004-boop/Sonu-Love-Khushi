function checkPassword(){
if(password.value==="iloveyou"){
lockScreen.style.display="none";
mainContent.style.display="block";
heroImg.classList.add("color");
startHearts();
}else{
alert("Wrong password 😢");
}
}

function flipCard(card){
card.classList.toggle("flipped");
}

function openLetter(){
letterModal.style.display="block";
letterText.innerHTML=
"My baby sweetuuuu 💖<br><br>\
From the moment you came into my life everything became brighter ✨\
You are my happiness, my comfort, my future, my forever. \
I promise to stand beside you in every storm 🌧️ and celebrate every sunshine ☀️\
We will travel the world ✈️ build our dream home 🏡 and grow old together 👵👴\
No matter what happens I will always choose you again and again 💍💖\
I love you more than words can ever explain 💕";
}

function closeLetter(){
letterModal.style.display="none";
}

function sayYes(){
result.innerHTML="<h2>I KNEW ITTTT 😍💖</h2><img src='images/kiss-panda.jpg' width='200'>";
}

function sayNo(){
result.innerHTML="<h2>How dare youuu 😡</h2><img src='images/angry-panda.jpg' width='200'>";
}

function startHearts(){
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(Math.random()*3+2)+"s";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),5000);
},300);
}

let video=document.getElementById("video");

function startCamera(){
navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>video.srcObject=stream);
}

function takePhoto(){
canvas.getContext("2d").drawImage(video,0,0,250,200);
alert("I LOVE YOUUUU 💖💖💖");
}
