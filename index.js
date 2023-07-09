const { copySync, emptyDirSync } = require("fs-extra");

require("dotenv").config();

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
} catch (err) {
  console.error(err);
}
