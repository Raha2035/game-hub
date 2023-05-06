import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4e045f2d8d3b4d098434cc393caaab86",
  },
});
