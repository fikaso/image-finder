import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Images from './pages/Images/Images';
import LikedImages from './pages/LikedImages/LikedImages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Images />} />
          <Route path="/liked" element={<LikedImages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
