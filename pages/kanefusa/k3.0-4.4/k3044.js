import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
import baseUrl from '../../../utils/baseUrl';
const k3044 = ({ blades }) => {
  return (
    <div>
      <Sidebar />

      <BladeList 
      blades={blades} 
      header='3.0 - 4.4'
      createLink='/kanefusa/k3.0-4.4/createk3044'
      editLink1='/k3044_id'
      editLink2='/edit3044k'
      viewLink='/k3044_id'
      />
    </div>
  );
};

k3044.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/k3044api`);
  const json = await res.json();

  return { blades: json };
};

export default k3044;
