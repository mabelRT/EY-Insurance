import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Events from './components/Events';
import Home from './components/Home';
import Policies from './components/Policies';
import UpDocuments from './components/UpDocuments';
import ChooseCar from './components/ChooseCar';
<<<<<<< HEAD
import DescribeSinister from './components/DescribeSinister'
=======
import Sinister from './components/Sinister';
import SelectDate from './components/SelectDate';


>>>>>>> 9d136b61f869f790a4d32ed52b2b8ba73f1e56dd

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
<<<<<<< HEAD
      <Route path="/describe" element={<DescribeSinister/>}/>

=======
      <Route path="/sinister" element={<Sinister/>}/>
      <Route path="/selectdate" element={<SelectDate/>}/>
>>>>>>> 9d136b61f869f790a4d32ed52b2b8ba73f1e56dd
    </Routes>
</>

  );
}
export default App;
