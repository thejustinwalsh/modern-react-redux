import axios from "axios";

//! BAD PATTERN: React will bundle this keu into the application exposing it to the world.
//!              Secrets should be stored and requested outside of the app itself
const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  },
});
