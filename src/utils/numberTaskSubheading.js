export function numberTaskSubheading(numOfTask) {
  switch (true) {
    case numOfTask > 4:
      return `${numOfTask} zadań`;
    case numOfTask > 1:
      return `${numOfTask} zadania`;
    case numOfTask === 1:
      return "1 zadanie";
    default:
      return "Brak zadań";
  }
}
