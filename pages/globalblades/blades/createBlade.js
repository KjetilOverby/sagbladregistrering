

import Create from '../../../components/Create';
import baseUrl from '../../../utils/baseUrl';
import NoAccessPage from '../../../components/NoAccessPage';
const createBlade = (props) => {
 
  return (
    <div>
    {props.user !== undefined && props.user.sub === process.env.MOELVEN_AUTH &&
      <Create
        header='Global'
        url={`${baseUrl}/api/bladesApi`}
        back='/globalblades/blades/blade'
       />
    }

    {props.user && props.user.sub !== process.env.MOELVEN_AUTH && props.user.sub !== process.env.MY_ACCOUNT &&
      <NoAccessPage user={props.user} />
    }
     
    </div>
  )
};



export default createBlade;



 