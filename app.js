// Тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёругаар тоглогч 1,
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
var roundScore = 0;

// Програм эхлэхэд бэлтгэе

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 хүртэлх тоог санамрсаргүйгээр сонгох
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг веб дээр гаргах
  diceDom.style.display = "block";

  // Санамсаргүй тоонд харгалзах шооны зургийг вебд гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо 1-с ялгаатай бол идэвхтэй тоглогчын ээлжийн оноог өөрчилнө
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчын ээлжийг энэ хэсэгт сольж өгнө. тоглогчын ээлжиндээ цуглуулсан оноог 0 болгоно
    switchToNextPlayer();
  }
});

// Hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглогчын ээлжийн цуглуулсан оноог глобал оноо дээр нь нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогчын хожсон эсэхийг шалгах
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document.querySelector("player-" + activePlayer + "-panel").classList.add =
      "winner";
  } else {
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх эвент листенер
document.querySelector(".btn-new").addEventListener("click", function () {
  alert("clicked");
});
