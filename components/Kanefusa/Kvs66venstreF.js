import React from 'react'
import BladeList from '../BladeList';

const Kvs66venstreF = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa VS-66 venstre Flens'
       bladeType='Kanefusa VS-66 venstre F'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default Kvs66venstreF
