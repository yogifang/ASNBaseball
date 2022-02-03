import dbConnect from "../../../utils/dbConnect";
import Photos from "../../../models/dbPhotos";
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const photos = await Photos.find({});
        res.status(200).json({ success: true, data: photos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      req.body._id = null;
      console.log(req.body)
      try {
        const photo = await Photos.create(req.body);
        res.status(201).json({ success: true, data: photo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
