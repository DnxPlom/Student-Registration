const isBackend = process.env.REACT_APP_BACKEND;
const id_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpmYWxzZSwibG9naW4iOiJ1c2VyIiwiaWF0IjoxNTczNzQ4ODI1LCJleHAiOjE2MjA0MDQ4MjV9.Jd1Trqu6izHq2R3uw4enrDlQKG4mzZdipSMdYQD_9JM';
const baseURLApi = process.env.baseURLApi || "http://localhost:5000/api"

const config = {
  isBackend,
  id_token,
  baseURLApi
};

export default config;