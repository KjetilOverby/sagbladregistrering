
import dbConnect from '../../../utils/dbConnect';
import K2842 from '../../../models/K2842';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const k2842 = await K2842.find({})
                   
                res.status(200).json({ success: true, data: k2842 })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const k2842s = await K2842.create(req.body)

                    res.status(201).json({ success: true, data: k2842s }) 
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