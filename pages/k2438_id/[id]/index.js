import fetch from 'isomorphic-fetch';
import ViewIndex from '../../../components/ViewIndex';
import baseUrl from '../../../utils/baseUrl';

const k2438_id = ({ blade }) => {
  return (
    <div>
      <ViewIndex
       blade={blade}
       deleteUrl={`${baseUrl}/api/k2438api`}
       pushUrl='/kanefusa/k2.4-3.8/k2438'
       header='Kanefusa 2.4 - 3.8 445 30Z'
       back='/kanefusa/k2.4-3.8/k2438'
        />
    </div>
  );
};

k2438_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k2438api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

export default k2438_id;