import fetch from 'isomorphic-fetch';
import ViewIndex from '../../../components/ViewIndex';
import baseUrl from '../../../utils/baseUrl';

const k3246_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl={`${baseUrl}/api/k3246api`}
       pushUrl='/kanefusa/k3.2-4.6/k3246'
       header='Kanefusa 3.2 - 4.6 445 36Z'
       back='/kanefusa/k3.2-4.6/k3246'
        />
    </div>
  );
};

k3246_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k3246api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default k3246_id;