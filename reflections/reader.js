const params = new URLSearchParams(window.location.search);
const post = params.get("post");
const container = document.querySelector("#reflection-content");
const validPost = /^[a-z0-9-]+$/.test(post || "");

if (!validPost) {
  container.textContent = "Reflection not found.";
} else {
  fetch(`posts/${post}.html`)
    .then((response) => {
      if (!response.ok) throw new Error("Post not found");
      return response.text();
    })
    .then((content) => {
      container.innerHTML = content;
      document.title = `${container.querySelector("h1")?.textContent || "Reflection"} — Claire Phay`;
    })
    .catch(() => { container.textContent = "Reflection not found."; });
}
