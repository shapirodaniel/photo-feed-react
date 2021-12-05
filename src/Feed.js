import React, { useEffect, useState } from "react";
import "./Feed.css";
import Comments from "./Comments";
import Likes from "./Likes";
import { Link } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [visibleComments, setVisibleComments] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const posts = await response.json();

        setPosts(posts);

        const idObj = posts
          .map(({ postId }) => postId)
          .reduce((ht, val) => {
            ht[val] = false;
            return ht;
          }, {});

        setVisibleComments(idObj);
      } catch (ex) {
        console.error(ex);
      }
    };

    getPosts();
  }, []);

  function toggleCommentVisibility(postId) {
    setVisibleComments({
      ...visibleComments,
      [postId]: !visibleComments[postId],
    });
  }

  return (
    <section>
      {posts.map(
        ({ postId, date, author, authorId, src, altText, content, likes }) => (
          <div key={postId} className="postContainer">
            <div className="authorAndDate">
              <span>{date}</span>
              <span>|</span>
              <Link className="author" to={`/profiles/${authorId}`}>
                {author}
              </Link>
            </div>
            <img src={src} alt={altText} />
            <Likes likes={likes} />
            <div>{content}</div>
            <button onClick={() => toggleCommentVisibility(postId)}>
              {visibleComments[postId] ? "Hide Comments" : "View Comments"}
            </button>
            {visibleComments[postId] && <Comments postId={postId} />}
          </div>
        )
      )}
    </section>
  );
}

export default Feed;
