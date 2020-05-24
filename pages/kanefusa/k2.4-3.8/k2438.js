import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
import baseUrl from '../../../utils/baseUrl';
const k2438 = ({ blades }) => {
  return (
    <div>
      <Sidebar />

      <BladeList 
      blades={blades} 
      header='2.4 - 3.8'
      createLink='/kanefusa/k2.4-3.8/createk2438'
      editLink1='/k2438_id'
      editLink2='/edit2438k'
      viewLink='/k2438_id'
      />
    </div>
  );
};

k2438.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/k2438api`);
  const json = await res.json();

  return { blades: json };
};

export default k2438;
