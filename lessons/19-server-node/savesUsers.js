const fs = require('fs');
const fileName = "./users.txt";


fs.readFile(fileName, "utf-8", function(err, data) {

  const [a1, a2, user] = process.argv;
  console.log(`Привіт ${user}`);

  if (err) {
    // console.log(err);
    return;
  }



  fs.writeFile(fileName, `${data}${data}`, function(err, data2) {
    if (err) {
      console.log(err);
      return;
    }
    console.log({data2});
  });

  console.log({data});
});

