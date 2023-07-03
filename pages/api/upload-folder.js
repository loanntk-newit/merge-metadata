import IncomingForm from "formidable/Formidable";

const upload = async (req, res) => {
  const form = new IncomingForm();
  form.parse(req, async function (err, fields, files) {
    console.log(files);
    try {
      res.status(200).json({ mess: "======= UPLOAD SUCCESS =======" });
    } catch (error) {
      res.status(500).json({ mess: error.code });
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
