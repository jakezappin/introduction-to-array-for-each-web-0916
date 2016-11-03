function changeCompletely(element, index, array) {
  array[index] = element + 'DESTROYED'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
