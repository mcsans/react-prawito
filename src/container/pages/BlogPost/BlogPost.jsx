import React, {Component, Fragment} from "react";
import Post from "../../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: 1
    },
    isUpdate: false
  }

  readData = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
    .then((result) => {
      this.setState({
        post: result.data
      })
    })
  }

  addData = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost)
    .then(() => {
      this.readData();
      this.setState({
        formBlogPost: {
          id: 1,
          title: '',
          body: '',
          userId: 1
        }
      })
    }, (err) => {
      console.log('error:', err);
    })
  }

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true
    })
  }

  updateData = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
    .then(() => {
      this.readData();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: '',
          body: '',
          userId: 1
        }
      })
    }, (err) => {
      console.log('error:', err);
    })
  }

  deleteData = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`)
    .then(() => {
      this.readData();
    })
  }

  handleFormChange = (event) => {
    let formBlogPostNew = {...this.state.formBlogPost};
    let timestamp = new Date().getTime();
    
    if(!this.state.isUpdate) {
      formBlogPostNew['id'] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew
    })
  }

  handleSubmit = () => {
    if(this.state.isUpdate) {
      this.updateData();
    } else {
      this.addData();
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //   this.setState({
    //     post: json
    //   })
    // })
    this.readData();
  }

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <input type="text" name="title" placeholder="title" onChange={this.handleFormChange} value={this.state.formBlogPost.title} />
        <input type="text" name="body" placeholder="body" onChange={this.handleFormChange} value={this.state.formBlogPost.body} />
        <button onClick={this.handleSubmit}>Submit</button>
        <hr/>
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} goDetail={this.handleDetail} update={this.handleUpdate} delete={this.deleteData} />
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost;