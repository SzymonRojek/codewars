


/*
Description:
The function is not returning the correct values. Can you figure out why?

getPlanetName(3); // should return 'Earth'
*/


// 1:

function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
  }
  return name;
}



// 2:

function getPlanetName(id){
  var name = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  };
  
  return name[id];
}



// 3:

function getPlanetName(id){
  let name;

 if(id === 1) name = 'Mercury';
 if(id === 2) name = 'Venus';
 if(id === 3) name = 'Earth';
 if(id === 4) name = 'Mars';
 if(id === 5) name = 'Jupiter';
 if(id === 6) name = 'Saturn';
 if(id === 7) name = 'Uranus';
 if(id === 8) name = 'Neptune';
  
 return name;
}