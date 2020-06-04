import React from 'react'
import BladeList from '../BladeList';

const Kvs66venstre = ({blades}) => {
  
  return (
    <div>
      <BladeList
       blades={blades}
       header='Kanefusa VS-66 venstre'
       bladeType='Kanefusa VS-66 venstre'
       viewLink='/blades_id'
       editLink1='/blades_id'
       editLink2='/editBlades'
        />
     
    </div>
  )
}

export default Kvs66venstre
