
import Create from '../../../components/Create';
import baseUrl from '../../../utils/baseUrl';
const create2640k = () => {
 
  return (
    <div>
      <Create
        header='2.6 - 4.0'
        url={`${baseUrl}/api/k2640api`}
        back='/kanefusa/k2.6-4.0/k2640'
       />
    </div>
  )
};



export default create2640k;