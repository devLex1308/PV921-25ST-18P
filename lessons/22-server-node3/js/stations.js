async function createStation() {

  const addStationEl = document.querySelector("#addStation");
  const name = addStationEl.value;

  try {

    if (!name) {
      throw new Error('Введіть коректні дані.');
    }

    const res = await api("station", "POST", {name});
    console.log(res);
    const ul = document.querySelector("#stations");
    const li = document.createElement("li");
    li.innerHTML = `<a href="stations/${res.data.id}">${name}</a>`;
    ul.appendChild(li);

    if (res.status) {
      return res.data;
    }

    throw new Error(res.error);

  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}

async function deleteStation() {

  // TODO десь взяти id
  const id = null;

  try {

    if (!id) {
      throw new Error('Не вибрано що слід видалити.');
    }

    const res = await api("station", "DELETE", {id});

    if (res.status) {
      return res.data;
    }

    throw new Error(res.error);

  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}

async function editStation() {

  // TODO десь взяти id
  const id = null;
  const name = null;

  try {

    if (!id) {
      throw new Error('Немає ідентифікатора.');
    }

    if (!name) {
      throw new Error('Немає імені.');
    }

    const res = await api("station", "PUT", {id, name});

    if (res.status) {
      return res.data;
    }

    throw new Error(res.error);

  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}
