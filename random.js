const { readdirSync, writeFileSync } = require("fs-extra");
require("dotenv").config();

const DIR_REPLACE = process.env.DIR_REPLACE;
const MIN = parseInt(process.env.MIN);
const MAX = parseInt(process.env.MAX);

(async () => {
  let numbers = [];
  let n, p;
  const length = readdirSync(`${DIR_REPLACE}/images`).length;

  for (let i = 0; i < length; i++) {
    do {
      n = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
      p = numbers.includes(n);
      if (!p) {
        numbers.push(n);
      }
    } while (p);
  }

  writeFileSync(`${DIR_REPLACE}/random.json`, JSON.stringify(numbers, null, 2));
  console.log(`Create ${DIR_REPLACE}/random.json success!`);
})();
