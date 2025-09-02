document.querySelector(".img1").setAttribute("src", "../assets/images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");
document.querySelector(".img2").setAttribute("src", "../assets/images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");

if (document.querySelector(".img1").getAttribute("src") > document.querySelector(".img2").getAttribute("src")) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (document.querySelector(".img1").getAttribute("src") < document.querySelector(".img2").getAttribute("src")) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}