import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const videoList = videos.map((v) => (
    <VideoItem key={v.id.videoId} video={v} onVideoSelected={onVideoSelected} />
  ));
  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;
