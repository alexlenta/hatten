export const getItemById = (list, id) => list.find(item => item.id === id);

export const stringWithElipsis = (string, maxLength) => {
  if (string.length < maxLength) return string;

  return `${string.slice(0, maxLength)}...`;
};
