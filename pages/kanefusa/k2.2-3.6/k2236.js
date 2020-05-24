import Sidebar from '../../../components/Sidebar';
import BladeList from '../../../components/BladeList';
const k2236 = ({ blades }) => {
  return (
    <div>
      <Sidebar />

      <BladeList 
      blades={blades} 
      header='2.2 - 3.6'
      />
    </div>
  );
};

k2236.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/k2236api');
  const json = await res.json();

  return { blades: json };
};

export default k2236;
