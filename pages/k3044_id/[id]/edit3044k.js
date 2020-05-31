
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const edit3044k = ({ blade }) => {
  return (
    <div>
      <Edit
       header="3.0 - 4.4"
       blade={blade} 
       back='/kanefusa/k3.0-4.4/k3044'
       updateUrl='k3044api'
       />
    </div>
  );
};
export default edit3044k;

edit3044k.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k3044api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};
