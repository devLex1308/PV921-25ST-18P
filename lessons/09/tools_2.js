
let USERS = null;

async function getUser(user_id) {
  const res = await fetch(`https://reqres.in/api/users/${user_id}`);
  console.log({user_id, res});

  if(res.status == 200 || res.ok) {
    const text = await res.text();
    const data = JSON.parse(text);
    return data;
    console.log({data});
    // const html = userHtml(data);
  } else {
    console.log("Є помилка");
  }

}

getUser(1);


function sleep(seconds) {
  const pause = seconds * 1000;
  const res = `Пауза в ${seconds} секунди.`;
  return new Promise(r => {
    setTimeout(() => {
      r(res);
    }, pause);
  });
}

async function getUsers() {
  let users = {};

  for(let i = 1; i <= 10; i++) {
    await sleep(1);
    const user = await getUser(i);
    users = {
      ...users,
      [i]: user
    };
  }

  console.log({users});
  USERS = users;
  return users;
}


async function ready() {
  const users2 = await getUsers();
  console.log({users2}, USERS);
}

ready();







