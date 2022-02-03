import dbConnect from "../../../utils/dbConnect";
import BaseballInfo from "../../../models/dbBaseballinfos";
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
        const baseballinfo = await BaseballInfo.findOne({ member }).exec();

        if (!baseballinfo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: baseballinfo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const baseballinfo = await BaseballInfo.findByIdAndUpdate(
          member,
          req.body,
          {
            new: true,
            runValmemberators: true,
          }
        );

        if (!baseballinfo) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: baseballinfo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedBaseballInfo = await BaseballInfo.deleteOne({
          member: member,
        });
        if (!deletedBaseballInfo) {
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
