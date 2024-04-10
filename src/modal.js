function Modal() {
  const selectors = {
    modalAddTaskBtn: document.querySelector("#modalAddTaskBtn"),
    modalAddListBtn: document.querySelector("#modalAddListBtn"),
    backBtnList: document.querySelector("#backBtnList"),
    backBtnTask: document.querySelector("#backBtnTask"),
    dialog: document.querySelector("dialog"),
    modalList: document.querySelector("#modalList"),
    modalTask: document.querySelector("#modalTask"),
  };
  function showModal() {
    document.addEventListener("click", (e) => {
      if (e.target === selectors.modalAddListBtn) {
        selectors.modalList.showModal();
      } else if (e.target === selectors.modalAddTaskBtn) {
        selectors.modalTask.showModal();
      }
    });
  }
  function closeModal() {
    selectors.backBtnList.addEventListener("click", () => {
      selectors.modalList.close();
    });
    selectors.backBtnTask.addEventListener("click", () => {
      selectors.modalTask.close();
    });
  }

  return { showModal, closeModal };
}

export { Modal };
