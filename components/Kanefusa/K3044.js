import React from 'react'
import BladeList from '../BladeList';

const K3044 = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa3.0 - 4.4'
       bladeType='Kanefusa 3.0-4.4'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default K3044