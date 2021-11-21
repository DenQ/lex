import faker from 'faker';

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getMockRows = (size: number): any =>
  Array(size)
    .fill(0)
    .map((item, index) => ({
      id: index + 1,
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      age: randomInteger(1, 100),
    }));

export default getMockRows;
