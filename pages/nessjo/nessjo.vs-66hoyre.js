import Sidebar from '../../components/Sidebar';
import BladeList from '../../components/BladeList';
import baseUrl from '../../utils/baseUrl';
const nessjoVS66hoyre = ({ blades }) => {
  return (
    <div>
      <Sidebar
      
       />

      <BladeList 
      blades={blades} 
      bladtype='Nessjø VS-66 høyre'
      header='Nessjø VS-66 høyre'
      createLink='/globalblades/blades/createBlade'
      editLink1='/blades_id'
      editLink2='/editBlades'
      viewLink='/blades_id'
      />
    </div>
  );
};

nessjoVS66hoyre.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/bladesApi`);
  const json = await res.json();

  return { blades: json };
};

export default nessjoVS66hoyre;
