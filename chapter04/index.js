let myArray = ["One", "Two", "Three", "Four"];

myArray.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("-----");
});

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numberArray.filter((value, index, array) => {
  if (value % 2) {
    return value;
  }
});

console.log(oddNumbers);

let valuesArray = [1, 2, 3];

let mappedValues = valuesArray.map((valor) => {
  return valor * 10;
});

console.log(mappedValues);

let anotherNumberArray = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let reducedValue = anotherNumberArray.reduce((value, index, array) => {
  return value + currentValue;
});

console.log(reducedValue);
