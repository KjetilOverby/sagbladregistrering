import dbConnect from '../../../utils/dbConnect';
import K2438 from '../../../models/K2438';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const k2438 = await K2438.find({})
                   
                res.status(200).json({ success: true, data: k2438 })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const k2438s = await K2438.create(req.body)

                    res.status(201).json({ success: true, data: k2438s }) 
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