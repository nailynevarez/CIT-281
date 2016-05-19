var main = function() {
    "use strict";

    var requestURL = "/books";

    //$("main .photos").html("");
    //console.log($("main .photos").html());

    $.getJSON(requestURL, function(flickrResponse) {
        //console.log(flickrResponse);
        flickrResponse.forEach(function(item) {
            var bkitem = bookToHTMLstr(item);
            //console.log(bkitem);
            $("main .photos").prepend(bkitem);
            //console.log($("main .photos").html());

        });

    });
};

$(document).ready(main);



function bookToHTMLstr(book) {

    var result = "<h4 style='display:inline'>Item</h4><br>Title: " +
        book.title + "<br>" + "Author: " + book.author + "<br>" + "Category: " + book.category + "<br>" + "ID: " + book._id + "<br>";

    return result;
};