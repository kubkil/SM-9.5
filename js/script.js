let button = document.getElementsByClassName('button');

function showText() {
  for(i = 0; i < button.length; i++) {
      alert(button[i].innerText);
  }
}

window.onload = function() {
  let timeout = setTimeout(showText, 1000);
}