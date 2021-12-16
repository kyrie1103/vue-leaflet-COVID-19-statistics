import axios from "axios";

const APIKEY = "19a8ed7730ce0a70e89a82c1374816cf";

export function getVirusData() {
  return axios({
    method: "get",
    url: `http://api.tianapi.com/ncov/index?key=${APIKEY}`,
  });
}

export function getNcovAbroad() {
  return axios({
    method: "get",
    url: `http://api.tianapi.com/ncovabroad/index?key=${APIKEY}`,
  });
}
