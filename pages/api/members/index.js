import dbConnect from '../../../utils/dbConnect';
import Members from '../../../models/dbMembers';
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const members = await Members.find({});
                res.status(200).json({ success: true, data: members })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const members = await Members.create(req.body);

                res.status(201).json({ success: true, data: members })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}