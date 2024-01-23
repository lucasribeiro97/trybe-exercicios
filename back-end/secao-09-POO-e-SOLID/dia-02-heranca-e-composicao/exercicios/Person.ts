export default class Person {
  constructor (
    private name: string,
    private birthDate: Date,
  ) {
    this.ValidatePerson(name, birthDate);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.validateName(name);
    this.name = name;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  setBirthDate(birthDate: Date) {
    this.validateAge(birthDate);
    this.validateBirthDate(birthDate);
    return this.birthDate = birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }

  private validateBirthDate(birthDate: Date) {
    if (birthDate > new Date()) {
      throw new Error('Birth date must be in the past');
    }
  }

  private validateAge(birthDate: Date) {
    const age = new Date().getFullYear() - birthDate.getFullYear()
    if (age > 120) {
      throw new Error('Age must be less than 120 years');
    }
    return age;
  }

  private ValidatePerson(name: string, birthDate: Date) {
    this.validateName(name);
    this.validateAge(birthDate);
    this.validateBirthDate(birthDate);
  }
}