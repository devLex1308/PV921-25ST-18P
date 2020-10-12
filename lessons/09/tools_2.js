
async function getUser(user_id) {
  const res = await fetch(`https://reqres.in/api/users/${user_id}`);
  console.log({user_id, res});

  if(res.status == 200 || res.ok) {
    const text = await res.text();
    const data = JSON.parse(text);
    console.log({data});
    // const html = userHtml(data);
  } else {
    console.log("Є помилка");
  }

}

getUser(1);


