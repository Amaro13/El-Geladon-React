//Essentially this is the routes that you created in your back-end
const PaletContext = {
  paletEndpoint: () => `${Api.baseUrl}/palets`,
  paletList: () => `${PaletContext.paletEndpoint()}/all-palets`,
  paletById: (id) => `${PaletContext.paletEndpoint()}/palet/${id}`,
  createPalet: () => `${PaletContext.paletEndpoint()}/create`,
  updatePaletById: (id) => `${PaletContext.paletEndpoint()}/update/${id}`,
  deletePaletById: (id) => `${PaletContext.paletEndpoint()}/delete/${id}`,
};

//And here you are getting the json from the backend
export const Api = {
  // baseUrl: "https://api-elgeladon.herokuapp.com",
  baseUrl: "https://elgeladonamaro.onrender.com",
  ...PaletContext,
};
