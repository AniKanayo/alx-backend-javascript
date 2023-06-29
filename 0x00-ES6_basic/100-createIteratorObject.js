export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employee = currentDepartment[currentEmployeeIndex];

      // eslint-disable-next-line no-plusplus
      currentEmployeeIndex++;
      if (currentEmployeeIndex >= currentDepartment.length) {
        currentEmployeeIndex = 0;
        // eslint-disable-next-line no-plusplus
        currentDepartmentIndex++;
      }

      return { value: employee, done: false };
    },
  };
}
