import Sidebar from '../../../components/Sidebar';
import baseUrl from '../../../utils/baseUrl'
import GlobalBladeList from '../../../components/GlobalBladeList';
import { useState, useEffect } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BladeCounts from '../../../components/dashboard/BladeCounts';
var dateFormat = require('dateformat');


const blade = ({ blades }) => {
//   var now = new Date();
 
// // Basic usage
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// // Saturday, June 9th, 2007, 5:46:21 PM

// useEffect(() => {
//   var now = new Date();
 
// // Basic usage
// //console.log(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM"));
// console.log(dateFormat(now));
// // Saturday, June 9th, 2007, 5:46:21 PM
// })
  
  
  const [allBlades, setAllBlades] = useState(true)
  const [k2236, setk2236] = useState(false)
  const [k2438, setk2438] = useState(false)
  const [k2640, setk2640] = useState(false)
  const [k2842, setk2842] = useState(false)
  const [k3044, setk3044] = useState(false)
  const [k3246, setk3246] = useState(false)
  const [kvs66hoyre, setkvs66hoyre] = useState(false)
  const [kvs66venstre, setkvs66venstre] = useState(false)
  const [knBlad, setknBlad] = useState(false)
  const [kvs66hoyreF, setkvs66hoyreF] = useState(false)
  const [kvs66venstreF, setkvs66venstreF] = useState(false)
  const [nvs66hoyre, setnvs66hoyre] = useState(false)
  const [nvs66venstre, setnvs66venstre] = useState(false)
 

  return (
    <div>
      <Sidebar
        setAllBlades={setAllBlades}
        setk2236={setk2236}
        setk2438={setk2438}
        setk2640={setk2640}
        setk2842={setk2842}
        setk3044={setk3044}
        setk3246={setk3246}
        setkvs66hoyre={setkvs66hoyre}
        setkvs66venstre={setkvs66venstre}
        setknBlad={setknBlad}
        setkvs66hoyreF={setkvs66hoyreF}
        setkvs66venstreF={setkvs66venstreF}
        setnvs66hoyre={setnvs66hoyre}
        setnvs66venstre={setnvs66venstre}
       />

      <GlobalBladeList 
      allBlades={allBlades}
      k2236={k2236}
      k2438={k2438}
      k2640={k2640}
      k2842={k2842}
      k3044={k3044}
      k3246={k3246}
      kvs66hoyre={kvs66hoyre}
      kvs66venstre={kvs66venstre}
      knBlad={knBlad}
      kvs66hoyreF={kvs66hoyreF}
      kvs66venstreF={kvs66venstreF}
      nvs66hoyre={nvs66hoyre}
      nvs66venstre={nvs66venstre}
      blades={blades} 
      header='Søk i alle sagblad'
      createLink='/globalblades/blades/createBlade'
      editLink1='/blades_id'
      editLink2='/editBlades'
      viewLink='/blades_id'
     
      />


  
      
    

    </div>
  );
};
blade.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/bladesApi`);
  const json = await res.json();

  return { blades: json };
};

export default blade;
