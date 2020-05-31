import dbConnect from '../../../utils/dbConnect';
import K2842 from '../../../models/K2842';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const k2842s = await K2842.findById(id);
        if (!k2842s) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2842s });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const k2842e = await K2842.findByIdAndUpdate(id, {
             
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
        if (!k2842e) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2842e });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
        
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await K2842.deleteOne({ _id: id });

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
