console.log(5);

const user = {
  name: "Sasha",
  age: 30,
};

const userString = `
{
  "name": "Sasha",
  "age": 30,
  "array": [8, 10, "text"],
  "isUser": true
}
`;


try {
  const obj = JSON.parse(userString);
  console.log({obj});
} catch(e) {
  console.log(e);
}

