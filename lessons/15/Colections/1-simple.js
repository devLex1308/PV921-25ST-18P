'use strict';

const cities = new Set();

cities.add('Beijing');

['Kiev', 'London', 'Baghdad'].forEach(city => cities.add(city));

cities.delete('Baghdad');

console.log({ cities });

if (cities.has('Kiev')) {
  console.log('cities contains Kiev');
}

console.log({ keys: cities.keys() });
console.log({ values: cities.values() });
console.log({ entries: cities.entries() });

// cities.clear();
