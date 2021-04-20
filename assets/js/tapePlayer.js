//list of things to do
//1.DONE | get the audio link
//2.DONE | feed the audio link into the HTML audio tag
//3. DONE | play audio when play button is clicked
//4. when audio is playing, play button moves up
//5. DONE | when audio is playing, switch play button to pause button
//6. when audio is paused, pause button moves down
//7. DONE | when audio is paused, switch pause button to play button
//8. DONE | get the total time of the track
//9. DONE | set the time played
//10. DONE | set the time remaining to the total time of the track subtracted by the time played
//11. DONE | turn the time played into a %
//12. DONE | take % value and set slider value to it
//13. DONE | if slider is moved, get new value of slider
//14. DONE | map slider value onto total track time
//15. DONE | set new track time
//16. deal with those goddamn circles + lines + spin animations


let playButton = document.querySelector("button.playButt")
let phonePlayButton = document.getElementById("phonePlayButton")
let pauseButton = document.querySelector("button.pauseButt")
let phonePauseButton = document.getElementById("phonePauseButton")
let phoneFastForward = document.getElementById("phoneFastForward")
let phoneReverse = document.getElementById("phoneReverse")
let audio = document.querySelector("audio")
let audioSource = document.querySelector("audio source")
let audioScrubber = document.querySelector("input.audioScrubber")
let timePlayed = document.querySelector("div.timePlayed")
let timeLeft = document.querySelector("div.timeLeft")
let tapePlayerPhone = document.querySelector("div.tape")


audioSource.src = audioLink
let playChecker = audioLink
audio.load()

audioScrubber.value = 0



tapeToSelect.forEach((item, i) => {
  item.addEventListener("click", function(){
    audioSource.src = audioLink
    audio.load()
  })
});

playButton.addEventListener("click", function(){

  audio.play()
  playButton.style.display = "none"
  pauseButton.style.display = "block"

})
phonePlayButton.addEventListener("click", function(){

  audio.play()

})

pauseButton.addEventListener("click", function(){
  audio.pause()
  pauseButton.style.display = "none"
  playButton.style.display = "block"
})
phonePauseButton.addEventListener("click", function(){
  audio.pause()
})

phoneFastForward.addEventListener("click", function(){
  audio.playbackRate = 10
})
phoneReverse.addEventListener("click", function(){
  audio.playbackRate = -1.0
})



audio.addEventListener("timeupdate", function(){

  //display current time
    let currentTimeRaw = audio.currentTime
    let minutes = Math.floor(currentTimeRaw / 60)
    let seconds = Math.floor(currentTimeRaw % 60)

    let currentTimeFormatted = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')

    timePlayed.innerHTML = currentTimeFormatted

  //display time remaining
    let remainingTimeRaw = audio.duration - audio.currentTime
    let minutes2 = Math.floor(remainingTimeRaw / 60);
    let seconds2 = Math.floor(remainingTimeRaw % 60)

    let remainingTimeFormatted = minutes2.toString().padStart(2, '0') + ':' + seconds2.toString().padStart(2, '0')

    timeLeft.innerHTML = remainingTimeFormatted


  //adjust slider
    audioScrubber.max = audio.duration
    audioScrubber.value = audio.currentTime

    audioScrubber.addEventListener("change", function(){
        audio.currentTime = audioScrubber.value
    })


  //get location of thumb
    let scrubberBox = audioScrubber.getBoundingClientRect()
    let scrubWidth = scrubberBox.width
    let scrubLeft = scrubberBox.left

})

tapeToSelect.forEach((item, i) => {

  item.addEventListener("click", function(){
    audio.pause()
    audioSource.src = audioLink
    audio.load()
    playButton.style.display = "block"
    pauseButton.style.display = "none"
  })

});
numberSelector.addEventListener("change", function(){
  audio.pause()
  audioSource.src = audioLink
  audio.load()
  playButton.style.display = "block"
  pauseButton.style.display = "none"
});
