const modal = {
  open() {
    // abrir modal
    // adicionoar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },

  close() {
    // remover a class active
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};
