import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ReadData from './components/ReadData';
import ResetPassword from './components/ResetPassword';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/home" element={<ReadData />} />
        </Routes>
    </>
  );
}
export default App;
