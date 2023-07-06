// Subject.ts

namespace Subjects {
  interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    private teacher: Teacher | undefined;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

export default Subjects;
