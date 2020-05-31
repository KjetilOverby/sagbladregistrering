import dbConnect from '../../../utils/dbConnect';
import K3246 from '../../../models/K3246';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const k3246s = await K3246.findById(id);
        if (!k3246s) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k3246s });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const k3246e = await K3246.findByIdAndUpdate(id, {
             
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
        if (!k3246e) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k3246e });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
        
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await K3246.deleteOne({ _id: id });

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
