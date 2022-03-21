div = document.querySelector("#content-generator");

for (i = 0; i < 300; i++) {
  let text =
    (i % 3 ? "" : "Marvel ") +
      (i % 5 ? "" : "Comics ") +
      (i % 7 ? "" : "Universe ") || "";

  div.innerHTML += `<p class="m-2 text-white">${text}</p>`;
}
