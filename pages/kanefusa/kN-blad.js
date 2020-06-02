import Sidebar from '../../components/Sidebar';
import BladeList from '../../components/BladeList';
import baseUrl from '../../utils/baseUrl';
const kNblad = ({ blades }) => {
  return (
    <div>
      <Sidebar
      
       />

      <BladeList 
      blades={blades} 
      bladtype='Kanefusa N-blad'
      header='N - blad'
      createLink='/globalblades/blades/createBlade'
      editLink1='/blades_id'
      editLink2='/editBlades'
      viewLink='/blades_id'
      />
    </div>
  );
};

kNblad.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/bladesApi`);
  const json = await res.json();

  return { blades: json };
};

export default kNblad;
