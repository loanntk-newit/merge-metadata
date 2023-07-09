const {
  writeFileSync,
  readdirSync,
  readFileSync,
  unlinkSync,
} = require("fs-extra");
const path = require("path");

(async () => {
  // Unlink _metadata
  try {
    unlinkSync("output/json/_metadata.json");
  } catch (error) {}
  // Create _metadata
  let content_metadata = [];
  const dir = "output/json/";
  readdirSync(dir).forEach((file) => {
    let fullPath = path.join(dir, file);
    content_metadata.push(JSON.parse(readFileSync(fullPath)));
  });
  writeFileSync(
    `output/json/_metadata.json`,
    JSON.stringify(content_metadata, null, 2)
  );
  console.log("Create metadata success!");
})();
