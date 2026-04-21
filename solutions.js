// Messi Goals
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make Negative
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Game Move
function move(position, roll) {
  return position + roll * 2;
}

// Personalized Message
function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// Keep Hydrated
function litres(time) {
  const liters = time * 0.5;
  return liters - liters % 1;
}

// Opposites Attract
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// Convert a string to an array
function stringToArray(string) {
  return string.split(' ');
}

// DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U');
}

// Find Maximum and Minimum Values of a List
var min = function (list) {
  let min = list[0];
  for (const el of list) {
    if (el < min) min = el;
  }
  return min;
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

// Smallest value of an array
function min(arr, toReturn) {
  let min = Math.min(...arr);
  return toReturn === "value" ? min : arr.indexOf(min);
}