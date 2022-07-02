export function getQuerryString(name) {
  return new URLSearchParams(window.location.search).get(name);
}
