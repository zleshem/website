let copyText;


function copyEmail() {
    let copyText = document.getElementById("emailText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    console.log(copyText.value);
};

function myFunction(icon) {
    // Hide the clipboard icon
    icon.style.display = 'none';

    // Show the check icon
    var checkIcon = document.getElementById('check');
    checkIcon.style.display = 'inline';
    var message = document.getElementById('message');
    message.style.display = 'inline';

    setTimeout(function() {
        message.style.display = 'none';
      }, 2000); // 1000 milliseconds = 1 second

  setTimeout(function() {
    // Hide the check icon
    checkIcon.style.display = 'none';

    // Show the clipboard icon
    icon.style.display = 'inline';
  }, 2000); // 5000 milliseconds = 5 seconds
}