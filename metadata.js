const { writeFileSync } = require("fs-extra");
const { readFiles } = require("./script");

try {
  // Create _metadata
  let content_metadata = [];
  readFiles(
    "output/json/",
    (filename, content) => {
      content_metadata.push(JSON.parse(content));
      writeFileSync(
        `output/json/_metadata.json`,
        JSON.stringify(content_metadata, null, 2)
      );
    },
    (err) => {
      throw err;
    }
  );
} catch (err) {
  console.error(err);
}
