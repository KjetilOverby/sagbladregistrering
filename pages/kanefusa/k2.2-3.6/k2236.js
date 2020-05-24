import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
import baseUrl from '../../../utils/baseUrl';
const k2236 = ({ blades }) => {
  return (
    <div>
      <Sidebar
      
       />

      <BladeList 
      blades={blades} 
      header='2.2 - 3.6'
      createLink='/kanefusa/k2.2-3.6/createk2236'
      editLink1='/k2236_id'
      editLink2='/edit2236k'
      viewLink='/k2236_id'
      />
    </div>
  );
};

k2236.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/k2236api`);
  const json = await res.json();

  return { blades: json };
};

export default k2236;
