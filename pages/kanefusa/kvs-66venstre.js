import Sidebar from '../../components/Sidebar';
import BladeList from '../../components/BladeList';
import baseUrl from '../../utils/baseUrl';
const kvs66venstre = ({ blades }) => {
  return (
    <div>
      <Sidebar
      
       />

      <BladeList 
      blades={blades} 
      bladtype='Kanefusa VS-66 venstre'
      header='Kanefusa VS-66 venstre'
      createLink='/globalblades/blades/createBlade'
      editLink1='/blades_id'
      editLink2='/editBlades'
      viewLink='/blades_id'
      />
    </div>
  );
};

kvs66venstre.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/bladesApi`);
  const json = await res.json();

  return { blades: json };
};

export default kvs66venstre;
