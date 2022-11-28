function contains(array, element) {
  for (const member of array) {
    if (member == element) {
      return true
    }
  }
  return false
}

module.exports = contains