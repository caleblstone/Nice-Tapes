let tapeRect = document.querySelectorAll("div.tapeInList svg rect.tapeRect")
let tapeWords = document.querySelectorAll("div.tapeWords")
let tapeWordsNum = document.querySelectorAll("div.tapeWords div.num")
let tapeToSelect = document.querySelectorAll("div.tapeInList svg")
let tapePlayerRect = document.querySelector("div.tapeSVG svg rect.tapeRect2")
let tapePlayerWords = document.querySelector("div.tapeSVG div.tapeWords")
let tapePlayerWordsNum = document.querySelector("div.tapeSVG div.tapeWords div.num")
let widthWin = window.innerWidth
let heightWin = window.innerHeight
let numberSelector = document.querySelector("div.tapeNum input")
let yearNav = document.querySelector("div.yearNav")
let yearNav2 = document.querySelector("div.yearNav2")
let currentYearDiv = document.querySelector("div.currentYear")
let yearNavSlider = document.querySelector("div.yearNav input.navigation")
let yearNavSlider2 = document.querySelector("div.yearNav2 input.navigation")

let audioLink


var date
var year
date = new Date()
year = date.getFullYear()
currentYearDiv.innerHTML = year

tapeRect.forEach((item, i) => {

  let namePlate = item.getBoundingClientRect()
  tapeWords[i].style.left = namePlate.left - 250 + 4 + "px"
  tapeWords[i].style.top = namePlate.top - 20 + 1 + "px"
  tapeWords[i].style.width = namePlate.width - 8 + "px"
  tapeWords[i].style.height = namePlate.height + "px"


});

let tapePlayerRectBox = tapePlayerRect.getBoundingClientRect()
tapePlayerWords.style.left = tapePlayerRectBox.left + 10 + "px"
tapePlayerWords.style.top = tapePlayerRectBox.top + 2 + "px"
let boxPercent = (tapePlayerRectBox.height / heightWin) * 100 - 2 + "vh"
tapePlayerWords.style.fontSize = boxPercent
tapePlayerWords.style.width = tapePlayerRectBox.width - 20 + "px"
tapePlayerWords.style.height = tapePlayerRectBox.height + "px"


yearNavSlider.value = ((parseInt(tapeToSelect[0].classList))-1980)
yearNavSlider2.value = ((parseInt(tapeToSelect[0].classList))-1980)
console.log(parseInt(tapeToSelect[0].classList));
tapeToSelect[0].classList.add("selected")
audioLink = tapeToSelect[0].dataset.link



tapeToSelect.forEach((item, i) => {

  item.addEventListener("click", function(){

    tapeToSelect.forEach((object, i) => {

      object.classList.remove("selected")

    });
    item.classList.add("selected")
    tapePlayerWordsNum.textContent = tapeWordsNum[i].textContent
    let tapeNumInt = parseInt(tapeWordsNum[i].textContent)
    numberSelector.value = tapeNumInt
    audioLink = item.dataset.link

  })

});

numberSelector.addEventListener("change", function(){
  tapeToSelect.forEach((object, i) => {

    object.classList.remove("selected")

  });
  let numSelec = numberSelector.value - 750
  console.log(numSelec);
  tapeToSelect[numSelec].classList.add("selected")
  tapePlayerWordsNum.textContent = numberSelector.value
});

yearNav.style.width = widthWin - 250 - 20 + "px"

yearNavSlider.addEventListener("change", function(){
  let numberOfYears = year - 1980
  yearNavSlider.max = numberOfYears

  selectedYear = parseInt(yearNavSlider.value) + 1980

  console.log(selectedYear);

  tapeToSelect.forEach((item, i) => {

    if (item.classList.contains(selectedYear) == true) {
      item.scrollIntoView()
    }
  });

})
yearNavSlider2.addEventListener("change", function(){
  let numberOfYears = year - 1980
  yearNavSlider2.max = numberOfYears

  selectedYear = parseInt(yearNavSlider2.value) + 1980

  console.log(selectedYear);

  tapeToSelect.forEach((item, i) => {

    if (item.classList.contains(selectedYear) == true) {
      item.scrollIntoView()
    }
  });

})
