import axios from "axios";

//! BAD PATTERN: React will bundle this keu into the application exposing it to the world.
//!              Secrets should be stored and requested outside of the app itself
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: YOUTUBE_API_KEY,
    type: "video",
    part: "snippet",
    maxResults: 5,
  },
});
