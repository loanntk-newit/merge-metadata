const { readFile, readdir } = require("fs-extra");

exports.readFiles = async (dirname, onFileContent, onError) => {
  readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach((filename) => {
      readFile(dirname + filename, "utf-8", (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
};
