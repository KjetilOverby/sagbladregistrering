

import Create from '../../../components/Create';
import baseUrl from '../../../utils/baseUrl';
const createBlade = () => {
 
  return (
    <div>
      <Create
        header='Global'
        url={`${baseUrl}/api/bladesApi`}
        back='/globalblades/blades/blade'
       />
    </div>
  )
};



export default createBlade;



 