import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL:"https://us-central1-app-a17cb.cloudfunctions.net/api"
  // baseURL:"https://localhost:5001/app-a17cb/us-central1/api)."

});

export default instance;
