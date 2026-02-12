function checkPassword() {
  var pass = document.getElementById("password").value;
  if(pass === "ilovesonu") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    startEmojiRain();
  } else {
    alert("Wrong password baby 😢");
  }
}

function flipCard(card) {
  card.classList.toggle("flipped");
}

function openLetter(type) {
  let msg = "";
  if(type === "happy") msg = "I love seeing you smile 😊 You are my sunshine forever ☀️💖";
  if(type === "sad") msg = "Come here, I’m hugging you tight 🤗 Everything will be okay baby 💕";
  if(type === "miss") msg = "Even when we are apart, my heart beats only for you 💓";
  alert(msg);
}

function sayYes() {
  document.getElementById("result").innerHTML =
    "<h2>Yayyyy!! 💖😘</h2><img src='images/Kiss-panda.jpg' width='200'>";
}

function sayNo() {
  document.getElementById("result").innerHTML =
    "<h2>How dare you 😡</h2><img src='images/angry-panda.jpg' width='200'>";
}

/* EMOJI RAIN */
function startEmojiRain() {
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = "💖";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }, 300);
}
