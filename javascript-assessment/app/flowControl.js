exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
    fizzBuzz: function(num) {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        //
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number

        var returnVal;
        if (num == undefined) {
            returnVal = false;
        } else if (num.substring) {
            returnVal = false;
        } else {
            var multiple3 = num % 3 == 0,
                multiple5 = num % 5 == 0;
            multiple3 ? multiple5 ? (returnVal = "fizzbuzz") : (returnVal = "fizz") : multiple5 ? (returnVal = "buzz") : (returnVal = num);
        }

        return returnVal;
    }
};