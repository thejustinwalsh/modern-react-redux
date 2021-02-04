import { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  render() {
    console.log(this.props);
    const posts = this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });

    return <div className="ui relaxed divided list">{posts}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
