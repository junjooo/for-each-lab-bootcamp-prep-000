function iterativeLog(array) {
  array.forEach((element,a)=> {
    console.log(`${a}: ${element}`)
  })
}

function iterate(callback) {
  var initArray = ['bob','hello'];
  initArray.forEach(callback);
  return initArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
