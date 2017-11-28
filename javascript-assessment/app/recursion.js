exports = typeof window === 'undefined' ? global : window;

function printParenthesis(str, pos, n, open, close, returnArray) {
    if (close == n) {
        returnArray.push(str.join(''));
        return;
    } else {
        if (open > close) {
            str[pos] = ')';
            printParenthesis(str, pos + 1, n, open, close + 1, returnArray);
        }
        if (open < n) {
            str[pos] = '(';
            printParenthesis(str, pos + 1, n, open + 1, close, returnArray);
        }
    }
}

function fib1(n) {
    var result = 0;
    if (n <= 2) {
        return 1;
    }
    result = fib1(n - 1) + fib1(n - 2);
    return result;
}

function permute1(arr) {
    var returnArray = [];
    for (let i = 0; i < arr.length; i++) {
        let restA = arr.slice(0, i).concat(arr.slice(i + 1));
        let rest = permute1(restA);
        if (rest.length === 0) {
            returnArray.push([arr[i]]);
        } else {
            for (let j = 0; j < rest.length; j++) {
                returnArray.push([arr[i]].concat(rest[j]));
            }
        }
    }

    return returnArray;
}

function listFiles1(data) {
    var arr = [];
    data.forEach(function(value, index) {
        if (typeof value === 'object') {
            arr = arr.concat(listFiles1(value.files));
        } else {
            arr.push(value);
        }
    })
    return arr;
}

exports.recursionAnswers = {
    listFiles: function(data, dirName) {
        var returnVal;
        returnVal = listFiles1(data.files);
        if (!dirName) {
            return returnVal;
        } else {
            var temp = [];

            for (var i = 0; i < returnVal.length; i++) {
                if (returnVal[i].indexOf('.' + dirName) > -1) {
                    temp.push(returnVal[i]);
                }
            }
            return temp;
        }
    },


    permute: function(arr) {
        return permute1(arr);
    },

    fibonacci: function(n) {
        return fib1(n);
    },

    validParentheses: function(n) {
        var str = [],
            returnArray = [];
        if (n > 0)
            printParenthesis(str, 0, n, 0, 0, returnArray);
        return returnArray;
    }
};