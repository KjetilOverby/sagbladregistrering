import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
import baseUrl from '../../../utils/baseUrl';
const k2842 = ({ blades }) => {
  return (
    <div>
      <Sidebar />

      <BladeList 
      blades={blades} 
      header='2.8 - 4.2'
      createLink='/kanefusa/k2.8-4.2/createk2842'
      editLink1='/k2842_id'
      editLink2='/edit2842k'
      viewLink='/k2842_id'
      />
    </div>
  );
};

k2842.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/k2842api`);
  const json = await res.json();

  return { blades: json };
};

export default k2842;
