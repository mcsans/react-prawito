import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="content">
        <b className="title">Title: {props.data.title}</b>
        <div className="desc">Desc: {props.data.body}</div>
        <button className="detail" onClick={() => props.goDetail(props.data.id)}>Detail</button>
        <button className="update" onClick={() => props.update(props.data)}>Update</button>
        <button className="remove" onClick={() => props.delete(props.data.id)}>Delete</button>
      </div>
      <hr />
    </div>
  )
}

export default Post;