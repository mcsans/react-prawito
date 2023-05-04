import React from "react";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <p>Time: {props.time}</p>
      <p>Title: {props.title}</p>
      <p>Desc: {props.desc}</p>
      <hr />
    </div>
  )
}

export default YoutubeComp;