import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar';
import All from './Pages/All/All';
import FullStack from './Pages/FullStack/FullStack';
import DataScience from './Pages/DataScience/DataScience';
import CyberSecurity from './Pages/CyberSecurity/CyberSecurity';
import Career from './Pages/Career/Career';
import data from './Data';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All data={data}/>} />
          <Route path='/fullstack' element={<FullStack data={data} />} />
          <Route path='/datascience' element={<DataScience data={data} />} />
          <Route path='/cybersecurity' element={<CyberSecurity data={data} />} />
          <Route path='/career' element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
