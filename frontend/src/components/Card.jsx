import React from 'react';
import '../Card.css';

const Card = ({ post, onDelete, onUpdate }) => {
  return (
    <div className="card">
      <img src={post.img_url} alt={post.title} className="card-image" />
      <div className="card-content">
        <p className="card-category">{post.content}</p>
        <h2 className="card-title">{post.title}</h2>
        <div className="card-buttons">
          <button className="delete-button" onClick={() => onDelete(post._id)}>
            DELETE
          </button>
          <button className="update-button" onClick={() => onUpdate(post)}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;