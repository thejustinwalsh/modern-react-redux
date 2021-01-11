import React from "react";

const CommentDetail = ({ author, comment, date, image }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">{comment}</div>
    </div>
  );
};

export default CommentDetail;
