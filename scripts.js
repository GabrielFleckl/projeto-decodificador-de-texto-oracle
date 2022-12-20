let textAreaCrip = document.querySelector('.input-crip');
let textAreaDescrip = document.querySelector('.input-descrip');

let btnCopy = document.querySelector('.btn-copy')
let btnCrip = document.querySelector('.crip');
let btnDescrip = document.querySelector('.descrip');


function cripText() {
  let illustra = document.querySelector('.illustration')

  illustra.classList.add("hide")

  textAreaDescrip.classList.remove("invisible")

  btnCopy.classList.remove('hide')

  let textcrip = textAreaCrip.value.replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

  textAreaDescrip.innerHTML = textcrip

  textAreaCrip.value = ""
}

function decripText() {

  let textdescrip = textAreaCrip.value.replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  textAreaDescrip.innerHTML = textdescrip
}

function copy() {
  navigator.clipboard.writeText(textAreaDescrip.innerHTML)
  alert("Texto Copiado!")

  textAreaDescrip.innerHTML = ""

  textAreaCrip.value = ""
}







