function ageToAbilities(age) {
    if (age < 16) {
      return "You can't drive.";
    }
  
    if (age >= 16 && age <= 17) {
      return 'You can drive but not vote.';
    }
  
    if (age >= 18 && age <= 24) {
      return 'You can vote but not rent a car.';
    }
  
    return 'You can do pretty much anything.';
  }
  

  console.log(ageToAbilities(10)); 
  console.log(ageToAbilities(25)); 
  