import Sidebar from '../../../components/Sidebar';
import GlobalBladeList from '../../../components/GlobalBladeList';
import baseUrl from '../../../utils/baseUrl';
const blade = ({ blades }) => {
  return (
    <div>
      <Sidebar
      
       />

      <GlobalBladeList 
      blades={blades} 
      header='Alle blad'
      createLink='/globalblades/blades/createBlade'
      editLink1='/blades_id'
      editLink2='/editBlades'
      viewLink='/blades_id'
      />
    </div>
  );
};

blade.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/bladesApi`);
  const json = await res.json();

  return { blades: json };
};

export default blade;
