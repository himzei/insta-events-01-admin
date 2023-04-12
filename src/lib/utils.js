export const timeFormat = (data) => {
  const date = data.slice(5, 10);

  const time = data.slice(11, 16);
  return `${date} / ${time}`;
};

export const numberFormat = (number) => {
  let strNumber = number.toString();
  return strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
