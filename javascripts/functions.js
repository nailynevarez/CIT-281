function arrAvg([numbers]) {
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
    var max;
    var i = 0;
    for (i; i < numbers.length; i++) {
        if (numbers[i] > numbers.length - 1) {
            max = numbers[i];
        }
    };
    return max;
};

function isMember(arrStrng, Strng)




var hasOneEven = function(arr) {
var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i]/2 = 0) {
            return true
        }
    }
};