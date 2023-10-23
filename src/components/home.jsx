import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage grid grid-cols-1 place-items-center">
      {postLists.map((post) => {
        return (
          <div key={post.id} className="post shadow-md pl-5 pt-4 pb-4  w-[50vw] rounded-3xl m-8">
            <div className="postHeader">
              <div className="title text-xl m-2 ">
              <h3 className="a text-gray-700 font-light"><img src={post.author.avatar} className="rounded-full w-8 h-8" alt="profile" /> @{post.author.name}</h3> 
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="imageContainer"><img src={post.image} alt="" /></div>
            <div className="postTextContainer max-h-60 overflow-y-scroll"> {post.content} </div>
           
          </div>
        );
      })}
    </div>
  );
}

export default Home;
