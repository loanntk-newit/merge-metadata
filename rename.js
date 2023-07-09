const { readFileSync, renameSync, writeFileSync } = require("fs-extra");
const { readFiles } = require("./script");
require("dotenv").config();

const DIR_REPLACE = process.env.DIR_REPLACE;

(async () => {
  // Rename
  await readFiles(
    `${DIR_REPLACE}/images/`,
    (filename, data) => {
      let index = filename.split(".")[0];
      const random = readFileSync(`${DIR_REPLACE}/random.json`);
      const newIndex = JSON.parse(random)[index - 1];
      renameSync(
        `${DIR_REPLACE}/images/${filename}`,
        `${DIR_REPLACE}/images/${newIndex}.png`
      );

      renameSync(
        `${DIR_REPLACE}/json/${index}.json`,
        `${DIR_REPLACE}/json/${newIndex}.json`
      );

      const content = JSON.parse(
        readFileSync(`${DIR_REPLACE}/json/${newIndex}.json`)
      );
      const newContent = JSON.stringify(content, null, 2).replaceAll(
        index,
        newIndex
      );
      writeFileSync(`${DIR_REPLACE}/json/${newIndex}.json`, newContent);
    },
    (err) => {
      throw err;
    }
  ).then(() => console.log("Rename success!"));
})();
