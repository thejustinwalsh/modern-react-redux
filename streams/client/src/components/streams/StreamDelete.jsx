import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Modal } from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  actions() {
    const { id } = this.props.match.params;
    return (
      <>
        <button className="ui primary button negative" onClick={() => this.props.deleteStream(id)}>
          <i className="icon trash" /> Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );
  }

  content() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the "${this.props.stream.title}" stream?`;
  }

  render() {
    return <Modal title="Delete Stream" content={this.content()} actions={this.actions()} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
