function toggleListDescriptionShow() {
  document.querySelectorAll("#listDescriptionBtn").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.closest("li").nextElementSibling.style.display === "block") {
        element.closest("li").nextElementSibling.style.display = "none";
      } else {
        element.closest("li").nextElementSibling.style.display = "block";
      }
    });
  });
}

  function toggleTaskDescriptionShow() {
    document.querySelectorAll("#taskDescriptionBtn").forEach((element) => {
      element.addEventListener("click", () => {
        if (
          element.closest("li").nextElementSibling.style.display === "block"
        ) {
          element.closest("li").nextElementSibling.style.display = "none";
        } else {
          element.closest("li").nextElementSibling.style.display = "block";
        }
      });
    });
  }

export { toggleListDescriptionShow, toggleTaskDescriptionShow };
