import dbConnect from '../../../utils/dbConnect';
import K2236 from '../../../models/K2236';
import { formatMs } from '@material-ui/core';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const k2236s = await K2236.findById(id);
        if (!k2236s) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2236s });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const k2236e = await K2236.findByIdAndUpdate(id, {
        
         $push: {performer: req.body.performer, date: req.body.date}, 
          
         
         
         
        });
        console.log(req.body.date);
        if (!k2236e) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: k2236e });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
        
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await K2236.deleteOne({ _id: id });

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
