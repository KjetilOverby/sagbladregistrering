import Redirect from '../shared/Redirect';
const MoelvenVaaler = (props) => {

   
    return (props) => {
        console.log('====================================');
  console.log(props);
  console.log('====================================');
        if(props.user !== undefined && props.user.sub === 'google-oauth2|106500081074791056792' ) { 

            return <Redirect to='/globalblades/blades/blade'/>
            } else {
                return <h1>Din brukerkonto har ikke tilgang til denne siden!</h1>
            }
     
    }
}

export default MoelvenVaaler