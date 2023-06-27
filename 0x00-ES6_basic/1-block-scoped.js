export default function taskBlock(trueOrFalse) {
  var defaultTask = false;
  var defaultTask2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [defaultTask, defaultTask2];
}
