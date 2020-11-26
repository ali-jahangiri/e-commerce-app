const arrayIncluds = (array, item) => {
  for (let key of array) {
    if (key.name === item) return false;
  }
  return true;
};

export default arrayIncluds;
