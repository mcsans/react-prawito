import React, { Component, Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <YoutubeComp time="01:20" title="One" desc="-" />
        <YoutubeComp title="Two" desc="Using default props time" />
      </Fragment>
    )
  }
}

export default YoutubeCompPage;