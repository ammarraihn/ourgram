import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Gallery } from './pages';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
