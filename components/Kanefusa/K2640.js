import React from 'react'
import BladeList from '../BladeList';

const K2640 = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa 2.6 - 4.0'
       bladeType='Kanefusa 2.6-4.0'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default K2640
