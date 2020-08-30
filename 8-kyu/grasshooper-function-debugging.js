



/*


Grasshopper - Function syntax debugging

A student was working on a function and made some syntax mistakes while coding. 
Help them find their mistakes and fix them.

*/



// 1

function main (verb, noun) {
  return verb + noun
}

console.log(main('take ', 'item')); // 'take item'
console.log(main('use ', 'sword')); // 'use sword'



// 2

function main(verb, noun) {
  if(arguments.length > 1)
    return verb.trim() + ' ' + noun.trim();
}



// 3

const main = (...a) => a.join('');



// 4

const main = ''.concat.bind('');



// 5

const main = (verb, noun) => `${verb}${noun}`;
