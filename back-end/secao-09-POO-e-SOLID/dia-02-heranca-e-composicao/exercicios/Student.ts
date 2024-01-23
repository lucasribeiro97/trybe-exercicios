import Person from "./Person";

export default class Student extends Person {
  private enrollment: string;
  private examsGrades: number[] = [];
  private assignmentsGrades: number[] = [];

  constructor (name: string, birthDate: Date) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
  }

  getEnrollment(): string {
    return this.enrollment;
  }

  setEnrollmente(value: string) {
    if (value.length < 16) {
      throw new Error('Enrollment must have at least 16 characters');
    }
    this.enrollment = value;
  }

  getExamsGrades(): number[] {
    return this.examsGrades;
  }

  setExamsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('Exams must have at most 4 grades');
    }
    this.examsGrades = value;
  }

  getAssignmentsGrades(): number[] {
    return this.assignmentsGrades;
  }

  setAssignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('Assignments must have at most 2 grades');
    }
    this.assignmentsGrades = value;
  }

  sumGrades(): number {
    const sum = this.examsGrades.reduce((acc, grade) => acc + grade); 
    return sum;
  }

  sumAverageGrade(): number {
    const average = this.sumGrades() / this.examsGrades.length;
    return average;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}