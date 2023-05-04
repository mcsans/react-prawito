import React, {Component} from "react";
import axios from "axios";

class DetailPost extends Component {
  state = {
    post: {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3004/posts/${id}`)
    .then((res) => {
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}

export default DetailPost;