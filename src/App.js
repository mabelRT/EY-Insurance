import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ReadData from './components/ReadData';
import ResetPassword from './components/ResetPassword';
import Events from './components/Events';
import Home from './components/Home';
import Policies from './components/Policies';
import DescribeSinister from './components/DescribeSinister';
import ChooseCar from './components/ChooseCar';


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/home" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
         {/*  <Route path="/data" element={<ReadData />} /> */}
          <Route path="/describe" element={<DescribeSinister />} />
          <Route path="/data" element={<ChooseCar />} />

        </Routes>
    </>
  );
}
export default App;
