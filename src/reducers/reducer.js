export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "THEME":
      return { ...state, theme: action.payload };
    default:
      throw new Error("Algo salio mal revisar las opciones que ingreso");
  }
};
