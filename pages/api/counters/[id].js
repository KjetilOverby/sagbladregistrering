import dbConnect from '../../../utils/dbConnect';
import Counters from '../../../models/Counters';
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
        const counters = await Counters.findById(id);
        if (!counters) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: counters });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        
        const countersEdit = await Counters.findByIdAndUpdate(id, req.body, {
          
        //   $push: {
        //     performer: req.body.performer,
        //     date: req.body.date,
        //     comment: req.body.comment,
        //   },
        });
       
       
        if (!countersEdit) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: countersEdit });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    case 'DELETE':
      try {
        const deleteCounters = await Counters.deleteOne({ _id: id });

        if (!deleteCounters) {
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
