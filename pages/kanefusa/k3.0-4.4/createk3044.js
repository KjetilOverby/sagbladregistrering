
import Create from '../../../components/Create';
import baseUrl from '../../../utils/baseUrl';
const create3044k = () => {
 
  return (
    <div>
      <Create
        header='3.0 - 4.4'
        url={`${baseUrl}/api/k3044api`}
        back='/kanefusa/k3.0-4.4/k3044'
       />
    </div>
  )
};



export default create3044k;