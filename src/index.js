const API_ORIGIN = "https://api.gamevault222.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api") || url.pathname.startsWith("/ws")) {
      const target = API_ORIGIN + url.pathname + url.search;
      return fetch(new Request(target, request));
    }
    return env.ASSETS.fetch(request);
  },
};
