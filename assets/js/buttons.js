let aboutButton = document.querySelector("div.abt")
let trackButton = document.querySelector("div.trk")
let about = document.querySelector("div.about")
let tracklist = document.querySelector("div.tracklist")
let abtBackButton = document.querySelector("div.backButton")

aboutButton.addEventListener("click", function(){
  tracklist.style.display = "none"
  about.style.display = "block"
  aboutButton.classList.add("selected");
  trackButton.classList.remove("selected")
  aboutButton.style.zIndex = "55"
  abtBackButton.style.display = "block"
  abtBackButton.style.right = "20px"
  abtBackButton.style.left = "none"
})

trackButton.addEventListener("click", function(){
  about.style.display = "none"
  tracklist.style.display = "block"
  trackButton.classList.add("selected");
  aboutButton.classList.remove("selected")
  trackButton.style.zIndex = "55"
  abtBackButton.style.display = "block"
  abtBackButton.style.left = "20px"
  abtBackButton.style.right = "none"
})

abtBackButton.addEventListener("click", function(){
  tracklist.style.display = "none"
  about.style.display = "none"
  abtBackButton.style.display = "none"
  abtBackButton.style.left = ""
  abtBackButton.style.right = ""
})

let bottomOfNav = yearNav.getBoundingClientRect().bottom

let infoHeight = heightWin - bottomOfNav - 20 + "px"

about.style.height = infoHeight
tracklist.style.height = infoHeight
