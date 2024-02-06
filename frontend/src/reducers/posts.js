const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    case "CREATE":
      return posts;

    default:
      return posts;
  }
};

export default reducer;
