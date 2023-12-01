function oddIndices(numbers) {
    let result = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (i % 2 !== 0) {
        result.push(numbers[i]);
      }
    }
  
    return result;
  }
  
  console.log(oddIndices([0, 2, 4, 6, 8, 10])); 
  console.log(oddIndices([1])); 
  console.log(oddIndices([100, 101, 102])); 
  