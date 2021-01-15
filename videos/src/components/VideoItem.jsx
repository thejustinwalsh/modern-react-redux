import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelected }) {
  return (
    <div className="video-item item" onClick={(e) => onVideoSelected(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
