const btn = document.querySelector("#btn");

if (btn) {
  btn.addEventListener("click", () => {
    const oldText = btn.textContent;
    btn.textContent = "You clicked me! ❤";

    setTimeout(() => {
      btn.textContent = oldText;
    }, 1000);
  });
}