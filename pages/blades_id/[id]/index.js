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

export default blades_id

