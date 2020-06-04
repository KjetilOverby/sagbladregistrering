import React from 'react'
import BladeList from '../BladeList';

const K2842 = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefudsa 2.8 - 4.2'
       bladeType='Kanefusa 2.8-4.2'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default K2842
