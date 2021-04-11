let submit = document.querySelector("button.submit")
let passwordBox = document.querySelector("input.password")
let packageBox = document.querySelector("div.packageLayer")

submit.addEventListener("click", function(){
  if (passwordBox.value == "123") {
    packageBox.classList.add("packageLayerMoved")
  } else {
    passwordBox.value = "INCORRECT"
  }
})
