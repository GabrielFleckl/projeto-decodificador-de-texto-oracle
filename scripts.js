let textAreaCrip = document.querySelector('.input-crip');
let textAreaDescrip = document.querySelector('.input-descrip');


let btnCrip = document.querySelector('.crip');
let btnDescrip = document.querySelector('.descrip');


function cripText() {
  let illustra = document.querySelector('.illustration')

  illustra.classList.add("hide")

  textAreaDescrip.classList.remove("invisible")

  let letterA = textAreaCrip.value.replace("a", "ai",)
  textAreaCrip.value.replace("e", "enter")
  textAreaCrip.value.replace("i", "imes")
  textAreaCrip.value.replace("o", "ober")
  textAreaCrip.value.replace("u", "ufat")

  textAreaDescrip.innerHTML = letterA

  textAreaCrip.value = ""

}








