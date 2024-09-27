import { getCookie, setCookie, eraseCookie } from "./cookie.service.js";
import { fetchAsync } from "./rest.service.js";
const cookieName = "loggedin";

export async function login(e) {
  var username = e.target.elements.username.value;
  var result = fetchAsync(`login?username=${username}`);
  if (result) setCookie(cookieName, username, 30);
}

export function logOut() {
  eraseCookie(cookieName);
}
