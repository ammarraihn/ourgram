import React from 'react';
import { motion } from 'framer-motion';
import DeleteImage from './DeleteImage';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg.url} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />

      <div className='btn'>
        <div className='each-btn'>
          <DeleteImage file={selectedImg} setSelectedImg={setSelectedImg}/>
        </div>
      </div>
    </motion.div>
  )
}

export default Modal;