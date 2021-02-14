import React from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamEdit extends React.Component {
  componentDidMount() {
    if (!this.props.stream) {
      this.props.fetchStream(this.props.match.params.id);
    }
  }

  onSubmit = (values) => {
    const { id, userId, ...payload } = values;
    this.props.editStream(id, payload);
  };

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
