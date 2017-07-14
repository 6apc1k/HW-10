function isPrime (a) {

var prime; 

for (i = 1; i < a; i++) {
	if(a % i === 0 && i != 1) {
		prime = false;
		return prime;
	} else {
		prime = true;
	}
}
return prime;
}

isPrime(11);