

import Create from '../../../components/Create';

const create2236k = () => {
 
  return (
    <div>
      <Create
        header='2.2 - 3.6'
        url='http://localhost:3000/api/k2236api'
        back='/kanefusa/k2.2-3.6/k2236'
       />
    </div>
  )
};



export default create2236k;



 // const [form, setForm] = useState({ serial: '', registDate: '' });

  

  // const createBlade = async () => {
  //   try {
  //     const res = await fetch('http://localhost:3000/api/k2236api', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       //body: BSON.serialize(form)
  //       body: JSON.stringify(form),
  //       // body: form
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createBlade();
  // };

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // return (
  //   <div>
  //     <form>
  //       <TextField
  //         name="serial"
  //         variant="outlined"
  //         label="Serial"
  //         onChange={handleChange}
  //       />
  //       <TextField
  //         variant="outlined"
  //         label="RegistDate"
  //         onChange={handleChange}
  //         name="registDate"
  //       />
  //       <Button onClick={handleSubmit} variant="outlined">
  //         Submit
  //       </Button>
  //     </form>

  //     <Link href="/kanefusa/k2.2-3.6/k2236">
  //       <Button variant="outlined">Back</Button>
  //     </Link>
  //   </div>
  // );