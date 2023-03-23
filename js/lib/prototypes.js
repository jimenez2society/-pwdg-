// creates a method on the array to check if "itself" is empty or not
Array.prototype.isEmpty = function () {
  if (this.length !== 0) {
    return false;
  }
  return true;
};
