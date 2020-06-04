import React from 'react'
import BladeList from '../BladeList';

const Kvs66hoyre = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa VS-66 høyre'
       bladeType='Kanefusa VS-66 høyre'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default Kvs66hoyre
