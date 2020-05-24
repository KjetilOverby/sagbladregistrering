
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const edit2438k = ({ blade }) => {
  return (
    <div>
      <Edit
       header="2.4 - 3.8"
       blade={blade} 
       back='/kanefusa/k2.4-3.8/k2438'
       updateUrl='k2438api'
       />
    </div>
  );
};
export default edit2438k;

edit2438k.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/k2438api/${id}`);
  const { data } = await res.json();
  return { blade: data };
};
