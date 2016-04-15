//arrAvg accepts an array of numbers and returns the average of the array
function arrAvg(numbers) {
    "use strict";
    //declare variables
    var sum = 0;
    var i = 0;
    var average;
    //calculate sum and average
    for (i; i < numbers.length; i++) {
        sum = sum + numbers[i];
        average = (sum / numbers.length);
    };
    //return the average
    return average;
};


//arrMax accepts array of numbers and returns the largest number in the array
function arrMax(numbers) {
    "use strict";
    //declare variables
    var max;
    var i = 0;
    //find largest number in array
    for (i; i < numbers.length; i++) {
        if (numbers[i] > numbers.length - 1) {
            max = numbers[i];
        }
    };
    //return the largest number
    return max;
};

//isMember accepts an array of strings and a string
//returns true if string in the array and false otherwise
function isMember(arr, Strng) {
    "use strict";
    //declare variable
    var i;
    //check and see if the string is in the array, return true if it is
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === Strng) {
            return true;
        }

    }
    //return false if it is not in the array 
    return false;
}

//Extra Credit Function
/*maxWord accepts a sentence and returns the length of the longest word in the sentence*/
function maxWord(sentence) {
    "use strict";
    //declare variables
    var longestWord = 0;
    var string = sentence.split(" ");
    var word = 0;
    //find the longest word
    for (var i = 0; i < string.length; i++) {
        if (longestWord < string[i].length) {
            longestWord = string[i];
        }
    }
    //return the length of the longest word
    return longestWord.length;
}