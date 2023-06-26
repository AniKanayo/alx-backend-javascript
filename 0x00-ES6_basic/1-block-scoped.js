export default function taskBlock(trueOrFalse) {
  var globaltask = false;
  var globaltask2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [globaltask, globaltask2];
}
