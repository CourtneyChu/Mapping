var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(num){
return Math.sqrt((Math.pow(num.x, 2) + Math.pow(num.y, 2)))
  /* Your code here */}
  );

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
console.log(result[0] + "should be" + 5)
console.log(result)

