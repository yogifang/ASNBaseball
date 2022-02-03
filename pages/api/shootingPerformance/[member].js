import dbConnect from "../../../utils/dbConnect";
import ShootingPerformance from "../../../models/dbShooting";
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
        const baseballinfo = await ShootingPerformance.findOne({
          member,
        }).exec();
        //   console.log(baseballinfo) ;
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
        const baseballinfo = await ShootingPerformance.findByIdAndUpdate(
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
        const deletedShootingPerformance = await ShootingPerformance.deleteOne({
          member: member,
        });
        if (!deletedShootingPerformance) {
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
