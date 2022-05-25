const modal = document.getElementById("modal");

let openBtn = document.getElementById("btn-open");

const span = document.getElementsByClassName("btn-close-modal")[0];

let resetBtn = document.getElementById("btn-clear");

//counter

openBtn.onclick = incrementClick;

resetBtn.onclick = resetCounter;

function incrementClick() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickCount) {
        modal.style.display = "block";
        localStorage.clickCount = Number(localStorage.clickCount)+1;

            if (localStorage.clickCount > 5) {
                resetBtn.style.display = "block";
            } else if (localStorage.clickCount < 5) {
                resetBtn.style.display = "none";
            }
      } else {
        localStorage.clickCount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked " + localStorage.clickCount + " times to related button.";
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

function resetCounter() {
    if (typeof(Storage) !== "undefined") {
        localStorage.clickCount = 0;
        result.innerHTML= "You have clicked " + localStorage.clickCount + " times to related button.";
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

// Click on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Click anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
