import {useState} from 'react';

import Navbar  from './component/navbar/Navbar';
import Body from './component/body/Body'
import Footer from './component/footer/Footer'
function App() {
  const [page,setPage]=useState("About");
  return (
   <div>
     <Navbar page={page} setPage={setPage}/>
     <Body page={page}/>
     <Footer/>
   </div>
  );
}

export default App;
