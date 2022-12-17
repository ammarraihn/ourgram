import React, { useState } from 'react';
import Title from '../comps/Title';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import { Navigate } from "react-router-dom";
import "../index.css"

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const auth = localStorage.getItem("user");

    if (!auth) {
      return <Navigate to="/" />
    } else {
      return (
        <div className="App">
          <Title/>
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      )
    }
  }  

export default Gallery;