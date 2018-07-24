var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

length = scores.length;
console.log(length);

function getLowestCost(costs) {
	var lowestCost = 1;

	for (var i = 0; i < length; i++) {
		if (costs[i] < lowestCost) {
			lowestCost = costs[i];
		}
	}
	return lowestCost;
}

var lowestCost = getLowestCost(costs);
console.log("Najmniejszt koszt: " + lowestCost);


function printAndGetHighScore(scores) {
	var highScore = 0;
	var output;
	
	for (var i = 0; i < length; i++) {
		output = "Płyn do baniek nr: " + i + " wynik: " + scores[i];
		console.log(output);
		if (scores[i] > highScore) {
			highScore = scores[i];
		}
	};
	return highScore;
}

var highScore = printAndGetHighScore(scores);
/*
function getBestResults(scores, highScore) {
	var bestSolutions = [];
	for (var i = 0; i < length; i++) {
		if (scores[i] == highScore) {
			bestSolutions.push(i);
			console.log(bestSolutions);
		}
	}
	return bestSolutions;
};

var bestSolutions = getBestResults(scores, highScore);

console.log("Płyny z najlepszym wynikiem: " + bestSolutions);
console.log("Liczba testów: " + length);
console.log("Największa liczba wytworzonych baniek: " + highScore);*/

function getMostCostEffectiveSolution(scores, costs, highscore) {
	var cost = 100;
	var index;

	for (var i = 0; i < length; i++) {
		if (scores[i] == highScore) {
			if (cost > costs[i]) {
				index = i;
				cost = costs[i];
			}
		}
	}
	return index;
};

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Płyn nr: " + mostCostEffective + " jest najbardziej opłacalny.");