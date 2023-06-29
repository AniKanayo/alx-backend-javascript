export default function taskBlock(trueOrFalse) {
  const defaultTask = false;
  const defaultTask2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const task = true;
    // eslint-disable-next-line no-unused-vars
    const task2 = false;
  }

  return [defaultTask, defaultTask2];
}
