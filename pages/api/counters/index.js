import dbConnect from '../../../utils/dbConnect';
import Counters from '../../../models/Counters';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const counters = await Counters.find({})
                   
                res.status(200).json({ success: true, data: counters })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const counters = await Counters.create(req.body)

                    res.status(201).json({ success: true, data: counters }) 
                } catch (error) {
                    res.status(400).json({ success: false });
                    console.log(error);
                    
                }
                break;
                default:
                    res.status(400).json({ success: false });
                    break;
    }

} 