/* eslint-disable guard-for-in */

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(listA, listB) {
  const temp = [];
  let j = 0;
  listA.forEach(function (element) {
    temp[j] = listA[listA.indexOf(element)];
    j++;
    temp[j] = listB[listA.indexOf(element)];
    j++;
  });
  return temp;
}

function zipListTheSimpleWay(listA, listB) {
  const zipped = _.zip(listA, listB);
  return _.flatten(zipped);
}

console.log(zipList(letters, numbers));
console.log(zipListTheSimpleWay(letters, numbers));

