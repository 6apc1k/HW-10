function getClosestToZero () {

var closest = arguments[0];

	for (var i = 1; i <= arguments.length; i++) {
		if (Math.abs(closest) > Math.abs(arguments[i])) {
            closest = arguments[i]
        }
    }
return closest;
}

getClosestToZero(4,5,67,5,-3, 32, -5);