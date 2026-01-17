export function isAuthenticated() {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("auth=true");
}

export function logout() {
  document.cookie = "auth=; Max-Age=0; path=/";
}
