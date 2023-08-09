var main = function () {
    "use strict";

    var getCard = function (name) {
        var baseURL = "https://api.scryfall.com/cards/named?exact=";
        var url = baseURL + name;
        $.getJSON(url, function (response) {
            $(".card-").append()
        });
    }
}
$(document).ready(main);