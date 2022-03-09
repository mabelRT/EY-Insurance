import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Events from './components/Events';
import Home from './components/Home';
import Policies from './components/Policies';
import UpDocuments from './components/UpDocuments';
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
      <Route path="/photo" element={<UpDocuments />} />
      <Route path="/selectcar" element={<ChooseCar/>}/>
    </Routes>
</>
  );
}
export default App;
