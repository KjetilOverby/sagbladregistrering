import fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import ViewIndex from '../../../components/ViewIndex';

const k2236_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl='http://localhost:3000/api/k2236api'
       pushUrl='/kanefusa/k2.2-3.6/k2236'
        />
    </div>
  );
};

k2236_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/k2236api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default k2236_id;

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
