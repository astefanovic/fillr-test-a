module.exports.match = function(hash) {

    const re = /((c|C)ard.*(d|D)ate)|((d|D)ate.*(c|C)ard)/;
    // Array for regex matches to be pushed to
    let matches = [];
    
    for(let key in hash) {
	if(re.test(key))
	    matches.push(key);
    }

    return matches;
	
};
