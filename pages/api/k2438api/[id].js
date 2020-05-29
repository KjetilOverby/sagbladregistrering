import dbConnect from '../../../utils/dbConnect';
import K2438 from '../../../models/K2438';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const k2438s = await K2438.findById(id);
        if (!k2438s) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2438s });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const k2438e = await K2438.findByIdAndUpdate(id, {
             
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
        if (!k2438e) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2438e });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
        
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await K2438.deleteOne({ _id: id });

        if (!deleteBlade) {
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
