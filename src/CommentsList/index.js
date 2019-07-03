import React from 'react';

const CommentsList = props => {
  const comments = props.comments.map((c, i) => <li className="list-group-item list-group-item-primary" key={c.text + i}>{c.text}</li>)

  return (
    <ul className="list-group">
      {comments}
    </ul>
  );
};

export default CommentsList;