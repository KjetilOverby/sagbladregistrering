
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const edit2842k = ({ blade }) => {
  return (
    <div>
      <Edit
       header="2.8 - 4.2"
       blade={blade} 
       back='/kanefusa/k2.8-4.2/k2842'
       updateUrl='k2842api'
       />
    </div>
  );
};
export default edit2842k;

edit2842k.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k2842api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};
