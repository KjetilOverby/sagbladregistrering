import dbConnect from '../../../utils/dbConnect';
import Blades from '../../../models/Blades';

dbConnect()

export default async (req, res) => {
    const { method } = req;
 
    switch(method) {
        case 'GET':
            try {
                const blades = await Blades.find({})
                   
                res.status(200).json({ success: true, data: blades })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'POST':
                try {
                    const blades = await Blades.create(req.body)

                    res.status(201).json({ success: true, data: blades }) 
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