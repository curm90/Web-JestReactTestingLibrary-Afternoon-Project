import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  it('can multiply two numbers', () => {
    expect(helpers.multiply(2, 2)).toBe(4);
  });
  it('throws error if either arg is not a number', () => {
    expect(() => helpers.multiply(1, '2')).toThrow();
  });
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4)).toMatchObject({
      id: '123',
      name: 'peter',
      age: 4
    });
  });

  it('return undefined if no args passed in', () => {
    expect(helpers.personMaker().age).toBe(undefined);
    expect(helpers.personMaker().name).toBeUndefined();
  });
  // write more tests! <===========================================
});

describe('checkValue', () => {
  it('checks if value is falsy', () => {
    expect(helpers.checkValue(null)).toBeFalsy();
  });
});

describe('createUser', () => {
  it('user should be Liam Sutton object', () => {
    expect(helpers.createUser()).toEqual({
      firstName: 'Liam',
      lastName: 'Sutton'
    });
  });
});

it('should be less than or equal 2000', () => {
  const loadOne = 800;
  const loadTwo = 700;
  expect(loadOne + loadTwo).toBeLessThanOrEqual(2000);
});

it('There is no i in team', () => {
  expect('team').not.toMatch(/i/);
});

it('Liam should be in names', () => {
  const names = ['john', 'liam', 'gabe'];
  expect(names).toContain('liam');
});
