//libraries
import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";

class Home extends Component {
  render() {
    return (
      // <div>
      //   <YoutubeComp time="01:20" title="One" desc="-" />
      //   <YoutubeComp title="Two" desc="Using default props time" />
        
      //   <Product />
        
      //   <BlogPost />
      // </div>
      
      <Router>
        <Fragment>
          <div>
            <Link to="/">Blog Post</Link><br/>
            <Link to="/product">Product</Link><br/> 
            <Link to="/youtube">Youtube</Link><hr/>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/youtube" component={YoutubeCompPage} />
        </Fragment>
      </Router>
    )
  }
}

YoutubeComp.defaultProps = {
  time: '00:00'
}

export default Home;