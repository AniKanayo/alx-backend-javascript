// eslint-disable-next-line no-unused-vars
import signUpUser from './4-user-promise';

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  return numerator / denominator;
}
