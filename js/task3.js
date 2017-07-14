function getMin () {

var smallest = arguments[0];

for (i = 1; i <= arguments.length; i++) {

		if (smallest > arguments[i]) {
			smallest = arguments[i];
		}
	}
	return smallest;
}

getMin(2,4,6,23,1,3,-5,7);