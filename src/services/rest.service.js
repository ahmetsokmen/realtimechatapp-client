import { REST_URL } from "../config";

export async function fetchAsync(queryParams) {
  var url = REST_URL + "/" + queryParams;
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
