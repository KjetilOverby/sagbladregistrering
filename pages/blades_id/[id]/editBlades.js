
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const editBlade = ({ blade }) => {
  return (
    <div>
      <Edit
      
       blade={blade} 
       back='/globalblades/blades/blade'
       updateUrl='bladesApi'
       />
    </div>
  );
};
export default editBlade;

editBlade.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/bladesApi/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

// const [form, setForm] = useState({ performer: [''], date: [''] });
//    const router = useRouter()
//    console.log(form);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     updateBlade();
//   };

//   const handleChange = (e) => {

//       setForm({ ...form, [e.target.name]: e.target.value});

//   };

//   const updateBlade = async () => {

//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/k2236api/${router.query.id}`,
//       {
//         method: 'PUT',
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//         },
//         //body: BSON.serialize(form)
//         body: JSON.stringify(form),
//         // body: form
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

//   return (
//     <div>
//       <form>
//         <TextField
//           name="performer"
//           variant="outlined"
//           label="Serial"
//           onChange={handleChange}
//           value={form.performer}
//         />
//         <TextField
//           variant="outlined"
//           label="RegistDate"
//           onChange={handleChange}
//           name="date"
//           value={form.date}
//         />
//         <Button onClick={handleSubmit} variant="outlined">
//           Submit
//         </Button>
//       </form>

//       <Link href="/kanefusa/k2.2-3.6/k2236">
//         <Button variant="outlined">Back</Button>
//       </Link>
//       <h1>{blade.serial}</h1>
//     </div>
//   );
// };
