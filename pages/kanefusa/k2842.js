import Sidebar from '../../components/Sidebar';
import BladeList from '../../components/BladeList';
import baseUrl from '../../utils/baseUrl';
const k2842 = ({ blades }) => {
  return (
    <div>
      <Sidebar
      
       />

      <BladeList 
      blades={blades} 
      bladtype='Kanefusa 2.8-4.2'
      header='2.8 - 4.2'
      createLink='/globalblades/blades/createBlade'
      editLink1='/blades_id'
      editLink2='/editBlades'
      viewLink='/blades_id'
      />
    </div>
  );
};

k2842.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/bladesApi`);
  const json = await res.json();

  return { blades: json };
};

export default k2842;
