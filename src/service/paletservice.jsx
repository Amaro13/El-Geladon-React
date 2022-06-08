import { Api } from "../helpers/Api";
// this is getting the value from the response as json
const parseResponse = (response) => response.json();

const transformPalet = (palet) => {
  // console.log(palet);
  const [flavor, filling] = palet.flavor.split(" with ");

  return {
    ...palet,
    id: palet._id,
    title: palet.flavor,
    flavor,
    ...(filling && { filling }),
    hasFilling: Boolean(filling),
  };
};

const parseTransformList = (response) =>
  parseResponse(response).then((palets) => palets.map(transformPalet));

// remember, this is essentially the routes method from the back-end, get to organize/move the object, post to include/insert, put to change, delete to delete.

const parseTransformItem = (response) =>
  parseResponse(response).then(transformPalet);

export const PaletService = {
  getList: () =>
    fetch(Api.paletList(), { method: "GET" }).then(parseTransformList),

  getById: (id) =>
    fetch(Api.paletById(id), { method: "GET" }).then(parseTransformItem),

  create: () =>
    fetch(Api.createPalet(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updatePaletById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletById(id), { method: "DELETE" }).then(parseResponse),
};
