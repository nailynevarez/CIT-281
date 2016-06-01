var main = function() {
    "use strict";

    var requestURL = "/todos";

    //$("main .photos").html("");
    //console.log($("main .photos").html());

    $.getJSON(requestURL, function(toDoResponse) {
        //console.log(flickrResponse);
        toDoResponse.forEach(function(item) {
            var todoitem = ToDoToHTMLstr(item);
            //console.log(bkitem);
            $(".comments").prepend(todoitem);
            //console.log($("main .photos").html());

        });

    });
};

$(document).ready(main);



function ToDoToHTMLstr(todo) {

    var result = "<p>" +
     todo.content; + "</p>"

    return result;
};
