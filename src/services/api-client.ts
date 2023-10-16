import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b576fd90a71406da32864f1f43ac35c",
  },
});
