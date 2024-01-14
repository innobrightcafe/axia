export const calc = (amount, ROI, perDay) => {
  const percentageReturn = (amount * ROI) / (100 * perDay);
  return percentageReturn;
};
