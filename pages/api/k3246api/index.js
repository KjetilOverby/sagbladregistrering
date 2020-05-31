
import dbConnect from '../../../utils/dbConnect';
import K3246 from '../../../models/K3246';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const k3246 = await K3246.find({})
                   
                res.status(200).json({ success: true, data: k3246 })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const k3246s = await K3246.create(req.body)

                    res.status(201).json({ success: true, data: k3246s }) 
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