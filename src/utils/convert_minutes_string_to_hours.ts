export function convertMinuteStringToHour(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);

  const minute = minutesAmount % 60;

  return `${String(hours).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}
