const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (array) =>
  new Promise((resolve, reject) => {
    if (array.length === 0 || !array){
        reject("There is no array! Please add your array file");
    } 
    resolve(array.filter((nonString) => isNaN(nonString))
    .map((isString) => isString.toLowerCase()));
  });

console.log("---QUESTION_ONE---")
lowerCaseWords(mixedArray)
  .then((succ) => console.log(succ))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
