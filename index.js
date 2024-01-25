/* copy email text when clicking on clipboard button*/ 
let copyText;
let glow;

function copyEmail() {
    let copyText = document.getElementById("emailText");
    copyText.select();
    console.log(copyText.value);
};

function myFunction(icon) {
    icon.style.display = 'none';

    // Show the check icon inline 
    var checkIcon = document.getElementById('check');
    checkIcon.style.display = 'inline';

    var message = document.getElementById('message');
    message.style.display = 'inline';

    setTimeout(function() {
        message.style.display = 'none';
      }, 2000); // 2000 milliseconds = 2 second
  
  /*once the check mark appears, hide it and return the display the clipboard icon again after 2 seconds*/

    setTimeout(function() {
      // Hide the check icon
      checkIcon.style.display = 'none';


      // Show the clipboard icon
      icon.style.display = 'inline';
    }, 2000); // 2000 milliseconds = 2 seconds
  }

function scrollToTop() {
    window.scrollTo(0, 0);
  }

  //A blue animating glow to the section heading on click of the tab
  
let glowJourney = document.getElementById("journey");
let glowInterests = document.getElementById("interests");
let glowContact = document.getElementById("contact");


function animateJourney(glow) {
  glowJourney.animate(
    [
      {
        textShadow: '0 0 10px #fff, 0 0 20px #4287f5, 0 0 30px #4287f5, 0 0 40px #4287f5, 0 0 50px #4287f5, 0 0 60px #4287f5, 0 0 70px #4287f5',
      },
    ],
    {
      duration: 1000,
      iterations: 1,
      easing: 'ease',
      fill: 'backwards'
    }
  );
}

// Clear the animation after 5 seconds
setTimeout(function () {
  glowJourney.addEventListener('click', clearTextShadow);
}, 5000);

function animateInterests() {
  glowInterests.animate(
    [
      {
        textShadow: '0 0 10px #fff, 0 0 20px #4287f5, 0 0 30px #4287f5, 0 0 40px #4287f5, 0 0 50px #4287f5, 0 0 60px #4287f5, 0 0 70px #4287f5',
      },
    ],
    {
      duration: 1000,
      iterations: 1,
      easing: 'ease',
      fill: 'backwards'
    }
  );
}

// Clear the animation after 5 seconds
setTimeout(function () {
  glowInterests.addEventListener('click', clearTextShadow);
}, 5000);

// Common function to clear text shadow
function clearTextShadow(event) {
  let element = event.target;
  element.style.textShadow = 'none';
}

function animateContact() {
  glowContact.animate(
    [
      {
        textShadow: '0 0 10px #fff, 0 0 20px #4287f5, 0 0 30px #4287f5, 0 0 40px #4287f5, 0 0 50px #4287f5, 0 0 60px #4287f5, 0 0 70px #4287f5',
      },
    ],
    {
      duration: 1000,
      iterations: 1,
      easing: 'ease',
      fill: 'backwards'
    }
  );
}

// Clear the animation after 5 seconds
setTimeout(function () {
  glowContact.addEventListener('click', clearTextShadow);
}, 5000);