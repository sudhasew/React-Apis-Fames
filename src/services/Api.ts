import axios from "axios";
import { FameComplete } from "../FameComplete";
import { FameResponse } from "../FameResponse";

// const client = axios.create({
//   baseURL:
//     "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json",
// });

export function getAll() {
  return axios
    .get<FameComplete>(
      "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json"
    )
    .then((response) => response.data);
}

export function getTiny() {
  return axios
    .get<FameResponse>(
      "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json"
    )
    .then((response) => response.data.tiny);
}

/// OR
// export function getTiny() {
// return getAll().then(data => data.tiny);
