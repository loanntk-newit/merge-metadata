const {
  copySync,
  emptyDirSync,
  unlinkSync,
  writeFileSync,
} = require("fs-extra");
const { readFiles } = require("./script");

require("dotenv").config();

const CID = process.env.CID;
const DIR_REPLACE = process.env.DIR_REPLACE;

emptyDirSync("./output");

try {
  // Copy metadata to output
  copySync("temp/build", "output", { overwrite: true | false });
  console.log("Copy metadata to output success!");

  // Replace image
  copySync(`${DIR_REPLACE}/images`, "output/images", {
    overwrite: true | false,
  });
  console.log("Replace image success!");

  // Replace json
  copySync(`${DIR_REPLACE}/json`, "output/json", { overwrite: true | false });
  console.log("Replace json success!");

  // Unlink _metadata
  unlinkSync("output/json/_metadata.json");

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
  );
} catch (err) {
  console.error(err);
}
