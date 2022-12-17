import React from "react";
import { projectStorage, projectFirestore } from "../firebase/config";



const DeleteImage = ({ file, setSelectedImg }) => {

  const handleClick = (e) => {
    console.log("delete");
    console.log(file);

    // use ref from url to get storage ref
    const storageRef = projectStorage.refFromURL(file.url);
    const collectionRef = projectFirestore.collection('images');

    // delete file from collection
    collectionRef.doc(file.id).delete().then(() => {
      setSelectedImg(null);
    });
    storageRef.delete();

  };

  return (
    <div className="each-btn">
      <button type="button" className="delete-btn" onClick={handleClick}>
        delete
      </button>
    </div>
  );
};

export default DeleteImage;
