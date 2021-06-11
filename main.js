// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');
modal.setAttribute("class", "hidden");

let heart = document.querySelector('li span');
heart.addEventListener('click', clickHeart)
//Still have to figure out how to get this mock server to work
function clickHeart(){
  if(heart.innerHTML === EMPTY_HEART){
    heart.innerHTML = FULL_HEART;
    heart.setAttribute("class", "activated-heart")
  } else if (heart.innerHTML === FULL_HEART) {
    heart.innerHTML = EMPTY_HEART;
    heart.removeAttribute("class", "activated-heart");
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
