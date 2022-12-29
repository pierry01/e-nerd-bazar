export default {
  isAuthenticated() {
    return !!localStorage.getItem("E-NERD-BAZAR-TOKEN");
  },

  get() {
    return localStorage.getItem("E-NERD-BAZAR-TOKEN");
  },

  destroy() {
    localStorage.removeItem("E-NERD-BAZAR-TOKEN");
  },
};
