import dbConnect from '../../../utils/dbConnect';
import K2640 from '../../../models/K2640';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const k2640s = await K2640.findById(id);
        if (!k2640s) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2640s });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const k2640e = await K2640.findByIdAndUpdate(id, {
             
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
        if (!k2640e) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2640e });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
        
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await K2640.deleteOne({ _id: id });

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
