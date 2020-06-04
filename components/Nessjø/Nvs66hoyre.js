import React from 'react'
import BladeList from '../BladeList';

const Nvs66hoyre = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Nessjø VS-66 høyre'
       bladeType='Nessjø VS-66 hoyre'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default Nvs66hoyre
