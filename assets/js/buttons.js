let aboutButton = document.querySelector("div.abt")
let trackButton = document.querySelector("div.trk")
let about = document.querySelector("div.about")
let tracklist = document.querySelector("div.tracklist")

aboutButton.addEventListener("click", function(){
  tracklist.style.display = "none"
  about.style.display = "block"
  aboutButton.classList.add("selected");
  trackButton.classList.remove("selected")
})

trackButton.addEventListener("click", function(){
  about.style.display = "none"
  tracklist.style.display = "block"
  trackButton.classList.add("selected");
  aboutButton.classList.remove("selected")
})

let bottomOfNav = yearNav.getBoundingClientRect().bottom

let infoHeight = heightWin - bottomOfNav - 20 + "px"

about.style.height = infoHeight
tracklist.style.height = infoHeight

// buttons.forEach((item, i) => {
//   item.addEventListener("click", function(){
//     if (i=0) {
//       about.style.display = "none"
//       tracklist.style.display = "block"
//     } else if (i = 1) {
//       tracklist.style.display = "none"
//       about.style.display = "block"
//     }
//
//     console.log("hello");
//   })
//
// });
