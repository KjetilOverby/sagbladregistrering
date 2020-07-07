import React from 'react';
import Sidebar from '../components/Sidebar';
import BladeCounts from '../components/dashboard/BladeCounts'
import baseUrl from '../utils/baseUrl';

export default function Dashboard({blades, counters}) {
    
    
  return (
   <div>
     <Sidebar />
     <BladeCounts blades={blades}/>
   </div>
  );
}


// Dashboard.getInitialProps = async () => {
//   const res = await fetch(`${baseUrl}/api/bladesApi`);
//   const json = await res.json();

//   return { blades: json };
// };

Dashboard.getInitialProps = async () => {
  const [blades, counters] = await Promise.all([
      fetch(`${baseUrl}/api/bladesApi`).then(r => r.json()),
      fetch(`${baseUrl}/api/counters`).then(r => r.json())
  ])
  return { blades, counters }
}
