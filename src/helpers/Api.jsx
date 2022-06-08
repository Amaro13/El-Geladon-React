//Essentially this is the routes that you created in your back-end
const PaletContext = {
  paletEndpoint: () => `${Api.baseUrl}/palets`,
  paletList: () => `${PaletContext.paletEndpoint()}/all-palets`,
  paletById: (id) => `${PaletContext.paletEndpoint()}/palet/${id}`,
  createPalet: () => `${PaletContext.paletEndpoint()}/create-palet`,
  updatePaletById: (id) => `${PaletContext.paletEndpoint()}/update-palet/${id}`,
  deletePaletById: (id) => `${PaletContext.paletEndpoint()}/delete-palet/${id}`,
};

//And here you are getting the json from the backend
export const Api = {
  // baseUrl: "https://api-elgeladon.herokuapp.com",
  baseUrl: "https://elgeladonamaro.onrender.com",
  ...PaletContext,
};
