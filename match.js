module.exports.match = function(hash) {

    // Checking for date and card in each key,
    // case insensitive
    const re = /(card.*date)|(date.*card)/i;
    // Array for regex matches to be pushed to
    let matches = [];

    // Pushing each matched key into the array
    for(let key in hash) {
	if(re.test(key))
	    matches.push(key);
    }

    return matches;
};
