function transform(inObj) {
  const keys = Object.keys(inObj);
  const outObj = {};

  for (let key of keys) {
    const value = inObj[key];

    if (typeof value === "object" && !Array.isArray(value)) {
      const transformedObj = transform(value);
      const transformedKeys = Object.keys(transformedObj);
      for (let k of transformedKeys) {
        outObj[`${key}.${k}`] = transformedObj[k];
      }
    } else {
      outObj[key] = value;
    }
  }
  return outObj;
}

function transformReverse(inObj) {
  const inKeys = Object.keys(inObj);
  const outObj = {};
  for (let path of inKeys) {
    const pathElements = path.split(".");
    pathElements.reduce((obj, key, index, array) => {
      if (key in obj) {
        obj[key] = index === array.length - 1 ? inObj[path] : obj[key];
      } else {
        obj[key] = index === array.length - 1 ? inObj[path] : {};
      }
      return obj[key];
    }, outObj);
  }
  return outObj;
}
module.exports = { transform, transformReverse };
