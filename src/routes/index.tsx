import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Reissue from '../pages/Reissue';
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reissue" element={<Reissue />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
