function numOddValues(numbers) {
    let count = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        count = count + 1;
      }
    }
  
    return count;
  }
  

  console.log(numOddValues([0, 1, 2, 3])); 
  console.log(numOddValues([5, 5, 5, 5])); 
  console.log(numOddValues([])); 
  