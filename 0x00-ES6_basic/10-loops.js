export default function appendToEachArrayValue(array, appendString) {
  const nextArray = [];

  for (const value of array) {
    nextArray.push(appendString + value);
  }

  return nextArray;
}
