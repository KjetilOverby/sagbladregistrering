
import dbConnect from '../../../utils/dbConnect';
import K3044 from '../../../models/K3044';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const k3044 = await K3044.find({})
                   
                res.status(200).json({ success: true, data: k3044 })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const k3044s = await K3044.create(req.body)

                    res.status(201).json({ success: true, data: k3044s }) 
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