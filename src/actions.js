export const requestForPictures = pictures => ({
  type: "REQUEST_FOR_PICTURES",
  pictures
});

export const requestComplete = () => ({
  type: "REQUEST_COMPLETE"
});

export const setStatusToReq = () => ({
  type: "SET_STATUS_TO_REQUEST"
});

export const updateAmount = amount => ({
  type: "UPDATE_AMOUNT",
  amount
});

export const getPictures = value => {
  console.log("GET PICTURES");

  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then(pictures => pictures.json())
    .then(pictures =>
      pictures.filter((picture, index) => (index < value ? picture : ""))
    )
    .catch(err => console.log("error", err));
};
