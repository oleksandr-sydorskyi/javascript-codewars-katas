// Messi Goals
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make Negative
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

// Game Move
function move(position, roll) {
  return position + roll * 2;
}

// Personalized Message
function greet (name, owner) {
  return `Hello ${name === owner ? 'boss' : 'guest'}`;
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

// You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}

// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Get Nth Even Number
function nthEven(n) {
  return (n - 1) * 2;
}

// What's the real floor?
function getRealFloor(n) {
  if (n <= 0) return n;
  return n <= 13 ? n - 1 : n - 2;
}

// Beginner Series #2 Clock
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  let result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    const value = obj[key];
    if (value.length === 5) {
      result.push(value);
    }
  }
  return result;
}

//nderstanding closures - the basics
function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

//Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}