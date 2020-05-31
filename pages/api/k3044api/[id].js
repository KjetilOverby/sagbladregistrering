import dbConnect from '../../../utils/dbConnect';
import K3044 from '../../../models/K3044';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const k3044s = await K3044.findById(id);
        if (!k3044s) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k3044s });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const k3044e = await K3044.findByIdAndUpdate(id, {
             
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
        if (!k3044e) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k3044e });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
        
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await K3044.deleteOne({ _id: id });

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
