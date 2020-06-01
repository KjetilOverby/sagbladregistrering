import dbConnect from '../../../utils/dbConnect';
import Blades from '../../../models/Blades';
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
        const blades = await Blades.findById(id);
        if (!blades) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: blades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        
        const bladesEdit = await Blades.findByIdAndUpdate(id, {
          
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
       
       
        if (!bladesEdit) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: bladesEdit });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    case 'DELETE':
      try {
        const deleteBlade = await Blades.deleteOne({ _id: id });

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
