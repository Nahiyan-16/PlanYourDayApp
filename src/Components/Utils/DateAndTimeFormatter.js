export function convertToStandardTime(time) {
  const timeArray = time.split(":");
  const dateObj = new Date(0, 0, 0, timeArray[0], timeArray[1]);

  const hours = dateObj.getHours() % 12 || 12;
  const minutes = dateObj.getMinutes();
  const period = dateObj.getHours() < 12 ? "AM" : "PM";

  const standardTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;

  return standardTime;
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateObject = new Date(`${dateString}T00:00:00`);
  const day = dateObject.getDate();
  const formattedDate = dateObject.toLocaleDateString(undefined, options);
  const suffix = getDaySuffix(day);
  const dayWithSuffix = `${day}${suffix}`;
  const formattedDateWithSuffix = formattedDate.replace(/\d+/, dayWithSuffix);

  return formattedDateWithSuffix;
}

function getDaySuffix(day) {
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
