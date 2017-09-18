//console.log("hello");

let letters = ['a','b','c'];
let numbers = [1,2,3];

function zipList(listA, listB){
  let temp = [];
  let j = 0;
  for (var i in listA){
    temp[j] = listA[i];
    temp[j+1] = listB[i];
    j = j + 2;
  }
  return temp;
}

function zipListTheSimpleWay(listA, listB){
  let zipped = _.zip(listA, listB);
  ripped = _.flatten(zipped);
  return ripped;
}

console.log(zipList(letters, numbers));
console.log(zipListTheSimpleWay(letters, numbers));
