const themeReducers = (theme = "light", action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return theme === "light" ? "dark" : "light";

    default:
      return theme;
  }
};

export default themeReducers;
