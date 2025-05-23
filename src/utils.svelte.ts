export const stringHelpers = {
  capitalize: (str: string) => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};
