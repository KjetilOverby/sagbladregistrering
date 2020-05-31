
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const edit2640k = ({ blade }) => {
  return (
    <div>
      <Edit
       header="2.6 - 4.0"
       blade={blade} 
       back='/kanefusa/k2.6-4.0/k2640'
       updateUrl='k2640api'
       />
    </div>
  );
};
export default edit2640k;

edit2640k.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k2640api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};
