module.exports.match = function(hash) {

    // Checking for date and card or cc in each key,
    // case insensitive
    const re = /(c(c|ard).*date)|(date.*c(c|ard))/i;
    // Array for regex matches to be pushed to
    let matches = [];

    // Pushing each matched key into the array
    for(let key in hash) {
	if(re.test(key))
	    matches.push(key);
    }

    return matches;
};
