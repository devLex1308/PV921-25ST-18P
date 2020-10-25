'use strict';
//https://medium.com/@d3i0/%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B0-%D0%B2-javascript-5148161da033
const union = (s1, s2) => new Set([...s1, ...s2]);

const intersection = (s1, s2) => new Set(
  [...s1].filter(v => s2.has(v))
);

const difference = (s1, s2) => new Set(
  [...s1].filter(v => !s2.has(v))
);

const complement = (s1, s2) => difference(s2, s1);

// Usage

const cities1 = new Set(['Beijing', 'Kiev']);
const cities2 = new Set(['Kiev', 'London', 'Baghdad']);

const operations = [union, intersection, difference, complement];

const results = operations.map(operation => ({
  [operation.name]: operation(cities1, cities2)
}));

console.dir({ cities1, cities2 });
console.dir(results);
