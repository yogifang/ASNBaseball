import dbConnect from '../../../utils/dbConnect';
import Connects from '../../../models/dbContacts';

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;


  switch (method) {
    case 'GET':
      try {
        //  console.log('here ------aaaa---------');
        const contacts = await Connects.find({});
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const contacts = await Connects.create(req.body);

        res.status(201).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
