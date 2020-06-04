import React from 'react'
import BladeList from '../BladeList';

const K2236 = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa 2.2 - 3.6'
       bladeType='Kanefusa 2.2-3.6'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
       
        />
     
    </div>
  )
}

export default K2236
