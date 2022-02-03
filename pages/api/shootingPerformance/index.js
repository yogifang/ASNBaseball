import dbConnect from '../../../utils/dbConnect';
import ShootingPerformance from '../../../models/dbShooting';
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const shootingPerformance = await ShootingPerformance.find({});
        res.status(200).json({ success: true, data: shootingPerformance });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const members = await ShootingPerformance.create(req.body);

        res.status(201).json({ success: true, data: shootingPerformance });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
