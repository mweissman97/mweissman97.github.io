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

document.getElementById("openModalBtn").onclick = function() {
    var phrases = [
        "Unknown vessel approaching",
        "Potential radiation exposure",
        "Klingon bird of prey decloaking",
        "Romulan warbird recloaking",
        "XO turned into god",
        "Andorians and Vulcans fighting again",
        "Time to resist the Borg again",
        "Q is up to something"
        "Apologies, the most confounding thing, we appear to be singing",
        "An evil admiral wants us to violate the Prime Directive",
        "An evil admiral won't let us violate the Prime Directive even though we really want to",
        "Future version of the captain onboard",
        "Evil twin of crewmember trying to take over"
        "Warp Core breach imminent",
        "Self destruct commenced",
        "Rogue hologram taking prisoners",
        "Rogue android stealing the ship",
        "Tachyon anomaly ahead",
        "Orion Pirates plundering ahead"
    ];

    var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById("modalText").innerText = randomPhrase;

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
