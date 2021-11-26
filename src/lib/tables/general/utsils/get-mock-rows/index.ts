import faker from 'faker';
import randomInteger from 'common/utils/random-integer';

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
