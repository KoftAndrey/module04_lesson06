'use strict';

const addPrefix = (names, prefix) => {

   for (let i = 0; i < names.length; i++) {
      names[i] = prefix + ' ' + names[i];
   }

   return names;
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander',];

console.log(addPrefix(names, 'Mr'));