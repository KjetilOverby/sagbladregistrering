import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
import baseUrl from '../../../utils/baseUrl';
const k3246 = ({ blades }) => {
  return (
    <div>
      <Sidebar />

      <BladeList 
      blades={blades} 
      header='3.2 - 4.6'
      createLink='/kanefusa/k3.2-4.6/createk3246'
      editLink1='/k3246_id'
      editLink2='/edit3246k'
      viewLink='/k3246_id'
      />
    </div>
  );
};

k3246.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/k3246api`);
  const json = await res.json();

  return { blades: json };
};

export default k3246;
