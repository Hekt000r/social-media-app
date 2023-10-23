import React, { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "./firebase-config"; // Make sure to import storage
import { useNavigate } from "react-router-dom";

function CreatePost({ IsAuth }) {
  let navigate = useNavigate("");
  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // State for storing the image URL

  function handleChange(event) {
      setFile(event.target.files[0]);
  }

  function handleUpload() {
    if (!file) {
        alert("Please choose a file first!")
    }

    const storageRef = ref(storage,`/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setImageUrl(url); // Save the image URL to state
            });
        }
    ); 
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postCollectionsRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionsRef, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid, avatar: auth.currentUser.photoURL },
      image: imageUrl, // Use the image URL when creating the post
    });
    
    navigate("/");
  };
  

  return (
    <div className="CreatePostPage ml-[30%]">
     <div>
     <textarea onChange={(e) => {setTitle(e.target.value)}} className="textarea textarea-accent w-[50%]" rows="1" placeholder="Title"></textarea>
     
     </div>
     <div>
     <input type="file" onChange={handleChange}/>
     <button onClick={handleUpload}>Upload Image</button> {/* Button to upload the image */}
     <p>select image</p>
     <textarea onChange={(e) => {setContent(e.target.value)}} className="textarea textarea-accent w-[50%]" rows="4" placeholder="Content"></textarea>
     </div>
     <button className="btn btn-success" onClick={createPost}>Create post</button>
    </div>
  );
}

export default CreatePost;
