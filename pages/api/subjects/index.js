import dbConnect from '../../../utils/dbConnect';
import Subjects from '../../../models/dbSubjects';
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const subjects = await Subjects.find({});
        res.status(200).json({ success: true, data: subjects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const subjects = await Subjects.create(req.body);

        res.status(201).json({ success: true, data: subjects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
