import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error && "error"}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input type="text" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(values) {
    console.log({ ...values });
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field name="description" label="Enter Description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (values) => {
  const error = {};

  if (!values.title) {
    error.title = "Please enter a title";
  }

  if (!values.description) {
    error.description = "Please enter a description";
  }

  return error;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
