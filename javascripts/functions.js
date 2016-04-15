function arrAvg([numbers]) {
    "use strict";
    var sum = 0;
    var i = 0;
    var average;

    for (i; i < numbers.length; i++) {
        sum = sum + numbers[i];
        average = (sum / numbers.length);
    };
    return average;
};

function arrMax(numbers) {
    "use strict";
    var max;
    var i = 0;
    for (i; i < numbers.length; i++) {
        if (numbers[i] > numbers.length - 1) {
            max = numbers[i];
        }
    };
    return max;
};

function isMember(arr, Strng) {
    "use strict";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === Strng) {
            return true;
        }

    }
    return false;
}

/*hasOneEven returns true if arr contains at least one even number*/
var hasOneEven = function(arr) {
    "use strict";
    var i;
    //search for even number in arr
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 === 0)
        //hit
            return true;
    }
    //miss
    return false;
};

var a = [3, 5, 7, 2];
var sum = 0;
a.forEach(function(val) {
    sum = sum + val; 
});

var a = ["a", "b", "c", "d", "a"];
var isMember = function(arr, s) {
    timesSoFar = 0;
    arr.forEach(function(value) {
        if(value === s){
            //hit
        timesSoFar = timesSoFar + 1;
    }
    });
    //return result
    if (timesSoFar >= 2)
    return true;
    else 
    return false;
};



function maxWord(sentence) {
    "use strict";
    var longestString = 0;
    var string = sentence.split(" ");
    var word = 0;
    for (var i = 0; i < string.length; i++) {
        if (longestString < string[i].length) {
            longestString = string[i].length;
            word = string[i];
        }
    }
    return word.length;
}