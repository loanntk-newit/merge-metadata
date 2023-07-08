require("dotenv").config();
const {
  emptyDirSync,
  copySync,
  writeFileSync,
  renameSync,
} = require("fs-extra");
const { readFiles } = require("./script");

const PROJECT_NAME = process.env.PROJECT_NAME;
const DESCRIPTION = process.env.DESCRIPTION;
const TRAIT_TYPE = process.env.TRAIT_TYPE;
const DIR_REPLACE = process.env.DIR_REPLACE;

emptyDirSync(`./${DIR_REPLACE}/images`);
emptyDirSync(`./${DIR_REPLACE}/json`);

copySync(`temp/${DIR_REPLACE}`, `${DIR_REPLACE}/images`, { overwrite: true | false });

readFiles(
  `temp/${DIR_REPLACE}/`,
  (filename, content) => {
    let image_index = parseInt(filename.split("-")[0]);
    let image_name = filename.split("-")[1].split(".")[0];

    const metas = {
      name: `${PROJECT_NAME} #${image_index}`,
      description: DESCRIPTION,
      image: `REPLACE/${image_index}.png`,
      edition: image_index,
      date: new Date().getTime(),
      attributes: [
        {
          trait_type: TRAIT_TYPE,
          value: image_name,
        },
      ],
      compiler: "HashLips Art Engine",
    };

    writeFileSync(
      `${DIR_REPLACE}/json/${image_index + ".json"}`,
      JSON.stringify(metas, null, 2)
    );

    renameSync(`${DIR_REPLACE}/images/${filename}`, `${DIR_REPLACE}/images/${image_index}.png`);

    console.log(`${image_index + ".json"} Created!`);
  },
  (err) => {
    throw err;
  }
);
