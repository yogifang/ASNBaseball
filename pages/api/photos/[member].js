import dbConnect from "../../../utils/dbConnect";
import Photos from "../../../models/dbPhotos";
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    query: { member },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const photo = await Photos.findOne({ member }).exec();
        //     console.log(baseballinfo) ;
        if (!photo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: photo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const photo = await Photos.findByIdAndUpdate(req.body._id, req.body, {
          new: true,
          runValmemberators: true,
        });

        if (!photo) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: photo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedConnects = await Connects.deleteOne({ _id: req.body._id });
        if (!deletedConnects) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
