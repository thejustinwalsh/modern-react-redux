import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    images: [],
  };

  async onSearchSubmit(term) {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
