<<<<<<< HEAD
=======
// eslint-disable-next-line no-unused-vars
import signUpUser from './4-user-promise';

>>>>>>> 1da013fe3c388539c5dd2ed5444ea0ac0c70a697
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  return numerator / denominator;
}
