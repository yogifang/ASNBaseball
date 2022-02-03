import dbConnect from '../../../utils/dbConnect';
import BaseballPerformance from '../../../models/dbPerformance';
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const baseballPerformance = await BaseballPerformance.find({});
        res.status(200).json({ success: true, data: baseballPerformance });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const baseballPerformance = await BaseballPerformance.create(req.body);

        res.status(201).json({ success: true, data: baseballPerformancea });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
