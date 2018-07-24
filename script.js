var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var output;
var highScore = 0;

length = scores.length;
console.log(length);

for ( var i = 0; i < length; i++) {
	output = "Płyn do baniek nr: " + i + " wynik: " + scores[i];
	console.log(output);
};

for (var i = 0; i < length; i++) {
	if (scores[i] > highScore) {
		highScore = scores[i];
	}
}

console.log("Liczba testów: " + length);
console.log("Największa liczba wytworzonych baniek: " + highScore);