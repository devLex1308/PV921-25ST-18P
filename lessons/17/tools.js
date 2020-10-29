

async function sleep(seconds) {
  return new Promise(r => {
    setTimeout(r, 1000 * seconds);
  });
}


function wraper(fun) {

  const results = new Map();

  return async function(...arg) {
    console.log("Старт функції з аргументами", arg);

    if (results.has(arg)) {
      return results.get(arg);
    }

    const res = await fun.call({var: 10}, ...arg);

    results.set(arg, res);

    console.log("Фініш функції результат", res);
    return res;
  }
}



const someObj = {
  var: 25,
  hardCode: async function (x) {
    await sleep(3);
    console.log({x, f: this});
    return x**2 - this.var;
  }
}


async function hardCode(x) {
  console.log(1);
  await sleep(3);
  console.log(2);
  return x**2 - 25;
}

const hardCodeWrap = wraper(hardCode);
const objHardCodeWrap = wraper(someObj.hardCode);


async function run() {

  const r = await objHardCodeWrap(10);
  console.log({r});
  const r1 = await hardCodeWrap(5);
  console.log({r1});
  const r2 = await hardCodeWrap(5);
  console.log({r2});
  const r3 = await hardCodeWrap(5);
  console.log({r3});
}

run();