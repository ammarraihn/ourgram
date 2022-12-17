import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Gallery } from './pages';

function App() {

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
