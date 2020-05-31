import fetch from 'isomorphic-fetch';
import ViewIndex from '../../../components/ViewIndex';
import baseUrl from '../../../utils/baseUrl';

const k2640_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl={`${baseUrl}/api/k2640api`}
       pushUrl='/kanefusa/k2.6-4.0/k2640'
       header='Kanefusa 2.6 - 4.0 445 30Z'
       back='/kanefusa/k2.6-4.0/k2640'
        />
    </div>
  );
};

k2640_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k2640api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default k2640_id;