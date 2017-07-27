var words = ["ground", "control", "to", "major", "tom"];
//should take a new array with the results of calling a provided function on every
//line of the calling array



function map(element, callback) {
  var result = [];
  for (var i = 0; i < element.length; i++) {
  result.push(callback(element[i]))
}
  return result
}


var total = map(words, function(word) {
  return word.length;
});

console.log(total);

// }
// var result = words.map(function(word) {
//   return
// }

//   )


//console.log("should return [6, 7, 2, 5, 3]")
