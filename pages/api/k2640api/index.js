
import dbConnect from '../../../utils/dbConnect';
import K2640 from '../../../models/K2640';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const k2640 = await K2640.find({})
                   
                res.status(200).json({ success: true, data: k2640 })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const k2640s = await K2640.create(req.body)

                    res.status(201).json({ success: true, data: k2640s }) 
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