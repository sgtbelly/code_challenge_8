var gimme = function (inputArray) {
    const newArray = Array.from(inputArray);
    newArray.sort((a, b) => a - b);
    const middleNum = newArray[1];
    return inputArray.indexOf(middleNum);
   };