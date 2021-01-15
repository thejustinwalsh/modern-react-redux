import React from "react";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onFormSubmit("cats");
  }

  async onFormSubmit(term) {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  }

  onVideoSelected(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={(t) => this.onFormSubmit(t)} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={(v) => this.onVideoSelected(v)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
