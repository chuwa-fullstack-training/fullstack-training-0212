13. Explain following code:

const r2d2 = {
  "name": "R2-D2",
  "height": "96",
  "mass": "32",
  "hair_color": "n/a",
  "skin_color": "white, blue",
  "eye_color": "red",
  "birth_year": "33BBY",
  "gender": "n/a",
};

const { name, height:robotHeight, mass:robotMass = "100", nothing:something = true } = r2d2
console.log(name)
// 
console.log(height)
// 
console.log(robotHeight)
// 
console.log(mass)
// 
console.log(robotMass)
// 
console.log(nothing)
// 
console.log(something)
// 



Don't forget swap:

var x = 10,
  y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10