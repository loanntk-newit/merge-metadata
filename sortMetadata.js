const { writeFileSync, readFile, unlinkSync } = require("fs-extra");

const sortMeta = (filename) => {
  readFile(filename, "utf-8", (err, content) => {
    if (err) {
      onError(err);
      return;
    }
    const sortContent = JSON.parse(content).sort(
      (a, b) => a.edition - b.edition
    );
    writeFileSync(
      `output/json/_metadata.json`,
      JSON.stringify(sortContent, null, 2)
    );
  });
};

try {
  sortMeta(`output/json/_metadataWithoutSort.json`);
  unlinkSync("output/json/_metadataWithoutSort.json");
} catch (err) {
  console.error(err);
}
