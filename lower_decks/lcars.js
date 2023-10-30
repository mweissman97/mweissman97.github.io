document.addEventListener("touchstart", function() {},false);

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll-top a').fadeIn();
    } else {
        $('.scroll-top a').fadeOut();
    }
});

$(document).ready(function() {
    $("#scroll-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

var red_alerts = [
    "Unknown vessel approaching",
    "Potential radiation exposure",
    "Klingon bird of prey decloaking",
    "Warp Core breach imminent",
    "Self destruct commenced",
    "Rogue hologram taking prisoners",
    "Rogue android stealing the ship"
    ];


//var randomDiv = document.getElementById("red_alert");

//    document.getElementById("red_alert_button").addEventListener("click", function() {
 //         randomIndex = Math.ceil((Math.random()*red_alerts.length-1));
 //         newText = red_alerts[randomIndex];
  //        randomDiv.innerHTML = newText;
//    });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
