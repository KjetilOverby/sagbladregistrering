import fetch from 'isomorphic-fetch';

import ViewIndex from '../../../components/ViewIndex';
import baseUrl from '../../../utils/baseUrl';

const blades_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl={`${baseUrl}/api/bladesApi`}
       pushUrl='/globalblades/blades/blade'
       header='No header yet'
       back='/globalblades/blades/blade'
        />
    </div>
  );
};

blades_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/bladesApi/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default blades_id;

// const [confirm, setConfirm] = useState(false)
// const router = useRouter()

// const deleteBlade = async () => {
//    const bladeId = router.query.id;
//    try {
//        const deleted = await fetch(`http://localhost:3000/api/k2236api/${bladeId}`, {
//            method: "DELETE"
//        });
//        router.push("/kanefusa/k2.2-3.6/k2236")

//    } catch (error) {
//        console.log(error);

//    }
// }
// return (
//     <div>
//         delete
//         <h1>{blade.serial}</h1>
//         <Button onClick={deleteBlade} variant='contained' color='primary'>Delete</Button>
//     </div>
// )
