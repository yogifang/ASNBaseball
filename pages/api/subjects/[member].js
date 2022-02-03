import dbConnect from '../../../utils/dbConnect';
import Subjects from '../../../models/dbSubjects';
dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {
        query: { member },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const subject = await Subjects.findOne({ member }).exec();

                if (!subject) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: subject });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const subject = await Subjects.findByIdAndUpdate(member, req.body, {
                    new: true,
                    runValmemberators: true
                });

                if (!subject) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: baseballinfo });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedSubjects = await Subjects.deleteOne({ member: member });
                if (!deletedSubjects) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
};