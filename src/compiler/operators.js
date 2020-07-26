const gt = {
  exec: (data, field, value) => data[field] > value,
  message: (field, value) => `The field ${field} isn't greather than ${value}`,
};

const eq = {
  exec: (data, field, value) => data[field] === value,
  message: (field, value) => `The field ${field} isn't equals to ${value}`,
};

const lt = {
  exec: (data, field, value) => data[field] < value,
  message: (field, value) => `The field ${field} isn't less than ${value}`,
};

const gte = {
  exec: (data, field, value) => data[field] >= value,
  message: (field, value) =>
    `The field ${field} isn't greather or equals than ${value}`,
};

const lte = {
  exec: (data, field, value) => data[field] <= value,
  message: (field, value) =>
    `The field ${field} isn't less or equals than ${value}`,
};

const contains = {
  exec: (data, field, value) => data[field].includes(value),
  message: (field, value) => `The field ${field} doesn't contains ${value}`,
};

const sw = {
  exec: (data, field, value) => data[field].startsWith(value),
  message: (field, value) => `The field ${field} doesn't starts with ${value}`,
};

const ew = {
  exec: (data, field, value) => data[field].endsWith(value),
  message: (field, value) => `The field ${field} doesn't ends with ${value}`,
};

const notNull = {
  exec: (data, field) => data[field] !== undefined,
  message: (field) => `The field ${field} is null`,
};

module.exports = { gt, lt, gte, lte, contains, sw, ew, notNull, eq };
