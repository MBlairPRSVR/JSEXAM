function firstPunctuationIndex(str) {
    const punctuationSet = new Set(['.', '?', '!']);
    return [...str].findIndex((char) => punctuationSet.has(char));
  }
  

  console.log(firstPunctuationIndex('wow! goodness me.')); 
  console.log(firstPunctuationIndex('I love taking tests?')); 
  console.log(firstPunctuationIndex('...hello?')); 
  console.log(firstPunctuationIndex('alright alright alright')); 
  