// Тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёругаар тоглогч 1,
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 оноогоор санамсаргүйгээр үүсгэж өгнө

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
    // 1 буусан тул тоглогчын ээлжийг энэ хэсэгт сольж өгнө.

    // Энэ тоглогчын ээлжиндээ цуглуулсан оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчыг 1 болго
    // Үгүй бол идэвхтэй тоглогчыг 0 болго

    // Улаан цэгийг шилжүүлэх код
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно.
    diceDom.style.display = "none";

    // if(activePlayer === 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
  }
});
