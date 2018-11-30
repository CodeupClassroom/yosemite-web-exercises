(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    document.body.innerHTML += "<ul><li>"
        + planetsArray.join("</li><li>") + "</li></ul>";
})();




