
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const edit3246k = ({ blade }) => {
  return (
    <div>
      <Edit
       header="3.2 - 4.6"
       blade={blade} 
       back='/kanefusa/k3.2-4.6/k3246'
       updateUrl='k3246api'
       />
    </div>
  );
};
export default edit3246k;

edit3246k.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k3246api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};
