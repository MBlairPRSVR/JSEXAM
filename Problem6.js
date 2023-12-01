const getPlace = (highScores, newScore) => {
    const place = highScores.findIndex(score => newScore > score) + 1 || highScores.length + 1;
    const suffix = place === 1 ? 'st' : 'th';
    return `${place}${suffix} place`;
  };
  
 
  console.log(getPlace([60, 30, 10], 90));     
  console.log(getPlace([60, 30, 10], 50));     
  console.log(getPlace([60, 30, 10], 15));     
  console.log(getPlace([500, 300, 200], 100)); 
  