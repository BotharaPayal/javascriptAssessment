exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {
        var tempArray = num.toString(2).split(''),
            position;
        tempArray.reverse();
        position = bit - 1;
        return parseInt(tempArray[position], 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var returnVal = (num >>> 0).toString(2);
        var arrayLengthExtra = 8 - returnVal.length;
        for (var i = 0; i < arrayLengthExtra; i++) {
            returnVal = "0" + returnVal;
        }
        return returnVal;
    },

    multiply: function(a, b) {
        var x = a * b;
        return x.toPrecision(12) * 1;
    }
};