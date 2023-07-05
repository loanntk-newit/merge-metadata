const formidable = require("formidable");

const upload = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log("Error parsing the files");
      return res.status(500).json({
        status: "Fail",
        message: "There was an error parsing the files",
        error: err,
      });
    } else {
      console.log(fields);
      console.log(files);
      return res.status(200).json({
        status: "Success",
        message: files,
      });
    }
  });
};

export default async function main(req, res) {
  if (req.method === "POST") {
    await upload(req, res);
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
}
