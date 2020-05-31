import fetch from 'isomorphic-fetch';
import ViewIndex from '../../../components/ViewIndex';
import baseUrl from '../../../utils/baseUrl';

const k3044_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl={`${baseUrl}/api/k3044api`}
       pushUrl='/kanefusa/k3.0-4.4/k3044'
       header='Kanefusa 3.0 - 4.4 445 36Z'
       back='/kanefusa/k3.0-4.4/k3044'
        />
    </div>
  );
};

k3044_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k3044api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default k3044_id;