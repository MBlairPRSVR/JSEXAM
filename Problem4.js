function averageStringLength(strings) {
    if (strings.length === 0) {
      return 0;
    }
  
    let totalLength = 0;
  
    for (let i = 0; i < strings.length; i++) {
      totalLength += strings[i].length;
    }
  
    return totalLength / strings.length;
  }
  

  console.log(averageStringLength(['oh', 'hello'])); 
  console.log(averageStringLength([])); 
  console.log(averageStringLength(['a', 'pleasant', 'string'])); 
  