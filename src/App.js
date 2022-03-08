import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Events from './components/Events';
import Home from './components/Home';
import Policies from './components/Policies';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/home" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </>
  );
}
export default App;
