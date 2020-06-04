import React from 'react'
import BladeList from '../BladeList';

const K3246 = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa 3.2 - 4.6'
       bladeType='Kanefusa 3.2-4.6'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default K3246
