import React from 'react'
import BladeList from '../BladeList';

const KnBlad = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa N-blad'
       bladeType='Kanefusa N-blad'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default KnBlad
