import React from 'react'
import BladeList from '../BladeList';

const Nvs66venstre = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Nessjø VS-66 venstre'
       bladeType='Nessjø VS-66 venstre'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
       
        />
     
    </div>
  )
}

export default Nvs66venstre