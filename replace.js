const { writeFileSync } = require("fs-extra");
const { readFiles } = require("./script");

require("dotenv").config();

const CID = process.env.CID;
(async () => {
  // Replace CID
  readFiles(
    "output/json/",
    (filename, content) => {
      writeFileSync(
        `output/json/${filename}`,
        content.replaceAll("REPLACE", `ipfs://${CID}`)
      );
    },
    (err) => {
      throw err;
    }
  ).then(() => console.log("Replace CID success!"));
})();
