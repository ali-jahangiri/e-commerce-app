const getTotalMount = (array) => {
  let number = 0;
  for (let key of array) {
    number += key.count * key.price;
  }
  return number;
};

export default getTotalMount;
