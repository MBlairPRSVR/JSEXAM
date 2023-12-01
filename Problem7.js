function addToObj(person, key, value) {
    if (typeof key === 'string') person[key] = value;
    else console.log('Function must be called with a valid key.');
  }
  

  let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
  };
  
  addToObj(obj, 'homeState', 'tennessee');
  console.log(obj);
  
  addToObj(obj, 'parentsNames', { mother: 'Janine', father: 'Robert' });
  console.log(obj); 
  addToObj(obj, 'user', 'student');
  console.log(obj); 
  addToObj(obj, 'user', 'student');

  