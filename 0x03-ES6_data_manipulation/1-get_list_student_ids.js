export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((student) => student.id);
}

// Testing the function
// const students = [
//  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//  { id: 2, firstName: 'James', location: 'Columbia' },
//  { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ];

// console.log(getListStudentIds(students));
