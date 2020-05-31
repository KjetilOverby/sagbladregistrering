import fetch from 'isomorphic-fetch';
import ViewIndex from '../../../components/ViewIndex';
import baseUrl from '../../../utils/baseUrl';

const k2842_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl={`${baseUrl}/api/k2842api`}
       pushUrl='/kanefusa/k2.8-4.2/k2842'
       header='Kanefusa 2.8 - 4.2 445 36Z'
       back='/kanefusa/k2.8-4.2/k2842'
        />
    </div>
  );
};

k2842_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k2842api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default k2842_id;