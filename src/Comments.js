import React, { useEffect, useState } from "react";
import "./Comments.css";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        if (postId) {
          const response = await fetch(
            `http://localhost:8080/comments?commentId=${postId}`
          );
          const [commentObj] = await response.json();

          setComments(commentObj.imgComments);
        }
      } catch (ex) {
        console.error(ex);
      }
    };

    getComments();
  }, [postId]);

  return (
    <div className="commentsContainer">
      {comments.map(({ id, name, comment }) => (
        <div key={id} className="singleComment">
          <span className="name">{name}:</span>
          <span className="comment">{comment}</span>
        </div>
      ))}
    </div>
  );
}
