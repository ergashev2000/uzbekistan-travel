export const changeDateFormat = (inputDate: string | undefined) => {
  if (!inputDate) return;
  const dateObject = new Date(inputDate);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};
