import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props?.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={(e) => this.onInputChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
