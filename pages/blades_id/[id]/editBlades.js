
import fetch from 'isomorphic-unfetch';
import baseUrl from '../../../utils/baseUrl';


import Edit from '../../../components/Edit';

const editBlade = ({ blade }) => {
  
  return (
    <div>
      <Edit
      
       blade={blade} 
       
       updateUrl='bladesApi'
       />
    </div>
  );
};
export default editBlade;

editBlade.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/bladesApi/${id}`);
  const { data } = await res.json();
  return { blade: data };
};

