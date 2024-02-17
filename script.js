jQuery('.content-slider').flickity({
    // options
    contain: true,
    groupCells: 1,
    wrapAround: true,
    imagesLoaded: true,
    fade: true,
    prevNextButtons: false,
    pageDots: true,
    autoPlay: false,
    selectedAttraction: 0.01,
    friction: 0.15,
});


// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Widows site wide
var elements = document.querySelectorAll("p");
elements.forEach(function (element) {
    var words = element.innerHTML.split(" ");
    if (words.length > 1) {
        words[words.length - 2] += "\u00A0" + words[words.length - 1];
        words.pop();
        element.innerHTML = words.join(" ");
    }
});