export const arrToMap = (arr: Array<any>) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
