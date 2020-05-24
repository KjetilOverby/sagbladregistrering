import dbConnect from '../../../utils/dbConnect';
import K2236 from '../../../models/K2236';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const k2236 = await K2236.find({})
                   
                res.status(200).json({ success: true, data: k2236 })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const k2236s = await K2236.create(req.body)

                    res.status(201).json({ success: true, data: k2236s }) 
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