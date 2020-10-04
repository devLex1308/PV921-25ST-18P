'use strict';

const s = 'Hello <User1@domain.com> and user2@domain.com';

//^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}
const rx = /[a-z0-9\.]+@[a-z0-9\.]+/gi;

const m = s.match(rx);

console.dir(m);
