import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
import baseUrl from '../../../utils/baseUrl';
const k2640 = ({ blades }) => {
  return (
    <div>
      <Sidebar />

      <BladeList 
      blades={blades} 
      header='2.6 - 4.0'
      createLink='/kanefusa/k2.6-4.0/createk2640'
      editLink1='/k2640_id'
      editLink2='/edit2640k'
      viewLink='/k2640_id'
      />
    </div>
  );
};

k2640.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/k2640api`);
  const json = await res.json();

  return { blades: json };
};

export default k2640;
