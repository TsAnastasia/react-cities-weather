export const formatNumberToDayTime = (n: number) => {
  const d = new Date(n * 1000);
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};
