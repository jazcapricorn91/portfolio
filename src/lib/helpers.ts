export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

/**
 * Returns the current time in Central Time (Chicago) as a Date object.
 */
export function getCurrentTimeInCentral(): Date {
  const now = new Date();
  // toLocaleString with timeZone returns a string, so we need to parse it back to Date
  const centralString = now.toLocaleString('en-US', { timeZone: 'America/Chicago' });
  return new Date(centralString);
}

/**
 * Formats a Date object for Central Time (Chicago).
 * Example output: '02:30:00 PM CDT'
 */
export function formatTimeForCentral(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Chicago",
    timeZoneName: "short"
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
