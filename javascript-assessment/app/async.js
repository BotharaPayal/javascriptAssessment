exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        var dfd = $.Deferred();
        var timeoutID = window.setTimeout(function() {
            if (value === true)
                dfd.resolve(true);
            if (value === 'success')
                dfd.resolve('success');
        }, 1000);
        return dfd.promise();
    },

    manipulateRemoteData: function(url) {

        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();

            request.open('GET', url);
            request.onload = function() {
                if (request.status == 200) {
                    var returnArray = [],
                        data = JSON.parse(request.response);
                    for (var key in data.people) {
                        returnArray.push(data.people[key].name);
                    }
                    returnArray.sort();
                    resolve(returnArray);
                    // done();
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.onerror = function() {
                reject(Error('Error fetching data.'));
            };

            request.send();
        });
        return promise;
    }
};